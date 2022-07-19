import './Newscalendartemp.css';
import './Nctpopup';
import { useState } from 'react';
import Nctpopup from './Nctpopup';
import arrow from './arrow.png';

export default function Newscalendartemp()
{
    const [ display, setDisplay ] = useState( 'none' )
    const [ style, setStyle ] = useState('arrow')
    const [ box, setBox ] = useState('nctbox')

    function handleClick() {

        if ( display === 'none') {

            setDisplay('block');
            setStyle('arrow2');
            setBox('nctbox2');

        } else {

            setDisplay('none');
            setStyle('arrow');
            setBox('nctbox');

        }

    }
    return (
        <div class={box} onClick={handleClick}>
            <div class="news">
                <div>
                    <p>NEWS UPDATES</p>
                </div>
                <div style={{display:display}}>
                    <Nctpopup></Nctpopup>
                </div>
            </div>
            <div class="cal">
                <div>
                    <p>CALENDAR</p>
                </div>
                <div style={{display:display}}>
                    <Nctpopup></Nctpopup>
                </div>
            </div>
            <div class="templ">
                <div id="templbox">
                    <p>TEMPLATES</p>
                    <img id={style} src={arrow} alt="none"></img>
                </div>
                <div style={{display:display}}>
                    <Nctpopup></Nctpopup>
                </div>
            </div>
        </div>
    );
}