import { db, app, firebase } from '../../db';
import { getFirestore, collection, getDocs, getDoc, addDoc, updateDoc, doc, deleteDoc, query, where } from "firebase/firestore";


export default async function handler(req, res) {
    const { name, id } = req.query;
    const nameDB = name;
    try {
        if (nameDB == undefined) {
            throw new Error("El nombre de la base de datos no esta declarado");
        }
        //Delete
        await deleteDoc(doc(db, nameDB , id))

        res.json({ success: true })
    }
    catch (error) {
        console.log(error);
        res.json({ success: false })
    }
}

/*
    //Post
  try {
    const docRef = await addDoc(collection(db, "Task"), {
      name: "Prueba 1",
      date: "25/08/2022"
    });
    console.log("Document written with ID: ", docRef.id);

    //Update
    const docUpdated = await updateDoc(doc(db, "Task", docRef.id),{
      __id:docRef.id
    })

    //Get One
    try {
    const docGetOne = await getDoc(doc(db, "Task", docRef.id))
    console.log(docGetOne.data());
    } catch (err) {
      console.log(err)
    }

    //Get One by data
    // const taskCol1 = collection(db, 'Task');
    // const queryConsultant = query(taskCol1, where('name',"==","Prueba"));
    // const taskSnapshot1 = await getDocs(queryConsultant);
    // let taskList1;
    // taskSnapshot1.forEach(doc => taskList1 = doc.data());
    // console.log(taskList1)
    // console.log(taskList1 != undefined)


    //Delete
    await deleteDoc(doc(db,"Task",docRef.id))

  } catch (e) {
    console.error("Error adding document: ", e);
  }
    //Get
  const taskCol = collection(db, 'Task');
  const taskSnapshot = await getDocs(taskCol);
  const taskList = taskSnapshot.docs.map(doc => doc.data());
  res.status(200).json(taskList)
 */