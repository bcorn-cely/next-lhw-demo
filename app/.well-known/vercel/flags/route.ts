import { NextResponse, type NextRequest } from 'next/server';
import { verifyAccess, type ApiData } from '@vercel/flags';
import { getProviderData } from '@vercel/flags/next';
import * as flags from '../../../../lib/flags';
 
export async function GET(request: NextRequest) {
  const access = await verifyAccess(request.headers.get('Authorization'));
  if (!access) return NextResponse.json(null, { status: 401 });

  const data = getProviderData(flags);
  return NextResponse.json<ApiData>(data);

}