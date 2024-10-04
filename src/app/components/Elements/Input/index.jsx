const Input = (props) => {
    const {
        name,
        placeholder,
        type,
        accept,
        onChange,
        value,
        defaultValue,
        className,
        disabled,
        defaultChecked
    } = props;
    
    if(type !== 'text') {
        return (
            <input 
                type={type} 
                accept={accept}
                multiple
                placeholder={placeholder} 
                id={name}
                name={name}
                value={value}
                defaultValue={defaultValue}
                className={`${className} cursor-pointer`}
                onChange={onChange}
                disabled={disabled}
                defaultChecked={defaultChecked}
                required={type === 'file' ? false : true}
            />
            )} else {
                return (
                    <input 
                    type={type} 
                    accept={accept}
                    placeholder={placeholder} 
                    id={name}
                    name={name} 
                    value={value} 
                    defaultValue={defaultValue}
                    className={`${className} cursor-text`}
                    onChange={onChange}
                    required
                />
            )
        }
}

export default Input;