import { BenefitsBlock } from "../Components/BenefitsBlock/BenefitsBlock";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { ProductInfo } from "../Components/ProductInfo/ProductInfo";

export const ProductListingPage = () => {
  return (
    <>
      <Header />
      <ProductInfo />
      <BenefitsBlock />
      <Footer />
    </>
  );
};
