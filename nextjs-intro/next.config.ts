import type { NextConfig } from 'next'

const config: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000', // localhost
        'https://solid-bassoon-rp496v9gj9w3gj6-3000.app.github.dev/', // Codespaces
      ],
    },
  },
}

export default config