import HeaderText from "../Elements/HeaderText";
import LabelBox from "../Fragments/HeaderMenu";
import SearchBar from "../Fragments/SearchBar";
import Button from "../Elements/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight, faCalendarDays, faCheckDouble, faChartPie, faSquarePersonConfined } from "@fortawesome/free-solid-svg-icons";

const SideBar = (props) => {
    return (
        <div className="w-3/12 bg-bg-color-menu py-5 px-8 rounded-[20px] z-10 fixed m-5 h-[96vh] overflow-y-scroll">
            <LabelBox>Menu</LabelBox>
            <SearchBar placeholder="Search"/>

            <div>
                 <HeaderText className = "w-full mt-6 p-2 font-medium text-lg"> Todo </HeaderText>

                <Button className="flex p-3 justify-start gap-6 w-full bg-menu-button-1">
                <div className="flex gap-6">
                    <div className="flex content-center py-1">
                        <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 block"/>
                        <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 block"/>
                    </div>
                    <h2 className="font-medium text-[15px]">Upcoming Todos</h2>
                </div>
                </Button>
                <Button className="flex p-3 justify-start gap-6 w-full bg-menu-button-2">
                    <div className="flex gap-6">
                        <div className="flex content-center">
                            <FontAwesomeIcon icon={faCalendarDays} className="w-5 h-5 block"/>
                        </div>
                        <h2 className="font-medium text-[15px]">Calendar</h2>
                    </div>
                </Button>
                <Button className="flex p-3 justify-between w-full bg-menu-button-1">
                <div className="flex gap-6">
                    <div className="flex content-center">
                        <FontAwesomeIcon icon={faCheckDouble} className="w-5 h-5 block"/>
                    </div>
                    <h2 className="font-medium text-[15px]">Finished Todos</h2>
                </div>
                </Button>
            </div>

            <div>
                <HeaderText className = "w-full mt-6 p-2 font-medium text-lg"> Categories Todo </HeaderText>

                <Button className="flex p-3 justify-between w-full bg-menu-button-1">
                    <div className="flex gap-6">
                        <div className="flex content-center">
                            <FontAwesomeIcon icon={faChartPie} className="w-5 h-5 block"/>
                        </div>
                        <h2 className="font-medium text-[15px]">Urgency Category</h2>
                    </div>
                    <FontAwesomeIcon icon={faChevronRight} className="w-3"/>
                </Button>
                <Button className="flex p-3 justify-between w-full bg-menu-button-2">
                    <div className="flex gap-6">
                        <div className="flex content-center">
                            <FontAwesomeIcon icon={faSquarePersonConfined} className="w-5 h-5 block"/>
                        </div>
                        <h2 className="font-medium text-[15px]">Activity Category</h2>
                    </div>
                </Button>
            </div>
            

        </div>
    )
}

export default SideBar;