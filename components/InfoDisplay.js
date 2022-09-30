import React from "react";
import Head from "next/head";

const InfoDisplay = ({ content }) => {
    return (
        <div>
            <Head>
                <title>Citizen info</title>
                <meta name="Citizen info" content="Citizen info" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="my-5">
                <div className="flex my-5">
                    <div className="">
                        <h3>{content.Nationality}</h3>
                    </div>
                    <div className="w-full">
                        <h1 className={`text-5xl text-center`}>
                            {content.Name}
                        </h1>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-initial" style={{ flex: "1" }}>
                        Position
                    </div>
                    <div className={`flex-initial`} style={{ flex: "7" }}>
                        {content.Position}
                    </div>
                </div>
                <div className="flex">
                    <p style={{ flex: "1" }}>Club</p>
                    <p style={{ flex: "7" }}>{content.Club}</p>
                </div>

                <div className="flex">
                    <p style={{ flex: "1" }}>Age at Dec 20 2012</p>
                    <p style={{ flex: "7" }}>{content["Age at Dec 20 2012"]}</p>
                </div>

                <div className="flex">
                    <p className="" style={{ flex: "1" }}>
                        Birthplace
                    </p>
                    <p className={``} style={{ flex: "7" }}>
                        {content.Birthplace}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfoDisplay;
