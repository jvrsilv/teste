import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import logoImg from '../../assets/Logo.png';
import userImg from '../../assets/User.png';


import './styles.css';
import Sidebar from '../Sidebar';

const Header = (props) => {

    return (
        <>
        <header id="header-container">
            <div className="header-logo">
                <FaBars size={40} onClick={props.setVisibleSidebar} />
                <img src={logoImg} alt="logo" />
            </div>

            <div className="header-content">
                <div className="infoUser">
                    <strong>Kevin Pagliuca</strong>
                    <p>kevin.pagliuca@imbecor.com</p>
                    <p>Estagiário de TI</p>
                </div>

                <div className="imgUser">
                    <img src={userImg} alt="imgUser" />
                </div>
            </div>
            {/* {props.sidebarVisible === true ? <Sidedrawer fechar={props.setVisibleSidebar} click={props.sidebarVisible} /> : null} */}
        </header>
        <Sidebar />
        </>
    );
}

export default Header;