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


    const setDate = (value) => {
        const dateNumber = parseInt(value);

        switch (dateNumber) {
            case 1:
                return "Domingo"
            case 2:
                return "Lunes"
            case 3:
                return "Martes"
            case 4:
                return "Miercoles"
            case 5:
                return "Jueves"
            case 6:
                return "Viernes"
            case 7:
                return "Sabado"

        }

    }

    return (
        <div className="list-container">
            {
                data.map((item, index) => {
                    return (
                        (item.name != "default") ?
                            <div key={index} className="list-item">
                                <h1>{setDate(item.day)}</h1>
                                <h2>{item.name}</h2>
                                <h3>From: {item.from} hrs</h3>
                                <h3>To: {item.to} hrs</h3>
                                <DeleteCalendar id={item.__id} rendered={props.rendered} />
                            </div>
                            :
                            (data.length > 1) ?
                                <></>
                                :
                                <>No hay informacion</>
                    )
                })
            }
        </div>
    )
}