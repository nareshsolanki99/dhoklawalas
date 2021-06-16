import React, { useEffect, useState } from "react"

const MyCarousal = (props)=>{
        const [slideIndex,setSlideIndex] = useState(0);

        useEffect(()=>{

            const timer = setInterval(()=>{
                if(slideIndex > props.items.length-2){
                    setSlideIndex(0)
                }else if(setSlideIndex < 0){
                    setSlideIndex(props.items.length)
                }else{
                    setSlideIndex(slideIndex+1);
                }
            },5000);

            return ()=>{
                clearInterval(timer);
            }

        })

        return <div className="carousal-container">
                {props.items.map((item,index) =>{
                    return <a href=""><div className={"slides"} key={index}>
                        {slideIndex === index && <img key={index} src={item.src} alt={item.altText}/>}
                    </div></a>
                })}
            </div>

}

export default MyCarousal