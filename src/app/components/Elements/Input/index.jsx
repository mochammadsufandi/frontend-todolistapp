const Input = (props) => {
    const {name,placeholder,type,accept,className} = props;
    if(type !== 'text') {
        return (
            <input 
                type={type} 
                accept={accept}
                multiple
                placeholder={placeholder} 
                id={name}
                name={name} 
                className={`${className} cursor-pointer`}
            />
        )} else {
            return (
                <input 
                    type={type} 
                    accept={accept}
                    placeholder={placeholder} 
                    id={name}
                    name={name} 
                    className={`${className} cursor-text`}
                />
            )
        }
}

export default Input;