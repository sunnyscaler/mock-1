import React from 'react'

const Row =  ()=> {
    return (
        <div className="row">
            <div className="row__col row__col--border-red">
                <p className="row__col__title">12th October, 2019 & 13th October, 2019</p>
                <p className="row__col__subtitle">Start anytime between 02:00 PM to 06:00 PM IST</p>
            </div>
            <div className='step-marker' />
            <div className="row__col row__col--right">
                <p className="row__col__title">12th October, 2019 & 13th October, 2019</p>
                <p className="row__col__subtitle"></p>
            </div>
        </div>
    )
}

export {
    Row
}
