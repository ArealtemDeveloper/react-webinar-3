import React, {memo} from "react";
import LogoutBtn from "../logout-btn";
import LoginBtn from "../login-btn";
import { cn as bem } from "@bem-react/classname";
import 'style.css'
import { Link } from "react-router-dom";

function Auth({user, isAuth, signOut}) {

    const cn = bem('Auth-header')

    return (
        <div className={cn()}>
            {
            user && isAuth
            ? 
            <span className={cn('logged')}>
                <Link className={cn('username')} to={'/profile'}>{user.profile.name}</Link>
                <LogoutBtn title={'Выход'} signOut={signOut}/> 
            </span>
            : 
            <LoginBtn title={'Вход'}/>
            }
        </div>
    )
}

export default memo(Auth);