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
