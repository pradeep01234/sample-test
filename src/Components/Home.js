import React from "react";
import video from "./video.mp4"

const Home = ()=>{
    return(
        <div>
            <video src={video} autoPlay loop></video>
            <div className="ads">
                <h1>Navigate the Skies, Explore with Ease. Your Gateway to Boundless Horizons.  Welcome to Your Airborne Odyssey.</h1>

                <img src="https://cdnl.iconscout.com/lottie/premium/thumb/aeroplane-5475875-4574201.gif" height={280}></img>
            </div>
        </div>
    )
}
export default Home;