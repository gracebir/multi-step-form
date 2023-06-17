import React from 'react'
import thank from '../../assets/icon-thank-you.svg'

function Succes() {
    return (
        <div className="flex  items-center h-[40vh]">
            <div className="flex flex-col items-center gap-8">
                <img className='w-14 h-14' src={thank} alt="thank" />
                <h1 className="text-3xl text-marine-blue font-bold">Thank you!</h1>
                <p className="text-cool-gray text-lg text-center">
                    Thanks for confirming your subscription! We hope you have fun
                    using our platform. If you ever need support, please feel free
                    to email us at support@loremgaming.com.
                </p>
            </div>
        </div>
    )
}

export default Succes
