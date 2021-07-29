import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const UpdatePresenter=({
    title,
    content,
    TitleChange,
    ContentChange,
    btnClick,
    originTitle,
    originContent
})=>(
    <>
    {console.log(title)}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <input value={title} onChange={TitleChange} type="text" name="usertitle" />
    <input value={content} onChange={ContentChange} type="text" name="usercontent" />
    <button onClick={btnClick}>submit</button>
    Update
    </>
);

UpdatePresenter.propTypes={
    title:PropTypes.string,
    content:PropTypes.string,
    TitleChange:PropTypes.func.isRequired,
    ContentChange:PropTypes.func.isRequired,
    btnClick:PropTypes.func.isRequired,
    originTitle:PropTypes.string,
    originContent:PropTypes.string
}

export default UpdatePresenter;
