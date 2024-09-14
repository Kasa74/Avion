import { AboutHero } from "../Components/AboutHero/AboutHero";
import { AboutReverse } from "../Components/AboutReverse/AboutReverse";
import { BenefitsBlock } from "../Components/BenefitsBlock/BenefitsBlock";
import { BrandInfo } from "../Components/BrandInfo/BrandInfo";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { NewsLetter } from "../Components/NewsLetter/NewsLetter";
import { Notice } from "../Components/Notice/Notice";

export const AboutPage = () => {
  return (
    <>
      <Notice />
      <Header />
      <AboutHero />
      <BrandInfo />
      <AboutReverse />
      <BenefitsBlock />
      <NewsLetter />
      <Footer />
    </>
  );
};
