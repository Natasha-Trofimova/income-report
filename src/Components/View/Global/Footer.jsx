import css from "../../../Styles/GlobalCss/Footer.css"


const {FooterContainer} = css 
// деконструирование объекта чтобы вызвать нужные нам
// стили

function Footer() {

  return (
    <>
    <FooterContainer>
    Footer
    </FooterContainer>
    </>
  )
}

export default Footer