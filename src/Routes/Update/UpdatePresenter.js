import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

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
    <MainBox>
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
    </MainBox>
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
