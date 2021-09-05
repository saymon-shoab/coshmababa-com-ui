import React, {   useContext, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import toast  from 'react-hot-toast';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import { Toaster } from 'react-hot-toast';
import firebaseConfig from './firebase.Config'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { UserContext } from '../../../App';
import swal from '@sweetalert/with-react';



if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
    const { setLoggedInUser}= useContext(UserContext);
    const [showModal, setShowModal] = useState(true);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn:false,
        name:'',
        email:'',
        password:'',
        photo:'',
    })
    
   
    const history = useHistory();
     const location = useLocation();
     const { from } = location.state || { from: { pathname: "/" } };
 

   
 


    const provider = new firebase.auth.GoogleAuthProvider();


    const googleSignIn = () => {
      const loading = toast.loading('Please wait...');
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
             toast.dismiss(loading);
             handleResponse(res)
            let {displayName,photoURL,email}=res.user
            const signedInUser ={
                isSignedIn:true,
                name:displayName,
                email:email,
                photo:photoURL,
            }
            setUser(signedInUser)
            setLoggedInUser(signedInUser);
            history.replace(from);
            console.log(displayName,photoURL,email)
        })
        .catch(err=>{
            console.log(err.message)
            toast.dismiss(loading);
            toast.error(err.message)
        })
    }

    const handleSignOut =() => {
        firebase.auth().signOut()
        .then(res => {
            console.log(res)
            // Sign-out successful.
            const signedOutUser ={
                isSignedIn:false,
                name:'',
                email:'',
                photo:'',
                error:'',
                success:false
            }
            setUser(signedOutUser)
          }).catch((error) => {
            // An error happened.
            console.log(error)
          });
    }

    const handleBlur =(event)=>{
        let isFormValid = true;
        console.log(event.target.name, event.target.value);
        if(event.target.name==="email"){
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value)
           console.log(isFormValid)
        }
        if(event.target.name === "password"){
            const passwordLength = event.target.value.length > 6;
            const passwordSasNumber = /\d{1}/.test(event.target.value)
            isFormValid =   passwordLength && passwordSasNumber;
            console.log(isFormValid)
        }
        if(isFormValid){
          const newUserInfo = {...user}
          newUserInfo[event.target.name] = event.target.value;
          setUser(newUserInfo)
        }
        
    }
 
const handleSignUp = (e) => {
    const loading = toast.loading('Please wait...');

    if(newUser && user.email && user.password){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            toast.dismiss(loading)
            handleResponse(res)
          const newUserInfo = {...user};
          newUserInfo.error = "";
          newUserInfo.success =true;
          setUser(newUserInfo);
          updateUserName(newUserInfo)
        
          // ...
        })
        .catch((error) => {
        //   toast(error.message);
        toast.dismiss(loading)
        toast.error(error.message)
          console.log(error)
          const newUserInfo ={...user} 
          newUserInfo.error = error.message
          newUserInfo.success=false;
         setUser(newUserInfo)
        
          // ..
        });
       }
       e.preventDefault();
}


    
const handleSignIn = (e) => {
    const loading = toast.loading('Please wait...');

    if(!newUser && user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          // Signed in
          toast.dismiss(loading)
          handleResponse(res)
          const newUserInfo = {...user};
          newUserInfo.error = "";
          newUserInfo.success =true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
       
        //   history.replace(from);
         
          // ...
        })
        .catch((error) => {
          console.log(error)
          toast.dismiss(loading)
          toast.error(error.message)
          const newUserInfo ={...user} 
          newUserInfo.error = error.message
          newUserInfo.success=false;
         setUser(newUserInfo)
        });
       }
       e.preventDefault();
}

const updateUserName = name =>{
    const user = firebase.auth().currentUser;
  
    user.updateProfile({
      displayName: "Jane Q. User",
    }).then(() => {
      // Update successful
      // ...
    }).catch((error) => {
       
      // An error occurred
      // ...
    });  
  }

  const handleResponse = (res) => {
    // setLoggedInUser(res);
    // setJWTToken();
    setShowModal(false);
    history.replace(from);
    // toast.success('Successfully Logged In!');
  
}

    return (
        <>
        <Modal
        show={showModal}
        onHide={() => {
            setShowModal(false);
            history.replace({ pathname: "/" });
        }}
        size="lg"
        centered>
        <Modal.Header closeButton />
        <Modal.Body>
            <div className={newUser ? "cont s--signup" : "cont"}>
                <div className="form sign-in">
                    <h2>Sign in</h2>
                    <form onSubmit={handleSignIn} >
                        <label>
                            <span>Email</span>
                            <input onBlur={handleBlur}  name="email"  type="email"  required  />
                        </label>
                        <label>
                            <span>Password</span>
                            <input  onBlur={handleBlur}   name="password"  type="password"   required />
                        </label>
                        <p className="forgot-pass">Forgot password?</p>
                        <button type="submit" className="submit">Sign In</button>
                        <button onClick={googleSignIn} type="button" className="fb-btn">Connect with <span>Google</span></button>
                    </form>
                </div>
                <div className="sub-cont">
                    <div className="img">
                        <div className="img__text m--up">
                            <h2>New here?</h2>
                            <p>Sign up and discover great amount of new opportunities!</p>
                        </div>
                        <div className="img__text m--in">
                            <h2>One of us?</h2>
                            <p>If you already has an account, just sign in. We've missed you!</p>
                        </div>
                        <div onClick={() => setNewUser(!newUser)} className="img__btn">
                            <span className="m--up">Sign Up</span>
                            <span className="m--in">Sign In</span>
                        </div>
                    </div>
                    <div className="form sign-up">
                        <h2>Create Account</h2>
                        <form onSubmit={handleSignUp} >
                            <label>
                                <span>Name</span>
                                <input onBlur={handleBlur} name="name" type="text"   required />
                            </label>
                            <label>
                                <span>Email</span>
                                <input onBlur={handleBlur} name="email" type="email"   required />
                            </label>
                            <label>
                                <span>Password</span>
                                <input onBlur={handleBlur} name="password" type="password"   required />
                            </label>
                            <button type="submit" className="submit">Sign Up</button>
                            <button onClick={googleSignIn} type="button"  className="fb-btn">Join with <span>Google</span></button>
                        </form>
                    </div>
                </div>
            </div>
            < Toaster />
            {/* { user.success &&
             
             swal(<p style={{color:'green'}}>User {newUser ?"created" : "logged In"} successfully</p>)
          } */}
        </Modal.Body>
    </Modal>
    
    </>
    );
};

export default Login;