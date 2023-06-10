import React, { memo, useMemo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector as useSelectorRedux } from "react-redux";
import CommentList from "../../components/comment-list";
import useSelector from "../../hooks/use-selector";
import treeToList from "../../utils/tree-to-list";
import listToTree from "../../utils/list-to-tree";
import useInit from "../../hooks/use-init";
import Spinner from "../../components/spinner";
import CommentsLayout from "../../components/comments-layout";
import CommentItem from "../../components/comment-item";
import commentsActions from '../../store-redux/comments/actions';
import commentSendActions from '../../store-redux/send-comment/actions';
import CommentAdd from "../../components/comment-add";


function CommentsList() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ active , setActive ] = useState('')

    const select = useSelector(state => ({
        exists: state.session.exists,
        waiting: state.session.waiting,
        username: state.session.profile?.username
    }))

    const selectRedux = useSelectorRedux( state => ({
        comments: state.comments.data,
        commentsError: state.comments.error,
        newComment: state.commentSend.data,
        commentsSendWaiting: state.commentSend.waiting,
    }))

    const callbacks = {
        addComment: useCallback((text, id , type) => dispatch(commentSendActions.sendComment(text, id, type)),[]),
        onAnswer: useCallback((id) => {
            setActive(id)
          }, []),
      
          onCancel: useCallback(() => {
            setActive('')
          }, []),
    }

    useInit(() => {
        dispatch(commentsActions.loadComments(id))
      }, [select.exists, selectRedux.newComment]);

    const comments = useMemo(() => 
    treeToList(listToTree(selectRedux.comments), (item, level) => (
        {
            id: item._id,
            level,
            text: item.text,
            author: item.author.profile.name,
            date: item.dateCreate
        }
    )), [selectRedux.comments, active])

    const renders = {
        item: useCallback( comment => (
            <CommentItem
                comment={comment}
                exists={select.exists}
                username={select.username}
                active={active}
                onAnswer={callbacks.onAnswer}
                onCancel={callbacks.onCancel}
                addComment={callbacks.addComment}
            />
        ), [comments])
    }

    return (
        <Spinner active={select.waiting}>
            <CommentsLayout length={comments.length}>
                <CommentList commentsList={comments} toRender={renders.item}/>
                {
                    active === ''
                    ?
                    <CommentAdd 
                    isAuth={select.exists}
                    addComment={callbacks.addComment}
                    />
                    :
                    <></>
                }
            </CommentsLayout>
        </Spinner>
    )
}

export default memo(CommentsList);