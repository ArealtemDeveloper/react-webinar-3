import {memo} from "react";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import './style.css';
import CommentItem from "../comment-item";

function CommentList({commentsList, toRender}) {
  const cn = bem('CommentList');

  return (
    <>
        <div className={cn()}>
            {
            commentsList.map( comment => 
                <div key={comment._id}>
                    {toRender(comment)}
                </div>
              )
            }
        </div>
    </>
  );
}


export default memo(CommentList);