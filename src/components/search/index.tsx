import React from 'react';

export default function Search({ value, onKeyPress, onChange }: any) {
    return (<input 
            className="search" 
            value={value} 
            onKeyPress={(e)=> { if(e.key === 'Enter') { onKeyPress(value); } }}  
            onChange={(e)=>onChange(e.target.value)}  
        />)
}
