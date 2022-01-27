/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts','tsx','md', 'mdx'],
  webpack(config) {
    console.log(config, 88888)

    return config
    // config.proxy({
    //   '/api': {
    //     // target: 'https://web-back-end-pn52znbl8-hcl-smile.vercel.app/',
    //     target: 'http://localhost:8000',
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // })
  }
}

module.exports = nextConfig
