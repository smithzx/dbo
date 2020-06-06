import React from 'react';

export function Checkbox({onChange, checked, title, dataId}) {
    return (
        <>
            <input type="checkbox" onChange={onChange} title={title} checked={checked} dataId={dataId}/>
            <div>
                <label>{title}</label>
            </div>
        </>
    );
}
