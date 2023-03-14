import './filterationHomeCards.css'
import HomeCard from '../HomeCard.js/HomeCard'
import Grid from '@mui/material/Grid';

export default function FilterationHomeCards() {
    return (
        <div className="filterationHomeCards">
            <Grid container spacing={5}>
                <Grid item sm={12} md={6}>
                    <HomeCard />
                </Grid>
                <Grid item sm={12} md={6}>
                    <HomeCard />
                </Grid>
                <Grid item sm={12} md={6}>
                    <HomeCard />
                </Grid>
                <Grid item sm={12} md={6}>
                    <HomeCard />
                </Grid>
                <Grid item sm={12} md={6}>
                    <HomeCard />
                </Grid>
                <Grid item sm={12} md={6}>
                    <HomeCard />
                </Grid>
            </Grid>
        </div>
    )
}