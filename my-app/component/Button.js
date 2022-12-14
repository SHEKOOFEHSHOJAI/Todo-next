import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    
  },
});

export default function MyButton({size,value,type,color}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button size={size} type={type} color={color} >{value}</Button>
     
    </div>
  )
}
