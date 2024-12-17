import { HeroSection } from "@/components/hero-section"
import { FeaturedSection } from "@/components/featured-section"
import { HotelShowcase } from "@/components/hotel-showcase"
import { LuxuryExperiences } from "@/components/luxury-experiences"
import { VirtualConcierge } from "@/components/virtual-concierge"
import { ExclusiveRates } from "@/components/exclusive-rates"
import { PersonalizedRecommendations } from "@/components/personalized-recommendations"
import { NewHotelShowcase } from '@/components/hotel-showcase-new';
import { showLuxuryExperiences, enableVirtualConcierge, offerExclusiveRates, showPersonalizedRecommendations, showNewShowcaseComponent } from '../lib/flags'


export default async function Home() {
  const luxuryExperiences = await showLuxuryExperiences();
  const virtualConcierge = await enableVirtualConcierge();
  const exclusiveRates = await offerExclusiveRates();
  const personalizedRecommendations = await showPersonalizedRecommendations();
  const newShowcaseComponent = await showNewShowcaseComponent();

  return (
    <main>
      <HeroSection />
      <FeaturedSection />
      {luxuryExperiences && <LuxuryExperiences />}
      {virtualConcierge && <VirtualConcierge />}
      {exclusiveRates && <ExclusiveRates />}
      {personalizedRecommendations && <PersonalizedRecommendations />}
      {newShowcaseComponent ? <NewHotelShowcase /> : <HotelShowcase />}
    </main>
  )
}

