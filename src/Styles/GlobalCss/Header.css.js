import styled from "styled-components"

const css = {
  HeaderContainer: styled.header`
  width: 100vw;
  height: 12vh;
  background-color: #817497;
  display: flex;
  flex-direction: row;
  algin-items: center;
  justify-content: space-between;
  position: relative;
  align-items: center;
  `,


  HeaderCSS: {
    Logo: styled.div`
    padding: 8px;
    font-size: 26px;
    color: #F9F871;
    `,
    MenuContainer: styled.footer`
    height: 49px;
    padding: 8px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: relative;
    `
  }

}
export default css