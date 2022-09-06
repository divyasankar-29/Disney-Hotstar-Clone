import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";

const useStyles = makeStyles({
    root : {
        overflowX  :"hidden",
        minHeight : "calc(100vh-70px)",
        padding : "0 calc(3.5vw + 5px)",
        position : "relative",
        "&:before" : {
            backgroundImage : `url(/images/home-background.png)`,
            height : "100vh",
            content : '""',
            position : "absolute",
            top : "0",
            left : "0",
            right : "0",
            bottom : "0",
            zIndex : "-1"
        }
    }
})

function Home(){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <ImgSlider />
            <Viewers />
        </div>
    )
}
export default Home