
interface Props {
    text: string;
    onClick?: () => void;
    className?: string;
}

const Button = (props: Props): JSX.Element => {
  return (
    <button
        onClick={props.onClick}
        className={props.className}
    >
        {props.text}
    </button>
  )
}

export default Button