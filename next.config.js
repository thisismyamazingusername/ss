/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
        pathname: "**",
        port: ""
      }
    ],
  },
  webpack: (config, { isServer }) => {
    // Add your webpack configuration here
    if (!isServer) {
      config.externals = {
        'domutils': true,
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      };
    }
    return config;
  }
};

module.exports = nextConfig;
