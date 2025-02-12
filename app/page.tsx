import { HeroSection } from "@/components/hero-section"
import { FeaturedSection } from "@/components/featured-section"
import { HotelShowcase } from "@/components/hotel-showcase"
import { LuxuryExperiences } from "@/components/luxury-experiences"
import { VirtualConcierge } from "@/components/virtual-concierge"
import { ExclusiveRates } from "@/components/exclusive-rates"
import { PersonalizedRecommendations } from "@/components/personalized-recommendations"
import { showLuxuryExperiences, enableVirtualConcierge, offerExclusiveRates, showPersonalizedRecommendations, lhwFlags } from '../lib/flags'
import { headers } from "next/headers"


export default async function Home() {
  const code = await headers().get('x-precomputed-flags') ?? 'This will have a value';
  const luxuryExperiences = await showLuxuryExperiences(code, lhwFlags);
  const virtualConcierge = await enableVirtualConcierge(code, lhwFlags);
  const exclusiveRates = await offerExclusiveRates(code, lhwFlags);
  const personalizedRecommendations = await showPersonalizedRecommendations(code, lhwFlags);

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

