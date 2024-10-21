import { Table, Button, Dropdown, Form, Input, Radio, Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./dieuchinhsoluongkho.scss";
function PhieuDieuChinhSoLuongKho() {


    return (
        <div className=" h-100">
            <div className="title-nhapkho">TĂNG GIẢM SỐ LƯỢNG KHO</div>
            <div className="tt-dieuchinhslkho">
                <div className="row row-m">
                    <div className="col-md-4">
                        <div className="lablename-nhapkho">
                            Kho:
                        </div>
                        <div className="txtinput">
                            <Input className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="lablename-nhapkho">
                            Thuốc:
                        </div>
                        <div className="txtinput">
                            <Input className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <Button className="form-btn bg mx-1" >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <div className="mx-1 fw-bold "> Lấy dữ liêụ</div>
                        </Button>
                    </div>
                    <div className="col-md-2">
                        <Button className="form-btn bg mx-1" >
                        <FontAwesomeIcon icon={faPenToSquare} />
                            <div className="mx-1 fw-bold "> Cập nhật</div>
                        </Button>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default PhieuDieuChinhSoLuongKho;
