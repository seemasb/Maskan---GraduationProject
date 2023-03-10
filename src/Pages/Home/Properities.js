import HalfMap from '../../Components/HalfMap/HalfMap'
import ProperitiesDisplayHalf from '../../Components/ProperitiesDisplayHalf/ProperitiesDisplayHalf'
import '../../Pages Styles/Properities.css'
import Grid from '@mui/material/Grid';

export default function Properities() {
  return (
    // <div className="ProperitiesBody">
    //   <HalfMap/>
    //   <ProperitiesDisplayHalf/>
    // </div>
    <div className='Properities'>
      <Grid container spacing={0}>
        <Grid item sm={6} xs={12}>
          <HalfMap />
        </Grid>
        <Grid item sm={6} xs={12}>
          <ProperitiesDisplayHalf />
        </Grid>
      </Grid>
    </div>
  );
}