import axios from "axios";
import REACT_LOCALHOST from "./host";
import { authHeader } from './helpers';
const phanquyenAPI = {
    getPhanQuyen: (obj) => {
        return axios.get(`${REACT_LOCALHOST}/api/show-phan-quyen/${obj}`, {"headers":authHeader()});
    },
    create: (obj) => {
        return axios.post(`${REACT_LOCALHOST}/api/add-phan-quyen`, obj, {"headers":authHeader()});
    },
    delete: (obj) => {
        return axios.delete(
            `${REACT_LOCALHOST}/api/delete-phan-quyen/${obj.RowID_Employee}/${obj.RowID_Employee_IU}`, {"headers":authHeader()}
        );
    },
};

export default phanquyenAPI;
