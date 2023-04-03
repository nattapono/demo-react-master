import React from 'react'

function Sidebar() {
  return (
    <div className="d-flex flex-column align-items-center pt-2 text-white min-vh-100">
        <a href="/" className="d-flex align-items-center px-3 pb-3 mb-md-0 text-white text-decoration-none">
            
            <p className="text-left">
                <span className="fs-5 d-none d-sm-inline" style="color:#A4A6B3;letter-spacing: 1px;">Dashboard <span style="color:#52cab6;">Job</span>EZ</span><br>
                Kittipong Sukkeha
            </p>
        </a>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 d-flex align-items-center align-items-sm-start w-100" id="menu">
            <li className="w-100">
                <a href="#" className="nav-link d-flex align-items-center px-4 active"> <i className="fa fa-pie-chart me-3" aria-hidden="true"></i> ภาพรวม </a>
            </li>
            <li className="w-100">
                <a href="#" className="nav-link d-flex align-items-center px-4 active"> <i className="fa fa-card-personal me-3" aria-hidden="true"></i> โปรไฟล์บริษัทฯ </a>
            </li>
            <li>
                <a href="#" className="nav-link d-flex align-items-center px-4"> <i className="fa fa-users me-3" aria-hidden="true"></i> โปรไฟล์คนหางาน </a>
            </li>
            <li>
                <a href="#" className="nav-link d-flex align-items-center px-4"> <i className="fa fa-user-o me-3" aria-hidden="true"></i> อนุมัติโอนเงิน </a>
            </li>
            <li>
                <a href="#" className="nav-link d-flex align-items-center px-4"> <i className="fa fa-user-o me-3" aria-hidden="true"></i> อนุมัติถอนเงิน </a>
            </li>
            <li>
                <a href="#" className="nav-link d-flex align-items-center px-4"> <i className="fa fa-book me-3" aria-hidden="true"></i> รายงานถอนเงิน </a>
            </li>
            <li className="mt-3">
                <a href="#" className="nav-link d-flex align-items-center px-4 align-middle">
                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-sm-inline">อนุมัติวีดีโอบุคคล</span>
                </a>
            </li>
            <li className="w-100">
                <a href="#" className="nav-link d-flex align-items-center px-4"> อนุมัติวีดีโอสัมภาษณ์ </a>
            </li>
            <li>
                <a href="#" className="nav-link d-flex align-items-center px-4"> อนุมัติวีดีโอบริษัท </a>
            </li>
            <li>
                <a href="#" className="nav-link d-flex align-items-center px-4"> อนุมัติวีดีโอแนะนำบริษัท </a>
            </li>
            <li className="mt-3">
                <a href="#" className="nav-link d-flex align-items-center px-4"> ตั้งค่า </a>
            </li>
            <li>
                <a href="#" className="nav-link d-flex align-items-center px-4"> เบอร์ติดต่อด่วน </a>
            </li>
            
        </ul>
        <hr>
        <div className="dropdown pb-4">
            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle">
                <span className="d-none d-sm-inline mx-1">loser</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li>
                    <hr className="dropdown-divider">
                </li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar