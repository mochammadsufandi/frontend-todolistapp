import Input from "../Elements/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../Elements/Button";

const SearchBar = (props) => {
    const {name,placeholder} = props;
    return (
        <div className="flex justify-around w-full bg-search-bar rounded-[20px] h-[50px] mt-8 p-2">
            <Button>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5 block bg-transparent"/>
            </Button>
            <Input 
                placeholder={placeholder}
                className="w-full text-center bg-search-bar text-lg rounded-[20px] overflow-hidden" 
            />
            <Button>
                <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 block bg-transparent"/>
            </Button> 
        </div>
    )
}

export default SearchBar;