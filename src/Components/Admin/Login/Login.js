import React, { useEffect, useState } from 'react';

export default function Login() {
    return (
        <div className='p-2'>
            <strong className='m-2'>Admin Login</strong>
            <form>
                <div className="row">
                    <div className="mx-auto col-10 col-md-8 col-lg-6">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label >Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label>Password</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2 float-end">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
