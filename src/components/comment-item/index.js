import {memo} from "react";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import dateFormat from "../../utils/date-format";
import './style.css';

function CommentItem({comment}) {
  const cn = bem('CommentItem');
  const date = dateFormat(comment.dateCreate)

  return (
    <div className={cn()}>
        <div className={cn(header)}>
            <span className={cn('author')}>{comment.authorName}</span>
            <span className={cn('date')}>{comment.date}</span>
        </div>
        <div className={cn('text')}>{comment.text}</div>
        
    </div>
  );
}


export default memo(CommentItem);