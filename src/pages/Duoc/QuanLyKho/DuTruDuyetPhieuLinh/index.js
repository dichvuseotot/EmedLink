import { Table, Button, Dropdown, Form, Input, Radio, Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormItem from "antd/es/form/FormItem";
import { Helmet } from "react-helmet";
import ds from "../../../../util/data";
import {
    faCalendarPlus,
    faStethoscope,
    faSave,
    faPenToSquare,
    faPrint,
    faXmarkCircle,
    faAdd,
    faFileExcel,
    faArrowsRotate,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./dutruduyetphieulinh.scss";

import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef, useState } from "react";
import axios from "axios";


function DuTruDuyetPhieuLinh() {

    const column0 = [
        {
            title: "Thu",
            dataIndex: "Thu",
            render: (Thu) => <div style={{ width: "200px" }}> {Thu} </div>,
        },
        {
            title: "Ngày xuất",
            dataIndex: "NgayXuat",
            render: (NgayXuat) => <div style={{ width: "600px" }}> {NgayXuat} </div>,
        },
        {
            title: "Họ tên",
            dataIndex: "HoTen",
            render: (HoTen) => <div style={{ width: "200px" }}> {HoTen} </div>,
        },
        {
            title: "Giới tính",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Năm sinh",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Tổng tiền",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Miễn giảm",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Thực thu",
            dataIndex: "MADVKT",
            align: "center",
        },

    ];


    return (
        <div className="duyetphieudutru">
            <Helmet>
                <title>Dự Trù Duyệt Phiếu Lĩnh - EmedLink </title>
            </Helmet>
            <div className="div-shadow v3">
                <div className="d-flex justify-content-end p-1">
                    <div className="d-flex">
                        <Button className="form-btn bg mx-1" >
                            <FontAwesomeIcon icon={faCalendarPlus} />
                            <div className="mx-1 fw-bold ">Toa B.Sỹ</div>
                        </Button>
                        <Button className="form-btn bg mx-1" >
                            <FontAwesomeIcon icon={faAdd} />
                            <div className="mx-1 fw-bold ">Mới</div>
                        </Button>
                        <Button className="form-btn bg mx-1" >
                            <FontAwesomeIcon icon={faSave} />
                            <div className="mx-1 fw-bold ">Lưu</div>
                        </Button>
                        <Button className="form-btn bg mx-1" >
                            <FontAwesomeIcon icon={faPrint} />
                            <div className="mx-1 fw-bold ">In T.Thuốc</div>
                        </Button>
                        <Button className="form-btn bg mx-1" >
                            <FontAwesomeIcon icon={faPenToSquare} />
                            <div className="mx-1 fw-bold ">Sửa</div>
                        </Button>
                        <Button className="form-btn bg mx-1" >
                            <FontAwesomeIcon icon={faFileExcel} />
                            <div className="mx-1 fw-bold ">Huỷ</div>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="duyetphieulinh_tt">
                <div className="duyetphieulinh_left">
                    <div className="duyetphieulinh_title">Danh sách</div>
                    <div className="search">
                        <FormItem
                            label={<div className="form-input-label ">Ngày</div>}
                            className=""
                            name="Birthday"
                        >
                            <span className="date"><Input className="form-control" type="date" /></span>
                            <span>-</span>
                            <span className="date"><Input className="form-control" type="date" /> </span>
                        </FormItem>
                        <Button className="form-btn bg" >
                            <FontAwesomeIcon icon={faArrowsRotate} />
                            <div className="mx-1 fw-bold ">Tìm</div>
                        </Button>
                    </div>
                    <div className="Ketoabanle_check">
                        <div className="row">
                            <div className="col-md-6 kb-checktoa">
                                <div className=" kb-checkintoa check-1"> <Checkbox /></div>
                                <div className=" kb-checkintoa checkintoa-name ">Danh sách duyệt</div>
                            </div>
                        </div>
                    </div>
                    <div className="m-1">
                        <Table
                            columns={column0}
                            dataSource={ds}
                            scroll={{ x: true }}
                            size="small"
                            pagination={{ pageSize: 30 }}
                        />
                    </div>

                </div>
                <div className="duyetphieulinh_right">
                    <div className="duyetphieulinh_title">Thông tin dự trù</div>
                    <div className="thongtinbn">
                        <div className="thongtindutru_row">
                            <div className="row row-m">
                                <div className="col-md-3">
                                    <div className="lablename-ktbanle">
                                        Ngày:
                                    </div>
                                    <div className="txtinput">
                                        <Input className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="lablename-ktbanle">
                                        Kho dự trù:
                                    </div>
                                    <div className="txtinput">
                                        <Input className="form-control " />
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="lablename-ktbanle">
                                        Kho xuất:
                                    </div>
                                    <div className="txtinput">
                                        <Input className="form-control " />
                                    </div>
                                </div>
                            </div>
                            <div className="row-m">
                                <div className="lablename-ktbanle ghichu">
                                    Ghi chú:
                                </div>
                                <div className="txtinput ghichu">
                                    <Input className="form-control " />
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default DuTruDuyetPhieuLinh;
