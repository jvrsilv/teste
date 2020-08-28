import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
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

            {/* <div className="menu-navigation">
                <div className="border-div" />
                <div className="border-div-top" />

                <div className="navigation-container">
                    <div className="navigation-item">
                        <label>Abrir chamado</label>
                        <FaPlus />
                    </div>

                    <div className="navigation-item">
                        <label>Chamados em aberto</label>
                        <FaPlus />
                    </div>

                    <div className="navigation-item">
                        <label>Chamados concluídos</label>
                        <FaPlus />
                    </div>

                    <div className="navigation-item">
                        <label>Dúvidas</label>
                        <FaPlus />
                    </div>

                    <div className="navigation-item">
                        <label>Sugestões</label>
                        <FaPlus />
                    </div>

                    <div className="navigation-item">
                        <label>Fale conosco</label>
                        <FaPlus />
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Myaccount;