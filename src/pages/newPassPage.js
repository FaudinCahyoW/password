import "../App.css";
import NewPassword from "../components/newPassComponent";
import AuthLayouts from "../layouts/authLayout";

function NewPassPage(){
    return(
        <AuthLayouts>
            <NewPassword/>
        </AuthLayouts>
    )
}
export default NewPassPage