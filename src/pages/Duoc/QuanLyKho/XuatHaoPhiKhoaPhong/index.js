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
import PhieuXuatHaoPhiKhoaPhong from './PhieuXuatHaoPhiKhoaPhong';

function XuatHaoPhiKhoaPhong() {
    const items = [
        {
            key: "1",
            label: "Lập phiếu xuất hao phí khoa phòng",
            children: (
                <div className="tiepnhan-tab">
                    <PhieuXuatHaoPhiKhoaPhong />
                </div>
            ),
        },
        {
            key: "2",
            label: "Danh sách phiếu xuất",
            children: (
                <div className="tiepnhan-tab">
                    Danh sách phiếu xuất
                </div>
            ),
        }
    ];
    return (
        <div className=" h-100">
            <Helmet>
                <title>Xuất Hao Phí Khoa Phòng - EmedLink </title>
            </Helmet>
            <div className="d-flex">
                <div className="w-100 m-1">
                    <Tabs defaultActiveKey="1" type="card" size="small" items={items} />
                </div>

            </div>
        </div>
    );
}

export default XuatHaoPhiKhoaPhong;
