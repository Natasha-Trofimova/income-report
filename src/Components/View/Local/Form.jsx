import { useState } from 'react'
import css from '../../../Styles/Local/form.css'
import InputComponent from '../../Comps/Input'
// import FormShow from "../Local/FormShow"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const { FormContainer, Button, FormCheck, FormCheckLabel } = css


function Form(props) {
  const { firstAction } = props
  const [inputValue, setInputValue] = useState('')
  const [inputType, setInputType] = useState('')
  const [inpComment, setInputComment] = useState('')

  const validation = () => {
    if (inputValue.length > 0 && inputType && inpComment) {
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

  const handleChange = (event) => {
    setInputType(event.target.value);
  }

  const handleChange2 = (event) => {
    setInputComment(event.target.value);
  }

  return (
    <>
      <FormContainer>
        <FormCheck>
          <FormCheckLabel>Тип транзакции</FormCheckLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={inputType}
            onChange={handleChange}
          >
            <FormControlLabel value="доход" control={<Radio />} label="Доход" />
            <FormControlLabel value="расход" control={<Radio />} label="Расход" />
          </RadioGroup>
        </FormCheck>
        <InputComponent
          inputValueUpdatable={inputValue}
          action={setInputValue}
          placeholder={"Введите сумму транзакции"} />
        {
          inputType === 'доход' &&
          <InputComponent
            inputValueUpdatable={inpComment}
            action={setInputComment}
            placeholder={"Введите комментарий"} />
        }
        {
          inputType === 'расход' &&
          <FormCheck>
          <FormCheckLabel>Тип расхода</FormCheckLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={inpComment}
            onChange={handleChange2}
          >
            <FormControlLabel size="2px" value="транспорт" control={<Radio />} label="транспорт" />
            <FormControlLabel size="2px" value="развлечение" control={<Radio />} label="развлечение" />
            <FormControlLabel size="2px" value="счёт" control={<Radio />} label="Оплата счетов" />
            <FormControlLabel size="2px" value="рестораны" control={<Radio />} label="рестораны" />
            <FormControlLabel size="2px" value="путешествия" control={<Radio />} label="путешествия" />
            <FormControlLabel size="2px" value="одежда" control={<Radio />} label="одежда" />
            <FormControlLabel size="2px" value="продукты" control={<Radio />} label="продукты" />
          </RadioGroup>
        </FormCheck>
        }
        <Button
          backgroundColor={
            inputValue && inputType && inpComment ?
              "#95DB7B" :
              "#B9B9B9"
          }
          onClick={validation}
        >
          Сохранить транзакцию
        </Button>
      </FormContainer>
    </>
  )
}

export default Form