import React, {useState, useEffect} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Slider from './slider'
import Slide from '@material-ui/core/Slide';
import ImagesGrid from './images_grid'
import Signup from './sign_up'

const useStyles = makeStyles((theme) => ({
  content: {
    // ...theme.mixins.gutters(),
   backgroundColor: theme.palette.background.paper,
  //  paddingTop: theme.spacing.unit * 2,
  //  paddingBottom: theme.spacing.unit * 2,
   height: 'calc( 60vh - 200px)',
   display: 'flex',
   flexDirection: 'column',
 },
 carousel: {
   display: 'flex', 
 },
 form: {
   display: 'flex',
   flexDirection: 'row',
   padding: '1rem'
 },
 table: {
  borderCollapse: 'collapse',
  width: '50%',
    '& td, th': {
      border: '1px solid #dddddd',
      textAlign: 'left',
      padding: '8px',
    },
    '& tr:nth-child(even)': {
      backgroundColor: '#dddddd'
    }
 },
 fieldset: {
   display: 'flex',
   margin: 'auto'
 }

})) 

const sliders = [
  { backgroundColor: '#ff7c7c', title: 'Exxample Slide1' },
  { backgroundColor: '#ffb6b9', title: 'Exxample Slide2' },
  { backgroundColor: '#8deaff', title: 'Exxample Slide3' },
  { backgroundColor: '#ffe084', title: 'Exxample Slide4' },
  { backgroundColor: '#d9d9d9', title: 'Exxample Slide5' },
];


const Home = (props)  =>{
  const classes = useStyles();
  const [current, setCurrent] = useState(sliders[0])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const next_index = index + 1 === sliders.length ? 0 : index + 1
      setCurrent(sliders[next_index])
      setIndex(next_index)
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className={classes.content}>
      <Slide in={true} direction={'right'}>
        <div>
          <Slider content={current} />
        </div>
      </Slide>
      <ImagesGrid/>

      <div className={classes.form}>
        <div className={classes.table}>
          <table>
            <tr>
              <th>Header</th>
              <th>Test1</th>
             
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
            </tr>
            
          </table>


        </div>
        <div className={classes.fieldset}>
         <Signup />
        </div>

      </div>
    </div>
  );
}
 

 
export default Home;