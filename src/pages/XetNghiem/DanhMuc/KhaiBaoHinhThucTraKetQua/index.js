import { Table, Button,  Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faArrowRight,
    faBars
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";

import { TreeGrid, GridColumn } from 'rc-easyui';
import 'rc-easyui/dist/themes/material-teal/easyui.css';
import 'rc-easyui/dist/themes/icon.css';
import 'rc-easyui/dist/themes/react.css';


import "../danhmuc.scss";
import ds from "../../../../util/data";

function KhaiBaoHinhThucTraKetQua() {

    const columns = [
        {
            title: "Mã đơn vị tính",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "200px" }}> {TDV} </div>,
        },
        {
            title: "Tên diễn giải đơn vị tính",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "800px" }}> {TDVVT} </div>,
        },


    ];

    const item = [
        {
            key: "1",
            label: (
                <div className="form-input-label fw-bold">
                    Xét nghiệm:11 _Tổng phân tích tế bào máu ngoại vi
                </div>
            ),
            children: (
                <div>
                    <Table
                        columns={columns}
                        dataSource={ds}
                        // loading={loading}
                        size="small"
                        scroll={{ y: 250 }}
                        pagination={false}
                        bordered={true}
                        showHeader={false}
                    />
                </div>
            ),
        },
        {
            key: "2",
            label: <div className="form-input-label fw-bold">Xét nghiệm:12 _Sinh hóa</div>,
            children: (
                <div>
                    <Table
                        columns={columns}
                        dataSource={ds}
                        // loading={loading}
                        size="small"
                        scroll={{ y: 250 }}
                        pagination={false}
                        bordered={true}
                        showHeader={false}
                    />
                </div>
            ),
        },
    ];

    const abc = [

        {
            id: 3,
            name: "eclipse",
            children: [
                {
                    id: 31,
                    name: "eclipse.exe"
                },
                {
                    id: 32,
                    name: "eclipse.ini"
                },
                {
                    id: 33,
                    name: "notice.html"
                }
            ]
        },
        {
            id: 3,
            name: "eclipse",
            children: [
                {
                    id: 31,
                    name: "eclipse.exe"
                },
                {
                    id: 32,
                    name: "eclipse.ini"
                },
                {
                    id: 33,
                    name: "notice.html"
                }
            ]
        },
        {
            id: 3,
            name: "eclipse",
            children: [
                {
                    id: 31,
                    name: "eclipse.exe"
                },
                {
                    id: 32,
                    name: "eclipse.ini"
                },
                {
                    id: 33,
                    name: "notice.html"
                }
            ]
        },
        {
            id: 3,
            name: "eclipse",
            children: [
                {
                    id: 31,
                    name: "eclipse.exe"
                },
                {
                    id: 32,
                    name: "eclipse.ini"
                },
                {
                    id: 33,
                    name: "notice.html"
                }
            ]
        },
        {
            id: 3,
            name: "eclipse",
            children: [
                {
                    id: 31,
                    name: "eclipse.exe"
                },
                {
                    id: 32,
                    name: "eclipse.ini"
                },
                {
                    id: 33,
                    name: "notice.html"
                }
            ]
        },
        {
            id: 3,
            name: "eclipse",
            children: [
                {
                    id: 31,
                    name: "eclipse.exe"
                },
                {
                    id: 32,
                    name: "eclipse.ini"
                },
                {
                    id: 33,
                    name: "notice.html"
                }
            ]
        },
        {
            id: 3,
            name: "eclipse",
            children: [
                {
                    id: 31,
                    name: "eclipse.exe"
                },
                {
                    id: 32,
                    name: "eclipse.ini"
                },
                {
                    id: 33,
                    name: "notice.html"
                }
            ]
        },
        {
            id: 3,
            name: "eclipse",
            children: [
                {
                    id: 31,
                    name: "eclipse.exe"
                },
                {
                    id: 32,
                    name: "eclipse.ini"
                },
                {
                    id: 33,
                    name: "notice.html"
                }
            ]
        },
        {
            id: 3,
            name: "eclipse",
            children: [
                {
                    id: 31,
                    name: "eclipse.exe"
                },
                {
                    id: 32,
                    name: "eclipse.ini"
                },
                {
                    id: 33,
                    name: "notice.html"
                }
            ]
        },
        {
            id: 3,
            name: "eclipse",
            children: [
                {
                    id: 31,
                    name: "eclipse.exe"
                },
                {
                    id: 32,
                    name: "eclipse.ini"
                },
                {
                    id: 33,
                    name: "notice.html"
                }
            ]
        },


    ];
    const abc1 = [

        {
            id: 3,
            name: "eclipse",
            children: [
                {
                    id: 31,
                    name: "eclipse.exe",
                    hinhthuc: "khai báo theo thông số",
                },
                {
                    id: 32,
                    name: "eclipse.ini",
                    hinhthuc: "khai báo theo thông số",
                },
                {
                    id: 33,
                    name: "notice.html",
                    hinhthuc: "khai báo theo thông số",
                }
            ]
        },


    ];


    return (
        <div className="khaibaohinhthuc">
            <div className="khaibaohinhthuc_left">
                <div className="titlte_kbht"><FontAwesomeIcon icon={faBars} /> Danh sách bộ xét nghiệm </div>
                <div>
                    <TreeGrid
                        style={{ height: '94vh' }}
                        data={abc}
                        idField="id"
                        treeField="name"

                    >
                        <GridColumn field="name" title="Tên bộ xét nghiệm "
                            render={({ row }) => {
                                return (
                                    <span onClick={() => console.log(row.id)} >
                                        {row.name}
                                    </span>);
                            }}
                        ></GridColumn>
                    </TreeGrid>
                </div>
            </div>
            <div className="khaibaohinhthuc_center">
                <div className="khaibaohinhthuc_add">
                    <div className="select-kbht">
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
                    </div>
                    <div className="btn-tim">
                        <Button className="form-btn  mx-1 btn-kbht" >
                            <FontAwesomeIcon icon={faArrowRight} />
                            <div className="mx-1 fw-bold "> Thêm</div>
                        </Button>
                    </div>
                    <div className="btn-tim">
                        <Button className="form-btn  mx-1 btn-kbht" >
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <div className="mx-1 fw-bold "> Xoá</div>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="khaibaohinhthuc_right">
                <div className="titlte_kbht"><FontAwesomeIcon icon={faBars} /> Danh sách xét nghiệm trả kết quả </div>
                <div>
                    <TreeGrid
                        style={{ height: '94vh' }}
                        data={abc1}
                        idField="id"
                        treeField="name"

                    >
                        <GridColumn field="name" title="Xét nghiệm "
                            render={({ row }) => {
                                return (
                                    <span onClick={() => console.log(row.id)} >
                                        {row.name}
                                    </span>);
                            }}
                        ></GridColumn>
                        <GridColumn field="hinhthuc" title="Hình thức"></GridColumn>
                    </TreeGrid>
                </div>
            </div>
        </div>
    );
}

export default KhaiBaoHinhThucTraKetQua;
