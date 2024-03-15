import React from "react";
function Header(){
    let [, , userLoginStatus, setUserLoginStatus]=
        useContext(usingLogicContext);

        function userLogout(){
            setCurrentUser({})
            setUserLoginStatus(false)
        }
    return(
        <div>
        <div>Header</div>
        <ul ></ul>
        </div>
    )
}
export default Header;