import css from "../../Styles/Local/form.css"
const { InputCss } = css

const InputComponent = (props) => {

  const { placeholder, action, inputValueUpdatable} = props

  return (
    <>
      <InputCss
        value={inputValueUpdatable}
        type={"text"}
        placeholder={placeholder}
        maxLength={"100"}
        onChange={event => {
          const NewVal = event.target.value
          action(NewVal)
        }}
      // кол бек который параметром принамает в себя
      // объект event, 
      // выводит в консоль сообщение со знаечнием 
      // той строки кт обновляется в текстовом поле
      />
    </>
  )
}



export default InputComponent