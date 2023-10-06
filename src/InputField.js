import React from 'react'

import fieldStyle from './InputField.module.css';

function InputField({ upperLabel, errorLabel, placeHolder, inputState, inputType, changeHandler, inputName }) {
    return (
        <div className={fieldStyle.div}>
            <label className={fieldStyle.upperLabelStyle}>{upperLabel}</label>
            <input className={fieldStyle.inputStyle}
                placeholder={placeHolder}
                value={inputState}
                type={inputType} 
                onChange={changeHandler}
                name={inputName}/>
            <label className={fieldStyle.errorLabelStyle}>{errorLabel}</label>
        </div>
    )
}

export const TwoInputField = ({ 
    upperLabel, 
    errorLabel, placeHolderFirst, 
    placeHolderSecond, inputStateFirst, 
    inputStateSecond, inputTypeFirst, 
    inputTypeSecond,  changeHandler, 
    inputNameFirst, inputNameSecond}) => {
    return (
        <div className={fieldStyle.div}>
            <label className={fieldStyle.upperLabelStyle}>{upperLabel}</label>
            <div className={fieldStyle.divTwo}>
            <input className={fieldStyle.inputStyle}
                placeholder={placeHolderFirst}
                value={inputStateFirst}
                type={inputTypeFirst} 
                onChange={changeHandler}
                name={inputNameFirst}/>
            <input className={fieldStyle.inputStyle}
                placeholder={placeHolderSecond}
                value={inputStateSecond}
                type={inputTypeSecond} 
                onChange={changeHandler}
                name={inputNameSecond}/>
            </div >
            <label className={fieldStyle.errorLabelStyle}>{errorLabel}</label>
        </div>
    )
}


export default InputField;