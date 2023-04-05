const Button = (props) => {
    console.log(props)
    return <button onClick={props.callback}>{props.label}</button>
}

export default Button