import Input from "../../Elements/Input";
import InputLabel from "../../Elements/InputLabel";

const CheckBoxFragment = (props) => {
    const {
        name,
        children,
        className,
        disabled,
        onChange,
        defaultChecked
    } = props;

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
                    name={"isFinished1"}
                    disabled={defaultChecked === 'no' ? true : false}
                    onChange={onChange}
                    value={defaultChecked === 'yes' ? true : ''}
                    defaultChecked={defaultChecked === 'yes' ? true : false}
                />
                <p>Yes</p>
                <Input 
                    className="w-5 h-5"
                    type="checkbox"
                    name={"isFinished2"}
                    disabled={defaultChecked === 'yes' ? true : false}
                    onChange={onChange}
                    value={defaultChecked === 'no' ? false : ''}
                    defaultChecked={defaultChecked === 'no' ? true : false}
                    />
                <p>No</p>

            </div>
        </div>
    )
}

export default CheckBoxFragment;