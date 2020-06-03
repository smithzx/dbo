import React from 'react';
import {Anchor} from '../Anchor';

export function Footer() {
    return (
        <footer className="App-footer">
            <Anchor href={'https://reactjs.org'} text={'Learn React'}/>
            <Anchor href={'https://google.ru'} text={'Open Google'}/>
        </footer>
    );
}
