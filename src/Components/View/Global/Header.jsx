import css from "../../../Styles/GlobalCss/Header.css"
import { useNavigate } from "react-router-dom"

const { HeaderContainer, HeaderCSS, ButtonCSS } = css

function Header() {
  const navigate = useNavigate()
  return (
    <>
      <HeaderContainer>
        <HeaderCSS.Logo>
          Finmanager
        </HeaderCSS.Logo>
        <HeaderCSS.MenuContainer>
          <ButtonCSS onClick={() => navigate('/main')} >Главная</ButtonCSS>
          <ButtonCSS onClick={() => navigate('/stat/:расходы')} >Статистика</ButtonCSS>
          <ButtonCSS onClick={() => navigate('/plan')} >Планирование</ButtonCSS>
        </HeaderCSS.MenuContainer>
      </HeaderContainer>
    </>
  )
}
export default Header