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
                    <div className="" style={{ backgroundColor: "white" }}>
                        <img src={content.img} alt="" />
                    </div>
                    <div className="w-full">
                        <h1 className={`text-5xl text-center`}>
                            {content.name}
                        </h1>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-initial" style={{ flex: "1" }}>
                        Email
                    </div>
                    <div className={`flex-initial`} style={{ flex: "7" }}>
                        {content.email}
                    </div>
                </div>
                <div className="flex">
                    <p style={{ flex: "1" }}>Gender</p>
                    <p style={{ flex: "7" }}>{content.gender}</p>
                </div>

                <div className="flex">
                    <p style={{ flex: "1" }}>Country</p>
                    <p style={{ flex: "7" }}>{content.country}</p>
                </div>

                <div className="flex">
                    <p className="" style={{ flex: "1" }}>
                        Description
                    </p>
                    <p className={``} style={{ flex: "7" }}>
                        {content.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfoDisplay;
