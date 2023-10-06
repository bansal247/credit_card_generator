import React from 'react'

import frontStyles from './CardFront.module.css';

function CardFront({cardNumber,holderName,expMonth,expYear,submit}) {
  return (
    <div className={frontStyles.div}>
        <div className={frontStyles.circles}>
            <div className={frontStyles.bigCircle}></div>
            <div className={frontStyles.smallCircle}></div>
        </div>
        <div className={frontStyles.cardNumber}>
            {submit?cardNumber:'0000 0000 0000 0000'}
        </div>
        <div className={frontStyles.bottom}>
            <div className={frontStyles.holderName}>
            {submit?holderName:'JANE APPLESEED'}
            </div>
            <div className={frontStyles.cvc}>
            {submit?expMonth:'00'}/{submit?expYear:'00'}
            </div>
        </div>
    </div>
  )
}

export default CardFront