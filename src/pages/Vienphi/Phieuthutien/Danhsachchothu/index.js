import { Checkbox, Dropdown, Form, Input, Table, Button, InputNumber, Tabs } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowsRotate,
    faCircleArrowRight,
    faClipboardCheck,
    faFileInvoice,
    faForwardStep,
    faGear,
    faHandHoldingDollar,
    faPrint,
    faRectangleList,
    faAngleRight,
    faAngleLeft,
    faBarsStaggered,
    faSliders,
    faListUl,
} from "@fortawesome/free-solid-svg-icons";
import imguser from "../../../../assets/image/user.png";
import "./danhsachchothu.scss";
import "../../vienphi.scss";
import { useState } from "react";
import Danhsachleft from "./Danhsachleft";
import Dichvu from "./Dichvu";
import Tamung from "./Tamung";
import ThuocVTYT from "./Thuốc - VTYT";
function Danhsachchothu() {
    const [open, setOpen] = useState(false);
    const [click, setClick] = useState(false);

    //handle
    const handleDataCreate = () => {
        setOpen(true);
    };
    const handleClick = () => {
        setClick(!click);
    };

    const items1 = [
        {
            label: "Tiếp",
            key: "1",
            icon: <FontAwesomeIcon icon={faForwardStep} />,
        },
        {
            label: "Thu",
            key: "2",
            icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
        },
        {
            label: "Bỏ qua",
            key: "3",
            icon: <FontAwesomeIcon icon={faCircleArrowRight} />,
        },
        {
            label: "In phiếu",
            key: "4",
            icon: <FontAwesomeIcon icon={faPrint} />,
        },
        {
            label: "In HĐ",
            key: "4",
            icon: <FontAwesomeIcon icon={faFileInvoice} />,
        },
        {
            label: "Hoàn",
            key: "4",
            icon: <FontAwesomeIcon icon={faArrowsRotate} />,
        },
        {
            label: "BV01",
            key: "4",
            icon: <FontAwesomeIcon icon={faClipboardCheck} />,
        },
    ];

    const tabsdanhsachchothu = [
        {
            key: "1",
            label: (
                <div className="p-0 m-0">
                    <FontAwesomeIcon icon={faBarsStaggered} /> Dịch vụ
                </div>
            ),
            children: (
                <div className="color-border">
                    <Dichvu />
                </div>
            ),
        },
        {
            key: "2",
            label: (
                <div className="p-0 m-0">
                    <FontAwesomeIcon icon={faSliders} /> Thuốc - VTYT
                </div>
            ),
            children: (
                <div className="color-border">
                    <ThuocVTYT />
                </div>
            ),
        },
        {
            key: "3",
            label: (
                <div className="p-0 m-0">
                    <FontAwesomeIcon icon={faListUl} /> Tạm ứng
                </div>
            ),
            children: (
                <div className="color-border">
                    <Tamung />
                </div>
            ),
        },
    ];
    return (
        <>
            <div className="d-flex h-max">
                <div className={click ? "vienphi-danhsach-left w-0" : "vienphi-danhsach-left w-20"}>
                    <div
                        className={
                            click ? "vienphi-danhsach-close-left" : "vienphi-danhsach-open-left"
                        }
                        onClick={handleClick}
                    >
                        {click ? (
                            <FontAwesomeIcon icon={faAngleRight} />
                        ) : (
                            <FontAwesomeIcon icon={faAngleLeft} />
                        )}
                    </div>
                    <div>
                        <div className="mt-1 shadow ">
                            <div className="v6">
                                <div className={click ? "d-none" : "w-100"}>
                                    <Danhsachleft />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={click ? "w-100" : "w-80"}>
                    <div className="vienphi-phieuthutamung-danhsachchothu">
                        <div className="vienphi-phieuthutamung-danhsachchothu-btn-thaotac ">
                            <div className="d-flex">
                                {items1.map((item) => (
                                    <Button className="form-btn bg mx-1" key={item.key}>
                                        {item.icon}
                                        <div className="mx-1 fw-bold ">{item.label}</div>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="vp-top vienphi-border">
                        <div className="">
                            <div className="bg-title text-white p-1 m-1">
                                <div className="row  vienphi-title">
                                    <div className="col-md-7 px-4 ">Hành chính </div>
                                    <div className="col-md-2 vp-title-ct ">
                                       <div className="vienphi-border-line-title">Chi tiết</div> 
                                    </div>
                                    <div className="d-flex col-md-3 vp-title-ct">
                                        <div className="w-30 vienphi-border-line-title">
                                            Tổng hợp
                                        </div>
                                        <div className="w-35">KHBL: TP01</div>
                                        <div className="w-35">
                                            <Input className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-1" />
                            <div className="mx-3">
                                <Form>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <div className="d-flex justify-content-center ">
                                                <div className="text-center align-items-center">
                                                    <img src={imguser} width={100} />
                                                    <div className="vienphi-danhsachchothu-text-bhyt">
                                                        BHYT 100%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row form-row">
                                                <Form.Item
                                                    className=" col-md-7 m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                            Họ và tên
                                                        </div>
                                                    }
                                                >
                                                    <Input className=" form-control" />
                                                </Form.Item>
                                                <Form.Item
                                                    className=" col-md-5 m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                            Ngày vào
                                                        </div>
                                                    }
                                                >
                                                    <Input className=" form-control" />
                                                </Form.Item>
                                            </div>
                                            <div className="row form-row">
                                                <Form.Item
                                                    className=" col-md-4 m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                            Ngày sinh
                                                        </div>
                                                    }
                                                >
                                                    <Input className=" form-control" />
                                                </Form.Item>
                                                <Form.Item
                                                    className=" col-md-3 m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                            G.tính
                                                        </div>
                                                    }
                                                >
                                                    <Input className=" form-control" />
                                                </Form.Item>
                                                <Form.Item
                                                    className=" col-md-5 m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                            Ngày ra
                                                        </div>
                                                    }
                                                    p-0
                                                >
                                                    <Input className=" form-control" />
                                                </Form.Item>
                                            </div>
                                            <div className="row form-row">
                                                <Form.Item
                                                    className=" m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                            Địa chỉ
                                                        </div>
                                                    }
                                                >
                                                    <Input className=" form-control" />
                                                </Form.Item>
                                            </div>

                                            <div className="row form-row">
                                                <Form.Item
                                                    className=" col-md-6 m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                            Mã BHYT
                                                        </div>
                                                    }
                                                >
                                                    <Input className=" form-control" />
                                                </Form.Item>
                                                <Form.Item
                                                    className=" col-md-6 m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-noidk">
                                                            Nơi ĐK KCB
                                                        </div>
                                                    }
                                                >
                                                    <Input className=" form-control" />
                                                </Form.Item>
                                            </div>

                                            <div className="row form-row">
                                                <Form.Item
                                                    className=" col-md-6 m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                            Từ ngày
                                                        </div>
                                                    }
                                                >
                                                    <Input className=" form-control" />
                                                </Form.Item>
                                                <Form.Item
                                                    className=" col-md-6 m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-noidk">
                                                            Đến
                                                        </div>
                                                    }
                                                >
                                                    <Input className=" form-control" />
                                                </Form.Item>
                                            </div>

                                            <div className="row form-row">
                                                <Form.Item
                                                    className=" col-md-6 m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                            Mã Q.Lợi
                                                        </div>
                                                    }
                                                >
                                                    <Input className=" form-control" />
                                                </Form.Item>
                                                <Form.Item
                                                    className=" col-md-6 m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-noidk">
                                                            Ngày BĐ 5 năm
                                                        </div>
                                                    }
                                                >
                                                    <Input className=" form-control" />
                                                </Form.Item>
                                            </div>
                                            <div className="row thutien_t">
                                                <Form.Item className=" col-md-4 m-0">
                                                    <Input className=" form-control" />
                                                </Form.Item>
                                                <Form.Item
                                                    className=" col-md-4 m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                            Vào viện
                                                        </div>
                                                    }
                                                >
                                                    <Input className=" form-control" />
                                                </Form.Item>
                                                <div className="col-md-4 kb-checktoa">
                                                    <div className=" kb-checkintoa checkintoa-name"> TT Tổng CP :</div>
                                                    <div className=" kb-checkintoa check-1"> <Checkbox /></div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="vienphi-border-line ">
                                                <Form.Item
                                                    className=" form-row m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-center">
                                                            1.Khám bệnh
                                                        </div>
                                                    }
                                                >
                                                    <Input className="m-0 form-control" />
                                                </Form.Item>
                                                <Form.Item
                                                    className="form-row m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-center">
                                                            2.CĐHA
                                                        </div>
                                                    }
                                                >
                                                    <Input className="m-0 form-control" />
                                                </Form.Item>
                                                <Form.Item
                                                    className="form-row m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-center">
                                                            3.Xét nghiệm
                                                        </div>
                                                    }
                                                >
                                                    <Input className="m-0 form-control" />
                                                </Form.Item>
                                                <Form.Item
                                                    className="form-row m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-center">
                                                            4.PT-TT
                                                        </div>
                                                    }
                                                >
                                                    <Input className="m-0 form-control" />
                                                </Form.Item>
                                                <Form.Item
                                                    className="form-row m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-center">
                                                            5.Thuốc - VTYT
                                                        </div>
                                                    }
                                                >
                                                    <Input className="m-0 form-control" />
                                                </Form.Item>
                                                <Form.Item
                                                    className="form-row m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-center">
                                                            6.Vận chuyển
                                                        </div>
                                                    }
                                                >
                                                    <Input className="m-0 form-control" />
                                                </Form.Item>
                                                <Form.Item
                                                    className="form-row m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-center">
                                                            7.P-giường
                                                        </div>
                                                    }
                                                >
                                                    <Input className="m-0 form-control" />
                                                </Form.Item>
                                                <Form.Item
                                                    className="form-row m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-center">
                                                            8.Máu
                                                        </div>
                                                    }
                                                >
                                                    <Input className="m-0 form-control" />
                                                </Form.Item>
                                                <Form.Item
                                                    className="form-row m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-center">
                                                            9.Khác
                                                        </div>
                                                    }
                                                >
                                                    <Input className="m-0 form-control" />
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="vienphi-border-line ">
                                                <Form.Item
                                                    className=" form-row m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-center">
                                                            Tổng tiền
                                                        </div>
                                                    }
                                                >
                                                    <div className="d-flex">
                                                        <Input className="m-0 form-control" />
                                                        <Input className="m-0 form-control" />
                                                    </div>
                                                </Form.Item>
                                                <Form.Item
                                                    className="form-row m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-center">
                                                            BHYT/SYT
                                                        </div>
                                                    }
                                                >
                                                    <div className="d-flex">
                                                        <Input className="m-0 form-control" />
                                                        /<Input className="m-0 form-control" />
                                                    </div>
                                                </Form.Item>
                                                <Form.Item
                                                    className="form-row m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-center">
                                                            BN ĐC Trả
                                                        </div>
                                                    }
                                                >
                                                    <Input className="m-0 form-control" />
                                                </Form.Item>
                                                <Form.Item
                                                    className="form-row m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-center">
                                                            Thu phí/P.Thu
                                                        </div>
                                                    }
                                                >
                                                    <div className="d-flex">
                                                        <Input className="m-0 form-control" />
                                                        /<Input className="m-0 form-control" />
                                                    </div>
                                                </Form.Item>
                                                <Form.Item
                                                    className="form-row m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-center">
                                                            Ưu đãi
                                                        </div>
                                                    }
                                                >
                                                    <Input className="m-0 form-control" />
                                                </Form.Item>
                                                <Form.Item
                                                    className="form-row m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-center">
                                                            Tỉ lệ miễn
                                                        </div>
                                                    }
                                                >
                                                    <div className="d-flex">
                                                        <Input className="m-0 form-control" />
                                                        <Input className="m-0 form-control" />
                                                    </div>
                                                </Form.Item>
                                                <Form.Item
                                                    className="form-row m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-center">
                                                            Tạm ứng
                                                        </div>
                                                    }
                                                >
                                                    <Input className="m-0 form-control" />
                                                </Form.Item>
                                                <Form.Item
                                                    className="form-row m-0"
                                                    label={
                                                        <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-center">
                                                            Thực thu
                                                        </div>
                                                    }
                                                >
                                                    <Input className="m-0 form-control" />
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-3 mb-0" />

                                    <div className="row form-row tabvp-hc-bo">
                                        <Form.Item
                                            label={<div className="form-input-label">Ghi chú</div>}
                                            className="col-md-6"
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                        <div className="col-md-2 kb-checktoa p-0">
                                            <div className=" kb-checkintoa checkintoa-name"> Giữ BHYT/CMND :</div>
                                            <div className=" kb-checkintoa check-1"> <Checkbox /></div>
                                        </div>
                                        <div className="col-md-2 kb-checktoa p-0">
                                            <div className=" kb-checkintoa checkintoa-name"> Trả BHYT/CMND :</div>
                                            <div className=" kb-checkintoa check-1"> <Checkbox /></div>
                                        </div>
                                        <Form.Item
                                            label={<div className="form-input-label">SL Xe</div>}
                                            className="col-md-2"
                                        >
                                            <InputNumber
                                                min={0}
                                                max={100}
                                                className="form-control"
                                            />
                                        </Form.Item>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className=" m-1 shadow v6 tab-vienphi">
                        <Tabs
                            defaultActiveKey="1"
                            type="card"
                            size="small"
                            items={tabsdanhsachchothu}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Danhsachchothu;
