import {memo} from "react";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import dateFormat from "../../utils/date-format";
import './style.css';

function CommentItem({comment, username, exists}) {
  const cn = bem('CommentItem');
  const date = dateFormat(comment.date)
  const margin = Math.min(comment.level, 4) * 30 

  return (
    <div className={cn()} style={{marginLeft: `${margin}px`}}>
        <div className={cn('header')}>
            <span className={cn('author')}>{comment.author}</span>
            <span className={cn('date')}>{date}</span>
        </div>
        <div className={cn('text')}>{comment.text}</div>
        
    </div>
  );
}


export default memo(CommentItem);