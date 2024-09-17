const Button = (props) => {
    const {className,children} = props;
    return (
        <button className= {`font-semibold rounded-md ${className}`} >
            {children}
        </button>
    )
}

export default Button;