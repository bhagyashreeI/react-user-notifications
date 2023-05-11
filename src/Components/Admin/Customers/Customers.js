import React from 'react';
import { Link, Router, Route, Routes } from 'react-router-dom';
import CustomerNotification from '../CustomerNotification/CustomerNotification';
import { useSelector } from 'react-redux';

export default function Customers(){
    
    return (
        <div>
            <strong className='mt-2'>Customer List</strong>
            

            <table className="table m-4 table-bordered table-responsive">
                <thead>
                    <tr className='table-seconary'>
                        
                        <th scope='col'></th>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Notification Count</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <th scope='col'><input type='checkbox' /></th>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><Link to="/admin/customer/2/notifications">2</Link></td>
                    </tr>
                    <tr>
                        <th colSpan={5} className='mr-3'>
                            <button type="button" className="btn btn-info  ml-3">Send Notification</button>
                        </th>
                    </tr>
                    
                    
                </tbody>
            </table>
            <div className='p-3'>
                <button type="button" className="btn btn-info float-end ml-3">View All Notification</button>
            </div>
        </div>
        
    )
}