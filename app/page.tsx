import { HeroSection } from "@/components/hero-section"
import { FeaturedSection } from "@/components/featured-section"
import { HotelShowcase } from "@/components/hotel-showcase"
import { LuxuryExperiences } from "@/components/luxury-experiences"
import { VirtualConcierge } from "@/components/virtual-concierge"
import { ExclusiveRates } from "@/components/exclusive-rates"
import { PersonalizedRecommendations } from "@/components/personalized-recommendations"
import { showLuxuryExperiences, enableVirtualConcierge, offerExclusiveRates, showPersonalizedRecommendations } from '../lib/flags'

type Params = { code: string };

export default async function Home({ params }: { params: Params }) {
  const luxuryExperiences = await showLuxuryExperiences();
  const virtualConcierge = await enableVirtualConcierge();
  const exclusiveRates = await offerExclusiveRates();
  const personalizedRecommendations = await showPersonalizedRecommendations();

  return (
    <main>
      <HeroSection />
      <FeaturedSection />
      {luxuryExperiences && <LuxuryExperiences />}
      {virtualConcierge && <VirtualConcierge />}
      {exclusiveRates && <ExclusiveRates />}
      {personalizedRecommendations && <PersonalizedRecommendations />}
      <HotelShowcase />
    </main>
  )
}

