import styled from "styled-components";



export const ListItem = styled.div`
color: white;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin-bottom: 15px;
width: 22%;
&:hover{
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    width: 30%;
} 
  @media (max-width: 768px) {
    width: 44%;
} 
`

export const ListArtist = styled.h2`
font-size:22px;
line-height: 24px;
margin: 0px;
padding:0px;
margin-bottom: 5px;
@media (max-width: 768px) {
    font-size: 20px;
    line-height: 22px;
}
  
`
export const ListSong = styled.h3`
font-size:18px;
line-height: 20px;
margin: 0px;
padding:0px;
@media (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
}
`
export const ListImg = styled.div`
margin-bottom: 10px;
width: 150px;
height: 150px;
@media (max-width: 768px) {
    width: 120px;
    height: 120px;
}
`
export const ListImgExample = styled.img`
max-width: 100%;
`