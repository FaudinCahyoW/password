function AuthLayoutConfirm(props){
    const { children } = props;
    return (
      <>
        <div className="main d-flex">
          <div className="left-confirm">
          </div>
          <div className="bg-light right-confirm">
             { children }
          </div>
        </div>
      </>
    );
}
export default AuthLayoutConfirm