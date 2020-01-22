import axios from "axios"

export default class DeezerAPI {
    async getTrackId({artist, title}) {
        return await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"${artist}" track:"${title}"`);
    }

    async getTrackURL({artist, title}) {
        console.log({artist, title});
        let variants = await this.getTrackId({artist: artist, title: title});
        variants = variants.data;

        console.log(variants);
        if (variants === undefined || variants["data"] === undefined || variants["data"].length === 0) {
            return false;
        }

        const trackId = variants["data"][0]["id"];

        return `https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=250&height=250&color=ff0000&layout=&size=medium&type=tracks&id=${trackId}&app_id=1`;
    }
}