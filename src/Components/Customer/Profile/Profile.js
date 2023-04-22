import React, { useEffect, useState } from 'react';
import { EnvelopeCheckFill, Phone, PhoneLandscape } from 'react-bootstrap-icons';
import useAuthData from './../../../Services/useAuthData';
import { APIURL } from './../../../constants/global';
//import { ArrowRight } from 'react-bootstrap-icons';

export default function Profile() {
    const { getAuthData } = useAuthData();
    const [profiledata, setProfiledata] = useState();


    const getUserData = () => {
        const authDetail = getAuthData();
        fetch(APIURL + "/user", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${authDetail.utoken}` }
        }).then(
            async res => {
                const resp = await res.json();
                setProfiledata(resp)
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