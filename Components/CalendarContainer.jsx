import AddCalendarComponent from "./AddCalendar";
import ListCalendar from "./ListCalendar";
import { useState } from "react";

export default function CalendarContainer(){
    const [render, setRender] = useState(false);

    const rendered = ()=>{
        const rend = !render;
        setRender(rend);
    }

    return(
        <>
            <AddCalendarComponent rendered={rendered}/>
            <ListCalendar render={render} rendered={rendered}/>
        </>
    )
}