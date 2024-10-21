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
import NhapMoi from './NhapMoi';

function NhapKho() {
    const items = [
        {
            key: "1",
            label: "Nhập mới",
            children: (
                <div className="tiepnhan-tab">
                    <NhapMoi />
                </div>
            ),
        },
        {
            key: "2",
            label: "Danh sách phiếu nhập",
            children: (
                <div className="tiepnhan-tab">
                    Danh sách phiếu nhập
                </div>
            ),
        }
    ];
    return (
        <div className=" h-100">
            <Helmet>
                <title>Nhập Kho - EmedLink </title>
            </Helmet>
            <div className="d-flex">
                <div className="w-100 m-1">
                    <Tabs defaultActiveKey="1" type="card" size="small" items={items} />
                </div>

            </div>
        </div>
    );
}

export default NhapKho;
