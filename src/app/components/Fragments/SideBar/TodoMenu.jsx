import HeaderText from "../../Elements/HeaderText";
import Button from "../../Elements/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight,faCalendarDays,faCheckDouble } from "@fortawesome/free-solid-svg-icons";

const TodoMenu = () => {
    return (
        <div>
            <HeaderText className = "w-full mt-6 p-2 font-medium text-lg"> Todo </HeaderText>

            <Button 
                className="flex p-3 justify-start gap-6 w-full bg-menu-button-1 hover:bg-red-400"
            >
            <div className="flex gap-6">
                <div className="flex content-center py-1">
                    <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 block hover:scale-110"/>
                    <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 block hover:scale-110"/>
                </div>
                <h2 className="font-medium text-[15px]">Upcoming Todos</h2>
            </div>
            </Button>
            <Button 
                className="flex p-3 justify-start gap-6 w-full bg-menu-button-2 hover:bg-red-300"
            >
                <div className="flex gap-6">
                    <div className="flex content-center">
                        <FontAwesomeIcon icon={faCalendarDays} className="w-5 h-5 block hover:scale-110"/>
                    </div>
                    <h2 className="font-medium text-[15px]">Calendar</h2>
                </div>
            </Button>
            <Button 
                className="flex p-3 justify-between w-full bg-menu-button-1 hover:bg-red-400"
            >
            <div className="flex gap-6">
                <div className="flex content-center">
                    <FontAwesomeIcon icon={faCheckDouble} className="w-5 h-5 block hover:scale-110"/>
                </div>
                <h2 className="font-medium text-[15px]">Finished Todos</h2>
            </div>
            </Button>
        </div>
    )
}

export default TodoMenu;