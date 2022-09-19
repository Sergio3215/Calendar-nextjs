import { useState, useEffect } from "react";
import DeleteCalendar from "./DeleteCalendar";
export default function ListCalendar(props) {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await fetch("/api/getsData?name=Calendar");
        const data = await res.json();
        console.log(data)
        setData(data.CalendarList);
    }

    useEffect(() => {
        getData();
    }, [])
    useEffect(() => {
        getData();
    }, [props.render])

    return (
        <div className="list-container">
            {
                data.map((item, index) => {
                    return (
                        (item.name != "default")?
                        <div key={index} className="list-item">
                            <h1>{item.name}</h1>
                            <h2>From: {item.from} hrs</h2>
                            <h2>To: {item.to} hrs</h2>
                            <DeleteCalendar id={item.__id} rendered={props.rendered}/>
                        </div>
                        :
                        (data.length > 1)?
                        <></>
                        :
                        <>No hay informacion</>
                    )
                })
            }
        </div>
    )
}