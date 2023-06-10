import {memo} from "react";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import dateFormat from "../../utils/date-format";
import './style.css';
import CommentAnswer from "../comment-answer";

function CommentItem({comment, onCancel, active, exists, addComment, onAnswer}) {
  const cn = bem('CommentItem');
  const date = dateFormat(comment.date)
  const margin = Math.min(comment.level, 4) * 30 
  const isAnswer = active === comment.id

  return (
    <div className={cn()} style={{marginLeft: `${margin}px`}}>
        <div className={cn('header')}>
            <span className={cn('author')}>{comment.author}</span>
            <span className={cn('date')}>{date}</span>
        </div>
        <div className={cn('text')}>{comment.text}</div>
        <button className={cn('btn')} onClick={() => onAnswer(comment.id)}>Ответить</button>
        {
          isAnswer && (
            <CommentAnswer
            id={comment.id}
            isAuth={exists}
            addComment={addComment}
            onCancel={onCancel}
            />
          )
        }
    </div>
  );
}


export default memo(CommentItem);