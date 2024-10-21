import { Tabs, Button, Form, Input, Checkbox, Table, Radio } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";
import { DataGrid, GridColumn } from 'rc-easyui';
import 'rc-easyui/dist/themes/material-teal/easyui.css';
import 'rc-easyui/dist/themes/icon.css';
import 'rc-easyui/dist/themes/react.css';
import {
    faFileExcel,
    faPenToSquare,
    faReply,
    faSave,
    faFile,
    faAngleRight,
    faAngleLeft,
    faDroplet,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./vltl.scss";

function VLTL() {
    const [click, setClick] = useState(false);
    const [value, setValue] = useState(1);
    const items1 = [
        {
            label: <div className="form-input-label ">F3 - Lưu</div>,
            key: "1",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faSave} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">F2 - Bỏ qua</div>,
            key: "2",
            icon: <FontAwesomeIcon icon={faReply} />,
        },
        {
            label: <div className="form-input-label ">F4 - Sửa</div>,
            key: "3",
            icon: (
                <div>
                    {" "}
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">Hủy nnnn</div>,
            key: "4",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faFileExcel} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">F5 - In T.trình</div>,
            key: "5",
            icon: (
                <div className="">
                    <FontAwesomeIcon icon={faFileExcel} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">Thuốc + VTTH</div>,
            key: "6",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faFile} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">PỨ Thuốc</div>,
            key: "7",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faSpinner} type="regular" />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">Tr.Dịch</div>,
            key: "8",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faDroplet} />
                </div>
            ),
        },
    ];
    const column0 = [
        {
            title: "Dịch vụ kỹ thuật",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "100px" }}> {TDV} </div>,
        },
        {
            title: "Ngày vào",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Ngày ra",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Bs thực hiện",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Phòng thực hiện",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Đối tượng",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Đối tượng",
            dataIndex: "MADVKT",
            align: "center",
        },
    ];
    const datadm = [
        { "code": "FI-SW-01", "name": "Koi", "unitcost": 10.00, "status": "P", "listprice": 36.50, "attr": "Large", "itemid": "EST-1" },
        { "code": "K9-DL-01", "name": "Dalmation", "unitcost": 12.00, "status": "P", "listprice": 18.50, "attr": "Spotted Adult Female", "itemid": "EST-10" },
        { "code": "RP-SN-01", "name": "Rattlesnake", "unitcost": 12.00, "status": "P", "listprice": 38.50, "attr": "Venomless", "itemid": "EST-11" },
        { "code": "RP-SN-01", "name": "Rattlesnake", "unitcost": 12.00, "status": "P", "listprice": 26.50, "attr": "Rattleless", "itemid": "EST-12" },
        { "code": "RP-LI-02", "name": "Iguana", "unitcost": 12.00, "status": "P", "listprice": 35.50, "attr": "Green Adult", "itemid": "EST-13" },
        { "code": "FL-DSH-01", "name": "Manx", "unitcost": 12.00, "status": "P", "listprice": 158.50, "attr": "Tailless", "itemid": "EST-14" },
        { "code": "FL-DSH-01", "name": "Manx", "unitcost": 12.00, "status": "P", "listprice": 83.50, "attr": "With tail", "itemid": "EST-15" },
        { "code": "FL-DLH-02", "name": "Persian", "unitcost": 12.00, "status": "P", "listprice": 23.50, "attr": "Adult Female", "itemid": "EST-16" },
        { "code": "FL-DLH-02", "name": "Persian", "unitcost": 12.00, "status": "P", "listprice": 89.50, "attr": "Adult Male", "itemid": "EST-17" },
        { "code": "AV-CB-01", "name": "Amazon Parrot", "unitcost": 92.00, "status": "P", "listprice": 63.50, "attr": "Adult Male", "itemid": "EST-18" }
    ];
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <div>
            <div className="div-shadow v3">
                <div className="d-flex justify-content-end align-items-center p-1">
                    {items1.map((item) => (
                        <Button className="form-btn bg mx-1 px-1" key={item.key}>
                            {item.icon}
                            <div className="mx-1 fw-bold">{item.label}</div>
                        </Button>
                    ))}
                </div>
            </div>
            <div className="main-vltl">
                <div className="main-vltl-left">
                    <div className="title">Danh sách chờ thực hiện</div>
                    <div className="vltl-on-btn">
                        <div className="on-vltl-left">
                            <div className="radio-vltl">
                                <Radio.Group onChange={onChange} value={value}>
                                    <Radio value={1}>Chờ thực hiện</Radio>
                                    <Radio value={2}>Đã có kết quả</Radio>
                                </Radio.Group>
                            </div>
                            <div className="vltl-left-ngay">
                                <span>Ngày:</span>
                                <DatePicker className="form-control" name="BirthDay" selected={new Date()}
                                    dateFormat="dd/MM/yyyy" />
                                <span>~</span>
                                <DatePicker className="form-control" name="BirthDay" selected={new Date()}
                                    dateFormat="dd/MM/yyyy" />
                            </div>
                        </div>
                        <div className="btn-vltl-left">
                            <div className="btnonsearch"> <FontAwesomeIcon className="icon" icon={faSpinner} type="regular" /></div>
                        </div>
                    </div>
                    <div className="tabledm">
                        <DataGrid data={datadm} style={{ height: '100vh' }}>
                            <GridColumn field="itemid" title="STT" width={50}></GridColumn>
                            <GridColumn field="name" title="Họ tên" width={250}></GridColumn>
                            <GridColumn field="listprice" title="Năm sinh" width={100}></GridColumn>
                            <GridColumn field="unitcost" title="Giới tính" width={100}></GridColumn>
                            <GridColumn field="attr" title="Mã BN" width={100} ></GridColumn>
                            <GridColumn field="status" title="Ngày" width={100}></GridColumn>
                        </DataGrid>
                    </div>
                </div>
                <div className="main-vltl-right">
                    <div className="title">Chi tiết dịch vụ kỹ thuật</div>
                    <div className="vltl-dm-dvkt">
                        <DataGrid data={datadm} style={{ height: '20vh' }}>
                            <GridColumn field="itemid" title="Dịch vụ kỹ thuật" width={50}></GridColumn>
                            <GridColumn field="name" title="Thời gian TH (Phút)" width={250}></GridColumn>
                            <GridColumn field="listprice" title="Ngày CĐ" width={100}></GridColumn>
                            <GridColumn field="unitcost" title="Ngày BĐ TH" width={100}></GridColumn>
                            <GridColumn field="attr" title="Ngày KQ" width={100} ></GridColumn>
                            <GridColumn field="status" title="BS Thực hiện" width={100}></GridColumn>
                            <GridColumn field="status1" title="Đối tượng" width={100}></GridColumn>
                            <GridColumn field="status2" title="Máy TH" width={100}></GridColumn>
                            <GridColumn field="status3" title="Phòng TH" width={100}></GridColumn>
                        </DataGrid>
                    </div>
                    <div className="vltl-thongtin">
                        <div className="vltl-thongtin-left">
                            <div className="item-vltl">
                                <div className="col name">Kỹ thuật:</div>
                                <div className="col txtinput"><Input className="form-control" /></div>
                            </div>
                            <div className="item-vltl">
                                <div className="col name">CĐ trước PTTT:</div>
                                <div className="col txtinput"><Input className="form-control" /></div>
                            </div>
                            <div className="item-vltl">
                                <div className="col name">CĐ sau PTTT:</div>
                                <div className="col txtinput"><Input className="form-control" /></div>
                            </div>
                            <div className="item-vltl">
                                <div className="col name">Ghi chú:</div>
                                <div className="col txtinput"><Input className="form-control" /></div>
                            </div>
                            <div className="item-vltl">
                                <div className="col name">Loại PTTT:</div>
                                <div className="col txtinput"><Input className="form-control" /></div>
                            </div>
                            <div className="item-vltl">
                                <div className="col name">Mẫu T.Trình:</div>
                                <div className="col txtinput"><Input className="form-control" /></div>
                            </div>
                            <div className="item-vltl">
                                <div className="col name">PP gây tê:</div>
                                <div className="col txtinput"><Input className="form-control" /></div>
                            </div>

                        </div>
                        <div className="vltl-thongtin-right">
                            <div className="item-vltl">
                                <div className="col name">BS CĐ:</div>
                                <div className="col txtinput"><Input className="form-control" /></div>
                            </div>
                            <div className="item-vltl">
                                <div className="col name">Ngày CĐ:</div>
                                <div className="col txtinput"><Input className="form-control" /></div>
                            </div>
                            <div className="item-vltl">
                                <div className="col name">Ngày BĐ TH:</div>
                                <div className="col txtinput"><Input className="form-control" /></div>
                            </div>
                            <div className="item-vltl">
                                <div className="col name">Ngày KQ:</div>
                                <div className="col txtinput"><Input className="form-control" /></div>
                            </div>
                            <div className="item-vltl">
                                <div className="col name">BS CCHN:</div>
                                <div className="col txtinput"><Input className="form-control" /></div>
                            </div>
                            <div className="item-vltl">
                                <div className="col name">KTV:</div>
                                <div className="col txtinput"><Input className="form-control" /></div>
                            </div>
                            <div className="item-vltl">
                                <div className="col name">Máy TH:</div>
                                <div className="col txtinput"><Input className="form-control" /></div>
                            </div>

                        </div>
                    </div>
                    <div className="vltl-kq">
                        <div className="title-kq">Kết quả và nội dung</div>
                        <div className="vltlnote">
                            <div className="phacdo">
                                <div className="title-pd">Phác Đồ Huyệt</div>
                                <div><textarea id="w3review" name="w3review" rows="4" cols="50" /></div>
                            </div>
                            <div className="noidung-dienbien">
                                <div className="dienbien-item">
                                    <div className="title-pd">Nội dung T.Trình</div>
                                    <div><textarea id="w3review" className="ttrinh" name="w3review" rows="4" cols="50" /></div>
                                </div>
                                <div className="dienbien-item">
                                    <div className="title-pd">Diễn biến YHCT - VLTL</div>
                                    <div><textarea id="w3review" name="w3review" rows="4" cols="50" /></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default VLTL;
