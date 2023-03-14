import Filteration from '../Filteration/Filteration'
import './properitiesDisplayHalf.css'
import FilterationHomeCards from '../FilterationHomeCards/FilterationHomeCards'


export default function properitiesDisplayHalf() {
    return (
        <div className='properitiesDisplayHalf'>
            <Filteration />
            <FilterationHomeCards/>
        </div>
    )
}