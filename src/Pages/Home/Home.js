import SignInForm from '../../Components/SignInForm'
import StepperSignUp from '../../Components/StepperSignUp'
import Navbar from '../../Components/Navbar'
import SignInModal from '../../Components/SignInModal'
import SignUpModal from '../../Components/SignUpModal'

export default function Home() {
    return (
      <div className="HomeBody">
        {/* <Navbar/> */}
        <SignInModal/>
        <SignUpModal/>
        {/* <StepperSignUp/> */}
      </div>
    );
  }