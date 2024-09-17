import Button from "../Elements/Button";
import HamburgerMenu from "../Elements/HamburgerMenu";

const { default: HeaderText } = require("../Elements/HeaderText")

const HeaderMenu = (props) => {
    const {children} = props

    return (
        <div className="flex justify-between p-2">
            <HeaderText className="text-xl font-medium text-stroke-1">
                {children}
            </HeaderText>
            <Button>
                <HamburgerMenu/>
            </Button>
        </div>
    )
}

export default HeaderMenu;