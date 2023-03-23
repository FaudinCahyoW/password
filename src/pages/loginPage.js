import "../App.css";
import LoginFormComponent from "../components/loginformComponent";
import AuthLayouts from "../layouts/authLayout";


function LoginPage() {
  return (
      <AuthLayouts>
        <LoginFormComponent />
      </AuthLayouts>
    );
}
export default LoginPage;
