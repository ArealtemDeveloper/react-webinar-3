import React, { memo } from "react";
import 'style.css'
import {cn as bem} from '@bem-react/classname';
import { Link } from "react-router-dom";


function LoginBtn (props) {

    const cn = bem('LoginBtn')

    return (
        <div className={cn()}>
            <Link className={cn('link')} to={'/login'}>{props.title}</Link>
        </div>
    )
}

export default memo(LoginBtn)