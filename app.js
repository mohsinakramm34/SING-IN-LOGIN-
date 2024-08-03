window.addEventListener("load", () => {
    if (localStorage.getItem("user")) {
      window.location.replace("./todo.html");
    }
  });







import { auth ,createUserWithEmailAndPassword ,db ,doc,setDoc, signInWithEmailAndPassword} from "./firebase.js"


const signUpHandler = async()=>{
    console.log("heeloo")
    try {
        const fullName = document.querySelector ("#fullName")
        const email = document.querySelector ("#email")
        const password = document.querySelector ("#password")
        const gender = document.getElementsByName ("gender")
        const userObj = {
            fullname : fullName.value,
            email : email.value,
        }

        for(let g of gender){
            if(g.checked){
                userObj.gender = g.value
            }
        }
        console.log("userObj",userObj);
        const responce = await createUserWithEmailAndPassword(
            auth,
            email.value,
            password.value
        );
        const uid = responce.user.uid;
        const userResponce = await setDoc(doc(db , "user" , uid),userObj)
        alert("user Succesfull sign in ")
        window.location.href = "./login.html"
        
    } catch (error) {
        console.log("error", error.message);
        alert(error.message);
    }
}

window.signUpHandler = signUpHandler






























