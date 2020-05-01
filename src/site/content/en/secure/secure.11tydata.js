module.exports = {
  // Tags are inherited by all posts.
  tags: ['pathItem', 'secure'],
  path: {
    // Slug is used by landing pages like / and /learn to link to this path.
    // Because it affects urls, the slug should never be translated.
    slug: 'secure',
    cover: '/images/collections/secure.svg',
    title: 'Bezpieczeństwo',
    updated: 'May 24, 2018',
    description: `Upewnij się, że witryna i dane użytkowników są bezpieczne.`,
    overview: `Every website is vulnerable to attack—not just those handling
    sensitive data. In this section you'll learn simple techniques to keep your
    users, your content and your business secure.`,
    topics: [
      {
        title: 'Understand security',
        pathItems: [
          'security-not-scary',
          'security-attacks',
          'why-https-matters',
          'same-site-same-origin',
        ],
      },
      {
        title: 'How browsers mitigate against attacks',
        pathItems: [
          'browser-sandbox',
          'same-origin-policy',
          'cross-origin-resource-sharing',
        ],
      },
    ],
  },
};
