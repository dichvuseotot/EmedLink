import axios from "axios";
import REACT_LOCALHOST from "./host";
import { authHeader } from './helpers';
const employeeAPI = {
    getAll: () => {
        return axios.get(`${REACT_LOCALHOST}/api/show-employee`, {"headers":authHeader()});
    },
    create: (obj) => {
        return axios.post(`${REACT_LOCALHOST}/api/add-employee`, obj, {"headers":authHeader()});
    },
    update: (obj) => {
        return axios.put(`${REACT_LOCALHOST}/api/update-employee`, obj, {"headers":authHeader()});
    },
    delete: (id) => {
        return axios.delete(`${REACT_LOCALHOST}/api/delete-employee/${id} `, {"headers":authHeader()});
    },
    getAllGroup: (obj) => {
        return axios.get(`${REACT_LOCALHOST}/api/show-employee-group/${obj}`,{"headers":authHeader()});
    },
    getAllPosition: (obj) => {
        return axios.get(`${REACT_LOCALHOST}/api/show-employee-position/${obj}`,{"headers":authHeader()});
    },
};

export default employeeAPI;
