import React from 'react'


import fromStyles from './DetailsForm.module.css';
import InputField, { TwoInputField } from './InputField';

function DetailsForm({
    holderName,
    cardNumber,
    expMonth,
    expYear,
    cvc,
    error,
    changeHandler,
    submitHandler}) {
    // console.log(error,cardNumber);
    return (
        <>
            <form className={fromStyles.boxStyle} onSubmit={submitHandler}>
                <InputField
                    upperLabel='cardholder name'
                    errorLabel={error&&holderName.length<=0?"Cardholder name required":""}
                    placeHolder='e.g. Jane Applessed'
                    inputState={holderName}
                    inputType='text' 
                    changeHandler={changeHandler}
                    inputName={Object.keys({holderName})[0]}/>
                <InputField
                    upperLabel='card number'
                    errorLabel={error&&cardNumber.length!==19?"Correct Card number required":""}
                    placeHolder='e.g. 1234 5678 9123 0000'
                    inputState={cardNumber}
                    inputType='text' 
                    changeHandler={changeHandler}
                    inputName={Object.keys({cardNumber})[0]}/>
                <div className={fromStyles.cvcStyle}>
                    <TwoInputField upperLabel='exp.date (mm/yy)' 
                        errorLabel={error&&(expMonth.length!==2||expYear.length!==2)?"Correct Exp. Date is required":""}
                        placeHolderFirst='MM'
                        placeHolderSecond='YY'
                        inputStateFirst={expMonth}
                        inputStateSecond={expYear}
                        inputTypeFirst='text'
                        inputTypeSecond='text' 
                        changeHandler={changeHandler}
                        inputNameFirst={Object.keys({expMonth})[0]}
                        inputNameSecond={Object.keys({expYear})[0]}/>
                    <InputField
                        upperLabel='CVC'
                        errorLabel={error&&cvc.length!==3?"Correct cvc is required":""}
                        placeHolder='e.g. 123'
                        inputState={cvc}
                        inputType='text' 
                        changeHandler={changeHandler}
                        inputName={Object.keys({cvc})[0]}/>
                </div>
                <button className={fromStyles.button}>Confirm</button>
            </form>
        </>
    )
}

export default DetailsForm;