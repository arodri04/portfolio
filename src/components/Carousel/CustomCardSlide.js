import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./card.css"

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CustomCardSlide(props) {
  const classes = useStyles();

   const checklang = (language) => {
    if (language == "Python") {
        console.log(language)
        console.log(false)
        return false;
    } if (language == "C") {
        console.log(language)
        console.log(false)
        return false;
    } else {
        console.log(true)
        return true;
    }
  }
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.props.image}
          title={props.props.imageTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.props.language}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className={checklang(props.props.language) ? "" : "hidden" }>
        <Button size="small" color="primary" className={checklang(props.props.language) ? "hidden" : "hidden" }>
          <a href={props.props.link}>Repository</a>
        </Button>
      </div>
    </Card>
  );
}