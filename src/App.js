import React, { useState } from 'react';

import './App.css';
import DetailsForm from './DetailsForm';
import CardFront from './CardFront';
import CardBack from './CardBack';

function App() {
  const [values, setValues] = useState({
    holderName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  })

  const [Cvalues, setCValues] = useState({
    holderName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  })

  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      values.holderName.length <= 0 ||
      values.cardNumber.length !== 19 ||
      values.expMonth.length !== 2 ||
      values.expYear.length !== 2 ||
      values.cvc.length !== 3) {
      setError(true);
      setSubmit(false);
    }
    else {
      setError(false);
      setSubmit(true);
      alert("Success");
      setCValues({
        ...values
      })
      setValues({
        holderName: '',
        cardNumber: '',
        expMonth: '',
        expYear: '',
        cvc: ''
      })
      
    }


  }

  
  const checkDigit = (value) => {
    return value.split('').filter((val) => {
      return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(val)
    }).join('');
  }
  const changeHandler = (e) => {
    // console.log(e.target);
    let { name, value } = e.target;
    if (name === 'cardNumber') {

      value = checkDigit(value)
      value = value.replaceAll(' ', '');
      value = [...value].map((d, i) => (i) % 4 === 0 ? ' ' + d : d).join('').trim()
      value = value.slice(0, 19)


    }
    else if (name === 'expMonth') {
      value = checkDigit(value)
      value = value.slice(0, 2)
      if (parseInt(value) === '00') {
        value = '01'
      }
      else if (parseInt(value) > 12) {
        value = '12'
      }
    }
    else if (name === 'expYear') {
      value = checkDigit(value)
      if (value === '00') {
        value = '01'
      }
      else if (parseInt(value) > 99) {
        value = '99'
      }
      value = value.slice(0, 2)
    }
    else if (name === 'cvc') {
      value = checkDigit(value)
      if (parseInt(value) > 999) {
        value = '999'
      }
      value = value.slice(0, 3)
    }
    setValues({
      ...values,
      [name]: value,
    })
  }

  return (
    <div className="App">
      <div className='designBox'></div>
      <div className='mainFlex'>
        <DetailsForm
          holderName={values.holderName}
          cardNumber={values.cardNumber}
          expMonth={values.expMonth}
          expYear={values.expYear}
          cvc={values.cvc}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
          error={error} />

        <div className='cardsFlex'>
          <CardFront
            holderName={Cvalues.holderName}
            cardNumber={Cvalues.cardNumber}
            expMonth={Cvalues.expMonth}
            expYear={Cvalues.expYear}
            submit={submit} />

          <div className='bottomCard'>
            <CardBack
              cvc={Cvalues.cvc}
              submit={submit} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
