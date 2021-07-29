import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes, { array } from "prop-types";
import styled from "styled-components";
import axios from "axios";
import menu1 from "../../img/menuImg(1).png";

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

/* Board Box */
const BoardBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    /* max-width: 1190px; */
    padding: 0 25px;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 3px solid lightgray;
    border-right: 3px solid lightgray;
`;

const MyTd1 = styled.td`
    width:20%;
    display:block;
    height:20px;
    text-align:center;
`;

const MyTd2 = styled.td`
    width:50%;
    display:block;
    height:20px;
    text-align:center;
`;

const MyTd3 = styled.td`
    width:30%;
    display:block;
    height:20px;
    text-align:center;
`;

const MyTh = styled.tr`
    display:flex;
    text-align:center;
    margin:0 auto;
`;

const MyTrcase = styled.div`
    width:100%;
    display:flex;
`;

const MyThead = styled.thead`
    width:1500px;
`;

const TBody = styled.tbody`
    
`;

const BoardWriteBox = styled.div`
    
`;

const TableBox = styled.div`
    width:100%;
    align-items:center;
`;

const BoardTable = styled.table`
    display:block;
    width:100%;
    margin-top:20px;
`;

const MyInput=  styled.input`
    border: 5px solid gray;
    font-size : 28px;
    border-radius:10px;
`;

const InputBox = styled.div`
    margin: 30px auto;
`;

const MySelect = styled.select`
    margin-left:15px;
    height:25px;
`;

const MyButton = styled.button`
    width:150px;
    height:25px;
    margin: 0 25px;
    border:none;
    border-radius:5px;
    background-color:lightgray;
`;

const ButtonBox = styled.div`
    margin: 0 auto;
`;

const Hr2 = styled.hr`
    height: 3px;
    background-color: white;
    border: 1.5px solid black;
    width:100%;
    border-radius: 25px;
    margin-bottom:20px;
`;

const BoardPresenter = ({
    data,
    title,
    date,
    btnClick,
    termChange,
    menuChange,
    btnSearch,
    loading,
    isLogined,
    nickname,
    searchTerm,
    searchMenu
}) => (
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
        {loading ? (<div>loading...</div>) : (
                <BoardBox>
                    <InputBox>
                    <MyInput type="text" onChange={termChange} />
                    <MySelect onChange={menuChange} name="menu">
                        <option value="hashtag">해시태그</option>
                        <option value="content">제목+내용</option>
                        <option value="writer">작성자</option>
                    </MySelect>
                    </InputBox>
                    <ButtonBox>
                    <MyButton onClick={btnSearch}>글 검색하기</MyButton>
                    <MyButton onClick={btnClick}>글 작성하기</MyButton>
                    </ButtonBox>
                    <TableBox>
                        <BoardTable>
                            <MyThead>
                                <MyTh>
                                    <MyTd1>작성자</MyTd1>
                                    <MyTd2>제목</MyTd2>
                                    <MyTd3>일시</MyTd3>
                                </MyTh>
                            </MyThead>
                            <TBody>
                                <tr>
                                    {data.map((content, index) => (
                                        <>
                                        <MyTrcase>
                                            <MyTd1 key={index * 3 + 1} className={"data_nickname"}> {content.nickname}</MyTd1>
                                            <MyTd2 key={index * 3 + 2} className={"data_title"}><Link to={`/Rhee/detail/${content.board_id}`}>{content.title}</Link></MyTd2>
                                            <MyTd3 key={index * 3 + 3} className={"data_date"}> {content.date.substring(0,10)}</MyTd3>
                                        </MyTrcase>
                                        <Hr2/>
                                        </>
                                    ))}
                                </tr>
                            </TBody>
                        </BoardTable>
                    </TableBox>
                </BoardBox>
            
        )}
    </MainBox>
    </>
);

BoardPresenter.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    date: PropTypes.string,
    btnClick: PropTypes.func.isRequired,
    termChange: PropTypes.func.isRequired,
    menuChange: PropTypes.func.isRequired,
    btnSearch: PropTypes.func.isRequired,
    isLogined: PropTypes.bool,
    nickname: PropTypes.string,
    searchTerm: PropTypes.string,
    searchMenu: PropTypes.string
}

export default BoardPresenter;