import css from "../../../Styles/GlobalCss/Header.css"

const { HeaderContainer, HeaderCSS } = css
// деконструирование объекта чтобы вызвать нужные нам
// стили

const buttonCSS = {
  marginRight: '10px',
  display: 'block',
  padding: '8px',
  borderRadius: '6px',
  backgroundColor: '#F9F871',
  cursor: 'pointer',
  opacity: '0.7',
  color: 'black'
}

function Header(props) {

  const { actions } = props

  return (
    <>
      <HeaderContainer>

        <HeaderCSS.Logo>
          Finmanager
        </HeaderCSS.Logo>
        <HeaderCSS.MenuContainer>
          <button onClick={() => actions('main')} style={buttonCSS}>Главная</button>
          <button onClick={() => actions('stat')} style={buttonCSS}>Статистика</button>
          <button style={buttonCSS}>Планирование</button>
        </HeaderCSS.MenuContainer>

      </HeaderContainer>
    </>
  )
}

export default Header