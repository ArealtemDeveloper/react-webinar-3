import React, { memo } from "react";
import 'style.css'
import { cn as bem } from "@bem-react/classname";
import useTranslate from "../../hooks/use-translate";

function UserProfile(props) {

    const cn = bem('UserProfile')
    const {t} = useTranslate()


    return (
            <div className={cn()}>
              <h2>{t('profile')}</h2>
              <div className={cn('name')}>
                <span>{t('name')} <b>{props.user?.profile.name}</b></span>
              </div>
              <div className={cn('phone')}>
                <span>{t('phone')} <b>{props.user?.profile.phone}</b></span>
              </div>
              <div className={cn('email')}>
                <span>Email: <b>{props.user?.email}</b></span>
              </div>
            </div>
    )
}

export default memo(UserProfile);