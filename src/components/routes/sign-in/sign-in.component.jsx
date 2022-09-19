import { auth,createUserDocumentFromAuth, signInWithGooglePopup,signInWithGoogleRedirect } from "../../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../sign-up-form/sign-up-form.component";


const SignIn = ()=>{
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(()=>{async function fetchData(){
  //   const response = await getRedirectResult(auth);
  //   console.log(response);
  //   if(response){
  //     const userDocRef = await createUserDocumentFromAuth(response.user)
  //   }
  // }
  //   fetchData();
  // } ,[]);

  async function logGoogleUser () {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
  }


  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google popup
      </button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  )
}

export default SignIn;