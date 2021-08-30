module.exports = {
  images: {
    domains: ['source.unsplash.com'],
  },
  async headers() {
    return [
      {
        source: '/aboutme',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ];
  },
};
