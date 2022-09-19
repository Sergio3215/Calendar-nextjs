export default function DeleteCalendar(props){

    const deleteRecords = async()=>{
        const res = await fetch("/api/deleteData?name=Calendar&id="+props.id);
        const success = await res.json();
        // console.log(success)
        props.rendered()
    }

    return(
        <button onClick={deleteRecords}>Delete</button>
    )

}