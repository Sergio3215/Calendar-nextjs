import { useState, useEffect } from "react";

export default function AddCalendarComponent(props) {
    const [name, setName] = useState("");
    const [from, setFrom] = useState(new Date());
    const [to, setTo] = useState(new Date());
    const [day, setDay] = useState("0");
    const [message, setMessage] = useState("");


    const handlerSubmitted = async (e) => {
        e.preventDefault();
        try {
            const ftch = await fetch("/api/addData?name=Calendar",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({
                        data: {
                            name: name,
                            from: from,
                            to: to,
                            day: day
                        }
                    })
                });
            const res = await ftch.json();

            setName('');
            setFrom('');
            setTo('');

            if (res.success) {
                setMessage("Se ha creado la tarea o cita correspondiente.");
                props.rendered();
            }
            else {
                throw new Error("Hubo un error al crear la tarea o cita correspondiente.");
            }
        } catch (error) {
            setMessage(error.message);
        }
    }
    
    useEffect(() => {
        if(message != ""){
            let count = 0;
            const timeInter = setInterval(()=>{
                count++;
                if(count > 10) {
                    setMessage('');
                    clearInterval(timeInter);
                }
            },1000);
        }
    }, [message]);

    return (
        <form id="create--Calendar" onSubmit={(e) => handlerSubmitted(e)}>
            <div>
                <label htmlFor="name">Subject</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }} />
            </div>
            <div>
                <label htmlFor="name">From</label>
                <input
                    type="time"
                    id="from"
                    value={from}
                    onChange={(e) => {
                        setFrom(e.target.value);
                    }}
                />
            </div>
            <div>
                <label htmlFor="name">To</label>
                <input
                    type="time"
                    id="to"
                    value={to}
                    onChange={(e) => {
                        setTo(e.target.value);
                    }} />
            </div>
            <div>
                <label htmlFor="name">Days</label>
                <select onChange={(e)=>setDay(e.target.value)}>
                    <option value="0">Selecione un día</option>
                    <option value="1">Domingo</option>
                    <option value="2">Lunes</option>
                    <option value="3">Martes</option>
                    <option value="4">Miercoles</option>
                    <option value="5">Jueves</option>
                    <option value="6">Viernes</option>
                    <option value="7">Sabado</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Guardar" disabled={((name).trim() == "" || day == "0") ? true : false} />
            </div>
            {message}
        </form>
    )

}