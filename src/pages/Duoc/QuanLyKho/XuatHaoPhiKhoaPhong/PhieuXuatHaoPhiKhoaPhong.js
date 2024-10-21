import { Table, Button, Dropdown, Form, Input, Radio, Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarPlus,
    faStethoscope,
    faSave,
    faPenToSquare,
    faPrint,
    faXmarkCircle,
    faAdd,
    faTrash,
    faShareFromSquare
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./xuathaophikhoaphong.scss";
function PhieuXuatHaoPhiKhoaPhong() {

    const items1 = [
        {
            label: <div className="form-input-label "> Nhập mới</div>,
            key: "1",
            icon: <FontAwesomeIcon icon={faAdd} />,
        },
        {
            label: <div className="form-input-label "> Hoàn trả</div>,
            key: "2",
            icon: <FontAwesomeIcon icon={faShareFromSquare} />,
        },

        {
            label: <div className="form-input-label "> Bỏ qua</div>,
            key: "3",
            icon: <FontAwesomeIcon icon={faXmarkCircle} />,
        },
        {
            label: <div className="form-input-label "> F6 - In KQ</div>,
            key: "4",
            icon: <FontAwesomeIcon icon={faPrint} />,
        },
        {
            label: <div className="form-input-label "> Huỷ</div>,
            key: "5",
            icon: <FontAwesomeIcon icon={faTrash} />,
        },
    ];
    return (
        <div className=" h-100">
            <div className="btn-nhapkho">
                <div className="btn-pos">
                    {items1.map((item) => (
                        <Button className="form-btn bg mx-1" key={item.key}>
                            {item.icon}
                            <div className="mx-1 fw-bold ">{item.label}</div>
                        </Button>
                    ))}
                </div>
            </div>
            <div className="title-nhapkho">THÔNG TIN XUẤT HAO PHÍ KHOA PHÒNG</div>
            <div className="tt-xuathaophipk">
                <div className="row row-m">
                    <div className="col-md-2">
                        <div className="lablename-nhapkho">
                            Ngày xuất:
                        </div>
                        <div className="txtinput">
                            <Input className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="lablename-nhapkho">
                            Số phiếu:
                        </div>
                        <div className="txtinput">
                            <Input className="form-control" />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="lablename-nhapkho">
                            Khoa phòng:
                        </div>
                        <div className="txtinput">
                            <Input className="form-control " />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="lablename-nhapkho">
                            Kho xuất:
                        </div>
                        <div className="txtinput">
                            <Input className="form-control " />
                        </div>
                    </div>
                </div>
                <div className="row-m">
                    <div className="lablename-nhapkho ghichu">
                        Ghi chú:
                    </div>
                    <div className="txtinput ghichu">
                        <Input className="form-control " />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default PhieuXuatHaoPhiKhoaPhong;
