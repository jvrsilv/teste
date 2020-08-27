import React, { useState } from 'react';

import './styles.css';

import Header from '../../components/Header';

const Myaccount = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    function handleSetSidebarVisible(e) {
        e.preventDefault();
        if (sidebarVisible === true) {
            setSidebarVisible(false);
        } else {
            setSidebarVisible(true);
        }
    }

    return (
        <div id="page-myaccount">
            <Header setVisibleSidebar={handleSetSidebarVisible} sidebarVisible={sidebarVisible} />
        </div>
    );
}

export default Myaccount;