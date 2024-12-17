import { type NextRequest, NextResponse } from 'next/server';
import { unstable_precompute as precompute } from '@vercel/flags/next';
import { lhwFlags } from './lib/flags';

export const config = { matcher: ['/'] };

export async function middleware(request: NextRequest) {
  // precompute returns a string encoding each flag's returned value
  const code = await precompute(lhwFlags);

  const response = NextResponse.next();
  response.headers.set('x-precomputed-flags', code);
  
  return response;
}

