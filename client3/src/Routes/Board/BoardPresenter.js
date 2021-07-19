import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes, { array } from "prop-types";
import styled from "styled-components";
import axios from "axios";

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

const BoardWriteBox = styled.div``;

const BoardTable = styled.table`
    
`;

const BoardPresenter = ({
    data,
    title,
    content,
    btnClick,
    btnDelete,
    TitleChange,
    ContentChange,
    loading,
    isLogined,
    nickname
}) => (
    <>
        {loading ? (<div>loading...</div>) : (
            <MainBox>
                <BoardBox>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                    <div>
                        <input onChange={TitleChange} type="text" name="usertitle" />
                        <input onChange={ContentChange} type="text" name="usercontent" />
                        <button onClick={btnClick}>submit</button>
                        <table>
                            <thead>
                                <tr>
                                    <td>작성자</td>
                                    <td>제목</td>
                                    <td>내용</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(list => (
                                    <>
                                        <tr class={"data_nickname"}>{list.nickname}</tr>
                                        <tr class={"data_title"}>{list.title}</tr>
                                        <tr class={"data_content"}>{list.content}</tr>
                                        <button onClick={btnDelete}>삭제</button>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </BoardBox>
            </MainBox>
        )}
    </>
);

BoardPresenter.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    content: PropTypes.string,
    TitleChange: PropTypes.func.isRequired,
    ContentChange: PropTypes.func.isRequired,
    btnClick: PropTypes.func.isRequired,
    btnDelete: PropTypes.func.isRequired,
    isLogined:PropTypes.bool,
    nickname:PropTypes.string
}

export default BoardPresenter;