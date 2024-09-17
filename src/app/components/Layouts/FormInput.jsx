import Input from "../Elements/Input";
import LabelInput from "../Fragments/HeaderInput";

const FormInput = (props) => {
    return (
        <div className="w-3/12 bg-bg-color-menu h-[96vh] py-5 px-8 fixed z-10 m-5 rounded-lg right-0">
            <LabelInput/>
            <Input></Input>
            
        </div>
    )
}

export default FormInput;