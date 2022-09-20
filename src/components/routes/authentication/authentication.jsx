import './authentication.styles.scss'
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";


const Authentication = ()=>{
  
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

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication;