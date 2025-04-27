import React from "react";
import "./Entrepreneur.css"; // Oletetaan, että CSS-tiedostosi on tässä

const Entrepreneur = () => {
  // Tyylit pääosiolle
  const sectionStyle = {
    minHeight: "80vh", // Ei välttämättä tarvitse olla 100vh, riippuen sisällöstä
    display: "flex",
    alignItems: "center", // Keskitä pystysuunnassa
    justifyContent: "center", // Keskitä vaakasuunnassa
    backgroundColor: "#f9f9f9", // Vaalea tausta
    padding: "40px", // Enemmän tilaa reunoille
  };

  // Tyylit yrittäjä-kontille, joka pitää kuvan ja tekstin yhdessä
  const containerStyle = {
    maxWidth: "900px",
    display: "flex",
    flexDirection: "row", // Kuva ja teksti vierekkäin isommilla näytöillä
    alignItems: "center",
    gap: "40px", // Tilaa kuvan ja tekstin välissä
  };

  // Tyylit kuva-diville
  const imageStyle = {
    maxWidth: "400px",
    borderRadius: "10px",
    boxShadow: "0 8px 12px rgba(0,0,0,0.15)", // Hieman voimakkaampi varjo
  };

  // Tyylit tekstisisältö-diville
  const contentStyle = {
    textAlign: "left", // Teksti vasemmalle
  };

  // Tyylit pääotsikolle (yrittäjän nimi)
  const nameStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  };

  // Tyylit alaotsikolle (titteli)
  const titleStyle = {
    fontSize: "1.5rem",
    color: "#555",
    marginBottom: "20px",
  };

  // Tyylit esittelytekstille
  const descriptionStyle = {
    fontSize: "1.1rem",
    color: "#666",
    lineHeight: "1.7",
    marginBottom: "25px",
  };

  // Tyylit listaelementeille
  const listStyle = {
    listStyleType: "none", // Poistaa oletuslistamerkit
    padding: 0,
  };

  const listItemStyle = {
    fontSize: "1.1rem",
    color: "#4CAF50", // Vihreä väri korostamaan
    marginBottom: "10px",
  };

  const checkmarkStyle = {
    marginRight: "8px",
    fontWeight: "bold",
  };

  return (
    <section id="yrittaja" style={sectionStyle}>
      <div className="entrepreneur-container" style={containerStyle}>
        <div className="entrepreneur-image">
          <img
            src="yrittäjä.jpg" // Oletetaan, että kuvasi on tässä polussa
            alt="Minna Meikäläinen, Siivousyrittäjä"
            style={imageStyle}
          />
        </div>

        <div className="entrepreneur-content" style={contentStyle}>
          <h2 style={nameStyle}>Minna Meikäläinen</h2>
          <h3 style={titleStyle}>Siivousalan Ammattilainen & Yrittäjä</h3>

          <p style={descriptionStyle}>
            Olen Minna Meikäläinen, intohimoinen siivousalan yrittäjä täältä
            Oulusta. Puhtaus ja siisteys ovat aina olleet lähellä sydäntäni, ja
            olenkin perustanut tämän yrityksen yli viisi vuotta sitten visioni
            puhtaammasta ja viihtyisämmästä arjesta toteuttamiseksi.
          </p>

          <ul style={listStyle}>
            <li style={listItemStyle}>
              <span style={checkmarkStyle}></span> Yli 5 vuoden kokemus
              siivousalalta yrittäjänä
            </li>
            <li style={listItemStyle}>
              <span style={checkmarkStyle}></span> Vahva sitoutuminen laatuun ja
              asiakastyytyväisyyteen
            </li>
            <li style={listItemStyle}>
              <span style={checkmarkStyle}></span> Paikallinen yrittäjä Oulusta
              – tunnen alueen tarpeet
            </li>
            <li style={listItemStyle}>
              <span style={checkmarkStyle}></span> Jatkuva panostus
              ammattitaitoon ja nykyaikaisiin siivousmenetelmiin
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Entrepreneur;
