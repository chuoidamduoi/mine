import React from 'react';
//layouts
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Image from '../components/elements/Image';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Stepper from '../components/sections/Stepper'
const Home = () => {

  return (
    <>
      <div className='p-layout'>
        <div className='p-right '>
          <Header navPosition="right" className="reveal-from-bottom" />

          <div className='p-banner'>
            <div className='p-centre'>
              <Image
                src={require('./../assets/images/icon-user-default.png')}
                alt="Features split 02"
                width={300}
                height={400} />
            </div>
          </div>
        </div>
        <div className='p-left'>
          <Hero invertMobile topDivider imageFill className="illustration-section-0 2" />
          <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02 " />
          <FeaturesTiles className={"has-top-divider section-inner"} />
          <Stepper />
          <Testimonial topDivider />
          <Cta split />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;