import {memo} from "react";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import dateFormat from "../../utils/date-format";
import './style.css';
import CommentAnswer from "../comment-answer";


function CommentItem({comment, onCancel, exists, addComment, onAnswer, username, lastChild}) {
  const cn = bem('CommentItem');
  const date = dateFormat(comment.date)
  const margin = Math.min(comment.level, 4) * 30 
  const marginAnswer = comment.level > 1 ? Math.min(lastChild) * 20 : 0
  const isAnswer = lastChild === comment.id

  return (
    <div className={cn()} style={{marginLeft: `${margin}px`}}>
        <div className={cn('header')}>
            <span className={comment.author === username ? cn('authorlog') : cn('author') }>
              {comment.author}
            </span>
            <span className={cn('date')}>{date}</span>
        </div>
        <div className={cn('text')}>{comment.text}</div>
        <button className={cn('btn')} onClick={() => onAnswer(comment.id)}>Ответить</button>
        <div style={{marginLeft: `${marginAnswer}px`}}>
          {
          isAnswer && (
            <CommentAnswer
            id={comment.id}
            isAuth={exists}
            addComment={addComment}
            onCancel={onCancel}
            margin={margin}
            lastChild={lastChild}
            />
          )
        }        
        </div>
    </div>
  );
}

CommentItem.propTypes = {
  comment: PropTypes.object,
  onAnswer: PropTypes.func,
  addComment: PropTypes.func,
  onCancel: PropTypes.func,
  username: PropTypes.string,
  active: PropTypes.string,
  exists: PropTypes.bool,
};

CommentItem.defaultProps = {
  addComment: () => {},
  onAnswer: () => {}
}


export default memo(CommentItem);