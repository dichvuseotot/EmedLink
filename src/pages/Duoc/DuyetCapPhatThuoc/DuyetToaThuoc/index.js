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
import "./duyettoathuoc.scss";
import imguser from '../../../../assets/image/user.png';

function DuyetToaThuoc() {

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
        <div className="duyettoathuoc">
              <Helmet>
                <title>Duyệt Toa Thuốc - EmedLink </title>
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
            <div className="duyettoathuoc_tt">
                <div className="duyettoathuoc_left">
                    <div className="duyettoathuoc_title">Danh sách</div>
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
                    <div className="duyettoathuoc_check">
                        <div className="row">
                            <div className="col-md-6 kb-checktoa">
                                <div className=" kb-checkintoa check-1"> <Radio /></div>
                                <div className=" kb-checkintoa checkintoa-name ">Chưa duyệt</div>
                            </div>
                            <div className="col-md-6 kb-checktoa">
                                <div className=" kb-checkintoa check-1"> <Radio /></div>
                                <div className=" kb-checkintoa checkintoa-name "> Đã duyệt</div>

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
                <div className="duyettoathuoc_right">
                    <div className="duyettoathuoc_title">Thông tin bệnh nhân</div>
                    <div className="dtt_ttbn">
                        <div className="row">
                            <div className="col-md-1"> <img src={imguser} className="imglogo" /></div>
                            <div className="col-md-6">
                                <div className="r_dtt">
                                    <span>Mã BN: </span>
                                    <span className="blo">00000778868678</span>
                                </div>
                                <div className="r_dtt">
                                    <span>Họ tên: </span>
                                    <span className="blo">Nguyễn Văn A</span>
                                </div>
                                <div className="r_dtt">
                                    <span>Giới tính: </span>
                                    <span className="blo">Nam</span>
                                </div>
                                <div className="r_dtt">
                                    <span>Tuổi: </span>
                                    <span className="blo">20</span>
                                </div>
                                <div className="r_dtt">
                                    <span>Năm sinh: </span>
                                    <span className="blo">10/10/2024</span>
                                </div>
                                <div className="r_dtt">
                                    <span>Địa chỉ: 18/4B KP5, Xã Lương Tâm, Huyện Long Mỹ, Tỉnh Hậu Giang</span>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="r_dtt">
                                    <span>Đối tượng: </span>
                                </div>
                                <div className="r_dtt">
                                    <span>Số thẻ: </span>
                                </div>
                                <div className="r_dtt">
                                    <span>Từ ngày: </span>

                                </div>
                                <div className="r_dtt">
                                    <span>Nơi ĐK KCB: </span>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DuyetToaThuoc;
