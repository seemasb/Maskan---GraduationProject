import HalfMap from '../../Components/HalfMap/HalfMap'
import MapCard from '../../Components/HalfMap/MapCard';
import ProperitiesDisplayHalf from '../../Components/ProperitiesDisplayHalf/ProperitiesDisplayHalf'
import '../../Pages Styles/Properities.css'
import Grid from '@mui/material/Grid';
import { useState } from 'react';

export default function Properities() {
  const [homesCoordinates, setHomesCoordinates] = useState([])
  return (
    // <div className="ProperitiesBody">
    //   <HalfMap/>
    //   <ProperitiesDisplayHalf/>
    // </div>
    <div className='Properities'>
      <Grid container spacing={0}>
        <Grid item sm={6} xs={12}>
          <HalfMap homesCoordinates={homesCoordinates} />
        </Grid>
        <Grid item sm={6} xs={12}>
          
          <ProperitiesDisplayHalf setHomesCoordinates={setHomesCoordinates} />
        </Grid>
      </Grid>
    </div>
  );
}