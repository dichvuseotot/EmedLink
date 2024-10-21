import { Modal, Button, Form, Input, Select, Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faRightFromBracket, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../../danhmuc.scss";
// import Swal from "sweetalert2";
function Ctkhaibaonhomvienphihethong(props) {
    const { open, setOpen } = props;
    return (
        <>
            <Modal
                title={
                        <div className="vienphi-danhmuc-add">Nhóm viện phí hệ thống</div>
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
                            <div className="row dmdot">
                                <Form.Item
                                    label={<div className="form-input-label lablename-input">Mã nhóm :</div>}
                                    className="col-md-4 m-0"
                                >
                                    <Input className="form-control inputdm" />
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label lablename-input">Tên nhóm : </div>}
                                    className="col-md-5 m-0"
                                >
                                    <Input className="form-control inputdm" />
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label lablename-input">STT :</div>}
                                    className="col-md-3 m-0"
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

export default Ctkhaibaonhomvienphihethong;
