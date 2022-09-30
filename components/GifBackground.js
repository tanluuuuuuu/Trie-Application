import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particles-config.js";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

const GifBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div>
            <Particles
                id="tsparticles"
                particlesLoaded="particlesLoaded"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesConfig}
                height="100vh"
                width="100vw"
            ></Particles>
        </div>
    );
};

export default GifBackground;
