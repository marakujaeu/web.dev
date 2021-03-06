module.exports = {
  // Tags are inherited by all posts.
  tags: ['pathItem', 'reliable'],
  path: {
    // Slug is used by landing pages like / and /learn to link to this path.
    // Because it affects urls, the slug should never be translated.
    slug: 'reliable',
    cover: '/images/collections/reliable.svg',
    title: 'Stabilność sieciowa',
    updated: 'May 24, 2018',
    description: `Posiadaj stałą, niezawodną wydajność niezależnie od jakości sieci.`,
    overview: `The modern web gives you access to a diverse global audience
    with a range of devices and network connections. In this section you'll
    learn how to provide a consistently reliable experience to all your users,
    wherever and however they access the internet.`,
    topics: [
      {
        title: 'Jak zmierzyć stabilność sieciową',
        pathItems: [
          'network-connections-unreliable',
          'identify-resources-via-network-panel',
        ],
      },
      {
        title: 'The options in your caching toolbox',
        pathItems: ['http-cache', 'service-workers-cache-storage', 'workbox'],
      },
      {
        title: 'How caching strategies work',
        pathItems: ['precache-with-workbox', 'runtime-caching-with-workbox'],
      },
    ],
  },
};
