import React, {useState} from "react";
import Style from './UserInterface.module.css';
import MenuUser from "./MunuUser/MunuUser";

const UserInterface  = () =>{

    const [showMenu, setMenu] = useState(false);

    return(
        <div className={Style.userButton}>
            <button onClick={()=>{setMenu(!showMenu)}}> User </button>
            {showMenu ? <MenuUser/> : null}
        </div>
    )
}

export default UserInterface;
