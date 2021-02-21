import React, {useState} from "react";
import Style from './Photos.module.css';
import {useDispatch, useSelector} from "react-redux";


const Photos = () =>{

    const data = useSelector(state=>state.AdminPage);
    const dispatch = useDispatch();

    const [next,showNext] = useState(false);
    const [showMenu,setStatus] = useState(false);


    const Menu = () =>{
        const [color,setColor] = useState("");
        const submitColors = data.adminColorContainer.map((item)=>{
            return(
                <div style={{width:"20px",height:"20px",borderRadius:"5px",backgroundColor:`${item}`}}/>
            )
        });

        function addColor(){
            const catalog = JSON.parse(JSON.stringify(data.adminColorContainer));
            catalog.push(color);
            dispatch({type:"ADD_ELEMENT_TO_COLOR_ARRAY",array:catalog});
            console.log(data.adminColorContainer);
        }

        return(
            <div className={Style.menu}>
                <div className={Style.catalog_of_colors}>
                    {submitColors}
                </div>
                <div className={Style.container_of_menu_submit}>
                    <input placeholder={"Input color"} value={color} onChange={(event)=>{setColor(event.target.value)}}/>
                    <button onClick={()=>{addColor()}}>OK</button>
                </div>
            </div>
        );
    }

    return(
        <div className={Style.photos_container}>
            <div className={Style.top}>
                <div className={Style.container_of_menu}>
                    <button onClick={()=>{setStatus(!showMenu)}}>Add color</button>
                    {showMenu ? <Menu /> : null}
                </div>

            </div>
            <div className={Style.content}>
                <input placeholder={"Input photo"}/>
                <input placeholder={"Input photo"}/>
                <input placeholder={"Input photo"}/>
            </div>
            <div className={Style.next}>
                <button>Set Photos</button>
                <button onClick={()=>{showNext(true)}}>Next</button>
            </div>
        </div>
    )
}

export default Photos
