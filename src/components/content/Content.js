import React from 'react';
import {Checkbox} from './Checkbox';
import {Table} from './Table1';
import {TableGroup} from './Table2';

const initialState = {
    showDate: true,
    showTime: true,
    showType: true,
    showIncome: true,
    showOutcome: true,
};

export function Content() {
    const [{showDate, showType}, setCheckboxState] = React.useState(initialState);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const onChangeCheckbox = e => {
        const attr = e.target.getAttribute('dataId');
        const checked = e.target.checked;
        setCheckboxState(prevState => ({
            ...prevState,
            [attr]: checked,
        }));
    };

    const onChangeSelect = e => {
        setSelectedIndex(e.target.selectedIndex);
    };

    return (
        <div className="App-content">
            <Checkbox
                checked={showDate}
                title={'Показать дату'}
                onChange={onChangeCheckbox}
                dataId={'showDate'}
            />
            <Checkbox
                checked={showType}
                title={'Показать тип'}
                onChange={onChangeCheckbox}
                dataId={'showType'}
            />
            <select onChange={onChangeSelect}>
                <option>Без группировки</option>
                <option>С группировкой</option>
            </select>
            {selectedIndex === 0 ? (
                <Table
                    showDate={showDate}
                    showType={showType}
                />
            ) : (
                <TableGroup/>
            )}
        </div>
    );
}
