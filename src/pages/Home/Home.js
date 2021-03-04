import React from "react";
import Header from "../../components/Header/Header";
import SectionLeft from "../../components/Section/SectionLeft";
import SectionRight from "../../components/Section/SectionRight";
import SectionAbout from "../../components/Section/SectionAbout";
import Footer from "../../components/Footer/Footer";
import section from "../../section.json";

function Home() {
  return (
    <div>
      <Header />
      <SectionLeft
        header={section[0].header}
        title={section[0].title}
        content={section[0].content}
        buttonHref={section[0].button.href}
        buttonText={section[0].button.text}
        sideButtonHref={section[0].sideButton.href}
        sideButtonText={section[0].sideButton.text}
        image={section[0].image}
        className={section[0].className}
      />
      <SectionRight
        header={section[1].header}
        title={section[1].title}
        content={section[1].content}
        buttonHref={section[1].button.href}
        buttonText={section[1].button.text}
        sideButtonHref={section[1].sideButton.href}
        sideButtonText={section[1].sideButton.text}
        image={section[1].image}
        className={section[1].className}
      />
      <SectionLeft
        header={section[2].header}
        title={section[2].title}
        content={section[2].content}
        buttonHref={section[2].button.href}
        buttonText={section[2].button.text}
        sideButtonHref={section[2].sideButton.href}
        sideButtonText={section[2].sideButton.text}
        image={section[2].image}
        className={section[2].className}
      />
      <SectionRight
        header={section[3].header}
        title={section[3].title}
        content={section[3].content}
        buttonHref={section[3].button.href}
        buttonText={section[3].button.text}
        sideButtonHref={section[3].sideButton.href}
        sideButtonText={section[3].sideButton.text}
        image={section[3].image}
        className={section[3].className}
      />
      <SectionAbout
        header={section[4].header}
        title={section[4].title}
        contentOne={section[4].content.one}
        contentTwo={section[4].content.two}
        contentThree={section[4].content.three}
        buttonHref={section[4].button.href}
        buttonText={section[4].button.text}
        sideButtonHref={section[4].sideButton.href}
        sideButtonText={section[4].sideButton.text}
        image={section[4].image}
        className={section[4].className}
      />
      <Footer />
    </div>
  );
}

export default Home;
