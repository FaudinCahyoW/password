import "../App.css";
import NewPassword from "../components/newPassComponent";
import AuthLayoutConfirm from "../layouts/authLayoutConfirm";

function NewPassPage(){
    return(
        <AuthLayoutConfirm>
            <NewPassword/>
        </AuthLayoutConfirm>
    )
}
export default NewPassPage