import styled from "styled-components"

const css = {
  FormContainer: styled.div`
  margin-top: 8px;
  opacity: 0.7;
  display: flex;
  position: relative;
  height: auto;
  min-height: 146px;
  min-width: 20%;
  background-color: #F9F871;
  color: black;
  border-radius: 6px;
  box-show: 0px 0px 3px grey;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7px;
`,
  InputCss: styled.input`
margin: 5px;
padding: 3px;
color: black;
border-radius: 6px;
background-color: #B9B9B9;
display: block;
position: relative;
width: 234px;
height: 40px;
outline: none;
border: none;
`,
  Button: styled.span`
display: block;
position: relative;
width: 180px;
height: 30px;
cursor: pointer;
border-radius: 6px;
margin: 5px;
margin-bottom: 10px;
padding: 3px;
display: flex;
align-items: center;
justify-content: center;
background-color: ${props => props.backgroundColor};

`
}

export default css
