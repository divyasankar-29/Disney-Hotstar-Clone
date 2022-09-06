import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root : {
        height:"70px",
        backgroundColor:"#090b13",
        display : "flex",
        alignItems : "center",
        padding : "0 36px"
    },
    
    logo : {
        width : "80px",

    },

    navmenu : {
        display : "flex",
        flex : 1,
        marginLeft : "170px",
        alignItems : "center",
        '& a' : {
            display : "flex",
            alignItems : "center",
            padding : "0 20px",
            cursor : "pointer",

            '& img' : {
                height : "20px"
            },
             '& span' : {
                fontSize : "13px",
                letterSpacing : "1.42px"
             }
        }
    },

    userImg : {
        '& img' : {
            height : "45px",
            width : "45px",
            borderRadius : "50%",
            cursor : "pointer"
        }
    }
})

function Header(){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.logo}>
                <img src="/images/logo.svg" alt="Logo"/>
            </div>
            <div className={classes.navmenu}>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>


            </div>

            <div className={classes.userImg}>
                <img src="/photo.jpg" />
            </div>
        </div>
    )
}

export default Header