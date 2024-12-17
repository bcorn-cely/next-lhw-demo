import { unstable_flag as flag } from '@vercel/flags/next';
import { get } from '@vercel/edge-config';

export const showLuxuryExperiences = flag({
  key: 'luxury-experiences',
  async decide() {
    const value = await get('luxury-experiences');
    return value ?? false;
  },
});

export const enableVirtualConcierge = flag({
  key: 'virtual-concierge',
  async decide() {
    const value = await get('virtual-concierge');
    return value ?? false;
  },
});

export const offerExclusiveRates = flag({
  key: 'exclusive-rates',
  async decide() {
    const value = await get('exclusive-rates');
    return value ?? false;
  },
});

export const showPersonalizedRecommendations = flag({
  key: 'personalized-recommendations',
  async decide() {
    const value = await get('personalized-recommendations');
    return value ?? false;
  },
});

export const showNewShowcaseComponent = flag({
  key: 'show-new-showcase-component',
  async decide() {
    const value = await get('show-new-showcase-component');
    return value ?? false;
  }
})

// a group of feature flags to be precomputed
export const lhwFlags = [showLuxuryExperiences, enableVirtualConcierge, offerExclusiveRates, showPersonalizedRecommendations, showNewShowcaseComponent] as const;

