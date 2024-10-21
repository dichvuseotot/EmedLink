import { Table, Button, Dropdown, Form, Input, Radio, Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import FormItem from "antd/es/form/FormItem";
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
import "./capnhatlohandung.scss";

import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef, useState } from "react";
import axios from "axios";


function CapNhatLoHanDung() {




    return (
        <div className="capnhatlohandung">
              <Helmet>
                <title>Cập Nhật Lô Hạn Dùng - EmedLink </title>
            </Helmet>
             <div className="title-capnhatlohandung">CẬP NHẬT LÔ, HẠN DÙNG</div>
            <div className="thongtin_capnhatlohandung">
                <div className="row row_capnhatlohandung">
                    <div className="col-md-5">
                        <div className="lablename-hd">Thuốc - VTYT:</div>
                        <div className="txtinput">
                            <Input className="form-control " />
                        </div>
                    </div>
                    <div className="col-md-1 btn-tim">
                        <Button className="form-btn" >
                            <FontAwesomeIcon icon={faArrowsRotate} />
                            <div className="mx-1 fw-bold "> Xem</div>
                        </Button>
                    </div>
                    <div className="col-md-5"></div>
                    <div className="col-md-1 btn-tim">
                        <Button className="form-btn" >
                            <FontAwesomeIcon icon={faSave} />
                            <div className="mx-1 fw-bold "> Cập nhật</div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CapNhatLoHanDung;
