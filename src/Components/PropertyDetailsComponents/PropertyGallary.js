import { Carousel } from 'react-carousel-minimal';
// import Pic1 from '../../Images/home1.jpg'
import Pic2 from '../../Images/pool_1.jpg'
import noImage from '../../Images/no-image.jpg'

export default function PropertyGallary({ propertyDetails }) {
  console.log(propertyDetails)
  const data = [
    {
      image: noImage,
      caption: ''
    },
    {
      image: noImage,
      caption: ''
    },
    {
      image: noImage,
      caption: ''
    }
  ]

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        {/* <h2>React Carousel Minimal</h2> */}
        {/* <p>Easy to use, responsive and customizable carousel component for React Projects.</p> */}
        <div style={{
          // padding: "0 20px"
        }}>
          <Carousel
            data={propertyDetails.images.length ? propertyDetails.images : data}
            time={7000}
            // width="650px"
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="20px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              // maxWidth: "850px",
              maxWidth: "100%",
              maxHeight: "500px",
              margin: "0px 0 100px 0",
            }}
          />
        </div>
      </div>
    </div>

  )
}




// import React from 'react';
// import { GridList, GridListTile, GridListTileBar, IconButton, Modal } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { ZoomIn } from '@material-ui/icons';

// const useStyles = makeStyles(theme => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around',
//         overflow: 'hidden',
//         backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//         width: '100%',
//         height: '100%',
//     },
//     icon: {
//         color: 'rgba(255, 255, 255, 0.54)',
//     },
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     modalImg: {
//         maxWidth: '100%',
//         maxHeight: '100%',
//     },
// }));


// export default function PropertyGallary() {
//     let images = [
//         {
//             src: Pic1,
//             id: '1'
//         },
//         {
//             src: Pic2,
//             id: '2'
//         }
//     ]

//     // { images }
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);
//     const [currentImg, setCurrentImg] = React.useState('');

//     const handleOpen = img => {
//         setCurrentImg(img);
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <div className={classes.root}>
//             <GridList cellHeight={200} spacing={10} className={classes.gridList}>
//                 {images.map(img => (
//                     <GridListTile key={img.id} cols={1}>
//                         <img src={img.src} onClick={() => handleOpen(img.src)} />
//                         <GridListTileBar
//                             title={img.title}
//                             actionIcon={
//                                 <IconButton className={classes.icon} onClick={() => handleOpen(img.src)}>
//                                     <ZoomIn />
//                                 </IconButton>
//                             }
//                         />
//                     </GridListTile>
//                 ))}
//             </GridList>
//             <Modal open={open} onClose={handleClose} className={classes.modal}>
//                 <img src={currentImg} alt="zoomed-in" className={classes.modalImg} />
//             </Modal>
//         </div>
//     );
// };
