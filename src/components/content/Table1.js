import React from 'react';
import {myStatementData} from '../../my-statement-data';

export function Table({showDate, showType}) {
    const formatMonth = (month) => month < 10 ? '0' + month : month;
    return (
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
    );
}
