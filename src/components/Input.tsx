import { InputProps } from '../interfaces/interfaces';
/* <----- Компонент ввода для изменений и добавлений значений параметров -----> */
function Input({ name, onChangeCb, ...props }: InputProps) {
  return (
    <label>
      {name}:<br />
      <input
        maxLength={20}
        onChange={onChangeCb ? (e) => onChangeCb(e.target.value) : undefined}
        {...props}
      />
    </label>
  );
}
export default Input;
