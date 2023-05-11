import React, { useEffect, useState } from 'react';
import { APIURL } from '../../../constants/global'
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { setAdminData } from '../../../features/Auth/adminSlice';

export default function Login() {
   
    const navigate = useNavigate();
    const authDetail = useSelector((c) => c.admin.data);
    const dispatch = useDispatch();
    const [inputValues, setLogin] = useState({
        isLogin: false,
        email: '',
        password: '',
        error_list: [],
        warningmsg: '',
        utoken: null,
    });

    useEffect(() => {
        
    })

    const handleInput = (e) => {
        setLogin({ ...inputValues, [e.target.name]: e.target.value })
    }
    const handleLogin = (e) => {
        e.preventDefault();
        fetch(APIURL + '/auth/admin-login',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: inputValues.email, password: inputValues.password, remember_me: 0 })
            }
        ).then(
            async res => {
                const resp = await res.json();
                console.log("resp", resp);
                let api_status = resp.status;
                if (api_status === 200) {
                    setLogin({
                        ...inputValues, isLogin: true, error_list: [], warningmsg: '',
                        utoken: resp.token
                    });
                    
                    dispatch(setAdminData({ token: resp.token, data: null, ustatus: true }))
                    navigate("/admin/customers");

                } else if (api_status === 401) {
                    setLogin({ ...inputValues, warningmsg: resp.message, error_list: [] })
                } else {
                    setLogin({ ...inputValues, error_list: resp.errors, warningmsg: '' })
                }
            }
        )
    }
    return (
        <div className='p-2'>
            <strong className='m-2'>Admin Login</strong>
            <form onSubmit={handleLogin}>
                <div className="row">
                    <div className="mx-auto col-10 col-md-8 col-lg-6">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" name="email" onChange={handleInput} placeholder="name@example.com" />
                            <label >Email address</label>
                            <span className="text-danger">{inputValues.error_list.email}</span>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" name="password" onChange={handleInput} placeholder="Password" />
                            <label>Password</label>
                            <span className="text-danger">{inputValues.error_list.password}</span>
                        </div>
                        <p className="text-danger">{inputValues.warningmsg}</p>
                        <button type="submit" className="btn btn-primary mt-2 float-end">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
