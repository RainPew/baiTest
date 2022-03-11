import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";

export default function Login(props) {
  const dispatch = useDispatch();

  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  console.log("userLogin", userLogin);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      const action = dangNhapAction(values);
      dispatch(action);
      console.log("values", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="container mt-5">
      <h1 className="text-center">Đăng Nhập</h1>
      <div>
        <div className="form-group">
          <label>Tên đăng nhập</label>
          <input
            type="text"
            className="form-control"
            name="taiKhoan"
            onChange={formik.handleChange}
            placeholder="tên đăng nhập"
          />
        </div>
        <div className="form-group">
          <label>Mật Khẩu</label>
          <input
            type="password"
            className="form-control"
            name="matKhau"
            onChange={formik.handleChange}
            placeholder="mật khẩu"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Đăng nhập
        </button>
      </div>
    </form>
  );
}
