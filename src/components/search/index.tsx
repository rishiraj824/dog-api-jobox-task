import React from 'react';

type Props = {
    value: string;
    onKeyPress: (x:string) => void;
    onChange: (x:string) => void;
};

export default function Search(props: Props) {
    const { value, onKeyPress, onChange } = props;
    return (<input 
            className="search" 
            value={value} 
            onKeyPress={(e)=> { if(e.key === 'Enter') { onKeyPress(value); } }}  
            onChange={(e)=>onChange(e.target.value)}  
        />)
}
