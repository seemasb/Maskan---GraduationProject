import Filteration from '../Filteration/Filteration'
import './properitiesDisplayHalf.css'
import FilterationHomeCards from '../FilterationHomeCards/FilterationHomeCards'
import { useState } from 'react'


export default function properitiesDisplayHalf() {
    const [homeCards,setHomeCards] = useState([])
    return (
        <div className='properitiesDisplayHalf'>
            <Filteration />
            <FilterationHomeCards/>
        </div>
    )
}