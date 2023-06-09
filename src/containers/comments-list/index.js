import React, { useState, memo, useMemo, useCallback } from "react";
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


function CommentsList() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const select = useSelector(state => ({
        exists: state.session.exists,
        waiting: state.session.waiting,
        username: state.session.profile?.username
    }))

    const selectRedux = useSelectorRedux( state => ({
        comments: state.comments.data,
        commentsError: state.comments.error,
        commentsSendWaiting: state.commentSend.waiting,
    }))

    useInit(() => {
        dispatch(commentsActions.loadComments(id))
      }, [select.exists]);

    const comments = useMemo(() => 
    treeToList(listToTree(selectRedux.comments), (item, level) => (
        {
            id: item._id,
            level,
            text: item.text,
            author: item.author.profile.name,
            date: item.dateCreate
        }
    )), [selectRedux.comments])

    const renders = {
        item: useCallback( comment => (
            <CommentItem
                comment={comment}
                exists={select.exists}
                username={select.username}
            />
        ), [comments])
    }



    return (
        <Spinner active={select.waiting}>
            <CommentsLayout length={comments.length}>
                <CommentList commentsList={comments} toRender={renders.item}/>
            </CommentsLayout>
        </Spinner>
    )
}

export default memo(CommentsList);