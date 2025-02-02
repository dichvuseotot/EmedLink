import { Modal, Button, Form, Input, Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faRightFromBracket, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../../danhmuc.scss";
// import Swal from "sweetalert2";
function Ctkhaibaonhomloaivienphi(props) {
    const { open, setOpen } = props;
    return (
        <>
            <Modal
                title={
                    <div className="vienphi-danhmuc-add">Khai báo loại viện phí</div>
                }
                centered
                open={open}
                okButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                cancelButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <div className="text-center">
                    <Form onFinish={""}>
                        <div className="scroll">
                            <div className="row dmdot dmname-w" >
                                <Form.Item
                                    label={
                                        <div className="form-input-label lablename">Nhóm loại viện phí :</div>
                                    }
                                    className="col-md-6 m-0"
                                >
                                    <Select
                                        allowClear
                                        style={{
                                            width: "100%",
                                        }}
                                        placeholder={<div className="form-input-label ">Chọn</div>}
                                        // onChange={handleChange}
                                        // options={listPosition.map((item) => ({
                                        //     value: item.PositionID,
                                        //     label: item.PositionName,
                                        // }))}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label={
                                        <div className="form-input-label lablename-input">Tên loại viện phí :</div>
                                    }
                                    className="col-md-6 m-0"
                                >
                                    <Input className="form-control inputdm" />
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label lablename-input">Mã loại viện phí :</div>}
                                    className="col-md-6 m-0"
                                >
                                    <Input className="form-control inputdm" />
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label lablename-input">STT :</div>}
                                    className="col-md-6 m-0"
                                >
                                    <Input className="form-control inputdm" />
                                </Form.Item>
                            </div>
                        </div>
                        <Form.Item className="text-center">
                            <hr />
                            <Button htmlType="submit" className="mx-2 vienphi-danhmuc-btn">
                                <FontAwesomeIcon icon={faFloppyDisk} className="mx-1" /> Lưu
                            </Button>
                            <Button danger className="mx-2" onClick={() => setOpen(false)}>
                                Thoát <FontAwesomeIcon icon={faRightFromBracket} className="mx-1" />
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    );
}

export default Ctkhaibaonhomloaivienphi;
