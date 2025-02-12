import { createClient } from "contentful"

export type LeadersBenefits = {
  contentTypeId: 'leadersBenefits'
  fields: {
    title: string,
    description: string
  }
}

export type ExclusiveRatesContent = {
  contentTypeId: 'exclusivesRates',
  fields: {
    title: string
    subtitle: string
    leadersBenefitsTitle: string
    leadersBenefits: LeadersBenefits[]
    rateGuaranteeTitle: string
    rateGuaranteeDescription: string
    ctaText: string
  }
}

export default function createContentfulClient(isDraftMode: boolean = false) {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,

    // use the preview access token when preview is enabled
    accessToken: isDraftMode
      ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!
      : process.env.CONTENTFUL_ACCESS_TOKEN!,


    // specify the preview host when preview is enabled
    host: isDraftMode ? "preview.contentful.com" : undefined,
  });
}

// const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID!,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
// })

export async function getExclusiveRatesContent(isEnabled: boolean) {
  try {
    const contentClient = createContentfulClient(isEnabled);
    const entries = await contentClient.getEntries<ExclusiveRatesContent>({
      content_type: "exclusivesRates",
      include: 2,
      
    })
    if (!entries.items || entries.items.length === 0) {
      console.error("No exclusive rates content found in Contentful")
      return null
    }

    return entries.items[0].fields;
  } catch (error) {
    console.error("Error fetching exclusive rates content:", error)
    return null
  }
}

