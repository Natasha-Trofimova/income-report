import styled from "styled-components"

const css = {
  FormShowContainer: styled.div`
  margin-top: 8px;
  opacity: 0.7;
  display: flex;
  position: relative;
  height: auto;
  min-height: 50px;
  min-width: 46%;
  background-color: #F9F871;
  color: black;
  border-radius: 6px;
  box-show: 0px 0px 3px grey;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7px;
`,
Cell:  styled.span`
margin: 2px;
padding: 7px;
border: 2px solid black;
`,

FormShowContLine: styled.div`
flexDirection: row;
min-height: 57px;
padding: 0;
margin: 6px;
background-color: #00C9A4;
opacity: 0.7;
display: flex;
position: relative;
height: auto;
min-width: 20%;
color: black;
border-radius: 6px;
box-show: 0px 0px 3px grey;
justify-content: center;
align-items: center;
`
}

export default css