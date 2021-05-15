import React from "react";
import styled from "styled-components";
import picto1 from "../../img/picto1.png";
import picto2 from "../../img/picto2.png";
import picto3 from "../../img/picto3.png";
import picto4 from "../../img/picto4.png";

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const VideoBox = styled.div`
    width: 100%;
    height: 250px;
    background-color: #e17055;
`;

const JournalBox = styled.div`
    width: 80%;
    height: 200px;
    display: flex;
    align-items: center;
    background-color: #fab1a0;
`;

const FashionBox = styled.div`
    width: 80%;
    height: 180px;
    display: flex;
    align-items: center;
    background-color: #ffeaa7;
`;

/* Picktogram Box */
const PickBox = styled.div`
    width: 80%;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const PickSenBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const PickEx = styled.p`
    text-align: center;
    font-size: 18px;
    font-weight: bold;
`;

const PickExBottom = styled.p`
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
`;

const PickListBox = styled.div`
    display: flex;
    justify-content: center;
`;

const PickList = styled.div`
    width: 145px;
    margin-right: 40px;
    :last-child{
        margin-right: 0;
    }
`;

const PickImg = styled.img`
    width: 100%;
    background-repeat: no-repeat;
`;

const PickTitle = styled.h3`
    color: black;
    font-weight: bold;
    text-align: center;
`;

const PickCont = styled.p`
    color: gray;
    text-align: center;
`;

export default () => (
    <>
        <MainBox>
            <VideoBox></VideoBox>
            <JournalBox></JournalBox>
            <FashionBox></FashionBox>
            <PickBox>
                <PickSenBox>
                    <PickEx>SUSTAINABLE ETHICAL FASHION PLATFORM</PickEx>
                    <PickExBottom>Against this packaging, sustainability is a major issue to study how humans
                         <br />can solve and protect in harmony with the natural environment surrounding us.</PickExBottom>
                </PickSenBox>
                <PickListBox>
                    <PickList>
                        <PickImg src={picto1} />
                        <PickTitle>Highest Accesibility</PickTitle>
                        <PickCont>Accesibility is good</PickCont>
                    </PickList>
                    <PickList>
                        <PickImg src={picto2} />
                        <PickTitle>Eco blah</PickTitle>
                        <PickCont>blahblah</PickCont>
                    </PickList>
                    <PickList>
                        <PickImg src={picto3} />
                        <PickTitle>Helping eco</PickTitle>
                        <PickCont>Eco is good</PickCont>
                    </PickList>
                    <PickList>
                        <PickImg src={picto4} />
                        <PickTitle>100% Eco packaging</PickTitle>
                        <PickCont>Can Eco Pack</PickCont>
                    </PickList>
                </PickListBox>
            </PickBox>
        </MainBox>
    </>
);