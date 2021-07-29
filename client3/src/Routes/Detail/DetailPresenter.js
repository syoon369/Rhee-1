import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import menu1 from "../../img/menuImg(1).png";
import { Link, withRouter } from "react-router-dom";

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

/* Video Box */
const VideoBox = styled.div`
    display: flex;
    width: 100%;
    height: 450px;
`;

const VideoDiv = styled.div`
    width: 100%;
    height: 100%;
`;

const VideoImg = styled.img`
    width: 100%;
    height: 100%;
    z-index: 1;
`;

const Hr = styled.hr`
    height: 3px;
    background-color: white;
    border: none;
`;

const LeftLink = styled(Link)`
    position: absolute;
    left: 0;
    text-align: center;
    line-height: 450px;
    width: 10%;
    z-index: 2;
    color: white;
    font-weight: bold;
    font-size: 50px;
`;

const RightLink = styled(Link)`
    position: absolute;
    right: 0;
    text-align: center;
    line-height: 450px;
    width: 10%;
    z-index: 2;
    color: white;
    font-weight: bold;
    font-size: 50px;
`;

const VideoCon = styled.div`
    position: absolute;
    top: 303px;
    left: 10%;
    width: 80%;
    z-index: 2;
`;

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
    <MainBox>
    <VideoBox>
        <VideoDiv>
            <VideoImg src={menu1} />
            <LeftLink>←</LeftLink>
            <VideoCon>
            <Hr />
            </VideoCon>
            <RightLink>→</RightLink>
        </VideoDiv>
    </VideoBox>
    {loading ? ( 
    <div>loading...</div>
    ):(
        <div>
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
            </div>
        </div>
    )} 
    </MainBox>
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
