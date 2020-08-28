import React from "react";
import SlideStyle from './Slide.module.css';

const Slide = (props) =>{

    function changeSlideRight(){
        props.dispatch({type:'CHANGE_INDEX_OF_SLIDE',index:props.data.indexOfSlide + 1});
        if(props.data.slideData.length -1 <= props.data.indexOfSlide){
            props.dispatch({type:'CHANGE_INDEX_OF_SLIDE',index:0})
        }
    }
    function changeSlideLeft(){
        props.dispatch({type:'CHANGE_INDEX_OF_SLIDE',index:props.data.indexOfSlide - 1});
        if(props.data.indexOfSlide <= 0){
            props.dispatch({type:'CHANGE_INDEX_OF_SLIDE',index:props.data.slideData.length-1})
        }
    }

    return(
        <div className={SlideStyle.slide}
             style={{backgroundImage: ` url('${props.data.slideData[props.data.indexOfSlide].photo}')`,
                 backgroundSize: 'cover',backgroundPosition: 'center'}}>
            <div>
                <i className={SlideStyle.left} onClick={changeSlideLeft}> </i>
            </div>
            <div className={SlideStyle.text_in_slide}>
                <a href={"https://jabko.ua/"} target={"_blank"} className={SlideStyle.btn}>
                    {props.data.slideData[props.data.indexOfSlide].textOfButton}
                </a>
            </div>
            <div>
                <i className={SlideStyle.right} onClick={changeSlideRight}> </i>
            </div>
        </div>
    )
}

export default Slide;