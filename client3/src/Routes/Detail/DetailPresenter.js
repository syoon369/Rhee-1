import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DetailPresenter=({title, date,nickname,board_id,content,loading, btnDelete, btnUpdate, isLogined})=>(
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
    loading:PropTypes.bool,
    btnDelete:PropTypes.func.isRequired,
    btnUpdate:PropTypes.func.isRequired,
    isLogined:PropTypes.bool
}

export default DetailPresenter;
