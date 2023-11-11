import { useState } from 'react'
import css from '../../../Styles/Local/form.css'
import InputComponent from '../../Comps/Input'
// import FormShow from "../Local/FormShow"

// const f2css = {
//   flexDirection: 'row',
//   margin: '8px',
//   minHeight: 'auto'
 
// }
// const s2css = {
//   padding: '7px'
// }

const { FormContainer, Button } = css


function Form(props) {
  const { firstAction } = props

// создаем контекст
// const inputValueContext = createContext()


  const [inputValue, setInputValue] = useState('')
  const [inputType, setInputType] = useState('')
  const [inpComment, setInputComment] = useState('')

  // const [dataShow, setDataShow] = useState([])

  const validation = () => {
    if (inputValue.length > 0 && inputType) {
      console.log('validation proshla')

      //так не стоит делать почему то, потому что это просто строка
      const dataLine = `${inputValue}::${inputType}::${inpComment}`

      firstAction(
        prev => [...prev, dataLine]
      )

      setInputValue('')
      setInputType('')
      setInputComment('')

    } else console.log(' ne proshla')
  }





  return (
    <>
      <FormContainer>


        <InputComponent
          inputValueUpdatable={inputValue}
          action={setInputValue}
          placeholder={"Введите сумму транзакции"} />
        <InputComponent
          inputValueUpdatable={inputType}
          action={setInputType}
          placeholder={"Введите тип транзакции"} />
        <InputComponent
          inputValueUpdatable={inpComment}
          action={setInputComment}
          placeholder={"Введите комментарий"} />
        <Button
          backgroundColor={
            inputValue && inputType ?
              "#95DB7B" :
              "#B9B9B9"
          }
          onClick={validation}
        >
          Сохранить транзакцию
        </Button>
      </FormContainer>

      {/* <FormContainer style={f2css}>
        <span style={s2css}>{inputValue}</span>
        <span style={s2css}>{inputType}</span>
        <span style={s2css}>{inpComment}</span>
      </FormContainer>
      отображение вводимых данных */}

      {/* <FormShow
        dataShow={dataShow}
      /> */}

    </>
  )
}

export default Form