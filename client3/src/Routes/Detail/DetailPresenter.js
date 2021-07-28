import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ReReplyBox = styled.div`
    display:${props=>props.current ? "block":"none"};
`;

const ReplyInput = styled.input`
    display:${props=>props.current ? "block":"none"};
`;

const ReplyWriter = styled.div`
`;

const ReplyContent = styled.div`
`;

const ReplyButton = styled.button`
    display:${props=>props.current ? "block":"none"};
`;

const RereplyDiv = styled.div`
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
        <br/><br/>
        <div>
            {/* {nowreply.map((rep, index)=>(
                <>
                {(rep.parent_id==null) ? (
                <>
                <br/>
                <div>작성자 {rep.nickname}</div>
                <div>내용 {rep.content}</div>
                <button onClick={showRereply} value={rep.comment_id}>답글 여닫기</button>
                <ReReplyBox current={rep.comment_id==replyParent}>
                {nowreply.map((rere)=>{
                    if(rere.parent_id==rep.comment_id){
                        return(
                            <>
                            <div>{rere.nickname}</div>
                            <div>{rere.content}</div>
                            <button onClick={btnReplyDelete} value={rere.comment_id}>삭제</button>
                            </>
                        )
                    }else{
                        return(
                            <>
                            </>
                        )
                    }
                })}
                <br/>
                <input onChange={reReplyChange} type="text"/>
                <button onClick={submitRereply}>답글 입력</button>
                </ReReplyBox>
                <button onClick={btnReplyDelete} value={rep.comment_id}>삭제</button>
                <br/>
                <br/>
                </>
                ):(
                    <>
                    </>
                )}
                </>
            ))} */}
            {nowreply.map((reply)=>(
                <>
                {(reply.parent_id==null) ? (
                    <>
                    <div>작성자 {reply.nickname}</div>
                    <div>내용 {reply.content}
                    <button value={reply.comment_id} onClick={showRereply}>답글 보기</button></div>
                    &nbsp;&nbsp;&nbsp;&nbsp;<div>
                    <ReplyInput onChange={reReplyChange} current={reply.comment_id==replyParent} type="text"/>
                    <ReplyButton onClick={submitRereply} current={reply.comment_id==replyParent}>작성</ReplyButton>
                    </div>
                    <br/>
                    </>
                ):(
                    <>
                    <RereplyDiv current={reply.parent_id==replyParent}>
                    <ReplyWriter>&nbsp;&nbsp;&nbsp;&nbsp;작성자 {reply.nickname}</ReplyWriter>
                    <ReplyContent>&nbsp;&nbsp;&nbsp;&nbsp;내용 {reply.content}</ReplyContent>
                    <br/>
                    </RereplyDiv>
                    </>
                )}
                </>
            ))}
            {console.log(nowreply)}
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
