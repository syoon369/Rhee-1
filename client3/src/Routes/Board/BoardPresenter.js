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
    userid,
    usertitle,
    usercontent,
    btnWrite,
    btnClick,
    btnDelete,
    IdChange,
    TitleChange,
    ContentChange,
    loading
}) => (
    <>
        {loading ? (<div>loading...</div>) : (
            <MainBox>
                <BoardBox>
                    <div>
                        <input onChange={IdChange} type="text" name="userid" />
                        <input onChange={TitleChange} type="text" name="usertitle" />
                        <input onChange={ContentChange} type="text" name="usercontent" />
                        <button onClick={btnWrite}>글쓰기</button>
                        <button onClick={btnClick}>submit</button>
                        <button onClick={btnDelete}>delete</button>
                        <table>
                            <thead>
                                <tr>
                                    <td>아이디</td>
                                    <td>제목</td>
                                    <td>내용</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(list => (
                                    <>
                                        <tr class={"data_id"} key={list.id}>{list.id}</tr>
                                        <tr class={"data_title"}>{list.title}</tr>
                                        <tr class={"data_content"}>{list.content}</tr>
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
    userid: PropTypes.string,
    usertitle: PropTypes.string,
    usercontent: PropTypes.string,
    IdChange: PropTypes.func.isRequired,
    TitleChange: PropTypes.func.isRequired,
    ContentChange: PropTypes.func.isRequired,
    btnWrite: PropTypes.func.isRequired,
    btnClick: PropTypes.func.isRequired,
    btnDelete: PropTypes.func.isRequired
}

export default BoardPresenter;