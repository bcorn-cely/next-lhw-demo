import { type NextRequest, NextResponse } from 'next/server';
import { precompute } from '@vercel/flags/next';
import { lhwFlags } from './lib/flags';

export const config = { matcher: ['/'] };



export async function middleware(request: NextRequest) {
  // precompute returns a string encoding each flag's returned value
  const code = await precompute(lhwFlags);
  // rewrites the request to include the precomputed code for this flag combination
  const nextUrl = new URL(
    `/${code}${request.nextUrl.pathname}${request.nextUrl.search}`,
    request.url,
  )
  return NextResponse.rewrite(nextUrl, {request});
}

