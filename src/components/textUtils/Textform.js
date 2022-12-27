import React,{useState} from 'react'

export default function Textform() {
    let [text,setText]=useState('Start typing here')
    const chageToUpper=()=>{
        setText(text.toUpperCase())
    }
    const onChangeEvent=(e)=>{
        setText(e.target.value);
    }
  return (
    <div>
        <input type='text' value={text} onChange={onChangeEvent} placeholder='type here'/>
        <button onClick={chageToUpper} >Click to convert into UpperCase</button>
    </div>
  )
}
