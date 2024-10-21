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
import "./nhapkho.scss";
function NhapMoi() {

    const items1 = [
        {
            label: <div className="form-input-label "> Nhập mới</div>,
            key: "1",
            icon: <FontAwesomeIcon icon={faAdd} />,
        },
        {
            label: <div className="form-input-label "> Ghi sổ nhập</div>,
            key: "2",
            icon: <FontAwesomeIcon icon={faShareFromSquare} />,
        },
        {
            label: <div className="form-input-label "> F3 - Lưu</div>,
            key: "3",
            icon: <FontAwesomeIcon icon={faSave} />,
        },

        {
            label: <div className="form-input-label "> Bỏ qua</div>,
            key: "4",
            icon: <FontAwesomeIcon icon={faXmarkCircle} />,
        },
        {
            label: <div className="form-input-label "> Sửa</div>,
            key: "5",
            icon: <FontAwesomeIcon icon={faPenToSquare} />,
        },
        {
            label: <div className="form-input-label "> F6 - In KQ</div>,
            key: "6",
            icon: <FontAwesomeIcon icon={faPrint} />,
        },
        {
            label: <div className="form-input-label "> C.Nhật TT P.Nhập</div>,
            key: "7",
            icon: <FontAwesomeIcon icon={faPenToSquare} />,
        },
        {
            label: <div className="form-input-label "> Huỷ</div>,
            key: "8",
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
            <div className="title-nhapkho">THÔNG TIN PHIẾU NHẬP</div>
            <div className="tt-nhapkho">
                <div className="row row-m">
                    <div className="col-md-2">
                        <div className="lablename-nhapkho">
                            Số phiếu:
                        </div>
                        <div className="txtinput">
                            <Input className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="lablename-nhapkho">
                            N.Chứng từ:
                        </div>
                        <div className="txtinput">
                            <Input className="form-control " />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="lablename-nhapkho">
                            Ngày hoá đơn:
                        </div>
                        <div className="txtinput">
                            <Input className="form-control " />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="lablename-nhapkho">
                                    Mẫu số:
                                </div>
                                <div className="txtinput">
                                    <Input className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="lablename-nhapkho">
                                    BB K.Kê số:
                                </div>
                                <div className="txtinput">
                                    <Input className="form-control" />
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
                <div className="row row-m">
                    <div className="col-md-4">
                        <div className="lablename-nhapkho nggiao">
                            Người giao:
                        </div>
                        <div className="txtinput nggiao">
                            <Input className="form-control" />
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="lablename-nhapkho">
                            Nhà cung cấp:
                        </div>
                        <div className="txtinput">
                            <Input className="form-control " />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="lablename-nhapkho">
                                    Ký hiệu:
                                </div>
                                <div className="txtinput">
                                    <Input className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="lablename-nhapkho">
                                    Ngày kiểm:
                                </div>
                                <div className="txtinput">
                                    <Input className="form-control" />
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
                <div className="row row-m">
                    <div className="col-md-2">
                        <div className="lablename-nhapkho">
                            Nguồn:
                        </div>
                        <div className="txtinput">
                            <Input className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="lablename-nhapkho">
                            Kho nhập:
                        </div>
                        <div className="txtinput">
                            <Input className="form-control " />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="lablename-nhapkho">
                            Lý do nhập:
                        </div>
                        <div className="txtinput">
                            <Input className="form-control " />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="lablename-nhapkho">
                                    Số hoá đơn:
                                </div>
                                <div className="txtinput">
                                    <Input className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="lablename-nhapkho">
                                    N.Viên kiểm:
                                </div>
                                <div className="txtinput">
                                    <Input className="form-control" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row row-m">
                    <div className="col-md-2">
                        <div className="lablename-nhapkho">
                            Thuế:
                        </div>
                        <div className="txtinput">
                            <Input className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="lablename-nhapkho">
                            Khấu hao:
                        </div>
                        <div className="txtinput">
                            <Input className="form-control " />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="lablename-nhapkho ghichu">
                            Ghi chú:
                        </div>
                        <div className="txtinput ghichu">
                            <Input className="form-control " />
                        </div>
                    </div>

                </div>
                <div className="row row-m">
                    <div className="col-md-2">
                        <div className="lablename-nhapkho">
                            Tổng thuế:
                        </div>
                        <div className="txtinput">
                            <Input className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="lablename-nhapkho">
                            Tổng CK:
                        </div>
                        <div className="txtinput">
                            <Input className="form-control " />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className=" col-md-4 check-row">
                                <div className="checkicon"><Checkbox /></div>
                                <div className="checkname">CK sau thuế</div>
                            </div>
                            <div className="col-md-4 check-row">
                                <div className="checkicon"><Checkbox /></div>
                                <div className="checkname">HĐ đầu vào</div>
                            </div>
                            <div className="col-md-4 check-row">
                                <div className="checkicon"><Checkbox /></div>
                                <div className="checkname">LT dược QG</div>
                            </div>
                        </div>


                    </div>

                </div>


            </div>

        </div>
    );
}

export default NhapMoi;
