import { Modal, Tabs, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import {
    faCalendarPlus,
    faStethoscope,
    faSave,
    faPenToSquare,
    faPrint,
    faXmarkCircle,
    faAdd,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import PhieuDieuChinhSoLuongKho from './PhieuDieuChinhSoLuongKho';

function DieuChinhSoLuongKho() {
    const items = [
        {
            key: "1",
            label: "Tăng giảm số lượng",
            children: (
                <div className="tiepnhan-tab">
                    <PhieuDieuChinhSoLuongKho />
                </div>
            ),
        },
        {
            key: "2",
            label: "Danh sách số lượng tăng giảm",
            children: (
                <div className="tiepnhan-tab">
                    Danh sách số lượng tăng giảm
                </div>
            ),
        }
    ];
    return (
        <div className=" h-100">
            <Helmet>
                <title>Điều Chỉnh Số Lượng Kho - EmedLink </title>
            </Helmet>
            <div className="d-flex">
                <div className="w-100 m-1">
                    <Tabs defaultActiveKey="1" type="card" size="small" items={items} />
                </div>

            </div>
        </div>
    );
}

export default DieuChinhSoLuongKho;
