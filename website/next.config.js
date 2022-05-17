const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "deny",
  },
];

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};
