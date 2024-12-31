import { SignUp } from "@clerk/clerk-react"

const Register = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
    <SignUp SignInUrl="/login"/>
  </div>
  )
}

export default Register