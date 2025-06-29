import Banner from "@/components/Home/Banner"
import ServicesSection from "@/components/Home/ServicesSection"
import TrendingService from "@/components/Home/TrendingService"
import ReviewSlider from "@/components/ReviewSlider"

const index = () => {
  return (
    <div>
      <Banner />
      <ServicesSection />
      <TrendingService />
      <ReviewSlider />


    </div>
  )
}

export default index