// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
getStorage
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Firebase Config
const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_PROJECT.firebaseapp.com",

projectId: "YOUR_PROJECT",

storageBucket: "YOUR_PROJECT.appspot.com",

messagingSenderId: "123456789",

appId: "YOUR_APP_ID"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

console.log("Firebase Connected Successfully");// ===============================
// AUTHENTICATION (Signup/Login)
// ===============================

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ---------- Signup ----------

window.signup = function () {

const email = document.getElementById("signupEmail").value;

const password = document.getElementById("signupPassword").value;

createUserWithEmailAndPassword(auth,email,password)

.then((userCredential)=>{

alert("Signup Successful");

console.log(userCredential.user);

})

.catch((error)=>{

alert(error.message);

});

};

// ---------- Login ----------

window.login = function () {

const email = document.getElementById("loginEmail").value;

const password = document.getElementById("loginPassword").value;

signInWithEmailAndPassword(auth,email,password)

.then((userCredential)=>{

alert("Login Successful");

console.log(userCredential.user);

window.location.href="admin.html";

})

.catch((error)=>{

alert(error.message);

});

};

// ---------- Logout ----------

window.logout = function(){

signOut(auth)

.then(()=>{

alert("Logged Out");

window.location.href="index.html";

})

.catch((error)=>{

alert(error.message);

});

};

// ---------- Current User ----------

onAuthStateChanged(auth,(user)=>{

if(user){

console.log("Logged In :",user.email);

}else{

console.log("No User Logged In");

}

});// ===============================
// FIRESTORE DATABASE
// ===============================

import {
collection,
addDoc,
getDocs,
doc,
updateDoc,
deleteDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ---------- Save PDF ----------

window.savePDF = async function(title,fileUrl){

try{

await addDoc(collection(db,"pdfs"),{

title:title,

file:fileUrl,

createdAt:serverTimestamp()

});

alert("PDF Saved Successfully");

}catch(err){

alert(err.message);

}

};

// ---------- Save MCQ ----------

window.saveMCQ = async function(question,a,b,c,d,answer){

try{

await addDoc(collection(db,"mcqs"),{

question:question,

optionA:a,

optionB:b,

optionC:c,

optionD:d,

answer:answer,

createdAt:serverTimestamp()

});

alert("MCQ Saved");

}catch(err){

alert(err.message);

}

};

// ---------- Save Current Affairs ----------

window.saveCurrentAffair = async function(title,content){

try{

await addDoc(collection(db,"currentAffairs"),{

title:title,

content:content,

createdAt:serverTimestamp()

});

alert("Current Affair Published");

}catch(err){

alert(err.message);

}

};

// ---------- Get PDFs ----------

window.loadPDFs = async function(){

const querySnapshot = await getDocs(collection(db,"pdfs"));

querySnapshot.forEach((doc)=>{

console.log(doc.id,doc.data());

});// ===============================
// FIREBASE STORAGE
// ===============================

import {
ref,
uploadBytes,
getDownloadURL,
deleteObject
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// ===============================
// Upload PDF
// ===============================

window.uploadPDF = async function(file){

try{

const storageRef = ref(storage,"pdfs/"+file.name);

await uploadBytes(storageRef,file);

const url = await getDownloadURL(storageRef);

alert("PDF Uploaded Successfully");

console.log(url);

return url;

}catch(error){

alert(error.message);

}

};

// ===============================
// Upload Image
// ===============================

window.uploadImage = async function(file){

try{

const storageRef = ref(storage,"images/"+file.name);

await uploadBytes(storageRef,file);

const url = await getDownloadURL(storageRef);

alert("Image Uploaded");

console.log(url);

return url;

}catch(error){

alert(error.message);

}

};

// ===============================
// Save YouTube Video
// ===============================

window.saveVideo = async function(title,link){

try{

await addDoc(collection(db,"videos"),{

title:title,

link:link,

createdAt:serverTimestamp()

});

alert("Video Saved");

}catch(error){

alert(error.message);

}

};

// ===============================
// Delete File
// ===============================

window.deleteFile = async function(path){

try{

const fileRef = ref(storage,path);

await deleteObject(fileRef);

alert("File Deleted");

}catch(error){

alert(error.message);

}

};

// ===============================
// Update PDF
// ===============================

window.updatePDF = async function(id,newTitle){

try{

const pdfRef = doc(db,"pdfs",id);

await updateDoc(pdfRef,{

title:newTitle

});

alert("PDF Updated");

}catch(error){

alert(error.message);

}

};// ===============================
// FINAL FIREBASE FEATURES
// ===============================

import {
setDoc,
getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ===============================
// Student Registration
// ===============================

window.registerStudent = async function(id,data){

try{

await setDoc(doc(db,"students",id),{

...data,

createdAt:serverTimestamp()

});

alert("Student Registered");

}catch(error){

alert(error.message);

}

};

// ===============================
// Payment Save
// ===============================

window.savePayment = async function(name,email,amount,txn){

try{

await addDoc(collection(db,"payments"),{

name:name,

email:email,

amount:amount,

transactionId:txn,

status:"Pending",

createdAt:serverTimestamp()

});

alert("Payment Submitted");

}catch(error){

alert(error.message);

}

};

// ===============================
// Dashboard Summary
// ===============================

window.dashboardSummary = async function(){

const pdfs = await getDocs(collection(db,"pdfs"));
const mcqs = await getDocs(collection(db,"mcqs"));
const students = await getDocs(collection(db,"students"));
const payments = await getDocs(collection(db,"payments"));

console.log("PDF :",pdfs.size);
console.log("MCQ :",mcqs.size);
console.log("Students :",students.size);
console.log("Payments :",payments.size);

};

// ===============================
// Admin Notification
// ===============================

window.showNotification=function(msg){

const box=document.createElement("div");

box.innerHTML=msg;

box.style.position="fixed";
box.style.top="20px";
box.style.right="20px";
box.style.background="#1565c0";
box.style.color="#fff";
box.style.padding="15px";
box.style.borderRadius="10px";
box.style.zIndex="9999";

document.body.appendChild(box);

setTimeout(()=>{

box.remove();

},3000);

};

// ===============================
// App Ready
// ===============================

console.log("🚀 Study With Muskan UPSC Firebase Ready");

showNotification("Firebase Connected Successfully");

};
window.uploadPDFNow = async function () {

const file = document.getElementById("pdfFile").files[0];
const title = document.getElementById("pdfTitle").value;

if (!file || !title) {
    alert("PDF और Title दोनों भरें");
    return;
}

try {
    const url = await uploadPDF(file);
    await savePDF(title, url);

    alert("✅ PDF Successfully Uploaded");

    document.getElementById("pdfTitle").value = "";
    document.getElementById("pdfFile").value = "";

} catch (err) {
    alert(err.message);
}

};
