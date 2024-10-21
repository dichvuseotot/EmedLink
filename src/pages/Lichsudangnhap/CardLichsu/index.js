import "./cardlichsu.scss";
import moment from 'moment';
function CardLichsu(props) {
    const { data } = props;

    return (
        <>
            <div>
                <div className="box-lichsu">
                    <div className="w-100">
                        <div className="noidung-lichsudangnhap">
                            <div>
                                <span className="label">Địa chỉ IP:</span>
                                <span className="content">{data.IPWan}</span>
                            </div>
                            <div>
                                <span className="label">Máy tính:</span>
                                <span className="content">{data.ComputerName}</span>
                            </div>
                            <div>
                                <span className="label">Thời gian:</span>
                                <span className="content">{moment(new Date(data.IDate)).format('DD/MM/YYYY')} - {data.thoigian}  </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardLichsu;
