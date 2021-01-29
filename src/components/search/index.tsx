import React from 'react';

export default function Search({ value, onKeyPress, onChange }: any) {
    
    return (<input value={value} onKeyPress={onKeyPress} onChange={onChange} />)
}
