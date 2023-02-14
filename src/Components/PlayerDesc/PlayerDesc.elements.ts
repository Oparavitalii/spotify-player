import styled from "styled-components";

export const DescItem = styled.div`
display: grid;
grid-template-columns: 1fr 3fr;
grid-template-rows: 1fr 1fr;
align-items:center;
column-gap:10px;
`;
export const DescImg = styled.img`
width:50px;
height:50px;
grid-column:1/2;
grid-row:1/3;
border-radius:50%;
`;
export const DescArtist = styled.h4`
margin-bottom:0px;
margin-top: 0;
color:white;
font-size: 18px;
line-height:20px;

`;
export const DescSong = styled.p`
margin-top: 0;
margin-bottom: 0;
color:yellow;
font-size: 14px;
line-height:16px;
`;
