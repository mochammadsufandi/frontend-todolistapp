import HeaderText from "../Elements/HeaderText";
import Button from "../Elements/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const WelcomeHeader = (props) => {
    const {onOpen} = props;
    return (
        <div className="mt-8 w-full">
            <div className="ml-16">
                <HeaderText className="text-2xl">
                    Good Morning, Andi
                </HeaderText>
                <h1 className="text-lg italic">
                    Plan your Work, Work Your Plan
                </h1>
            </div>

            <Button className="bg-bg-color-menu p-3 mt-8 w-40"
                onClick={onOpen}
            >
                <HeaderText className="font-bold text-lg flex gap-3">
                    <FontAwesomeIcon icon={faPlus} className="w-5 h-5"/>
                    Add Todo
                </HeaderText>
            </Button>
        </div>
    )
}

export default WelcomeHeader;