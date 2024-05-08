export const Input = ({ type, name, placeholder, style, readOnly }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={style}
      readOnly={readOnly}
    />
  )
}
