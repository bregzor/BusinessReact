const ROOT_URL = "https://frebi.willandskill.eu/";
const CREATE_USER_URL = "https://frebi.willandskill.eu/auth/users/";

export default class {
    async createUser(fields) {
        return this.fetchy(
            CREATE_USER_URL,
            "POST",
            this.getPublicHeaders(),
            this.getPayload(fields)
        );
    }

    async activateUser(uid, token) {
        const url = `${ROOT_URL}auth/users/activate/`;
        const payload = { uid, token };
        return this.fetchy(url, "POST", this.getPublicHeaders(), payload);
    }

    async loginUser(fields) {
        const loginUrl = `${ROOT_URL}api-token-auth/`;
        return this.fetchy(
            loginUrl,
            "POST",
            this.getPublicHeaders(),
            this.getPayload(fields)
        );
    }

    async createCustomer(fields) {
        const url = `${ROOT_URL}api/v1/customers`;
        return this.fetchy(
            url,
            "POST",
            this.getPrivateHeaders(),
            this.getPayload(fields)
        );
    }

    async deleteCustomer(id) {
        const url = `${ROOT_URL}api/v1/customers/${id}/`;
        return this.fetchy(url, "DELETE", this.getPrivateHeaders());
    }

    async updateCustomer(id, fields) {
        const url = `${ROOT_URL}api/v1/customers/${id}/`;
        return this.fetchy(
            url,
            "PUT",
            this.getPrivateHeaders(),
            this.getPayload(fields)
        );
    }

    async getCustomer(id) {
        const url = `${ROOT_URL}api/v1/customers/${id}/`;
        return fetch(url, {
            method: "GET",
            headers: this.getPrivateHeaders(),
        });
    }

    async getUser() {
        const url = `${ROOT_URL}api/v1/me`;
        return this.fetchy(url, "GET", this.getPrivateHeaders());
    }

    async getCustomerList() {
        return this.fetchy(
            `${ROOT_URL}api/v1/customers`,
            "GET",
            this.getPrivateHeaders()
        );
    }

    //GLOBAL FETCH FUNCTION
    async fetchy(url, method, htype, payload = null) {
        if (payload) {
            return fetch(url, {
                method: method,
                headers: htype,
                body: JSON.stringify(payload),
            });
        } else {
            return fetch(url, {
                method: method,
                headers: htype,
            });
        }
    }

    //Returns correct payload structure
    getPayload = (fields) => {
        const payload = {};
        fields.map((field) => {
            const payloadName = field[3];
            const payloadValue = field[2].current.value;
            Object.assign(payload, {
                [payloadName]: payloadValue,
            });
        });
        return payload;
    };

    isInvalidResponse(arr) {
        return arr.length === 2;
    }

    getToken = () => {
        return localStorage.getItem("TOKEN");
    };

    getPublicHeaders = () => {
        return {
            "Content-Type": "application/json",
        };
    };

    getPrivateHeaders = () => {
        return {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
        };
    };
}