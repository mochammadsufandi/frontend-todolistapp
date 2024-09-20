import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderText from "../Elements/HeaderText";
import LabelBox from "./HeaderMenu";
import { faClose, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import Button from "../Elements/Button";

const HeaderInput = (props) => {
    const {onClose} = props;
    return(
        <div className="flex justify-between p-2 items-center">
            <div className="flex gap-1">
                <HeaderText className="text-xl font-medium text-stroke-1">
                    Add Todo
                </HeaderText>
                <FontAwesomeIcon icon={faSquarePlus} className="w-7 h-7"/>
            </div>
            <Button
                onClick={onClose}
            >
                <FontAwesomeIcon icon={faClose} className="w-7 h-7"/>
            </Button>
        </div>
    )
}

export default HeaderInput;