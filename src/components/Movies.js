import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    movies:{
            display : "grid",
            gridGap : "25px",
            gridTemplateColumns : "repeat(4,minmax(0,1fr))",
            marginBottom:"30px",
    '& img':{
        width : "100%",
        height : "100%",
        cursor : "pointer",
        objectFit : "cover",
        border : "3px solid rgba(249,249,249,0.1)",
        borderRadius : "10px",
        cursor : "pointer",
        boxShadow : "rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px",
        '&:hover' : {
            transform : "scale(1.05)",
            borderColor : "rgba(249,249,249,0.8)",
            boxShadow : "rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px"
        }
    }
}

   
})

function Movies(){

    const classes = useStyles();
    return(
        <div>
            <h4>Recommended for You</h4>
            <div className={classes.movies}>
                <img src="/sampleImage.jpeg"/>
                <img src="/sampleImage.jpeg"/>
                <img src="/sampleImage.jpeg"/>
                <img src="/sampleImage.jpeg"/>
            </div>
        </div>
    )
}
export default Movies