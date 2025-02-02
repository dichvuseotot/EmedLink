import { Table, Button, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import {
    faEdit,
    faTrashCan,
    faEye,
    faPenToSquare,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";
import "../../danhmuc.scss";
import ds from "../../../../../util/data";
import Ctkhaibaonhomvienphihethong from "../Detail";
function Khaibaonhomvienphihethong() {
    const [open, setOpen] = useState(false);
    const [activeModify, setActiveModify] = useState(false);

    const handleDataCreate = () => {
        setOpen(true);
    };
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
    const columns = [
        {
            title: "Mã nhóm",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: '40%' }}> {TDV} </div>,
        },
        {
            title: "Tên nhóm dịch vụ",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div> {TDVVT} </div>,
        },
        {
            title: "STT",
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
                <title>Nhóm Viện Phí Hệ Thống - EmedLink </title>
            </Helmet>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <div className="text-muted">
                    <div className="d-flex justify-content-between align-items-center mt-2 mx-2">
                        <div className="d-flex align-items-center ">
                            <div className="vienphi-danhmuc-title mx-2">Nhóm viện phí hệ thống</div>
                        </div>
                        <div className="text-end">
                            <Button className="form-btn bg" onClick={handleDataCreate}>
                                <FontAwesomeIcon icon={faPlus} className="mx-1" />
                                Thêm mới
                            </Button>
                        </div>
                    </div>
                    <Ctkhaibaonhomvienphihethong open={open} setOpen={setOpen} />
                    <div>
                        {/* <Form>
                            <div className="row m-0">
                                <Form.Item
                                    label={<div className="form-input-label">Mã nhóm</div>}
                                    className="col-md-4 m-0"
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label">Tên nhóm</div>}
                                    className="col-md-4 m-0"
                                >
                                    <Input className="form-control" />
                                </Form.Item>

                             
                            </div>
                        </Form> */}
                    </div>
                    <hr className="w-100 my-1" />
                    <div className="m-1 danhmuc danhmuc_nhomvpht">
                        <Table
                            columns={columns}
                            dataSource={ds}
                            // loading={loading}
                            scroll={{ x: true }}
                            size="small"
                            pagination={{ pageSize: 20 }}
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Khaibaonhomvienphihethong;
