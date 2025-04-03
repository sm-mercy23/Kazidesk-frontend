import { AuthLayout } from "../components/auth/AuthLayout";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";
// import { ForgotPasswordForm } from "../components/auth/ForgotPasswordddForm";


const Index = () => {
  return (
    <AuthLayout>
      <ForgotPasswordForm onClose={()=>{}}/>
    </AuthLayout>
  );
};

export default Index;
