export const Button = ({ titulo, className, onClick, type }) => (
  <button className={className} onClick={onClick} type={type}>
    {titulo}
  </button>
)
