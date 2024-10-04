import Category from "@/lib/fetch/category";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import CheckBoxFragment from "../Fragments/InputFragment/CheckBoxFragment";
import DropDownFragment from "../Fragments/InputFragment/DropdownFragment";
import HeaderInput from "../Fragments/InputFragment/HeaderInput";
import InputFragment from "../Fragments/InputFragment/InputFragment";
import { useEffect, useState } from "react";
import todoStore from "@/lib/zustandStore/todoStore";
import Todos from "@/lib/fetch/todos";

const FormInputTodo = (props) => {
    const {isOpen,onClose,onSubmit} = props;
    const [urgencyCategory,setUrgencyCategory] = useState([]);
    const [activityCategory,setActivityCategory] = useState([]);
    const [fileName,setFileName] = useState([]);
    const [defaultChecked,setDefaultChecked] = useState();
    const [imageName,setImageName] = useState([]);
    const {todo,todoChange} = todoStore();
    const [stateTodo,setStateTodo] = useState({});

    const fetchCategories = async() => {
        try {
            if(isOpen) {
                const responseUrgency = await Category.getAllUrgency();
                const responseActivity = await Category.getAllActivity();
    
                const dataUrgency = responseUrgency.data;
                const dataActivity = responseActivity.data;
    
                setUrgencyCategory(dataUrgency.map((val) => {
                    return {
                        label : val.name,
                        value : val.id,
                    }
                }))
                setActivityCategory(dataActivity.map((val) => {
                    return {
                        label : val.name,
                        value : val.id
                    }
                }))
            }
            
        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = (e) => {
        const { name, type,files } = e.target;
        let {value} = e.target;

        if(type === 'file') {
            const fileLength = Object.keys(files).length;
            let file = [];
            if(name === 'files' && fileLength > 2) {
                setFileName([{name : 'File Limit is 2'}])
                return

            } else if(name === 'image' && fileLength > 1) {
                setImageName([{name : 'Image Limit is 1'}])
                return

            } else if(fileLength > 0) {
                for(let i=0; i < fileLength; i++) {
                    file.push(files[i])
                }
                name === 'files' ? setFileName(file) : setImageName(file);

            } else {
                setFileName([]);
            }
        }

        if(name === 'isFinished1') {
            if(value) {
                setDefaultChecked('')
            } else {
                value = true
                setDefaultChecked('yes')
            }
        } 
        if(name === 'isFinished2') {
            if(!value) {
                value = false
                setDefaultChecked('no')
            } else {
                console.log('MASUKK')
                setDefaultChecked('')
            }
        }

        setStateTodo((prevState) => ({
            ...prevState,
            [name] : type === 'file' ? files 
                    : value === 'true' ? true  
                    : value === 'false' ? false
                    : value,
        }))
      };

    const submitHandler = async(params) => {

        try {
            const addedTodo = {
                ...params,
                deadlineDate : `${params.deadlineDate}T00:00:00.000Z`,
                plannedWorkDate : `${params.plannedWorkDate}T00:00:00.000Z`,
                userId : 1,
                isFinished : params.isFinished1 ? true : false
            };
            console.log(addedTodo)
            const createTodo = await Todos.addTodo(addedTodo);
            todoChange({});
            setStateTodo({})
            setDefaultChecked('')
            onClose()
            
        } catch (err) {
            console.log(err);
        }
    }
    
    useEffect(() => {
        fetchCategories();
        todoChange(stateTodo);
        setStateTodo(todo);
    },[isOpen])

    return (
        <>
            { isOpen ? (
                <form 
                    className="w-3/12 bg-bg-color-menu h-[96vh] py-5 px-8 fixed z-10 m-5 rounded-lg right-0 overflow-y-auto"
                    onSubmit={(ev) => {
                        ev.preventDefault();
                        submitHandler(stateTodo);
                    }}
                >
                    <HeaderInput
                        onClose={onClose}
                    />

                    <InputFragment
                        className = {"mt-8"}
                        name = {"name"}
                        type = {'text'}
                        placeholder = {'Coding Challenge'}
                        onChange={handleChange}
                        value={stateTodo.name}
                    > 
                        Todo's Name 
                    </InputFragment>

                    <div className="bg-date-input px-2 pb-2 rounded-lg">
                        <InputFragment
                            className = {"mt-4"}
                            name = {"deadlineDate"}
                            type = {'date'}
                            onChange={handleChange}
                            value={stateTodo.deadlineDate}
                        > 
                            Deadline Date 
                        </InputFragment>
                    </div>

                    <div className="bg-date-input px-2 pb-2 rounded-lg">
                        <InputFragment
                            className = {"mt-4"}
                            name = {"plannedWorkDate"}
                            type = {'date'}
                            onChange={handleChange}
                            value={stateTodo.plannedWorkDate}
                        > 
                            Planned Work Date
                        </InputFragment>
                    </div>

                    <DropDownFragment 
                        className={"mt-2"}
                        data={urgencyCategory} 
                        name="categoryId"
                        onChange={handleChange}
                    >
                        Urgency Category
                    </DropDownFragment>

                    <DropDownFragment 
                        className={"mt-2"}
                        data={activityCategory} 
                        name="activityCategoryId"
                        onChange={handleChange}
                    >
                        Activity Category
                    </DropDownFragment>

                    <InputFragment
                        className={"mt-2"}
                        name={'files'}
                        type={'file'}
                        accept={'.pdf'}
                        placeholder={'files'}
                        onChange={handleChange}
                    >
                        Supporting Files
                    </InputFragment>
                    {fileName.map((val,index) => {
                        return (
                            <p 
                                key={index}
                                className="text-[8px] ml-2 mt-1"
                            >
                                {val.name}
                            </p>
                        )
                    })}
                    <InputFragment
                        className={"mt-2"}
                        name={'image'}
                        type={'file'}
                        accept={'.jpg, .jpeg, .webp, .png'}
                        placeholder={'files'}
                        onChange={handleChange}
                    >
                        Image
                    </InputFragment>
                    {imageName.map((val,index) => {
                        return (
                            <p
                                key={index}
                                className="text-[8px] ml-2 mt-1"
                            >
                                {val.name}
                            </p>
                        )
                    })
                    }
                    
                <CheckBoxFragment
                        className={"mt-4"}
                        onChange={handleChange}
                        defaultChecked={defaultChecked}
                >
                        IsFinished
                </CheckBoxFragment>
                
                <Button
                    className="w-1/2 mt-5 bg-button-add p-1 left-[50%] translate-x-[50%]"
                >
                        Add
                </Button>
            </form>
            ) : (
                ''
            )

            }
        </>
        
    )
}

export default FormInputTodo;