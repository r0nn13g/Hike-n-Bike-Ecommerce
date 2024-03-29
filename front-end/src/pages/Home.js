import React from "react";
// import { Link } from "react-router-dom"
import AdTicker from "../components/AdTicker";
import '../Styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            <AdTicker />
            <div className="centered">
                <h3>
                    {/* Arcteryx x Jil Sander+ Collection now available! */}
                </h3>
            {/* <Link to="/products"><img alt="Arcteryx-jilsander" src={"https://static01.nyt.com/images/2021/11/07/fashion/07jil-arcteryx-2-sub/merlin_197327496_ae094927-3119-44f4-9e98-4347f13801e0-mobileMasterAt3x.jpg"}/></Link> */}
            </div>
        <div>
            <img alt="mountain biker" src={"https://images.squarespace-cdn.com/content/v1/57f08e8b579fb34c245b2579/1541165944353-QRK5C2S5JBGKTU76KCN7/fred+riding+down.jpg?format=2500w"}/>
        </div>
            {/* <img alt="sales banner" src={"https://cdn-fsly.yottaa.net/53c6d66786305e30e100018d/www.moosejaw.com/v~4b.92b/moosejaw/Moosejaw/images/searchslot/winter-clear-ss-02012022.jpg?yocs=NA_5r_"} /> */}
        </div>
    )
};

export default Home;