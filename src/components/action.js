import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';


const style = {
    margin: 0,
    right: 20,
    bottom: 20,
    position: 'fixed',
};
const handleClick = function () {
    window.scrollTo(0, 0);
}

export default function Action() {
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
        let computeAction = () => {
            const showAction = (document.documentElement.scrollTop > 600);
            setShow(showAction);
        }

        //Adding event listener on mounting
        window.addEventListener("scroll", computeAction);

        //Removing event listener upon unmounting
        return () => window.removeEventListener("scroll", computeAction);
    });
    return (
        <div>
            {show ? <Fab style={style} color="secondary" onClick={() => { handleClick(); }}><NavigationIcon /></Fab> : <div></div>}
        </div>
    );
}