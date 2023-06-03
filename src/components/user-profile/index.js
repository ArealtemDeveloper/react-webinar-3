import React, { memo } from "react";
import 'style.css'
import { cn as bem } from "@bem-react/classname";

function UserProfile(props) {

    const cn = bem('UserProfile')

    return (
            <div className={cn()}>
              <h2>Профиль</h2>
              <div className={cn('name')}>
                <span>Имя: <b>{props.user?.profile.name}</b></span>
              </div>
              <div className={cn('phone')}>
                <span>Телефон: <b>{props.user?.profile.phone}</b></span>
              </div>
              <div className={cn('email')}>
                <span>Email: <b>{props.user?.email}</b></span>
              </div>
            </div>
    )
}

export default memo(UserProfile);