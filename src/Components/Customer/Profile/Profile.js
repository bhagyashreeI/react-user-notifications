import React, { useEffect, useState } from 'react';
import { EnvelopeCheckFill, Phone, PhoneLandscape } from 'react-bootstrap-icons';

import { APIURL } from './../../../constants/global';
//import { ArrowRight } from 'react-bootstrap-icons';
import { getUserData,setUserData } from '../../../features/Auth/userSlice';
import { useDispatch, useSelector } from 'react-redux';
export default function Profile() {
    const [profiledata, setProfiledata] = useState();
    const authDetail = useSelector((c) => c.customer);

    const getUserData = () => {
        fetch(APIURL + "/user", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${authDetail.token}` }
        }).then(
            async res => {
                const resp = await res.json();
                setProfiledata(resp);
            }
        )
    }
    useEffect(() => {
        getUserData();
    }, [])
    return (
        <div className="card m-3 mx-auto" style={{ 'width': '50%' }}>
            <img src="img_avatar.png" alt="Avatar" />
            {profiledata &&
                <div className="container">
                    <h4><b>{profiledata.name}</b></h4>
                    <p><EnvelopeCheckFill color="royalblue" size={26} /> {profiledata.email}</p>
                    <p><Phone color="royalblue" size={26} />Phone: </p>
                </div>
            }
        </div>
    )
}