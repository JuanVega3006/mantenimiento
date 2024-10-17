 // Importar Firebase
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
 //import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js"

 // Configuración de Firebase
 const firebaseConfig = {
     apiKey: "AIzaSyDk4voe4cEpVPrlU3tR7d85WnsouB_-qTg",
     authDomain: "maqtenimiento-sj.firebaseapp.com",
     databaseURL: "https://maqtenimiento-sj-default-rtdb.firebaseio.com/",
     projectId: "maqtenimiento-sj",
     storageBucket: "maqtenimiento-sj.appspot.com",
     messagingSenderId: "376139534270",
     appId: "1:376139534270:web:7900c4ea44a2982bd933ef"
 };

 // Inicializar Firebase
 const app = initializeApp(firebaseConfig);