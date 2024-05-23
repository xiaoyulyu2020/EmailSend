import React from 'react'
import Header from "@/shared/widgets/header";
import Banner from "@/modules/home/elements/banner";
import Branding from "@/modules/home/elements/branding";
import FeatureHighlight from "@/modules/home/elements/feature.highlight";
import Pricing from "@/modules/home/elements/pricing";
import Footer from "@/shared/widgets/footer";

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Branding />
            <FeatureHighlight />
            <Pricing />
            <Footer />
        </div>
    )
}

export default Home