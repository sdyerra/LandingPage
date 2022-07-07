import './Newscalendartemp.css';
import './Nctpopup';
import { useState } from 'react';
import Nctpopup from './Nctpopup';
import arrow from './arrow.png';

export default function Newscalendartemp()
{
    const [ display, setDisplay ] = useState( 'none' )
    const [ style, setStyle ] = useState('arrow')

    function handleClick() {

        if ( display === 'none') {

            setDisplay( 'block' )
            setStyle('arrow2');

        } else {

            setDisplay( 'none' )
            setStyle('arrow');

        }

    }

    return (
        <div class="nctbox" onClick={handleClick}>
            <div style={{display:display}}>
                <Nctpopup></Nctpopup>
            </div>
            <div class="news">
                <p>NEWS UPDATES</p>
            </div>
            <div class="cal">
                <p>CALENDAR</p>
            </div>
            <div class="templ">
                <p>TEMPLATES</p>
                <img id={style} src={arrow} alt="none"></img>
            </div>
        </div>
    );
}