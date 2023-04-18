import Filteration from '../Filteration/Filteration'
import './properitiesDisplayHalf.css'
import FilterationHomeCards from '../FilterationHomeCards/FilterationHomeCards'
import { useState } from 'react'


export default function ProperitiesDisplayHalf() {
    const [omeCards,setHomeCards] = useState([])
    return (
        <div className='properitiesDisplayHalf'>
            <Filteration />
            {/* <FilterationHomeCards/> */}
        </div>
    )
}