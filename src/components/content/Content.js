import React from 'react';
import {myStatementData} from '../../my-statement-data';

export function Content() {
    const [showDate, setShowDate] = React.useState(true);
    const formatMonth = (month) => month < 10 ? '0' + month : month;

    const onChange = e => {
        setShowDate(e.target.checked);
    };

    return (
        <div className="App-content">
            <input type="checkbox" onChange={onChange} title={'Показать дату'} checked={showDate}/>
            <div className="App-label-container">
                <label>Показать дату</label>
            </div>
            <table>
                <tr>
                    {showDate && <th>
                        Дата
                    </th>}
                    <th>
                        Тип
                    </th>
                    <th>
                        Приход
                    </th>
                    <th>
                        Расход
                    </th>
                </tr>
                {myStatementData.map(el => {
                    const tableDate = new Date(el.date).getDate() + '.' + formatMonth(new Date(el.date).getMonth() + 1) + '.' + new Date(el.date).getFullYear();
                    return (
                        <tr>
                            {showDate && <td>
                                {tableDate}
                            </td>}
                            <td>
                                {el.type}
                            </td>
                            <td className={'green'}>
                                {el.amount > 0 ? el.amount : ''}
                            </td>
                            <td className={'red'}>
                                {el.amount < 0 ? -el.amount : ''}
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}
