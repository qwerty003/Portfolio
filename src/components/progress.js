import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    width: '100%',
    zIndex: 5,
  },
  progbar: {
    height: '4px',
    ['@media (max-width:550px)']: {
      height: '5px',
    },
  }
});


export default function ProgressBar() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {

    let computeProgress = () => {
      //scrollTop gives length of window that has been scrolled
      const scrolled = document.documentElement.scrollTop;
      //scrollHeight gives total length of the window and clientHeight gives the length of viewport
      const scrollLength = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = 100*scrolled/scrollLength;

      setProgress(progress);
    }

    //Adding event listener on mounting
    window.addEventListener("scroll", computeProgress);

    //Removing event listener upon unmounting
    return () => window.removeEventListener("scroll", computeProgress);
  });

  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={progress} className={classes.progbar} />
    </div>
  );
}

