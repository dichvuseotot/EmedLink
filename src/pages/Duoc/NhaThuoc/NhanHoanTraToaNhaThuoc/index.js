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
import "./nhanhoantratoanhathuoc.scss";

import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import SearchFilter from "./Search";

function NhanHoanTraToaNhaThuoc() {

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

    const [dsthuoc, setDSThuoc] = useState([]);
    const [thuocdcchon, setValueThuocChon] = useState({});
    const [value, setValue] = useState(false);
    const [data, setData] = useState([]);
    const [red, setReds] = useState([]);
    const [form] = Form.useForm();
    const [valueInputThuoc, setValueInputThuoc] = useState();
    const [clickTenThuoc, setClickTenThuoc] = useState(false);
    console.log('clickTenThuoc: ', clickTenThuoc);
    //UseRef
    const refTenthuoc = useRef(null);
    const refNcap = useRef(null);
    const refSang = useRef(null);
    const refTrua = useRef(null);
    const refChieu = useRef(null);
    const refToi = useRef(null);
    const refCachdung = useRef(null);
    const refLuu = useRef(null);

    const handleDeleteThuoc = (a) => {
        let ds = dsthuoc.filter((item) => item.Ma !== a.Ma);
        setDSThuoc(ds);
    };

    const handlePushThuoc = (e) => {
        data.map((item) => {
            if (item.name === e.Tenthuoc) {
                let a = {
                    Ma: uuidv4(),
                    Tenthuoc: thuocdcchon.name,
                    ...e,
                };
                setDSThuoc((oldArray) => [...oldArray, a]);
                form.setFieldsValue({
                    Tenthuoc: "",
                    Hamluong: "",
                    DVT: "",
                    Ncap: "",
                    Sang: "",
                    Trua: "",
                    Chieu: "",
                    Toi: "",
                    Tong: "",
                    Cachdung: "",
                });
                setValue(!value);
            }
        });
        setValueInputThuoc();
        refTenthuoc.current.focus();
    };
    const handleSuaThongTin = (a, b) => {
        console.log(a, b);
    };
    const handleFocusEnter = (a, b) => {
        if (a.key === "Enter") {
            if (b === 1) {
                refSang.current.focus();
                a.preventDefault();
            } else if (b === 2) {
                refTrua.current.focus();
                a.preventDefault();
            } else if (b === 3) {
                refChieu.current.focus();
                a.preventDefault();
            } else if (b === 4) {
                refToi.current.focus();
                a.preventDefault();
            } else if (b === 5) {
                refCachdung.current.focus();
                a.preventDefault();
            } else if (b === 6) {
                refLuu.current.focus();
                a.preventDefault();
            }
        }
    };


    useEffect(() => {
        form.setFieldsValue({
            Tenthuoc: thuocdcchon.name,
            // DVT: thuocdcchon.email,
            // Hluong: thuocdcchon.phone,
        });
    }, [thuocdcchon]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setData(res.data);
                setReds(res.data);
            })
            .catch((err) => console.log(err));
    }, []);


    const columnthuoc = [
        {
            title: "Tên Thuốc",
            dataIndex: "Tenthuoc",
            width: "20%",
        },
        {
            title: "Hàm lượng",
            dataIndex: "Hluong",
            width: "5%",
        },
        {
            title: "ĐVT",
            dataIndex: "DVT",
            width: "5%",
        },

        {
            title: "Ng.cấp",
            dataIndex: "Ncap",
            width: "5%",
        },
        {
            title: "Sáng",
            dataIndex: "Sang",
            width: "5%",
            align: "center",
            render: (Sang) => (
                <div>
                    <input className="form-control" defaultValue={Sang} />
                </div>
            ),
        },

        {
            title: "Trưa",
            dataIndex: "Trua",
            width: "5%",
            align: "center",
        },
        {
            title: "Chiều",
            dataIndex: "Chieu",
            width: "5%",
            align: "center",
        },
        {
            title: "Tối ",
            dataIndex: "Toi",
            width: "5%",
            align: "center",
        },

        {
            title: "Tổng",
            dataIndex: "Tong",
            width: "10%",
        },
        {
            title: "Cách dùng",
            dataIndex: "Cachdung",
            width: "20%",
        },
        {
            title: "Đơn giá",
            dataIndex: "Dongia",
            width: "10%",
        },
        {
            title: "Xóa",
            dataIndex: "",
            align: "center",
            width: "5%",
            render: (_, record) => (
                <div className="d-flex justify-content-center">
                    <Button
                        className="khambenh-btn-icon color-icon-edit red"
                        onClick={() => handleDeleteThuoc(record)}
                    >
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </Button>
                </div>
            ),
        },
    ];


    return (
        <div className="Ketoabanle">
            <Helmet>
                <title>Nhận Hoàn Trả Toa Nhà Thuốc - EmedLink </title>
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
            <div className="Ketoabanle_tt">
                <div className="Ketoabanle_left">
                    <div className="Ketoabanle_title">Danh sách</div>
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
                                <div className=" kb-checkintoa checkintoa-name ">Toa thuốc xuất bán</div>
                            </div>
                            <div className="col-md-6 kb-checktoa">
                                <div className=" kb-checkintoa check-1"> <Checkbox /></div>
                                <div className=" kb-checkintoa checkintoa-name "> Toa thuốc huỷ</div>

                            </div>
                        </div>
                    </div>
                    <div className="m-1">
                        <Table
                            columns={column0}
                            dataSource={ds}
                            // loading={loading}
                            scroll={{ x: true }}
                            size="small"
                            pagination={{ pageSize: 30 }}
                        />
                    </div>

                </div>
                <div className="Ketoabanle_right">
                    <div className="Ketoabanle_title">Thông tin xuất bán</div>
                    <div className="thongtinbn">


                        <div className="thongtinbn_row">
                            <div className="row row-m">
                                <div className="col-md-3">
                                    <div className="lablename-ktbanle">
                                        Mã BN:
                                    </div>
                                    <div className="txtinput">
                                        <Input className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="lablename-ktbanle">
                                        Họ & Tên:
                                    </div>
                                    <div className="txtinput">
                                        <Input className="form-control " />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="lablename-ktbanle">
                                        N.Sinh:
                                    </div>
                                    <div className="txtinput">
                                        <Input className="form-control " />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="lablename-ktbanle">
                                        Giới tính:
                                    </div>
                                    <div className="txtinput">
                                        <Input className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row row-m">
                                <div className="col-md-9">
                                    <div className="lablename-ktbanle address">
                                        Địa chỉ:
                                    </div>
                                    <div className="txtinput address">
                                        <Input className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="lablename-ktbanle">
                                        Số hiệu:
                                    </div>
                                    <div className="txtinput">
                                        <Input className="form-control" />
                                    </div>
                                </div>

                            </div>
                            <div className="row row-m">
                                <div className="col-md-9">
                                    <div className="lablename-ktbanle address">
                                        Bác sĩ:
                                    </div>
                                    <div className="txtinput address">
                                        <Input className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="lablename-ktbanle">
                                        Số HĐ:
                                    </div>
                                    <div className="txtinput">
                                        <Input className="form-control" />
                                    </div>
                                </div>

                            </div>
                            <div className="row row-m">
                                <div className="col-md-9">
                                    <div className="lablename-ktbanle address">
                                        Chuẩn đoán:
                                    </div>
                                    <div className="txtinput address">
                                        <Input className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="lablename-ktbanle">
                                        VAT:
                                    </div>
                                    <div className="txtinput">
                                        <Input className="form-control" />
                                    </div>
                                </div>

                            </div>
                            <div className="row row-m">
                                <div className="col-md-3">
                                    <div className="lablename-ktbanle">
                                        Ngày cấp:
                                    </div>
                                    <div className="txtinput">
                                        <Input className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="lablename-ktbanle ghichu">
                                        Ghi chú:
                                    </div>
                                    <div className="txtinput ghichu">
                                        <Input className="form-control" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="div-shadow v5 my-1">
                        <div>
                            <div className="label-table">
                                <div className=" w-20">Tên thuốc</div>
                                <div className=" w-5 text-center">HL</div>
                                <div className=" w-5 text-center">ĐVT</div>
                                <div className=" w-5 text-center">N.cấp</div>
                                <div className=" w-5 text-center">Sáng</div>
                                <div className=" w-5 text-center">Trưa</div>
                                <div className=" w-5 text-center">Chiều</div>
                                <div className=" w-5 text-center">Tối</div>
                                <div className=" w-10 text-center">Tổng</div>
                                <div className=" w-20">Cách dùng</div>
                                <div className=" w-10 text-center">Đơn giá</div>
                                <div className=" w-5 text-center">Lưu</div>
                            </div>
                            <div className="scroll">

                                <Form
                                    form={form}
                                    onFinish={handlePushThuoc}
                                    onKeyDown={(e) => handleFocusEnter(e, 8)}
                                >
                                    <div className="d-flex">
                                        <Form.Item className="p-0 m-0 w-20">
                                            <SearchFilter
                                                setValueThuocChon={setValueThuocChon}
                                                thuocdcchon={thuocdcchon}
                                                form={form}
                                                onFinish={handlePushThuoc}
                                                data={data}
                                                red={red}
                                                setReds={setReds}
                                                valueInputThuoc={valueInputThuoc}
                                                setValueInputThuoc={setValueInputThuoc}
                                                clickTenThuoc={clickTenThuoc}
                                                setClickTenThuoc={setClickTenThuoc}
                                                refNcap={refNcap}
                                                refTenthuoc={refTenthuoc}
                                            />
                                        </Form.Item>
                                        <Form.Item className="p-0 m-0 w-5" name="Hluong">
                                            <Input className="form-control" />
                                        </Form.Item>{" "}
                                        <Form.Item className="p-0 m-0 w-5" name="DVT">
                                            <Input className="form-control" />
                                        </Form.Item>
                                        <Form.Item className="p-0 m-0 w-5" name="Ncap">
                                            <Input
                                                className="form-control"
                                                ref={refNcap}
                                                onKeyDown={(e) => handleFocusEnter(e, 1)}
                                            />
                                        </Form.Item>
                                        <Form.Item className="p-0 m-0 w-5" name="Sang">
                                            <Input
                                                className="form-control"
                                                type="number"
                                                min={0}
                                                classNames="text-center"
                                                ref={refSang}
                                                onKeyDown={(e) => handleFocusEnter(e, 2)}
                                            />
                                        </Form.Item>
                                        <Form.Item className="p-0 m-0 w-5" name="Trua">
                                            <Input
                                                className="form-control"
                                                classNames="text-center"
                                                type="number"
                                                min={0}
                                                ref={refTrua}
                                                onKeyDown={(e) => handleFocusEnter(e, 3)}
                                            />
                                        </Form.Item>
                                        <Form.Item className="p-0 m-0 w-5" name="Chieu">
                                            <Input
                                                className="form-control"
                                                type="number"
                                                min={0}
                                                classNames="text-center"
                                                ref={refChieu}
                                                onKeyDown={(e) => handleFocusEnter(e, 4)}
                                            />
                                        </Form.Item>
                                        <Form.Item className="p-0 m-0 w-5" name="Toi">
                                            <Input
                                                className="form-control"
                                                type="number"
                                                min={0}
                                                classNames="text-center"
                                                ref={refToi}
                                                onKeyDown={(e) => handleFocusEnter(e, 5)}
                                            />
                                        </Form.Item>
                                        <Form.Item className="p-0 m-0 w-10" name="Tong">
                                            <Input className="form-control" />
                                        </Form.Item>
                                        <Form.Item className="p-0 m-0 w-20" name="Cachdung">
                                            <Input
                                                className="form-control"
                                                ref={refCachdung}
                                                onKeyDown={(e) => handleFocusEnter(e, 6)}
                                            />
                                        </Form.Item>
                                        <Form.Item className="p-0 m-0 w-10" name="Dongia">
                                            <Input className="form-control" readOnly />
                                        </Form.Item>
                                        <Form.Item className="p-0 m-0 w-5 d-flex justify-content-center">
                                            <Button
                                                className="khambenh-btn-icon color-icon-edit green"
                                                htmlType="submit"
                                                ref={refLuu}
                                            >
                                                <FontAwesomeIcon icon={faCheck} />
                                            </Button>
                                        </Form.Item>
                                    </div>
                                </Form>
                                <div className="table-donthuoc">
                                    <Table
                                        columns={columnthuoc}
                                        dataSource={dsthuoc}
                                        // loading={loading}
                                        scroll={{ x: true, y: 190 }}
                                        size="small"
                                        bordered={true}
                                        pagination={false}
                                        showHeader={false}
                                        locale={{ emptyText: "Chưa có dữ liệu" }}
                                        onRow={(record, rowIndex) => ({
                                            onClick: () => {
                                                handleSuaThongTin(record, rowIndex);
                                            },
                                        })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default NhanHoanTraToaNhaThuoc;
