import React from "react";
import { Link } from "react-scroll";
import "./Home.css";

const Home = () => {
  return (
    <section id="etusivu" className="hero-section">
      <div className="home-content">
        <h1>Ammattitaitoista Siivouspalvelua Sinun Tarpeisiisi</h1>
        <p className="tagline">
          Luotettava ja tehokas siivouspalvelu yrityksille ja
          yksityishenkilöille. Jätä siivous meidän huoleksemme, niin voit
          keskittyä olennaiseen.
        </p>

        <div className="button-group">
          <Link
            to="kalenteri"
            smooth={true}
            duration={500}
            className="button primary-button"
          >
            Varauskalenteri
          </Link>

          <Link
            to="yhteys"
            smooth={true}
            duration={500}
            className="button secondary-button"
          >
            Ota yhteyttä
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
