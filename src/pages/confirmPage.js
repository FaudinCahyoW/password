import "../App.css";
import ConfirmEmail from "../components/confirmEmailComponent";
import AuthLayoutConfirm from "../layouts/authLayoutConfirm";

function ConfirmPage(){
    return(
        <AuthLayoutConfirm>
            <ConfirmEmail/>
        </AuthLayoutConfirm>
    )
}
export default ConfirmPage