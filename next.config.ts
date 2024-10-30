import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns:[
      
      {
        protocol: 'https',
        hostname:'*',
      }
    ]
  },
  experimental:{
    ppr:'incremental',
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivityPosition: 'bottom-right',
    buildActivity: true,
  },
  /* config options here */
};

export default nextConfig;
