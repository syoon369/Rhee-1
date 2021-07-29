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
    max-width: 1190px;
    padding: 0 25px;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MyTd = styled.td`
    display:block;
    height:20px;
    text-align:center;
`;

const MyTh = styled.tr`
    display:flex;
    text-align:center;
    margin:0 auto;
`;
const BoardWriteBox = styled.div`
    
`;

const BoardTable = styled.table`
    display:block;
    margin-top:20px;
`;

const MyInput=  styled.input`
    border: 5px solid gray;
    font-size : 28px;
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
                    <MyInput type="text" onChange={termChange} />
                    <select onChange={menuChange} name="menu">
                        <option value="hashtag">해시태그</option>
                        <option value="content">제목+내용</option>
                        <option value="writer">작성자</option>
                    </select>
                    <button onClick={btnSearch}>글 검색하기</button>
                    <br/>
                    <button onClick={btnClick}>글 작성하기</button>
                    <div>
                        <BoardTable>
                            <thead>
                                <MyTh>
                                    <td></td>
                                </MyTh>
                            </thead>
                            <tbody>
                                <tr>
                                    {data.map((content, index) => (
                                        <>
                                            <MyTd key={index * 3 + 1} className={"data_nickname"}>작성자 {content.nickname}</MyTd>
                                            <MyTd key={index * 3 + 2} className={"data_title"}><Link to={`/Rhee/detail/${content.board_id}`}>제목 {content.title}</Link></MyTd>
                                            <MyTd key={index * 3 + 3} className={"data_date"}>일시 {content.date}</MyTd>
                                            <MyTd/>
                                        </>
                                    ))}
                                </tr>
                            </tbody>
                        </BoardTable>
                    </div>
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