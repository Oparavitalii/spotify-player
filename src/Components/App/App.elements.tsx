import styled from "styled-components";

export const Container = styled.div`
  max-width: 1170px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: 0 auto;
  text-align: center;
  min-height: 100vh;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

`
export const AppEl = styled.div`
 background-color: #252525;
 font-size: 18px;
 line-height:20px;
 font-weight: 500px;
 overflow: hidden;
 padding: 0;


`
