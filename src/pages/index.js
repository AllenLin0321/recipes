import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Gallery from "../components/Gallery";
const coverImage = "../assets/images/main.jpeg";

const IndexPage = () => {
    return (
        <Layout>
            <main className="page">
                <header className="hero">
                    <StaticImage
                        src={coverImage}
                        alt="eggs"
                        className="hero-img"
                        placeholder="tracedSVG"
                        layout="fullWidth"
                    />
                    <div className="hero-container">
                        <div className="hero-text">
                            <h1>Simply Recipes</h1>
                            <h4>No Fluff, Just Recipes</h4>
                        </div>
                    </div>
                </header>
                <Gallery />
            </main>
        </Layout>
    );
};

export default IndexPage;
