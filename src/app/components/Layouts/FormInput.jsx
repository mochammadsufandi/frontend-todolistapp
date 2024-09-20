import Button from "../Elements/Button";
import Input from "../Elements/Input";
import CheckBoxFragment from "../Fragments/CheckBoxFragment";
import DropDownFragment from "../Fragments/DropdownFragment";
import HeaderInput from "../Fragments/HeaderInput";
import InputFragment from "../Fragments/InputFragment";

const FormInputTodo = (props) => {
    const {isOpen,onClose,onSubmit} = props;
    const obj = [
        {label : 'A', value : 'A'},
        {label : 'B', value : 'B'},
        {label : 'C', value : 'C'},
    ]

    return (
        <>
            { isOpen ? (
                <div className="w-3/12 bg-bg-color-menu h-[96vh] py-5 px-8 fixed z-10 m-5 rounded-lg right-0 overflow-y-auto">
                    <HeaderInput
                        onClose={onClose}
                    />

                    <InputFragment
                        className = {"mt-8"}
                        name = {"todosname"}
                        type = {'text'}
                        placeholder = {'Coding Challenge'}
                    > 
                        Todo's Name 
                    </InputFragment>

                    <div className="bg-date-input px-2 pb-2 rounded-lg">
                        <InputFragment
                            className = {"mt-4"}
                            name = {"deadline date"}
                            type = {'date'}
                            placeholder = {'Coding Challenge'}
                        > 
                            Deadline Date 
                        </InputFragment>
                    </div>

                    <div className="bg-date-input px-2 pb-2 rounded-lg">
                        <InputFragment
                            className = {"mt-4"}
                            name = {"planned work date"}
                            type = {'date'}
                            placeholder = {'Coding Challenge'}
                        > 
                            Deadline Date 
                        </InputFragment>
                    </div>

                    <DropDownFragment 
                        className={"mt-2"}
                        data={obj} 
                        name="Category"
                    >
                        Urgency Category
                    </DropDownFragment>

                    <DropDownFragment 
                        className={"mt-2"}
                        data={obj} 
                        name="Category"
                    >
                        Activity Category
                    </DropDownFragment>

                    <InputFragment
                        className={"mt-2"}
                        name={'supportingFile'}
                        type={'file'}
                        accept={'.pdf'}
                        placeholder={'files'}
                    >
                        Supporting Files
                    </InputFragment>
                    <InputFragment
                        className={"mt-2"}
                        name={'image'}
                        type={'file'}
                        accept={'.jpg, .jpeg, .webp, .png'}
                        placeholder={'files'}
                    >
                        Image
                    </InputFragment>
                    
                <CheckBoxFragment
                        className={"mt-4"}

                >
                        IsFinished
                </CheckBoxFragment>
                
                <Button
                    className="w-1/2 mt-5 bg-button-add p-1 left-[50%] translate-x-[50%]"
                    onClick = {onSubmit}
                >
                        Add
                </Button>
            </div>
            ) : (
                ''
            )

            }
        </>
        
    )
}

export default FormInputTodo;