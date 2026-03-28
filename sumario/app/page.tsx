import Herosection from "@/components/HeroSection";
import Pricing from "@/components/pricing";
import PromoSlider from "@/components/PromoSlider";

export default function Home() {
  return (
    <div className="w-full h-full ">
      <Herosection/>
      <PromoSlider/>
      <Pricing/>
    </div>
  );
}
