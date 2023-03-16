import './filterationHomeCards.css'
import HomeCard from '../HomeCard.js/HomeCard'
import Card from '../Card/Card';
import Grid from '@mui/material/Grid';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined';

export default function FilterationHomeCards() {
    return (
        <div className="filterationHomeCards">
            {/* <div>
                <ViewModuleOutlinedIcon color='disabled'/>
                <ViewListOutlinedIcon color='disabled'/>
            </div> */}
            <div className="FilteredCards">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            {/* <Grid container spacing={0}>
                <Grid item sm={12} md={6}>
                    <Card />
                </Grid>
                <Grid item sm={12} md={6}>
                    <Card />
                </Grid>
                <Grid item sm={12} md={6}>
                    <Card />
                </Grid>
                <Grid item sm={12} md={6}>
                    <Card />
                </Grid>
                <Grid item sm={12} md={6}>
                    <Card />
                </Grid>
                <Grid item sm={12} md={6}>
                    <Card />
                </Grid>
            </Grid> */}
        </div>
    )
}