import { Table, Button, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan, faEye, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../../danhmuc.scss";
import ds from "../../../../../util/data";
function MapdanhmucDVKTvoimaythuchiencanlamsan() {
    const [activeModify, setActiveModify] = useState(false);
    const items = [
        {
            key: "1",
            label: "Xem",
            icon: <FontAwesomeIcon icon={faEye} />,
        },
        {
            key: "2",
            label: "Xóa",
            icon: <FontAwesomeIcon icon={faTrashCan} />,
        },
        {
            key: "3",
            label: "Sửa",
            icon: <FontAwesomeIcon icon={faPenToSquare} />,
        },
    ];
    const column0 = [
        {
            title: "Nhóm DVKT",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "200px" }}> {TDV} </div>,
        },
        {
            title: "Loại DVKT",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "600px" }}> {TDVVT} </div>,
        },
        {
            title: "Mã DVKT",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Ten DVKT",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Ghi chús",
            dataIndex: "MADVKT",
            align: "center",
        },

        {
            title: "Thao tác",
            dataIndex: "",
            align: "center",
            fixed: "right",
            render: (record) => (
                <div className="d-flex justify-content-center">
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="left"
                        arrow={{
                            pointAtCenter: true,
                        }}
                    >
                        <Button
                            className="bg-light vienphi-danhmuc-icon-modify"
                            onClick={() => {
                                setActiveModify(!activeModify);
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faEdit}
                                style={{ fontSize: "10px" }}
                                className="text-dark"
                            />
                        </Button>
                    </Dropdown>
                </div>
            ),
        },
    ];
    const column1 = [
        {
            title: "Nhóm DVKT",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "200px" }}> {TDV} </div>,
        },
        {
            title: "Loại DVKT",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "600px" }}> {TDVVT} </div>,
        },
        {
            title: "Mã DVKT",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Ten DVKT",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Máy thực hiện",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Thao tác",
            dataIndex: "",
            align: "center",
            fixed: "right",
            render: (record) => (
                <div className="d-flex justify-content-center">
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="left"
                        arrow={{
                            pointAtCenter: true,
                        }}
                    >
                        <Button
                            className="bg-light vienphi-danhmuc-icon-modify"
                            onClick={() => {
                                setActiveModify(!activeModify);
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faEdit}
                                style={{ fontSize: "10px" }}
                                className="text-dark"
                            />
                        </Button>
                    </Dropdown>
                </div>
            ),
        },
    ];
    return (
        <>
            <Helmet>
                <title>Map Danh Mục DVKT Với Máy Thực Hiện CLS - EmedLink </title>
            </Helmet>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <div className="text-muted">
                    <div className="d-flex justify-content-between align-items-center mt-2 mx-2">
                        <div className="d-flex align-items-center ">
                            <div className="vienphi-danhmuc-title mx-2">
                                Map danh mục DVKT với máy thực hiện cận lâm sàn
                            </div>
                        </div>
                    </div>
                    <hr className="w-100 my-1" />
                    <div>
                        <div className="mx-2 form-input-label">Danh sách DVKT</div>
                        <div className="m-1">
                            <Table
                                columns={column0}
                                dataSource={ds}
                                // loading={loading}
                                scroll={{ x: true }}
                                size="small"
                                pagination={{ pageSize: 10 }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className=" mx-2 form-input-label">
                            Danh sách DVKT khai báo máy CLS
                        </div>
                        <div className="m-1">
                            <Table
                                columns={column1}
                                dataSource={ds}
                                // loading={loading}
                                scroll={{ x: true }}
                                size="small"
                                pagination={{ pageSize: 10 }}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default MapdanhmucDVKTvoimaythuchiencanlamsan;
