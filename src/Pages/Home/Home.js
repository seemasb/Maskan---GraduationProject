import PopularListing from '../../Components/PopularListing/PopularListing'
import HomeHero from '../../Components/HomeComponents/HomeHero';
import WhatWeDo from '../../Components/HomeComponents/WhatWeDo';
import Footer from '../../Components/HomeComponents/Footer';
import Panorama from '../../Components/Panorama';
import OwnerModal from '../../Components/PropertyDetailsComponents/OwnerModal';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import i1 from '../../../src/Images/360.jpg'

export default function Home() {
  const imageUrl = 'https://res.insta360.com/static/49fcf323b6d04cb8f6a1a81fa6ec0436/3.jpg';

  return (
    <div className="HomeBody">
      <HomeHero />
      <WhatWeDo />
      <OwnerModal />
      <Footer />
      {/* <PopularListing/> */}
      {/* <div>Discover best properties in Maskan</div> */}
      {/* <HomeCard image="" address="mota" city="Nablus" state="rent"  price="2500$"/> */}
      {/* <Navbar/> */}
      {/* <SignInModal/>
        <SignUpModal/> */}
      {/* <StepperSignUp/> */}
    </div>
  );
}