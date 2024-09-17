import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HamburgerMenu = () => {
    return (
        <FontAwesomeIcon icon={faBars} className="h-5 w-7 text-gray-800 cursor-pointer align-middle" />
    )
}

export default HamburgerMenu;