import { Table, Button, Select, Input, Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCalendarPlus,
    faSave,
    faPenToSquare,
    faPrint,
    faAdd,
    faFileExcel,
    faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

import { DataGrid, GridColumn, NumberBox, SwitchButton, LinkButton ,ComboGrid} from 'rc-easyui';
import 'rc-easyui/dist/themes/material-teal/easyui.css';
import 'rc-easyui/dist/themes/icon.css';
import 'rc-easyui/dist/themes/react.css';


import "../danhmuc.scss";
import ds from "../../../../util/data";

function KhaiBaoBoThongSoXNDVKT() {
    const datagrid = useRef(null);
    const refLuu = useRef(null);
    const [selection, setSelection] = useState('null');
    const [onclick, setOnclick] = useState('null');
    const [abc, setDulieu] = useState([
        {
            id: 1,
            tenthongso: "eclipse",
            donvido: "eclipse",
            btnu: "eclipse",
            minnu: "eclipse",
            maxnu: "eclipse",
            ncminnu: "eclipse",
            ncmaxnu: "eclipse",
            btnam: "eclipse",
            minnam: "eclipse",
            maxnam: "eclipse",
            ncminnam: "eclipse",
            ncmaxnam: "eclipse",
            giatribt: "eclipse",
            stt: "eclipse",
            idmayxn: "eclipse",
            machisoxn: "eclipse",
            tenchisoxn: "eclipse",
            idlist: "eclipse",
            listext: "eclipse",
            rackno: "eclipse",

        },

        {
            id: 2,
            tenthongso: "eclipse",
            donvido: "eclipse",
            btnu: "eclipse",
            minnu: "eclipse",
            maxnu: "eclipse",
            ncminnu: "eclipse",
            ncmaxnu: "eclipse",
            btnam: "eclipse",
            minnam: "eclipse",
            maxnam: "eclipse",
            ncminnam: "eclipse",
            ncmaxnam: "eclipse",
            giatribt: "eclipse",
            stt: "eclipse",
            idmayxn: "eclipse",
            machisoxn: "eclipse",
            tenchisoxn: "eclipse",
            idlist: "eclipse",
            listext: "eclipse",
            rackno: "eclipse",

        },]
    );
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

    /*const abc =[

        {
            id: 1,
            tenthongso: "eclipse",
            donvido: "eclipse",
            btnu: "eclipse",
            minnu: "eclipse",
            maxnu: "eclipse",
            ncminnu: "eclipse",
            ncmaxnu: "eclipse",
            btnam: "eclipse",
            minnam: "eclipse",
            maxnam: "eclipse",
            ncminnam: "eclipse",
            ncmaxnam: "eclipse",
            giatribt: "eclipse",
            stt: "eclipse",
            idmayxn: "eclipse",
            machisoxn: "eclipse",
            tenchisoxn: "eclipse",
            idlist: "eclipse",
            listext: "eclipse",
            rackno: "eclipse",
           
        },

        {
            id: 2,
            tenthongso: "eclipse",
            donvido: "eclipse",
            btnu: "eclipse",
            minnu: "eclipse",
            maxnu: "eclipse",
            ncminnu: "eclipse",
            ncmaxnu: "eclipse",
            btnam: "eclipse",
            minnam: "eclipse",
            maxnam: "eclipse",
            ncminnam: "eclipse",
            ncmaxnam: "eclipse",
            giatribt: "eclipse",
            stt: "eclipse",
            idmayxn: "eclipse",
            machisoxn: "eclipse",
            tenchisoxn: "eclipse",
            idlist: "eclipse",
            listext: "eclipse",
            rackno: "eclipse",
           
        },
       


    ];*/

    const abc1 = [

        {
            id: 1,
            loai: "Sinh hoá",
            tenxn: "tổng phân tích tế bào máu",
            stt: "1",
            dvvienphi: "tổng phân tích tế bào máu",
            ldichvu: "Sinh hoá",

        },
        {
            id: 2,
            loai: "Sinh hoá",
            tenxn: "tổng phân tích tế bào máu",
            stt: "1",
            dvvienphi: "tổng phân tích tế bào máu",
            ldichvu: "Sinh hoá",

        },
        {
            id: 3,
            loai: "Sinh hoá",
            tenxn: "tổng phân tích tế bào máu",
            stt: "1",
            dvvienphi: "tổng phân tích tế bào máu",
            ldichvu: "Sinh hoá",

        },
        {
            id: 4,
            loai: "Sinh hoá",
            tenxn: "tổng phân tích tế bào máu",
            stt: "1",
            dvvienphi: "tổng phân tích tế bào máu",
            ldichvu: "Sinh hoá",

        },


    ];


    const handleAdd = () => {
        if (!datagrid.current.endEdit()) {
            return;
        }
        let abc1 = abc.slice();
        abc1.unshift({ status: false, _new: true });

        setDulieu(abc1, () => {
            datagrid.current.beginEdit(abc[0]);
        });



    }
    const handleRowEditEnd = (event) => {
        if (event.row._new) {
            event.row._new = undefined;
            const abc1 = abc.slice();
            setDulieu(abc1);
    
        }
    }
    const handleRowEditCancel = (event) => {
        if (event.row._new) {
            const abc1 = abc.filter(row => row !== event.row);
            setDulieu(abc1);
        }
    }

    const handleFocusEnter = (a) => {
     if (a.key === "Enter") {
           // console.log('sdfsdf');
            //handleAdd();
            
            refLuu.current.focus();
                a.preventDefault();
                setOnclick(refLuu);
                console.log('sdfsdf',refLuu);
            
        }
    };
    return (
        <div className="khaibaobothongsoXNDVKT">
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
            <div className="khaibaobothongsoXNDVKT_left">
                <div className="titlte_kbht"><FontAwesomeIcon icon={faBars} /> Danh sách bộ xét nghiệm </div>
                <div className="khaibaosearch">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="khaibao_search_name">H.Thức trả kết quả</div>
                        </div>
                        <div className="col-md-7">
                            <div className="khaibao_search_input"><Input className="form-control" /></div>
                        </div>
                        <div className="col-md-1">
                            <Button className="form-btn bg" >
                                <FontAwesomeIcon icon={faArrowsRotate} />
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <DataGrid data={abc1} columnResizing style={{ height: '84vh' }}
                        selectionMode="single"
                        selection={selection}
                        onSelectionChange={(selection) => { console.log(selection) }}
                    >
                        <GridColumn field="loai" title="Loại XN" width={150}></GridColumn>
                        <GridColumn field="tenxn" title="Tên xét nghiệm" width={300}></GridColumn>
                        <GridColumn field="stt" title="STT in" align="right" width={90}></GridColumn>
                        <GridColumn field="dvvienphi" title="Dịch vụ viện phí" width={300} align="right"></GridColumn>
                        <GridColumn field="ldichvu" title="Loại dịch vụ" width={200}></GridColumn>
                    </DataGrid>
                </div>
            </div>

            <div className="khaibaobothongsoXNDVKT_right">

                <div className="khaibaorow">
                    <div className="khaibaorow_col">
                        <div className="khaibaorow_col_name tendvkt">Dịch vụ:</div>
                        <div className="khaibaorow_col_input indvkt"><Input className="form-control" /></div>
                    </div>
                    <div className="row">
                        <div className="col-md-11">
                            <div className="khaibaorow_col">
                                <div className="khaibaorow_col_name">Tên Mẫu XN:</div>
                                <div className="khaibaorow_col_input"><Input className="form-control" /></div>
                            </div>
                            <div className="khaibaorow_col">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="khaibaorow_col_name loaixn">Loại XN:</div>
                                        <div className="khaibaorow_col_input loaixn"><Input className="form-control" /></div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="khaibaorow_col_name stt">STT:</div>
                                        <div className="khaibaorow_col_input stt"><Input className="form-control" /></div>
                                    </div>
                                    <div className="col-md-3 checksetnamnu">
                                        <div className="checkicon"><Checkbox /></div>
                                        <div className="checkname">Set chỉ số nam theo nữ</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-1">
                            <Button className="form-btn bg mx-1" >
                                <FontAwesomeIcon icon={faArrowsRotate} />
                            </Button>

                        </div>
                    </div>

                </div>
                <div onClick={()=>{ if(onclick !=='null') {console.log('gggg',onclick)} else {console.log('vv')} }}>
                   
               



                    <DataGrid

                        style={{ height: '83vh' }}
                        data={abc}
                        clickToEdit
                        editMode="row"
                        columnResizing

                        ref={datagrid}

                        addtable

                        toolbar={({ editingItem }) => (
                            <div style={{ padding: 4 }}>
                                <LinkButton iconCls="icon-add" plain onClick={handleAdd.bind(this)}>Add</LinkButton>
                                <LinkButton iconCls="icon-save" plain disabled={editingItem == null} onClick={() => datagrid.current.endEdit()}>Save</LinkButton>
                                <LinkButton iconCls="icon-cancel" plain disabled={editingItem == null} onClick={() => datagrid.current.cancelEdit()}>Cancel</LinkButton>
                            </div>
                        )}
                        onEditEnd={handleRowEditEnd.bind(this)}
                        onEditCancel={handleRowEditCancel.bind(this)}


                    >
                       
                        <GridColumn field="tenthongso" title="Tên nội dung thông số" width={300} editable
                       
                        editor={({ row }) => (
                            <Input ref={refLuu} onKeyDown={(e) => handleFocusEnter(e)}></Input>
                            
                          )}
                       

                        ></GridColumn>
                        <GridColumn field="donvido" title="Đơn vị đo" editable width={100}></GridColumn>
                        <GridColumn field="btnu" title="BT nữ" align="right" width={100}
                            editable
                            editor={({ row }) => (
                                <NumberBox value={row.listprice} precision={1}></NumberBox>
                            )}
                            
                        />
                        <GridColumn field="minnu" title="Min nữ" align="right" width={100}
                            editable
                            editor={({ row }) => (
                                <NumberBox value={row.unitcost}></NumberBox>
                            )}
                        />
                        <GridColumn field="maxnu" title="Max nữ" editable width={100}></GridColumn>
                        <GridColumn field="ncminnu" title="NC nữ min" align="center" width={100}
                            editable
                            editor={({ row }) => (
                                <SwitchButton value={row.status}></SwitchButton>
                            )}
                            render={({ row }) => (
                                <span>{String(row.status)}</span>
                            )}
                        />
                        <GridColumn field="ncmaxnu" title="NC nữ max" width={100} editable></GridColumn>
                        <GridColumn field="btnam" title="BT nam" align="right" width={100}
                            editable
                            editor={({ row }) => (
                                <NumberBox value={row.listprice} precision={1}></NumberBox>
                            )}
                        />
                        <GridColumn field="minnam" title="Min nam" align="right" width={100}
                            editable
                            editor={({ row }) => (
                                <NumberBox value={row.unitcost}></NumberBox>
                            )}
                        />
                        <GridColumn field="maxnam" title="Max nam" width={100} editable></GridColumn>
                        <GridColumn field="ncminnam" title="NC nam min" align="center" width={100}
                            editable
                            editor={({ row }) => (
                                <SwitchButton value={row.status}></SwitchButton>
                            )}
                            render={({ row }) => (
                                <span>{String(row.status)}</span>
                            )}
                        />
                        <GridColumn field="ncmaxnam" title="NC nam max" width={100} editable></GridColumn>

                        <GridColumn field="giatribt" title="Giá trị BT" width={100} editable></GridColumn>
                        <GridColumn field="stt" title="STT" width={100} editable></GridColumn>
                        <GridColumn field="idmayxn" title="ID KQ máy XN" width={100} editable></GridColumn>
                        <GridColumn field="machisoxn" title="Mã chỉ số XN" width={100} editable></GridColumn>
                        <GridColumn field="tenchisoxn" title="Tên chỉ số XN" width={100} editable></GridColumn>
                        <GridColumn field="idlist" title="ID lis text" width={100} editable></GridColumn>
                        <GridColumn field="listext" title="Lis text nội dung" width={100} editable></GridColumn>
                        <GridColumn field="rackno" title="RackNo" width={100} editable  
                        
                       
                        ></GridColumn>

                    </DataGrid>
                </div>
            </div>
        </div>
    );
}

export default KhaiBaoBoThongSoXNDVKT;
