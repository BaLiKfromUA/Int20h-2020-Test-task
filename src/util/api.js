import axios from "axios";

export default class MusicAPI {
    constructor({baseURL, token}) {
        this.baseURL = baseURL;
        this.token = token;
    }

    async getSongByText({text}) {
        return await axios.get(
            `${this.baseURL}?q=${text}&api_token=${this.token}`
        );
    }

    async getTrackId({artist, title}) {
        return await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"${artist}" track:"${title}"`);
    }
}