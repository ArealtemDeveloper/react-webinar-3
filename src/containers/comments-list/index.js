import React, { useState, memo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector as useSelectorRedux } from "react-redux";
import CommentList from "../../components/comment-list";
import useSelector from "../../hooks/use-selector";
import useInit from "../../hooks/use-init";


function CommentsList() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const select = useSelector(state => ({
        session: state.session.exists
    }))
    const selectRedux = useSelectorRedux( state => ({
        comments: state.comments.data
    }))

    return (
        <CommentList commentsList={selectRedux.comments}/>
    )
}

export default memo(CommentsList);