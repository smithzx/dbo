import React from 'react';
import {Logo} from '../Logo';
import {Paragraph} from './Paragraph';
import {Anchor} from '../Anchor';

export function Header() {
    const [text, setText] = React.useState('Система выписок ДБО');

    setInterval(() => {
        setText(new Date().toISOString());
    }, 1000);

    return (
        <header className="App-header">
            <Paragraph text={text}/>
            <Anchor href={'https://reactjs.org'} text={'Learn React'}/>
            <Anchor href={'https://google.ru'} text={'Open Google'}/>
        </header>
    );
}
