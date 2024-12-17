// @ts-check
import { withVercelToolbar } from '@vercel/toolbar/plugins/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "*.public.blob.vercel-storage.com"
            }
        ]
    }
};

export default withVercelToolbar()(nextConfig);

