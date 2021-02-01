import React from 'react';
import { capitalize } from '../../utils';
import "./index.css";

type Props = {
    value: string;
    onChange: (x:string) => void;
    options: string[],
    className: string
};

export default function Search(props: Props) {
    const { value, onChange, options, className } = props;
    const setValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    }
    return (<select
                aria-label="Search Dog Breeds"
                onChange={setValue}  
                value={value} 
                className={`${className} search`}
            >
                {(options as string[]).map((option: string)=><option key={option} value={option}>{capitalize(option)}</option>)}
            </select>);        
}