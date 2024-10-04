import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Button from "../Elements/Button";

const ProfileFragment = () => {
    return (
        <div className="bg-bg-color-menu mt-5 h-44 w-44 rounded-lg relative flex flex-col items-center">
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
    )
}

export default ProfileFragment;