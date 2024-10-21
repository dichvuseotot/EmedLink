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
import PhieuHoanTraNhaCungCap from './PhieuHoanTraNhaCungCap';

function HoanTraNhaCungCap() {
    const items = [
        {
            key: "1",
            label: "Lập phiếu hoàn trả nhà cung cấp",
            children: (
                <div className="tiepnhan-tab">
                    <PhieuHoanTraNhaCungCap />
                </div>
            ),
        },
        {
            key: "2",
            label: "Danh sách hoàn trả",
            children: (
                <div className="tiepnhan-tab">
                    Danh sách hoàn trả
                </div>
            ),
        }
    ];
    return (
        <div className=" h-100">
            <Helmet>
                <title>Hoàn Trả Nhà Cung Cấp - EmedLink </title>
            </Helmet>
            <div className="d-flex">
                <div className="w-100 m-1">
                    <Tabs defaultActiveKey="1" type="card" size="small" items={items} />
                </div>

            </div>
        </div>
    );
}

export default HoanTraNhaCungCap;
