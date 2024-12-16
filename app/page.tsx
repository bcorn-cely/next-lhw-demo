import { HeroSection } from "@/components/hero-section"
import { FeaturedSection } from "@/components/featured-section"
import { HotelShowcase } from "@/components/hotel-showcase"
import { LuxuryExperiences } from "@/components/luxury-experiences"
import { VirtualConcierge } from "@/components/virtual-concierge"
import { ExclusiveRates } from "@/components/exclusive-rates"
import { PersonalizedRecommendations } from "@/components/personalized-recommendations"
import { lhwFlags, showLuxuryExperiences, enableVirtualConcierge, offerExclusiveRates, showPersonalizedRecommendations } from '../lib/flags'

type Params = { code: string };

export default async function Home({ params }: { params: Params }) {
  const { code } = params;
  const luxuryExperiences = await showLuxuryExperiences(code, lhwFlags);
  const virtualConcierge = await enableVirtualConcierge(code, lhwFlags);
  const exclusiveRates = await offerExclusiveRates(code, lhwFlags);
  const personalizedRecommendations = await showPersonalizedRecommendations(code, lhwFlags);

  return (
    <main>
      <HeroSection newDesign={false}/>
      <FeaturedSection />
      {luxuryExperiences && <LuxuryExperiences />}
      {virtualConcierge && <VirtualConcierge />}
      {exclusiveRates && <ExclusiveRates />}
      {personalizedRecommendations && <PersonalizedRecommendations />}
      <HotelShowcase />
    </main>
  )
}

