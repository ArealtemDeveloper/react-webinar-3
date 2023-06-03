import React, { memo } from "react";
import 'style.css'
import { cn as bem } from "@bem-react/classname";

function LogoutBtn(props) {
    const cn = bem('LogoutBtn')

    return (
        <div className={cn()}>
            <button className={cn('logout')} onClick={props.signOut}>{props.title}</button>
        </div>
    )
}

export default memo(LogoutBtn)