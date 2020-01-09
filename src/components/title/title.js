import React from 'react';
import "./titlecss.css"
import { makeStyles } from '@material-ui/core/styles';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import desktop from "../../assets/desktopnew.png"

// const useStyles = makeStyles(theme => ({
//   gridContainer:{
//     margin:"1% 2%",
//     paddingBottom:"2em",
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     borderBottom:"5px double #E98074",
//     gridColumnGap:"2%",
//     gridRowGap:"2%",
//   },
//   gridItem1:{
//     padding: "20%",
//     borderRadius:"50%",
//     borderLeft:"5px double #E98074",
//   },
//   gridItem2:{
//     padding: "20%",
    
    
//   }

// }));


export default function TitleComp() {
  // const classes = useStyles();

  return (
    <div className="gridContainer">
        <div className="gridItem1">
          <h1>
            <span>I'm </span><span style={{fontWeight:"normal", textDecoration:"underline"}}>Augustine Rodriguez</span>
          </h1>
          <h3>
            Software Engineer
          </h3>
        </div>
        <div className="gridItem2">
          <img src={desktop} />
        </div>
    </div>
  );
}