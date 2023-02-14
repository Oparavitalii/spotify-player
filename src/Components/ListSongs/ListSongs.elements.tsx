import styled from "styled-components";

export const ListSongsEl = styled.div`
`;
export const Top = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  padding-bottom: 10px;
  margin-bottom:10px;
`;

export const Header = styled.h1`
  color: white;
  text-align: left;
  padding-left: 10px;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 28px;
}
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  flex-flow: row wrap;
  margin-bottom: 100px;
  @media (max-width: 768px) {
   margin-bottom:70px;
}
`;
