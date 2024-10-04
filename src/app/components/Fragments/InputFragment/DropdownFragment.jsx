import InputLabel from "../../Elements/InputLabel";

const DropDownFragment = (props) => {
    const {name,className,data,children,onChange} = props;

    return (
        <div className={className}> 
            <InputLabel name={name} className={'text-xs mx-3'}>{children}</InputLabel>
            <select
                name={name} 
                className="w-full bg-search-bar text-center text-xs rounded-lg overflow-hidden p-2 mt-1 cursor-pointer"
                onChange={onChange}
            >
                <option
                    value={""}
                    key={0}
                >
                    {name}
                </option>
               { data.map((value,index) => {
            
                    return(
                        <option 
                            value={value.value} 
                            key={index+1}
                        >
                            {value.label}
                        </option>
                    )
               })
               }
            </select>
        </div>
    )
}

export default DropDownFragment;