const HeaderText = (props) => {
    const {className,children} = props;

    return (
        <h1 className={`text-header-color text-shadow-md font-bold ${className}`}>
            {children}
        </h1>
    )
}

export default HeaderText;