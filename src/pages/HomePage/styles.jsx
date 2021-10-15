import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

// image
import backimg from '../../images/backimg1.jpg'
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar:{
    backgroundColor:'white'
  },
  button: {
    marginRight:'10%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  cover: {
    marginTop:'100px',
    height: "100vh",
    backgroundImage: `url(${backimg})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  imageContent: {
    color: "#fff",
    zIndex: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0,0,0,0.4)",
    width: "100%",
    padding: "2rem",
  },
  title: {
    flexGrow: 1,
    marginLeft: '5%',
  },
  imageContent: {
    color: "#fff",
    zIndex: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    width: "50%",
    padding: "2rem",
  },
  grid: {
    paddingTop: "2rem",
    backgroundColor: grey[100],
    flexGrow: 1,
    paddingBottom: "2rem",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "3rem",
    backgroundColor: grey[900],
    color: "#fff",
    textTransform: "capitalize",
    textAlign: "center",
  },
  footerItem: {
    fontSize: "1.4rem",
    letterSpacing: 2,
    textTransform: "capitalize",
    paddingBottom: "1.3rem",
  },
  left:{
    marginTop:'5%',
    marginLeft:'150px',
    height:'600px',
    // backgroundColor: '#000000',
  },
  right:{
    marginTop:'50px',
    height:'400px',
  },
  body:{
      // backgroundColor:'white',
      backgroundImage:'url(${cover})',

  },
  paper:{
    marginLeft:'30%',
    marginTop:'10%',
    height:'200px',
    width:'200px',
    backgroundColor:'white'
  },
  even:{
    backgroundColor:'white'
  },
  odd:{
    backgroundColor:'#b0bec5'
  },
}));