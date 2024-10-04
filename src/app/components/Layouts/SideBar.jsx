import HeaderText from "../Elements/HeaderText";
import LabelBox from "../Fragments/HeaderMenu";
import SearchBar from "../Fragments/SearchBar";
import Button from "../Elements/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight, faCalendarDays, faCheckDouble, faChartPie, faSquarePersonConfined } from "@fortawesome/free-solid-svg-icons";
import TodoMenu from "../Fragments/SideBar/TodoMenu";
import CategoriesMenu from "../Fragments/SideBar/CategoriesMenu";

const SideBar = (props) => {
    const {isOpen,onOpenSide} = props;
    
    return (
        <>
             {isOpen ? (
                <div className="w-[23%] bg-bg-color-menu py-5 px-8 rounded-[20px] z-10 fixed m-5 h-[96%] overflow-y-scroll">
                    <LabelBox
                            onOpen={onOpenSide}
                    >
                        Menu
                    </LabelBox>
                    <SearchBar placeholder="Search"/>

                    <TodoMenu/>
                    <CategoriesMenu/>                
            </div>
            ) : (
                ''
            )}
        </>
    )
}

export default SideBar;