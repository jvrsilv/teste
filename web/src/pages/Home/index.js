import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logoImg from '../../assets/Logo.png';

import './styles.css';

function Home() {
    const [eye, setEye] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function attIcon(e) {
        e.preventDefault();
        if (eye === 0) {
            setEye(1);
            if (password !== '') {
                document.getElementById('password').setAttribute('type', 'text');
            }
        } else if (eye === 1) {
            setEye(0);
            document.getElementById('password').setAttribute('type', 'password');
        }
    }

    return (
        <div id="page-home">
            <div className="slogan">
                <div>
                    <img src={logoImg} width={350} height={100} alt="logo" />
                    <h1>Helpdesk System</h1>
                    <p> O sistema perfeito para você controlar<br />
                        e analisar seus chamados de<br />
                        forma estravagante!
                    </p>
                </div>
            </div>
            <div className="home-container">
                <form>
                    <h2 className="Text">Fazer login <br /></h2>
                    <div className="container-form">
                        <div className="input-block">
                            <div>
                                <label htmlFor="e-mail" className={email !== '' ? "label-active" : ""}>E-mail</label>
                                <input
                                    id="e-mail"
                                    type="text"
                                    className={email !== '' ? "active" : ""}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <div className="border-input" />
                            </div>

                            <div>
                                <label htmlFor="password" className={password !== '' ? "label-active" : ""}>Senha</label>
                                <input
                                    autoComplete="off"
                                    id="password"
                                    className={password !== '' ? "active" : ""}
                                    type="password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <div className="border-input" />
                                {eye !== 0 && password !== ''
                                    ?
                                    <FaEye
                                        className="icon-eye"
                                        size={24}
                                        color="#9C98A6"
                                        onClick={attIcon}
                                        style={password !== '' ? { cursor: 'pointer' } : { cursor: 'not-allowed' }}
                                    />
                                    :
                                    <FaEyeSlash
                                        className="icon-eye"
                                        size={24}
                                        color="#F31212"
                                        onClick={attIcon}
                                        style={password !== '' ? { cursor: 'pointer' } : { cursor: 'not-allowed' }}
                                    />
                                }
                            </div>
                        </div>

                        <div className="options">
                            <label className="checkbox-content">Lembrar-me
                                <input type="checkbox" />
                                <span className="checkmark" />
                            </label>

                            <p>Esqueci minha senha</p>
                        </div>

                        <div className="btnEntrar">
                            <button type="submit">Entrar</button>
                        </div>
                    </div>
                </form>
                <div className="sign-up">
                    <p>Não tenho conta? <br />
                        <strong><Link to="/register">Cadastre-se</Link></strong>
                    </p>

                    <p>É de graça!</p>
                </div>
            </div>
        </div>
    );
}
export default Home;