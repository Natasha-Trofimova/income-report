import styled from "styled-components"

const css = {
  FormShowContainer: styled.div`
  margin-top: 8px;
  margin-left: 10px;
  opacity: 0.7;
  display: flex;
  position: relative;
  height: auto;
  min-height: 50px;
  min-width: 26%;
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
padding: 2px;
min-width: 40px
`,

FormShowContLine: styled.div`
flexDirection: row;
min-height: 29px;
margin: 6px;
opacity: 0.7;
display: flex;
position: relative;
height: auto;
width: 96%;
min-width: 20%;
color: black;
border-radius: 6px;
box-show: 0px 0px 3px grey;
align-items: center;
`,

MenuContainer: styled.footer`
height: 49px;
width: 100%;
padding: 8px;
display: flex;
flex-direction: row;
justify-content: space-around;
position: relative;
`,

ButtonShow : styled.button`
background-color: #B87FA5;
cursor: pointer;
width: 30%;
border-radius: 6px;
min-width: 47px;
`
}
export default css