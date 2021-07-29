import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const WritingPresenter=({
    title,
    content,
    TitleChange,
    ContentChange,
    btnClick
})=>(
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <input onChange={TitleChange} type="text" name="usertitle" />
    <input onChange={ContentChange} type="text" name="usercontent" />
    <button onClick={btnClick}>submit</button>
    Write
    </>
);

WritingPresenter.propTypes={
    title:PropTypes.string,
    content:PropTypes.string,
    TitleChange:PropTypes.func.isRequired,
    ContentChange:PropTypes.func.isRequired,
    btnClick:PropTypes.func.isRequired
}

export default WritingPresenter;
