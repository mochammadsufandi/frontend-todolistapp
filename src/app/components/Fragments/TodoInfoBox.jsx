const TodoInfoBox = (props) => {
    const {children,className} = props;
    return (
        <div className={`flex gap-5 mx-5 ${className}`}>
            {children}
        </div>
    )
}

export default TodoInfoBox;