import HeaderText from "../../Elements/HeaderText";
import Button from "../../Elements/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie,faChevronRight,faSquarePersonConfined } from "@fortawesome/free-solid-svg-icons";

const CategoriesMenu = () => {
    return (
        <div>
            <HeaderText className = "w-full mt-6 p-2 font-medium text-lg"> Categories Todo </HeaderText>

            <Button 
                className="flex p-3 justify-between w-full bg-menu-button-1 hover:bg-red-400"
            >
                <div className="flex gap-6">
                    <div className="flex content-center">
                        <FontAwesomeIcon icon={faChartPie} className="w-5 h-5 block hover:scale-110"/>
                    </div>
                    <h2 className="font-medium text-[15px]">Urgency Category</h2>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="w-3 hover:scale-110"/>
            </Button>
            <Button 
                className="flex p-3 justify-between w-full bg-menu-button-2 hover:bg-red-300"
            >
                <div className="flex gap-6">
                    <div className="flex content-center">
                        <FontAwesomeIcon icon={faSquarePersonConfined} className="w-5 h-5 block hover:scale-110"/>
                    </div>
                    <h2 className="font-medium text-[15px]">Activity Category</h2>
                </div>
            </Button>
        </div>
    )
}

export default CategoriesMenu;