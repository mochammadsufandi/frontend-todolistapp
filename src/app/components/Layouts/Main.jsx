import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Elements/Button";
import { faPlus, faImage, faPenToSquare, faTrash, faChevronDown, faBriefcase, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import TodoInfoBox from "../Elements/TodoInfoBox";
import SideBarTime from "../Fragments/SideBarTime";
import WelcomeHeader from "../Fragments/WelcomeHeader";
import ProfileFragment from "../Fragments/ProfileFragment";
import TodoInfoBoxCategory from "../Fragments/TodoInfoBoxFragment";
import ListTodoFragment from "../Fragments/ListTodoFragment";

const { default: HeaderText } = require("../Elements/HeaderText")

const Main = (props) => {
    const {onOpenForm,onRotate,todos,rotateIndex,onOpenSide,isOpenSide,isOpenForm} = props;
    
    return (
        <div className="flex">
            <SideBarTime
                onOpen={onOpenSide}
                isOpenSide={isOpenSide}
            />
    
            <div className={`ml-[25%] flex flex-col ${isOpenForm ? 'w-[48%]': 'w-full'} mr-10`}>
                <div className="flex">
                    <WelcomeHeader
                        onOpen={onOpenForm}
                    />
                    <ProfileFragment/>
                </div>
                <div className="mt-20"> 
                    { todos.map((todo,idx) => {
                        return (
                            <>
                                <ListTodoFragment 
                                    title={todo.name}
                                    index={idx+1}
                                    isRotate={rotateIndex.includes(idx+1)}
                                    onRotate={() => onRotate(idx+1)}
                                />
                                <TodoInfoBoxCategory 
                                    urgencyCategory={todo.category.name}
                                    activityCategory={todo.activityCategory.name}
                                    deadlineDate={todo.deadlineDate}
                                    workDate={todo.plannedWorkDate}
                                    isOpenForm={isOpenForm}
                                    isSliding={rotateIndex.includes(idx+1)}
                                />
                            </>
                        )
                    })

                    }
                    
                </div>
            </div>

        </div>
    )
}

export default Main;