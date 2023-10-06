import React from 'react'

import backStyles from './CardBack.module.css';

function CardBack({ cvc, submit, afterRender }) {
    

    return (
        <div className={backStyles.div}>
            <div className={backStyles.blackBox}>
            </div>
            <div className={backStyles.cvc}>
                {submit ? cvc : '000'}
            </div>
            <div className={backStyles.bottom}>
                <div className={backStyles.outer}>
                    <div className={backStyles.inner} style={{ width: '115px' }}></div>
                    <div className={backStyles.inner} style={{ width: '22px' }}></div>
                    <div className={backStyles.inner} style={{ width: '20px' }}></div>
                    <div className={backStyles.inner} style={{ width: '9px' }}></div>
                </div>
                <div className={backStyles.outer}>
                    <div className={backStyles.inner} style={{ width: '22px' }}></div>
                    <div className={backStyles.inner} style={{ width: '61px' }}></div>
                    <div className={backStyles.inner} style={{ width: '46px' }}></div>
                    <div className={backStyles.inner} style={{ width: '10px' }}></div>
                </div>
                <div className={backStyles.outer}>
                    <div className={backStyles.inner} style={{ width: '10px' }}></div>
                    <div className={backStyles.inner} style={{ width: '22px' }}></div>
                    <div className={backStyles.inner} style={{ width: '21px' }}></div>
                    <div className={backStyles.inner} style={{ width: '114px' }}></div>
                </div>
            </div>
        </div>
    )
}

export default CardBack