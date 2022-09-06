import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    viewers : {
        marginTop : "30px",
        display : "grid",
        gridGap : "25px",   
        padding : "30px 0px 26px",
        gridTemplateColumns : "repeat(5,minmax(0, 1fr))",

        '& img':{
            width : "100%",
            height : "100%",
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
        },

        
    }
})

function Viewers(){
    const classes = useStyles();
    return(
        <div className={classes.viewers}>
            <img src="/images/viewers-disney.png" />
            <img src="/images/viewers-pixar.png" />
            <img src="/images/viewers-marvel.png" />
            <img src="/images/viewers-starwars.png" />
            <img src="/images/viewers-national.png" />
        </div>
    )
}
export default Viewers