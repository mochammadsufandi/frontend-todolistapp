const Button = (props) => {
    const {className,children,onClick} = props;
    return (
        <button 
            className= {`font-semibold rounded-md ${className}`} 
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;