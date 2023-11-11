import './App.css'
// import css from '../../Styles/Local/formShow.css'
import FormShow from '../View/Local/FormShow'

// const { FormShowContainer, Cell, FormShowContLine } = css


function StatPag(props) {

  const { showDataStat } = props

  // const [dataShow, setDataShow] = useState([])


  return (
    <>
      <div className="MainDiv">
        страница статистики

        <FormShow dataShow={showDataStat} />

      </div>
    </>
  )
}

export default StatPag