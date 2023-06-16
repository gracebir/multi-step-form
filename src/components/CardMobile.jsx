import { useContext } from 'react'
import { AppContext } from '../context/context'

function CardMobile({ year, month, title, img }) {
    const { isMonth } = useContext(AppContext)
    return (
        <div className='w-full border border-light-gray gap-4 flex px-4 py-4 rounded-lg hover:border-purplish-blue'>
            <div>
                <img src={img} alt={title} />
            </div>
            <div className='flex flex-col'>
                <h3 className='text-marine-blue font-medium'>{title}</h3>
                {isMonth ? (
                    <span className='text-cool-gray text-sm'>{month}</span>
                ) : (
                    <div className='flex flex-col'>
                        <span className='text-cool-gray text-sm'>{year}</span>
                        <span className='text-marine-blue text-xs'>{"2 months free"}</span>
                    </div>
                )}

            </div>
        </div>
    )
}

export default CardMobile
