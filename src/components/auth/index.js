import React, {memo} from "react";
import LogoutBtn from "../logout-btn";
import LoginBtn from "../login-btn";
import { cn as bem } from "@bem-react/classname";
import 'style.css'

function Auth({user, signIn, signOut}) {

    const cn = bem('Auth-header')

    return (
        <div className={cn()}>
            <span className={cn('username')}>
                {
                user ? user.profile.name : ''
                }
            </span>
            {
            user 
            ? 
            <LogoutBtn title={'Выход'} signOut={signOut}/> 
            : 
            <LoginBtn title={'Вход'}/>
            }
        </div>
    )
}

export default memo(Auth);