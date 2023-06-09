import React, { useState, memo } from "react";
import './style.css'
import { cn as bem } from "@bem-react/classname";
import { Link, useParams } from "react-router-dom";

function CommentAdd({isAuth, addComment}) {

    const { id } = useParams()
    const cn = bem('CommentAdd');
    const [text, setText] = useState('')
    
    const onChangeText = (e) => {
        const value = e.target.value;
        setText(value)
    }

    const onSubmit = () => {
        const str = text.trim('')
        str !== '' ? addComment(str, id , 'article') : '';
        setText('')
    }


    return (
        <div className={cn()}>
            {
                isAuth
                 ?
                <>
                    <h2 className={cn('header')}>Новый комментарий</h2>
                    <textarea></textarea>
                    <button className={cn('btn')} onClick={onSubmit}>
                        Отправить
                    </button>
                </>
                :
                <span className={cn('need')}>
                    <Link to={'/login'} className={cn('need-link')}>Войдите</Link>
                    <p>,чтобы иметь возможность комментировать</p>
                </span>
            }
        </div>
    )
}

export default memo(CommentAdd)