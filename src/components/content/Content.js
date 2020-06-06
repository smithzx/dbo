import React from 'react';
import {myStatementData} from '../../my-statement-data';
import {Checkbox} from './Checkbox';

const initialState = {
    showDate: true,
    showTime: true,
    showType: true,
    showIncome: true,
    showOutcome: true,
};

export function Content() {
    const [{showDate, showType}, setCheckboxState] = React.useState(initialState);
    const formatMonth = (month) => month < 10 ? '0' + month : month;

    const onChange = e => {
        const attr = e.target.getAttribute('dataId');
        const checked = e.target.checked;
        setCheckboxState(prevState => ({
            ...prevState,
            [attr]: checked,
        }));
    };

    return (
        <div className="App-content">
            <Checkbox
                checked={showDate}
                title={'Показать дату'}
                onChange={onChange}
                dataId={'showDate'}
            />
            <Checkbox
                checked={showType}
                title={'Показать тип'}
                onChange={onChange}
                dataId={'showType'}
            />
            <table>
                <tr>
                    {showDate && <th>
                        Дата
                    </th>}
                    {showType && <th>
                        Тип
                    </th>}
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
                            {showType && <td>
                                {el.type}
                            </td>}
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
