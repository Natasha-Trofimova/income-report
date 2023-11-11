import './App.css'
import Form from '../View/Local/Form'


function MainPag(props) {

  const { action } = props

  return (
    <>
      <div className="MainDiv">
        Главная страница
        <Form firstAction={action} />
      </div>
    </>
  )
}

export default MainPag