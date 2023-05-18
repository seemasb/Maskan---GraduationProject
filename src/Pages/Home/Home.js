import PopularListing from '../../Components/PopularListing/PopularListing'
import HomeHero from '../../Components/HomeComponents/HomeHero';
import WhatWeDo from '../../Components/HomeComponents/WhatWeDo';
import Footer from '../../Components/HomeComponents/Footer';
import Panorama from '../../Components/Panorama';
import OwnerModal from '../../Components/PropertyDetailsComponents/OwnerModal';

export default function Home() {
  return (
    <div className="HomeBody">
      <HomeHero />
      <WhatWeDo />
      <Panorama />
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