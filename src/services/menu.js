import axios from "axios";
import REACT_LOCALHOST from "./host";
import { authHeader } from './helpers';
const menuAPI = {
    getAll: () => {
        return axios.get(`${REACT_LOCALHOST}/api/show-menu`, {"headers":authHeader()} );
    },
};

export default menuAPI;
