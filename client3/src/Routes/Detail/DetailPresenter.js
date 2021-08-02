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

const Loading = styled.p`
    font-size:35px;
    line-height:100px;
`;

const Article = styled.div`
    font-size:20px;
    padding:25px;
    display:flex;
    width:100%;
`;

const Ar1 = styled.div`
    padding:20px;
    width:20%;
    border-right:3px solid lightgray;
`;

const Ar2 = styled.div`
    padding:20px;
    width:50%;
    border-right:3px solid lightgray;
`;

const Ar3 = styled.div`
    padding:20px;
    width:30%;
`;

const Content = styled.div`
    padding:25px;
    font-size:18px;
    text-align: left;
`;

const Button1 = styled.button`
    background-color:white;
    border:none;
    font-size:15px;
    width:50px;
`;

const Button2 = styled.button`
    background-color:white;
    color:red;
    border:none;
    font-size:10px;
    &:hover{
        color:black;
    }
`;

const BtnBox = styled.div`
    display:flex;
    margin-left:75%;
`;

const ReplyMake = styled.div`
    display:flex;
`;

const MyText = styled.textarea`
    width:300px;
    height:100px;
    resize:none;
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
            <LeftLink to={"/Rhee/store"}>←</LeftLink>
            <VideoCon>
            <Hr />
            </VideoCon>
            <RightLink to={"/Rhee/"}>→</RightLink>
        </VideoDiv>
    </VideoBox>
    {loading ? ( 
    <Loading>loading...</Loading>
    ):(
        <>
        <Article>    
        <Ar1>{nickname}</Ar1>
        <Ar2>{title}</Ar2>
        <Ar3>{date.substring(0,10)}</Ar3>
        </Article>
        <Content>{content}</Content>
        <BtnBox>
        <Button1 onClick={btnUpdate}>수정</Button1>
        <Button1 onClick={btnDelete}>삭제</Button1>
        </BtnBox>
        <ReplyMake>
        <MyText onChange={ReplyChange} type="text"/>
        <Button2 onClick={btnReplyAdd}>댓글</Button2>
        </ReplyMake>
        <div>
            {nowreply.map((reply)=>(
                <>
                {(reply.parent_id==null) ? (
                    <>
                    {reply.nickname}
                    {reply.content}
                    <Button2 value={reply.comment_id} onClick={showRereply}>답글</Button2>
                    <div>
                    <ReplyInput onChange={reReplyChange} current={reply.comment_id==replyParent} type="text"/>
                    <ReplyButton onClick={submitRereply} current={reply.comment_id==replyParent}>작성</ReplyButton>
                    </div>
                    </>
                ):(
                    <>
                    <RereplyDiv current={reply.parent_id==replyParent}>
                    <ReplyWriter>{reply.nickname}</ReplyWriter>
                    <ReplyContent>{reply.content}</ReplyContent>
                    </RereplyDiv>
                    </>
                )}
                </>
            ))}
            </div>
        </>
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
