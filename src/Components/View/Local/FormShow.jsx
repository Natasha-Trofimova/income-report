import { useEffect } from 'react'
import css from '../../../Styles/Local/formShow.css'


const { FormShowContainer, Cell, FormShowContLine } = css


function FormShow(props) {

  const { dataShow } = props

  useEffect(() => {
    console.log(dataShow)
  }, [])

  return (
    <>
      <FormShowContainer>

        <FormShowContLine>
          <Cell>Сумма</Cell>
          <Cell>Тип</Cell>
          <Cell>Комментарий</Cell>
        </FormShowContLine>

        {dataShow.map((item, index) => {
          return (
            <FormShowContLine key={index}>
              <Cell>{item.split('::')[0]}</Cell>
              <Cell>{item.split('::')[1]}</Cell>
              <Cell>{item.split('::')[2]}</Cell>
            </FormShowContLine>
          )
        })}

      </FormShowContainer>
    </>
  )
}

export default FormShow