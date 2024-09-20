const InputLabel = (props) => {
    const {children, name, className} = props;
    return(
        <div>
            <label className={`cursor-pointer ${className}`} htmlFor={name}>
                {children}
            </label>
        </div>
    )
}

export default InputLabel;