const Button = (props) => {
    const {className,children,onClick,isActive} = props;
    return (
        <button 
            className= {`font-semibold rounded-md ${className} ${isActive ? "bg-button-active" : ''}`} 
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;