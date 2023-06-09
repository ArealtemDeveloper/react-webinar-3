import {memo} from "react";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import './style.css';

function CommentList({commentsList, toRender}) {
  const cn = bem('CommentList');

  return (
    <>
        <div className={cn()}>
            {
            commentsList.map( comment => 
                <div key={comment.id}>
                    {toRender(comment)}
                </div>
              )
            }
        </div>
    </>
  );
}


export default memo(CommentList);