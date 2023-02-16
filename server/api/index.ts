import express from "express"
import cors from 'cors'
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore"
const app = express();
app.use(express.json())
app.use(cors())

const firebaseConfig = {
    apiKey: "AIzaSyDlScYuL98ie3tKlUYyh6-vX7bPg8ZNFO0",
    authDomain: "day29-4fec3.firebaseapp.com",
    projectId: "day29-4fec3",
    storageBucket: "day29-4fec3.appspot.com",
    messagingSenderId: "256472078999",
    appId: "1:256472078999:web:5d635b12d6f83f5a8867d2",
    measurementId: "G-GNJSLWTBCJ"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
app.get("/", async function (req,res) {
    const database = getFirestore(firebaseApp);
    const docRef = await getDocs(collection(database,"users"))
    var userList = docRef.docs.map(doc => doc.data())

    res.send(userList)
})

app.post("/", function (req,res) {
    // const database = getFirestore(firebaseApp);
    // const docRef = await getDocs(collection)
})
app.listen(3002)