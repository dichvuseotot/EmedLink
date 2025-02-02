import { Table, Button, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan, faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../../danhmuc.scss";
import ds from "../../../../../util/data";
import Ctkhaibaonhomloaivienphi from "../Detail";
import Swal from "sweetalert2";
function Khaibaoloaivienphi() {
    const [open, setOpen] = useState(false);
    const [activeModify, setActiveModify] = useState(false);

    const handleDataCreate = () => {
        setOpen(true);
    };

    const handleThaoTac = (e, record) => {
        if (e.key === "update") {
            // dispatch(setDataEmployee(record));
            setOpen(true);
        } else if (e.key === "delete") {
            Swal.fire({
                text: "Bạn có muốn xóa user này ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#0067ac",
                cancelButtonColor: "#d33",
                cancelButtonText: "Hủy",
                confirmButtonText: "Đồng ý",
            }).then((result) => {
                if (result.isConfirmed) {
                    // handleDelete(record.RowID);
                    // successInfo("Đã xóa thành công !");
                }
            });
        }
    };
    const items = [
        {
            key: "1",
            label: "Xóa",
            icon: <FontAwesomeIcon icon={faTrashCan} />,
        },
        {
            key: "2",
            label: "Sửa",
            icon: <FontAwesomeIcon icon={faPenToSquare} />,
        },
    ];
    const columns = [
        {
            title: "Nhóm loại viện phí",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Tên loại viện phí",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "500px" }}> {TDVVT} </div>,
        },
        {
            title: "STT",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Mã",
            dataIndex: "TDV",
            render: (TDV) => <div style={{ width: "200px" }}> {TDV} </div>,
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
                            onClick: (e) => handleThaoTac(e, record),
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
                <title>Khai Báo Loại Viện Phí - EmedLink </title>
            </Helmet>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <div className="text-muted">
                    <div className="d-flex justify-content-between align-items-center mt-2 mx-2">
                        <div className="d-flex align-items-center ">
                            <div className="vienphi-danhmuc-title mx-2">Khai báo loại viện phí</div>
                        </div>
                        <div className="text-end">
                            <Button className="form-btn bg" onClick={handleDataCreate}>
                                <FontAwesomeIcon icon={faPlus} className="mx-1" />
                                Thêm mới
                            </Button>
                        </div>
                    </div>
                    <Ctkhaibaonhomloaivienphi open={open} setOpen={setOpen} />
                    <hr className="w-100 my-1" />
                    <div className="m-1 danhmuc danhmuc_nhomvppk">
                        <Table
                            columns={columns}
                            dataSource={ds}
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

export default Khaibaoloaivienphi;
