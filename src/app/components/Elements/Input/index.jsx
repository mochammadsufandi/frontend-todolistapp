const Input = (props) => {
    const {name,placeholder,className} = props;
    return (
        <input type="text" placeholder={placeholder} name={name} className={`${className}`}/>
    )
}

export default Input;