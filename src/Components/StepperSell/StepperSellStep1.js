import React from 'react';
import Button from '@mui/material/Button';
import HouseIcon from '@mui/icons-material/House';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessIcon from '@mui/icons-material/Business';
import ButtonGroup from '@mui/material/ButtonGroup';
import './StepperSell.css'

export default function StepperSellStep1({ onChange }) {

    return (
        <div className='TypeBtns'>
            <Button
                color='primary'
                variant="contained"
                startIcon={<HouseIcon style={{ fontSize: '2.5rem' }} />}
                onClick={() => onChange('house')}
                className="selectProperty"
            >
                House
            </Button>
            <Button
                variant="contained"
                startIcon={<ApartmentIcon style={{ fontSize: '2.5rem' }} />}
                className="selectProperty"
                onClick={() => onChange('apartment')}
            >
                Apartment
            </Button>
            <Button

                variant="contained"
                disabled
                className='disabledProperty'
                startIcon={<BusinessIcon style={{ fontSize: '2.5rem' }} />}
                onClick={() => onChange('office')}
            >
                Office
            </Button>
            {/* </ButtonGroup> */}
        </div>
    )

}


// import React, { useState } from 'react';
// import PropertyTypeButtons from './PropertyTypeButtons';

// function PropertyListPage() {
//   const [propertyType, setPropertyType] = useState('');

//   function handlePropertyTypeChange(type) {
//     setPropertyType(type);
//     // Do something with the selected property type
//   }

//   return (
//     <div>
//       <h1>Property List Page</h1>
//       <PropertyTypeButtons onChange={handlePropertyTypeChange} />
//       <p>Selected property type: {propertyType}</p>
//       {/* Render your property list here */}
//     </div>
//   );
// }

// export default PropertyListPage;
