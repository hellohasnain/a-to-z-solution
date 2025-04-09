import Banner from "@/components/Home/Banner"
import Reviews from "@/components/Home/Reviews"
import ServicesSection from "@/components/Home/ServicesSection"
import TrendingService from "@/components/Home/TrendingService"

const index = () => {
  return (
    <div>
      <Banner />
      <ServicesSection />
      <TrendingService />
      <Reviews />

    </div>
  )
}

export default index