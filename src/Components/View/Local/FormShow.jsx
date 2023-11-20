// import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import css from '../../../Styles/Local/formShow.css'

const { FormShowContainer, Cell, FormShowContLine, MenuContainer, ButtonShow } = css

function FormShow(props) {

  const { dataShow, setShowD, viewType } = props
  const navigate = useNavigate()
  // const [typeData, setTypeData] = useState('расход')

  // const filterDataShow = dataShow.filter(item => item.split('::')[1] === typeData)
  const filterDataShow = dataShow.filter(item => item.split('::')[1] === viewType)

  const redTypeD1 = () => {
    // setTypeData('доход')
    setShowD(false)
    navigate('/stat/доход')
  }
  const redTypeD2 = () => {
    // setTypeData('расход')
    setShowD(true)
    navigate('/stat/расходы')
  }
  const redTypeD3 = () => {
    // setTypeData('общее')
    setShowD(false)
    navigate('/stat/общее')
  }

  // const sumFD = dataShow.filter(item => item.split('::')[1] === typeData)
  const sumFD = dataShow.filter(item => item.split('::')[1] === viewType)
    .reduce((summ, item) => {

      return summ = summ + (+(item.split('::')[0]))
    }, 0)

  const allFD =
    dataShow
      .reduce((summ, item) => {
        if (item.split('::')[1] === 'доход') {
          return summ = summ + (+(item.split('::')[0]))
        }
        else {
          return summ = summ - (+(item.split('::')[0]))
        }
      }, 0)

  return (
    <>
      <FormShowContainer>

        <MenuContainer style={{ width: "90%" }}>
          <ButtonShow onClick={redTypeD1}>Доход</ButtonShow>
          <ButtonShow onClick={redTypeD2}>Расход</ButtonShow>
          <ButtonShow onClick={redTypeD3}>Общее</ButtonShow>
        </MenuContainer>

        <>
          {
            filterDataShow.length > 0 &&
            <>
              {filterDataShow.map((item, index) => {
                return (
                  <FormShowContLine key={index}>
                    <Cell>{item.split('::')[0]}</Cell>
                    <Cell>{item.split('::')[1]}</Cell>
                    <Cell>{item.split('::')[2]}</Cell>
                  </FormShowContLine>
                )
              })}
              <span>Всего:</span>
              <FormShowContLine >
                <Cell > {sumFD} </Cell>
              </FormShowContLine>
            </>
          }

          {
            filterDataShow.length === 0 &&
            <>
              {dataShow.map((item, index) => {
                return (
                  <FormShowContLine key={index}>
                    <Cell>{item.split('::')[0]}</Cell>
                    <Cell>{item.split('::')[1]}</Cell>
                    <Cell>{item.split('::')[2]}</Cell>
                  </FormShowContLine>
                )
              })}
              <span>Всего:</span>
              <FormShowContLine >
                <Cell> {allFD} рублей</Cell>
              </FormShowContLine>
            </>
          }
        </>
      </FormShowContainer >
    </>
  )
}

export default FormShow