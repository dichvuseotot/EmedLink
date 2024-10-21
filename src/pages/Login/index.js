import { useState, useEffect } from "react";
import { Button, Form, Input, Select, Tree } from "antd";
import logo from "../../../src/assets/image/logo.png";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { v4 as publicIpv4 } from 'react-public-ip';
import "./loginpage.scss";
import { useNavigate } from "react-router-dom";
import { errorInfo } from "../../components/Dialog/Dialog";
import loginAPI from "../../services/loginApi";
import handleDatetime from "../../util/dateTime";
import { v4 as uuidv4 } from 'uuid';
import { browserName, osVersion , osName,deviceDetect} 
from "react-device-detect";
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";


function LoginPage() {
    const [thoigian, setThoiGian] = useState();
    const [form] = Form.useForm();
    //const thoigian = new Date();
    const navigate = useNavigate();

    const submitLogin = async (user) => {
       
       if (user.UserName === undefined || user.UserPass === undefined) {
            errorInfo("Vui lòng nhập đầy đủ thông tin!");
        } else {
            const data = await loginAPI.login(user);
            if (data.data.Code === "err") {
                errorInfo(data.data.Content);
            } else {
                localStorage.setItem("token", JSON.stringify(data.data.accessToken));
                navigate("/");
            }
        }
    };
    const onChange = (date) => {
        setThoiGian(date);
      };
    /* useEffect(() => {
        form.setFieldsValue({
            Thoigian: handleDatetime(thoigian),
            // DVT: thuocdcchon.email,
            // Hluong: thuocdcchon.phone,
        });
    }, [thoigian]);*/

   useEffect(() => {
        publicIpv4()
            .then(IPWan => {
                form.setFieldsValue({
                    IPWan: IPWan
                 });

            })
            .catch(error => {
            });
           /* form.setFieldsValue({
                ComputerName: window.navigator.userAgent
             });*/
    }, []);
 
    return (
        <>
            <div className="bg-login">
                <div className="vh-100 d-flex justify-content-end align-items-center ">
                    <div className="box-login rounded">
                        <div className="title rounded-top">
                            <img src={logo} width={30} height={30} alt="logo.png" />
                            <div>e-MedLink Y Tế Điện Tử</div>
                        </div>
                        <div className="content rounded-bottom">
                            <Form layout="horizontal"  onFinish={submitLogin} form={form}>
                                <div className="box-input">
                                    <div className="inputrow">
                                        <Form.Item
                                            name="UserName"
                                            label={
                                                <div className="form-input-label w-label">
                                                    Tên đăng nhập
                                                </div>
                                            }
                                            className="form-row-login"
                                        >
                                            <Input name="UserName" className="form-control-login" />
                                        </Form.Item>
                                    </div>
                                    <div className="inputrow">
                                        <Form.Item
                                            name="UserPass"
                                            label={
                                                <div className="form-input-label w-label">
                                                    Mật khẩu
                                                </div>
                                            }
                                            className="form-row-login"
                                        >
                                            <Input.Password
                                                name="UserPass"
                                                iconRender={(visible) =>
                                                    visible ? (
                                                        <EyeTwoTone />
                                                    ) : (
                                                        <EyeInvisibleOutlined />
                                                    )
                                                }
                                                className="form-control-login"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="inputrow">
                                        <Form.Item
                                            name="Coso"
                                            label={
                                                <div className="form-input-label w-label">
                                                    Cơ sở
                                                </div>
                                            }
                                            className="form-row-login"
                                        >
                                            <div className="select-login">
                                                <Select
                                                    showSearch
                                                    placeholder="Chọn cơ sở"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                        (option?.label ?? "")
                                                            .toLowerCase()
                                                            .includes(input.toLowerCase())
                                                    }
                                                    options={[
                                                        {
                                                            value: "jack",
                                                            label: "Cơ sở 1",
                                                        },
                                                        {
                                                            value: "lucy",
                                                            label: "Cơ sở 2",
                                                        },
                                                        {
                                                            value: "tom",
                                                            label: "Cơ sở 3",
                                                        },
                                                    ]}
                                                />
                                            </div>
                                        </Form.Item>
                                    </div>
                                    {/* <div className="inputrow">
                                        <Form.Item
                                            name="Thoigian"
                                            label={
                                                <div className="form-input-label w-label">
                                                    Thời gian
                                                </div>
                                            }
                                            className="form-row-login"
                                            initialValue={handleDatetime(thoigian)}
                                        >
                                           <Input className="form-control-login" readOnly />
                                        </Form.Item>
                                    </div>*/}
                                    <div className="inputrow">
                                        <Form.Item
                                            name="Thoigian"
                                            label={
                                                <div className="form-input-label w-label">
                                                    Thời gian
                                                </div>
                                            }
                                            className="form-row-login"
                                        >
                                            <DatePicker className="form-control-login-thoigian" name="Thoigian" selected={thoigian ? new Date(thoigian) : new Date()}  onChange={onChange}
                                                        dateFormat="dd/MM/yyyy" />
                                        </Form.Item>
                                    </div>
                                    <div className="inputrow logindisplay">
                                        <Form.Item
                                            name="IPWan"
                                            className="form-row-login"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </div>
                                    <div className="inputrow logindisplay">
                                        <Form.Item
                                            name="ComputerName"
                                            className="form-row-login"
                                            initialValue={`${browserName} , ${osName}-${osVersion} `}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </div>
                                   
                                    
                                </div>
                               
                                <br />
                                <div className="d-flex justify-content-center">
                                    <Button htmlType="submit" className="btn-login">
                                        Đăng nhập
                                    </Button>
                                </div>
                            </Form>

                            <hr className="w-80 mx-auto" />
                            <div className="text-center form-input-label">
                                Tôi quên mất mật khẩu rồi ! Tôi muốn
                                <span className="link-quenmatkhau"> lấy lại mật khẩu</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
