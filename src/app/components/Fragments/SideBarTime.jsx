import { DateCalendar, DigitalClock, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import Button from "../Elements/Button";
import HamburgerMenu from "../Elements/HamburgerMenu";
import HeaderText from "../Elements/HeaderText";

const SideBarTime = (props) => {
    const {onOpen,isOpenSide} = props;
    const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const option = { year: 'numeric', month: 'long', day: 'numeric' }
    const getDay = new Date().getDay();
    const getDate = new Date().toLocaleDateString('en-US',option)

    return (
        <div className={`w-[22%] h-[100%] fixed bg-bg-color-menu py-5 px-8 ${isOpenSide ? 'hidden' : ''}`}>
            <Button
                onClick={onOpen}
            >
                <HamburgerMenu/>
            </Button>
            <HeaderText 
                className="w-full text-center text-2xl bg-calendar-header text-white rounded-tr-2xl rounded-tl-2xl p-4 mt-12 ml-auto mr-auto"
            >
                CALENDAR
            </HeaderText>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar 
                    showDaysOutsideCurrentMonth 
                    className="w-full h-[300px] shadow-red-500 shadow-lg"
                    
                />
            </LocalizationProvider>
            <div className="mt-6 ml-10">
                <HeaderText 
                    className="text-2xl"
                >
                    {day[getDay]}
                </HeaderText>
                <p className="italic">
                    {getDate}
                </p>
            </div>
        </div>
    )
}

export default SideBarTime;