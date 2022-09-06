import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main.css"
const useStyles = makeStyles({  
    carousel : {
       
        marginTop : "20px",
        cursor : "pointer",
            '& img' : {
                border : "4px solid transparent",
                width : "100%",
                height : "100%",
                borderRadius : "5px",
                boxShadow : "rgb( 0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px",
                transitionDuration : "300ms",

                "&:hover" : {
                    border : "4px solid rgba(249,249,249,0.8)"
                }
            }
    }
})

function ImgSlider(){

    const classes = useStyles();

    let settings  = {
        dots  : true,
        infinite : true,
        speed : 500,
        slidesToShow : 1,
        slidesToScroll : 1,
        autoplay : true,
    }

    return(
        <div className={classes.carousel}>
            <Slider {...settings}>
                <div>
                <img src="/images/slider-badging.jpg" alt="slider" />
                </div>
                <div>
                <img src="/images/slider-badag.jpg" alt="slider" />
                </div>
            </Slider>
            
        </div>
    )
}
export default ImgSlider