import Header from './layout/Header'
import Hero from '../components/blocks/Hero'
import PopularCourses from '../components/blocks/PopularCourses'
import WhyChooseUs from '../components/blocks/WhyChooseUs'
import GraduateReviews from '../components/blocks/GraduateReviews'
import { MentorsSection } from '@/components/blocks/MentorsSection'
import Footer from './layout/Footer'
import ContactMapSection from '@/components/blocks/ContactMapSection'
import AdvantagesSection from '@/components/blocks/AdvantagesSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <AdvantagesSection />
      <WhyChooseUs />
      <PopularCourses />
      <GraduateReviews />
      <MentorsSection />
      <ContactMapSection />
      <Footer />
    </>
  )
}
