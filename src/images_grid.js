import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import image1 from './images/bike.jpg'
import image2 from './images/breakfast.jpg'
import image3 from './images/burgers.jpg'
import image4 from './images/camera.jpg'
import image5 from './images/hats.jpg'
import image6 from './images/honey.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    margin: '-0.5px',
    border: '2px solid',
    borderColor: 'grey',
    borderStyle: 'ridge',
  },
  gridList: {
    width: '100%',
    height: '80vh',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));


  const tileData = [
    {
      img: image1,
      title: 'Image1',
      author: 'author',
      cols: 2,
    },
    {
      img: image2,
      title: 'Image1',
      author: 'author',
      cols: 3,
    },
    {
      img: image3,
      title: 'Image1',
      author: 'author',
      cols: 4,
    },
    {
      img: image4,
      title: 'Image1',
      author: 'author',
      cols: 7,
    },
    {
      img: image5,
      title: 'Image1',
      author: 'author',
      cols: 9,
    },
    {
      img: image6,
      title: 'Image1',
      author: 'author',
      cols: 12,
    },
  ];
 

  export default function AdvancedGridList() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <GridList cellHeight={250} spacing={1} className={classes.gridList}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                actionIcon={
                  <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }