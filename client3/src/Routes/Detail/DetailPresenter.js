import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ReReplyBox = styled.div`
    display:${props=>props.current ? "block":"none"};
`;

const DetailPresenter=({title, date,nickname, board_id, content, nowreply, reply, loading, btnDelete, btnUpdate, btnReplyAdd, submitRereply, showRereply, reReplyChange, replyParent, btnReplyDelete, ReplyChange, isLogined})=>(
    <>
    {console.log(loading)}
    {loading ? ( 
    <div>loading...</div>
    ):(
        <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {nickname}<br/>
        {date}<br/>
        {title}<br/>
        {content}<br/>
        <button onClick={btnUpdate}>수정</button>
        <button onClick={btnDelete}>삭제</button>
        <br/>
        <input onChange={ReplyChange} type="text"/>
        <button onClick={btnReplyAdd}>댓글</button>
        
        <div>
            {nowreply.map((rep, index)=>(
                <>
                <br/>
                <div>작성자 {rep.nickname}</div>
                <div>내용 {rep.content}</div>
                <button onClick={showRereply} value={rep.comment_id}>답글 열기</button>
                <ReReplyBox current={rep.comment_id==replyParent}>
                <input onChange={reReplyChange} type="text"/>
                <button onClick={submitRereply}>답글 입력</button>
                </ReReplyBox>
                <button onClick={btnReplyDelete} value={rep.comment_id}>삭제</button>
                <br/>
                <br/>
                </>
            ))}
        </div>
        </div>
    )} 
    </>
);

DetailPresenter.propTypes={
    title:PropTypes.string,
    date: PropTypes.string,
    nickname:PropTypes.string,
    board_id:PropTypes.number,
    content:PropTypes.string,
    nowreply:PropTypes.array,
    reply:PropTypes.string,
    loading:PropTypes.bool,
    btnDelete:PropTypes.func.isRequired,
    btnUpdate:PropTypes.func.isRequired,
    btnReplyAdd:PropTypes.func.isRequired,
    btnReplyDelete:PropTypes.func.isRequired,
    showRereply:PropTypes.func.isRequired,
    ReplyChange:PropTypes.func.isRequired,
    reReplyChange:PropTypes.func.isRequired,
    submitRereply:PropTypes.func.isRequired,
    isLogined:PropTypes.bool,
    replyParent:PropTypes.string
}

export default DetailPresenter;
