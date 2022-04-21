import stylesC from './Login.module.css';
import SurtoLogo1 from '../../img/SurtoLogo2.png'
import { useState } from 'react';



function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    return (
        <div className={stylesC.container}>
            <div className={stylesC.container_login}>
                <div className={stylesC.wrap_login}>
                    <form className={stylesC.login_form}>
                        <span className={stylesC.login_form_title}>Bem-Vindo</span>
                        <span className={stylesC.login_form_image}><img src={SurtoLogo1} alt="Logo Surto" /> </span>

                        <div className={stylesC.wrap_input}>
                            <input className={stylesC.input} type="email" placeholder="Digite Seu E-mail" value={email} onChange={e => setEmail (e.target.value)} />
                            <span className={stylesC.focus_input} placeholder="Email"></span>
                        </div>

                        <div className={stylesC.wrap_input}>
                            <input className={stylesC.input} type="password" placeholder="Digite sua senha" value={password} onChange={e => setPassword (e.target.value)}/>
                            <span className={stylesC.focus_input} placeholder="Password"></span>
                        </div>

                        <div className={stylesC.container_login_form_btn}>
                            <button className={stylesC.login_form_btn}>Login</button>
                        </div>

                        <div className={stylesC.text_center}>
                            <span className={stylesC.txt1}>Não Possui Conta?</span>
                            <a className={stylesC.txt2} href="#" >Criar Conta</a>
                        </div>












                    </form>

                </div>

            </div>

        </div>
    )
}

export default Login;