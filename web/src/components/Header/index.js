import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import logoImg from '../../assets/Logo.png';
import userImg from '../../assets/User.png';

import Sidebar from '../Sidebar';

import './styles.css';

const Header = (props) => {
    
    return (
        <>
            <header id="header-container">
                <div className="header-logo">
                    <img src={logoImg} alt="logo" />
                    <FaBars size={40} onClick={props.setVisibleSidebar} />
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
            </header>
            {props.sidebarVisible === true ? <Sidebar fechar={props.setVisibleSidebar} /> : null}     

        </>
    );
}

export default Header;