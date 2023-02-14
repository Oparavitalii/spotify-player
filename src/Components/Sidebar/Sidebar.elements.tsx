import styled from "styled-components";

export const SideBarEl = styled.aside`
  border-right: 2px solid grey;
  height: 100%;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: 20px;
  padding-top: 20px;
  margin-bottom: 20px;
`;
export const LogoText = styled.div`
  color: yellow;
  font-size: 25px;
  font-weight: bold;
`;
export const LogoImg = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SideForm = styled.form``;
export const SideSearch = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  color: white;
  margin-bottom: 10px;
  text-align: center;
`;
export const SideButton = styled.button`
  border: none;
  padding: 5px 25px;
  border-radius: 10px;
  background-color: yellow;
  color: black;
  &:hover{
    cursor: pointer;
  }
`;

