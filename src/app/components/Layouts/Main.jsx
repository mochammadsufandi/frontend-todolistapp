import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Elements/Button";
import { faPlus, faImage, faPenToSquare, faTrash, faChevronDown, faBriefcase, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import TodoInfoBox from "../Fragments/TodoInfoBox";

const { default: HeaderText } = require("../Elements/HeaderText")

const Main = (props) => {
    return (
        <div className="flex">
            {/* <div className="w-3/12 h-[100vh] fixed bg-bg-color-menu">

            </div> */}

            <div className="ml-[30%] flex flex-col w-full mr-10">
                <div className="flex">
                    <div className="mt-8 w-full">
                        <div className="ml-16">
                            <HeaderText className="text-2xl">
                                Good Morning, Andi
                            </HeaderText>
                            <h1 className="text-lg italic">
                                Plan your Work, Work Your Plan
                            </h1>
                        </div>

                        <Button className="bg-bg-color-menu p-3 mt-8 w-40">
                            <HeaderText className="font-bold text-lg flex gap-3">
                                <FontAwesomeIcon icon={faPlus} className="w-5 h-5"/>
                                Add Todo
                            </HeaderText>
                        </Button>
                    </div>

                    <div className="bg-bg-color-menu mt-5 h-44 w-[25%] rounded-lg relative flex flex-col items-center">
                        <div 
                            className="border-[1px] border-black rounded-full w-28 h-28 mt-2 content-center absolute bg-bg-color-menu">
                            <FontAwesomeIcon icon={faImage} className="w-16 h-16 block ml-auto mr-auto"/>
                        </div>
                        <div className="mt-auto w-full mb-4 text-center text-sm">
                            <div className="  bg-profile-neck w-1/2 h-16 rounded-lg ml-auto mr-auto">aaaa</div>
                            <Button className="bg-profile-neck w-3/4 rounded-lg h-10 content-center ml-auto mr-auto font-normal">
                                View Profile
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="mt-20"> 
                    <div className="bg-todo-bar-1 w-full h-10 mr-10 rounded-md px-10 font-semibold flex justify-between">
                        <span className="content-center">Coding Portofolio Website</span>
                        <div>
                            <Button className="border-[1px] p-1 my-1 mr-5 border-black">
                                <FontAwesomeIcon icon={faPenToSquare} className="w-6 h-6 block"/>
                            </Button>
                            <Button className="border-[1px] p-1 my-1 border-black">
                                <FontAwesomeIcon icon={faTrash} className="w-6 h-6 block"/>
                            </Button>
                        </div>
                        <Button className="border-[1px] p-1 my-1 border-black">
                            <FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 block"/>
                        </Button>
                    </div>

                    <div className="bg-bg-color-menu w-full h-20 rounded-md flex justify-between text-xs">
                        <div className="content-center">
                            <TodoInfoBox className={'border-b-[2px] border-black font-semibold p-1'}>
                                <FontAwesomeIcon icon={faBriefcase} className="w-4 h-4 block"/>
                                <span>Work</span>
                            </TodoInfoBox>
                            <TodoInfoBox className={'font-normal p-1'}>
                                <div className="bg-category-color-urgent w-4 h-4 block"></div>
                                <span>Urgent + Important</span>
                            </TodoInfoBox>
                        </div>
                        
                        <div className="content-center">
                            <TodoInfoBox className={'font-normal p-1'}>
                                <FontAwesomeIcon icon={faCalendarDay} className="w-5 h-5 block"/> 
                                <div>
                                    <div className="border-b-[2px] border-black font-semibold p-1">Deadline Date</div>
                                    <div className="p-1">Saturday, 19 September 2024</div>
                                </div>
                            </TodoInfoBox>
                        </div>
                        <div className="content-center">
                            <TodoInfoBox className={'font-normal p-1'}>
                                <FontAwesomeIcon icon={faCalendarDay} className="w-5 h-5 block"/> 
                                <div>
                                    <div className="border-b-[2px] border-black font-semibold p-1">Planned Work Date</div>
                                    <div className="p-1">Saturday, 24 September 2024</div>
                                </div>
                            </TodoInfoBox>
                        </div>
                        <div className="content-center">
                            <TodoInfoBox className={''}>
                                <Button className="bg-button-finish py-1 px-5">Finish</Button>
                                <Button className="bg-button-view-image py-1 px-5">Finish</Button>
                                <Button className="bg-button-view-files py-1 px-5">Finish</Button>
                            </TodoInfoBox>
                        </div>
                    </div>

                    <div className="bg-todo-bar-2 w-full h-10 mr-10 rounded-md px-10 font-semibold flex justify-between">
                        <span className="content-center">Coding Portofolio Website</span>
                        <div>
                            <Button className="border-[1px] p-1 my-1 mr-5 border-black">
                                <FontAwesomeIcon icon={faPenToSquare} className="w-6 h-6 block"/>
                            </Button>
                            <Button className="border-[1px] p-1 my-1 border-black">
                                <FontAwesomeIcon icon={faTrash} className="w-6 h-6 block"/>
                            </Button>
                        </div>
                        <Button className="border-[1px] p-1 my-1 border-black">
                            <FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 block"/>
                        </Button>
                    </div>
                    <div className="bg-bg-color-menu w-full h-20 rounded-md flex justify-between text-xs">
                    <div className="content-center">
                            <TodoInfoBox className={'border-b-[2px] border-black font-semibold p-1'}>
                                <FontAwesomeIcon icon={faBriefcase} className="w-4 h-4 block"/>
                                <span>Work</span>
                            </TodoInfoBox>
                            <TodoInfoBox className={'font-normal p-1'}>
                                <div className="bg-category-color-urgent w-4 h-4 block"></div>
                                <span>Urgent + Important</span>
                            </TodoInfoBox>
                        </div>
                        
                        <div className="content-center">
                            <TodoInfoBox className={'font-normal p-1'}>
                                <FontAwesomeIcon icon={faCalendarDay} className="w-5 h-5 block"/> 
                                <div>
                                    <div className="border-b-[2px] border-black font-semibold p-1">Deadline Date</div>
                                    <div className="p-1">Saturday, 19 September 2024</div>
                                </div>
                            </TodoInfoBox>
                        </div>
                        <div className="content-center">
                            <TodoInfoBox className={'font-normal p-1'}>
                                <FontAwesomeIcon icon={faCalendarDay} className="w-5 h-5 block"/> 
                                <div>
                                    <div className="border-b-[2px] border-black font-semibold p-1">Planned Work Date</div>
                                    <div className="p-1">Saturday, 24 September 2024</div>
                                </div>
                            </TodoInfoBox>
                        </div>
                        <div className="content-center">
                            <TodoInfoBox className={''}>
                                <Button className="bg-button-finish py-1 px-5">Finish</Button>
                                <Button className="bg-button-view-image py-1 px-5">Finish</Button>
                                <Button className="bg-button-view-files py-1 px-5">Finish</Button>
                            </TodoInfoBox>
                        </div>
                    </div>

                    

                </div>
            </div>

        </div>
    )
}

export default Main;