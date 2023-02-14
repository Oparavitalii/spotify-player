import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: 25px;
  font-size: 25px;
  color: #6b7280;
  padding-top: 10px;
  margin-bottom: 10px;

`;
export const RangeWrapper = styled.div`
  margin-bottom: 10px;
  display:flex;
  justify-content:center;
  align-items:center;
  &:hover{
    cursor: pointer;
  }
`;
export const RangeInput = styled.input`
&:hover{
    cursor: pointer;
  }
width: 500px;`;
export const RangeTime = styled.div`
color:yellow;
padding: 0px 10px;`;


export const ButtonContainer = styled.div`
&:hover{
    cursor: pointer;
  }
`