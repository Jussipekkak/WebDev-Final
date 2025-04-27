import React from "react";
import "./Pricing.css";

const Pricing = () => {
  const sectionStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    padding: "40px",
  };

  const pricingPlans = [
    {
      title: "Perussiivous",
      price: "alkaen 80€",
      features: [
        "Pölyjen pyyhintä kaikilta pinnoilta",
        "Imurointi ja moppaus",
        "Keittiön työtasojen ja altaan puhdistus",
        "WC:n ja kylpyhuoneen peruspuhdistus",
        "Ikkunoiden ulkopintojen pyyhintä (sään salliessa)",
      ],
    },
    {
      title: "Laaja Siivous",
      price: "alkaen 150€",
      features: [
        "Kaikki perussiivouksen toimenpiteet",
        "Lattioiden perusteellisempi pesu",
        "Keittiön kaappien ulkopintojen puhdistus",
        "Uunin ja mikron puhdistus (sisältä ja ulkoa)",
        "Kylpyhuoneen kaakeleiden pesu",
        "Listojen ja jalkalistojen pyyhintä",
      ],
    },
    {
      title: "Erikoissiivous",
      price: "Pyydä Tarjous",
      features: [
        "Muutto- ja loppusiivoukset",
        "Suursiivoukset",
        "Ikkunoiden pesu (sisältä ja ulkoa)",
        "Tekstiilipesu (matot, sohvat jne.)",
        "Vahaus ja öljyäminen",
        "Desinfiointisiivoukset",
      ],
    },
  ];

  return (
    <section id="hinnasto" style={sectionStyle}>
      <div className="pricing-container">
        <h2>Hinnasto</h2>
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="pricing-card">
              <h3>{plan.title}</h3>
              <div className="price">{plan.price}</div>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
