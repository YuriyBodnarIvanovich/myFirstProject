import React, {useEffect} from 'react';
import MacStyle from './Mac.module.css';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import MacItems from "./MacItems/MacItems";
import MacPage from "./MacPage/MacPage";

const Mac = () =>{

    useEffect(() => {
        axios.get('http://localhost:3001/mac').then((response) => {
            let resData = response.data;
            console.log("Mac page");
            console.log(resData);
            dispatch({type:'PUT_ARRAY',newArray:resData});
        });
    }, []);
    const data = useSelector(state=>state.macPage);
    const dispatch = useDispatch();
    const catalog =  data.imgData.map((element,index)=><MacItems  number={index}
                              name={element.name}
                              price={element.price}
                              photo={element.photo}
                              characters={element.characters}
                              dispatch={dispatch}
                              data={data}/>)

    const dataApple = useSelector(state =>state.ApplePage);
    console.log("amount: " + catalog.length)
    return(
        <div className={MacStyle.content}>
            {data.macbookOpen ?
                <MacPage data={data} dispatch={dispatch}/>
                :
                <div >
                    <div className={MacStyle.forItem}>
                        <div className={MacStyle.items}>
                            {catalog}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
export default Mac;
