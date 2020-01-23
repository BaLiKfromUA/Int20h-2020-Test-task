import axios from "axios";

export default class AudDAPI {
    constructor({baseURL, token}) {
        this.baseURL = baseURL;
        this.token = token;
    }

    async getSongByText({text}) {
        return await axios.get(
            `${this.baseURL}?q=${text}&api_token=${this.token}`
        );
    }

}