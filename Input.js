import React from "react"

export default function Input(props) {
    const {type ="text", placeholder,name} = props;
     return (
        <>
            <input type={type} className="ui-textfield"
            placeholder ={placeholder} name ={name}
             />
        </>
    )
}
