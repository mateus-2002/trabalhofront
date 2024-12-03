import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const getMusicFromPlaylist = (idPLaylist) => {
    const token = localStorage.getItem("token")
        return axios.get(`${BASE_URL}playlist/${idPLaylist}/song`, {
            headers: {
                Authorization: token,
            },
        });
};
