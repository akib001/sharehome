/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["a0.muscache.com", "firebasestorage.googleapis.com", "raw.githubusercontent.com", "links.papareact.com"]

  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiYWtpYjAwNyIsImEiOiJjbDA3Y3dtam8wNTYyM2luNXAzM3U0MTRkIn0.Y7A_Z61iT6abXXEPKpgSxA'
  }
}

module.exports = nextConfig
