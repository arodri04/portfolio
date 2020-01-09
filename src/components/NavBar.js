import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    background: '#EAE7DC'
  },
  tool: {
    display: 'flex',
    justifyContent: 'space-evenly',
    background: '#EAE7DC'
  },
  name: {
      color: "black"
  },
  links: {
    display:"flex",
    justifyContent:"space-between",
    width:"75%",
    margin:"0px",
    paddingLeft:"5px"
    
    
  },
  link: {
      textDecoration:"none",
      transition: ".5s"
  },
  listItem: {
    listStyle:"none",
  },
  spans: {
      transition: "transform .5s"
  },
  spanOdd1: {
      width:"100%",
      height: "1px",
      background:"#262626",
      top:"0",
      left:"0",
      
  }

}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar className={classes.tool}>
            <Typography variant="h6" className={classes.name}>
                Rodriguez
            </Typography>
            <Typography variant="h6" className={classes.name}>
            <a href="https://drive.google.com/file/d/1abKexvazOUXnH5oU4XROUqeGGN3UYFXd/view?usp=sharing" className={classes.link}>Resume</a>
            </Typography>
            <div style={{width:"20%"}}>
                <ul className={classes.links}>
                    <li className={classes.listItem}>
                        <a href="https://github.com/arodri04/" className={classes.link}>
                            <GitHubIcon />
                        </a>
                    </li>
                    <li className={classes.listItem}>
                        <a href="https://www.linkedin.com/in/augustine-rodriguez-954028189/" className={classes.link}>
                            <LinkedInIcon />

                        </a>
                    </li>
                </ul>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}