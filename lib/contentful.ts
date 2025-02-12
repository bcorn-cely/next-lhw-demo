import { createClient } from "contentful"
import { EntrySkeletonType } from "contentful"

export interface ExclusiveRatesContent {
  title: string
  subtitle: string
  leadersBenefitsTitle: string
  leadersBenefits: EntrySkeletonType[]
  rateGuaranteeTitle: string
  rateGuaranteeDescription: string
  ctaText: string
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export async function getExclusiveRatesContent() {
  try {
    const entries = await client.getEntries({
      content_type: "exclusivesRates",
      include: 2,
    })
    if (!entries.items || entries.items.length === 0) {
      console.error("No exclusive rates content found in Contentful")
      return null
    }

    return entries.items[0].fields
  } catch (error) {
    console.error("Error fetching exclusive rates content:", error)
    return null
  }
}

