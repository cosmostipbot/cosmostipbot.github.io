import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/Home/MainBanner';
import PartnerSlider from '../components/Common/PartnerSlider';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import Faq from '../components/Home/Faq';
import News from '../components/Common/News';
import Footer from '../components/Layouts/Footer';

import ComingSoon from './coming-soon';
 
class Index3 extends Component {
    render() {
        var GivenDate = '2020-05-18 14:00';
        var CurrentDate = new Date();
        GivenDate = new Date(GivenDate);
    
        if(GivenDate < CurrentDate){
            return <ComingSoon />
        }

        return (
            <React.Fragment>
                <Navbar />
                <MainBanner />
                <PartnerSlider />
                <About />
                {/* <Services />
                <Faq />
                <News />
                <Footer /> */}
            </React.Fragment>
        );
    }
}

export default Index3;