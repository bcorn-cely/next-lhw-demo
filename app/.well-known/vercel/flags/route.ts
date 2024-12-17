import { NextResponse, type NextRequest } from 'next/server';
import { verifyAccess, type ApiData } from '@vercel/flags';
 
export async function GET(request: NextRequest) {
  const access = await verifyAccess(request.headers.get('Authorization'));
  if (!access) return NextResponse.json(null, { status: 401 });
 
  return NextResponse.json<ApiData>({
    definitions: {
      showLuxuryExperiences: {
				description: 'Controls whether the new feature is visible',
				options: [
					{ value: false, label: 'Off' },
					{ value: true, label: 'On' },
				],
      },
			enableVirtualConcierge: {
				description: 'Controls visibility of concierge',
				options: [
					{ value: false, label: 'Off' },
					{ value: true, label: 'On' }
				]
			},
			offerExclusiveRates: {
				description: 'Controls the visibility of exclusive rate offerings',
				options: [
					{ value: false, label: 'Off' },
					{ value: true, label: 'On' }
				]
			},
			showPersonalizedRecommendations: {
				description: 'Shows personalized recommendations',
				options: [
					{ value: false, label: 'Off' },
					{ value: true, label: 'On' }
				]
			},
			showNewShowcaseComponent: {
				description: 'Shows v2 of hotel showcase component',
				options: [
					{ value: false, label: 'Off' },
					{ value: true, label: 'On' }
				]
			}
    },
  });
}