import React, { useState, memo } from "react";
import './style.css'
import { cn as bem } from "@bem-react/classname";
import { Link, useLocation, useParams } from "react-router-dom";

function CommentAnswer({isAuth, addComment, id, onCancel}) {

    const cn = bem('CommentAnswer');
    const [text, setText] = useState('')
    const location = useLocation()
    
    const onChangeText = (e) => {
        const value = e.target.value;
        setText(value)
    }

    const onSubmit = () => {
        const str = text.trim('')
        if(str !== '') {
            addComment(str, id, 'comment')
        }
        setText('')
        onCancel()
    }

    return (
        <div className={cn()}>
            {
                isAuth
                 ?
                <>
                    <h2 className={cn('header')}>Новый ответ</h2>
                    <textarea className={cn('area')} value={text} onChange={onChangeText}/>
                    <div className={cn('buttons')}>
                        <button className={cn('btn')} onClick={onSubmit}>
                            Отправить
                        </button>
                        <button className={cn('btn')} onClick={onCancel}>
                            Отмена
                        </button>
                    </div>
                </>
                :
                <span className={cn('need')}>
                    <Link to={'/login'} className={cn('need-link')} state={{back: location.pathname}}>
                        Войдите
                    </Link>
                    <p>,чтобы иметь возможность комментировать</p>
                </span>
            }
        </div>
    )
}

export default memo(CommentAnswer)