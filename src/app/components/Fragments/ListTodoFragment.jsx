import Button from "../Elements/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare,faTrash,faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ListTodoFragment = (props) => {
    const {title,index,isRotate,onRotate} = props;

    return (
        <>
            { index%2 !== 0 ? (
                <div className="bg-todo-bar-1 w-full h-10 mr-10 rounded-md px-10 font-semibold flex justify-between">
                    <span className="content-center w-52">{title}</span>
                    <div>
                        <Button className="border-[1px] p-1 my-1 mr-5 border-black">
                            <FontAwesomeIcon icon={faPenToSquare} className="w-6 h-6 block"/>
                        </Button>
                        <Button className="border-[1px] p-1 my-1 border-black">
                            <FontAwesomeIcon icon={faTrash} className="w-6 h-6 block"/>
                        </Button>
                    </div>
                    <Button 
                        className="border-[1px] p-1 my-1 border-black"
                        onClick={onRotate}
                    >
                        <FontAwesomeIcon icon={faChevronRight} className={`w-5 h-5 block duration-300 ${isRotate ? 'rotate-90' : ''}`}/>
                    </Button>
                </div>
            ) : (
                <div className="bg-todo-bar-2 w-full h-10 mr-10 rounded-md px-10 font-semibold flex justify-between">
                    <span className="content-center w-52">{title}</span>
                    <div>
                        <Button className="border-[1px] p-1 my-1 mr-5 border-black">
                            <FontAwesomeIcon icon={faPenToSquare} className="w-6 h-6 block"/>
                        </Button>
                        <Button className="border-[1px] p-1 my-1 border-black">
                            <FontAwesomeIcon icon={faTrash} className="w-6 h-6 block"/>
                        </Button>
                    </div>
                    <Button 
                        className="border-[1px] p-1 my-1 border-black"
                        onClick={onRotate}
                    >
                        <FontAwesomeIcon icon={faChevronRight} className={`w-5 h-5 block duration-300   ${isRotate ? 'rotate-90' : ''}`}/>
                    </Button>
                </div>
            )

            }
        </>
    )
}

export default ListTodoFragment;