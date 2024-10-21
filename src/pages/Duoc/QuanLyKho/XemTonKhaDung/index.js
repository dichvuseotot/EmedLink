import { Table, Button, Dropdown, Form, Input, Radio, Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import {
    faMagnifyingGlass,
    faTrash,
    faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./xemtonkhadung.scss";
function XemTonKhaDung() {

    return (
        <div className=" h-100">
            <Helmet>
                <title>Xem Tồn Khả Dụng - EmedLink </title>
            </Helmet>
            <div className="title-nhapkho">XEM TỒN KHẢ DỤNG ( TỒN TREO )</div>
            <div className="tt-xemtontreo">
                <div className="row row-m">
                    <div className="col-md-4">
                        <div className="lablename-nhapkho">
                            Kho:
                        </div>
                        <div className="txtinput">
                            <Input className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="btn-tontreo">
                            <Button className="form-btn bg mx-1" >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <div className="mx-1 fw-bold "> Xem tồn treo</div>
                            </Button>
                        </div>
                        <div className="btn-tontreo">
                            <Button className="form-btn bg mx-1" >
                                <FontAwesomeIcon icon={faPrint} />
                                <div className="mx-1 fw-bold "> In</div>
                            </Button>
                        </div>

                    </div>
                    <div className="col-md-2">
                        <Button className="form-btn bg mx-1" >
                            <FontAwesomeIcon icon={faTrash} />
                            <div className="mx-1 fw-bold "> Xoá tất cả tồn treo</div>
                        </Button>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default XemTonKhaDung;
