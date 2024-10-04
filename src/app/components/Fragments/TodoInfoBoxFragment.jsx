import TodoInfoBox from "../Elements/TodoInfoBox";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBriefcase, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import Button from "../Elements/Button";

const TodoInfoBoxFragment = (props) => {
    const {urgencyCategory,activityCategory,deadlineDate,workDate,isSliding,isOpenForm} = props;

    return (
        <div 
            className={`bg-bg-color-menu w-full rounded-md flex text-xs overflow-hidden transition-all duration-500
                 ${isSliding && isOpenForm ? 'max-h-30 flex-wrap pb-2 justify-center' 
                    : isSliding ? 'max-h-20 justify-between'
                     : 'h-0'}`}
        >

            <div className="content-center">
                <TodoInfoBox className={`border-b-[2px] border-black font-semibold p-1 ${isOpenForm ? "" : "w-44"}`}>
                    <FontAwesomeIcon icon={faBriefcase} className="w-4 h-4 block"/>
                    <span>{activityCategory}</span>
                </TodoInfoBox>
                <TodoInfoBox className={`font-normal p-1 ${isOpenForm ? "" : "w-48"}`}>
                    <div className="bg-category-color-urgent w-4 h-4 block"></div>
                    <span>{urgencyCategory}</span>
                </TodoInfoBox>
            </div>

            <div className="content-center">
                <TodoInfoBox className={'font-normal p-1'}>
                    <FontAwesomeIcon icon={faCalendarDay} className="w-5 h-5 block"/> 
                    <div>
                        <div className="border-b-[2px] border-black font-semibold p-1">Deadline Date</div>
                        <div className="p-1">{deadlineDate}</div>
                    </div>
                </TodoInfoBox>
            </div>

            <div className="content-center">
                <TodoInfoBox className={'font-normal p-1'}>
                    <FontAwesomeIcon icon={faCalendarDay} className="w-5 h-5 block"/> 
                    <div>
                        <div className="border-b-[2px] border-black font-semibold p-1">Planned Work Date</div>
                        <div className="p-1">{workDate}</div>
                    </div>
                </TodoInfoBox>
            </div>

            <div className="content-center">
                <TodoInfoBox className={''}>
                    <Button className="bg-button-finish py-1 px-5">Finish</Button>
                    <Button className="bg-button-view-image py-1 px-5">View Files</Button>
                    <Button className="bg-button-view-files py-1 px-5">View Image</Button>
                </TodoInfoBox>
            </div>
        </div>
    )
}

export default TodoInfoBoxFragment;