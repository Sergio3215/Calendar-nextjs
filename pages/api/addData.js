import { db, app, firebase } from '../../db';
import { getFirestore, collection, getDocs, getDoc, addDoc, updateDoc, doc, deleteDoc, query, where } from "firebase/firestore";
 /**
  * fetch("http://localhost:3000/api/addData?name=Calendar",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({data:{name:"default 2"}})
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })
  */

export default async function handler(req, res) {
    const { name } = req.query;
    const {data} = req.body;
    const nameDB = name;
    console.log(req.body)
    console.log("data showed")
        //Post
        try {
            const docRef = await addDoc(collection(db, nameDB), data);
            console.log("Document written with ID: ", docRef.id);

            //Update
            const docUpdated = await updateDoc(doc(db, nameDB, docRef.id), {
                __id: docRef.id
            })
            res.json({ success: true })
        }
        catch (error) {
            // console.log(error);
            res.json({ success: false })
        }
    }