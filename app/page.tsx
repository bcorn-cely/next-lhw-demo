import { HeroSection } from "@/components/hero-section"
import { FeaturedSection } from "@/components/featured-section"
import { HotelShowcase } from "@/components/hotel-showcase"
import { LuxuryExperiences } from "@/components/luxury-experiences"
import { VirtualConcierge } from "@/components/virtual-concierge"
import { ExclusiveRates } from "@/components/exclusive-rates"
import { PersonalizedRecommendations } from "@/components/personalized-recommendations"

export default function Home() {
  // For this example, we'll assume all features are enabled
  const luxuryExperiences = true
  const virtualConcierge = true
  const exclusiveRates = true
  const personalizedRecommendations = true

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

