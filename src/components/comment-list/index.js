import {memo} from "react";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import './style.css';
import CommentItem from "../comment-item";

function CommentList({commentsList}) {
  const cn = bem('CommentList');

  return (
    <>
        <div className={cn()}>
            <span className={cn('title')}>Коментарии ({commentsList.length})</span>
            {commentsList.map ( comment => (
                <CommentItem comment={comment} key={comment._id}/>
            ))}
        </div>
    </>
  );
}


export default memo(CommentList);