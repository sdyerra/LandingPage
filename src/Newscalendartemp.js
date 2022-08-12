import React from 'react';
import './Newscalendartemp.css';
import './Nctpopup';
import { useState } from 'react';
import Nctpopup from './Nctpopup';
import arrow from './arrow.png';


export default function Newscalendartemp()
{
    // Used to show and hide the popup
    const [ display, setDisplay ] = useState( 'none' )
    // Used to change the state of the arrow
    const [ style, setStyle ] = useState('arrow')
    // Used to make sure the box expands up
    const [ box, setBox ] = useState('nctbox')

    function handleClick() {
        // when popup is hidden
        if ( display === 'none') {

            setDisplay('block');
            setStyle('arrow2');
            setBox('nctbox2');

        } else {
            // when popup is visible
            setDisplay('none');
            setStyle('arrow');
            setBox('nctbox');

        }
    }
    // HTML below is for nctbox
    return (
        <div class={box} onClick={handleClick}>
            <div class="news">
                <div style={{marginLeft:"40px"}}>
                    <p>NEWS UPDATES</p>
                </div>
                <div style={{display:display}}>
                    <Nctpopup type="news"></Nctpopup>
                </div>
            </div>
            <div class="cal">
                <div style={{marginLeft:"40px"}}>
                    <p>CALENDAR</p>
                </div>
                <div style={{display:display}}>
                    <Nctpopup></Nctpopup>
                </div>
            </div>
            <div class="templ">
                <div id="templbox" style={{marginLeft:"40px"}}>
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