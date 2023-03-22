import "../App.css";
import FormComponent from "../components/formComponent";

function LoginPage() {
  return (
    <div className="main d-flex">
      <div className="left"></div>
      <div className="bg-light right">
        <FormComponent />
      </div>
    </div>
  );
}
export default LoginPage;
