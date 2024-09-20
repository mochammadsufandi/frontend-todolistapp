import Input from "../Elements/Input";
import InputLabel from "../Elements/InputLabel";

const CheckBoxFragment = (props) => {
    const {name,children,className} = props;
    return(
        <div className={`${className} text-center`}>
            <InputLabel
                className="w-full text-xs mx-3"
                name={name}
            >
                {children}
            </InputLabel>
            <div className="flex gap-4 text-xs font-bold mt-2 justify-center">
                <Input 
                    className="w-5 h-5"
                    type="checkbox"
                    name={name}
                />
                <p>Yes</p>
                <Input 
                    className="w-5 h-5"
                    type="checkbox"
                    name={name}
                    />
                <p>No</p>

            </div>
        </div>
    )
}

export default CheckBoxFragment;