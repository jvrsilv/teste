import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { FaAngleDown, FaTimes } from 'react-icons/fa';

import logoImg from '../../assets/Logo.png';
import Backdrop from '../Backdrop';

import './styles.css';

const Sidebar = (props) => {    
    return (
        <>
            <Backdrop />
            <div id="sidebar">
                <FaTimes size={30} color="#F31212" onClick={props.fechar} />
                <div className="logoImg">
                    <img src={logoImg} alt="logo" />

                </div>

                <div className="sidebar-menu">

                </div>
            </div>
        </>
    );
}

export default Sidebar;