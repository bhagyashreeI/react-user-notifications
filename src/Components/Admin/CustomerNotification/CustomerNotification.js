import React from 'react';

export default function CustomerNotification({id}){
    return (
        <div>
            <strong className='mt-2'>Customer Notifications</strong>
            <table className="table m-4 table-bordered table-responsive">
                <thead>
                    <tr className='table-seconary'>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Sent on date</th>
                        <th scope="col">Read/Unread</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Abc</td>
                        <td>Axyx</td>
                        <td>2023/02/09</td>
                        <td>Yes</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}