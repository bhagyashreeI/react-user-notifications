import React from "react";
import greenlogo from '../../../assets/icons/greenuser.png'


import * as Icon from 'react-bootstrap-icons';
export default function Menubar(props) {
  return (
<nav className="navbar navbar-expand-lg bg-success navbar-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={greenlogo}
            width="30"
            height="30"
            alt=""
          />
        </a>
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"  aria-label="Toggle navigation"
        aria-controls="navbarSupportedContent" aria-expanded="false" data-mdb-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">User Name</a>
                </li>
            </ul>
            <ul className="navbar-nav d-flex flex-row me-1">
                <li className="nav-item me-3 me-lg-0">
              <a className="nav-link text-white" href="#"><Icon.BellFill /></a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  );
}
