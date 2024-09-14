import { AboutHistory } from "../Components/AboutHistory/AboutHistory";
import { BenefitsBlock } from "../Components/BenefitsBlock/BenefitsBlock";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { HeroBlock } from "../Components/HeroBlock/HeroBlock";
import { NewsLetter } from "../Components/NewsLetter/NewsLetter";
import { ProductsBlock } from "../Components/ProductsBlock/ProductsBlock";

export const Home = () => {
  return (
    <>
      <Header />
      <HeroBlock />
      <BenefitsBlock />
      <ProductsBlock />
      <NewsLetter />
      <AboutHistory />
      <Footer />
    </>
  );
};
