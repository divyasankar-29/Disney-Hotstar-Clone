import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles=makeStyles({
    root:{
        minHeight : "calc(100vh - 70px)",
        padding : "0 calc(3.5vw + 5px)",
        position : "relative",
        opacity : "0.8",
        width : "100%",
        height : "100%",
        objectFit : "cover",
        zIndex : "-1",
        backgroundImage:"url(/detailsBg.jpeg)",
    "& img" : {
        height : "35vh",
        width : "30vh",
        marginTop:"20px"
        
    }
        
    },
})

function Details(){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <img src="/title.png" />
        </div>
    )
}
export default Details