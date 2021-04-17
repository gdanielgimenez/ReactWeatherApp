import {makeStyles, fade}  from '@material-ui/core/styles';

const  useStyles = makeStyles ((theme)=> ({
 container: {},
 title:{
    color:"snow",
    fontWeight:"bold",
    paddingTop:"50px",
    paddingBottom:"15px"
    },
    root: {
      maxWidth: 250,
      background:"snow",
      borderRadius:"25px",
    },
    outlinedRoot :{
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: "azure",
        }
    },
    button:{
        backgroundColor:"royalblue",
        '&:hover': {
            backgroundColor: "lightblue",
        }
    },
    text:{
        color:"snow"
    },
      media: {
        height:100,
      }
}))

export default useStyles;