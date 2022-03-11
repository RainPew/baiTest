import { baseService } from "./baseService";
import { GROUPID} from '../util/settings/config'
export class QuanLyNguoiDungService  extends baseService{

    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap) => { // {taiKhoan:'',matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
    }
    
    layDanhSachNguoiDung = () => {
        return this.get('/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01');
    }
  
}



export const quanLyNguoiDungService = new QuanLyNguoiDungService();
