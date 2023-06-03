import React, { memo, useState } from "react";
import 'style.css'
import { cn as bem, cn } from "@bem-react/classname";
import { useNavigate } from "react-router-dom";

function LoginForm(props) {

    const cn = bem('LoginForm');
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault();
        props.signIn({login, password})
        navigate('/profile')
        setLogin('')
        setPassword('')
    }
    
    return (
        <div className={cn()}>
                <h2>{props.title}</h2>
                <form onSubmit={onSubmit}>
                    <div className={cn('login')}>
                        <label htmlFor="name">Логин</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            required
                        />
                    </div>
                    <div className={cn('password')}>
                        <label htmlFor="password">Пароль</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Войти</button>
                </form>
            </div>

    )
}

export default memo(LoginForm);