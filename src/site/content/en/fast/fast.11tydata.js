module.exports = {
  // Tags are inherited by all posts.
  tags: ['pathItem', 'fast'],
  path: {
    // Slug is used by landing pages like / and /learn to link to this path.
    // Because it affects urls, the slug should never be translated.
    slug: 'fast',
    cover: '/images/collections/fast.svg',
    title: 'Szybki czas łaowania',
    updated: 'May 24, 2018',
    description: 'Zapewnij szybki czas ładowania witryny aby nie utracić uwagi użytkowników.',
    overview: `Podczas budowania nowoczesnego środowiska internetowego ważnym jest, aby mierzyć, optymalizować i monitorować czy staje się ono szybszym i szybkim pozostanie. Wydajność odgrywa znaczącą rolę w sukcesie każdego przedsięwzięcia online, ponieważ witryny o wysokiej skuteczności angażują i zatrzymują użytkowników lepiej niż te o niskiej wydajności. Strony internetowe powiny koncentrować się na optymalizacji czynników poprawiających wygodę i zadowolenie użytkowników. Aby „pozostać szybkim”, ustaw i egzekwuj budżety wydajności, aby pomóc zespołowi pracować w ramach ograniczeń niezbędnych do dalszego szybkiego ładowania i zapewniania zadowolenia użytkowników po uruchomieniu witryny.`,
    topics: [
      {
        title: 'Wprowadzenie',
        pathItems: [
          'why-speed-matters',
          'what-is-speed',
          'how-to-measure-speed',
          'how-to-stay-fast',
        ],
      },
      {
        title: 'Ustanowienie budżetów wydajności',
        pathItems: [
          'performance-budgets-101',
          'your-first-performance-budget',
          'incorporate-performance-budgets-into-your-build-tools',
          'use-lighthouse-for-performance-budgets',
          'using-bundlesize-with-travis-ci',
          'using-lighthouse-bot-to-set-a-performance-budget',
        ],
      },
      {
        title: 'Optymalizacja grafik',
        pathItems: [
          'use-imagemin-to-compress-images',
          'replace-gifs-with-videos',
          'use-lazysizes-to-lazyload-images',
          'serve-responsive-images',
          'serve-images-with-correct-dimensions',
          'serve-images-webp',
          'image-cdns',
        ],
      },
      {
        title: 'Optymalizacja JavaScript',
        pathItems: [
          'apply-instant-loading-with-prpl',
          'preload-critical-assets',
          'reduce-javascript-payloads-with-code-splitting',
          'remove-unused-code',
          'reduce-network-payloads-using-text-compression',
          'serve-modern-code-to-modern-browsers',
        ],
      },
      {
        title: 'Optymalizacja CSS',
        pathItems: [
          'defer-non-critical-css',
          'minify-css',
          'extract-critical-css',
          'optimize-css-background-images-with-media-queries',
        ],
      },
      {
        title: 'Optymalizacja zasobów innych firm',
        pathItems: [
          'third-party-javascript',
          'identify-slow-third-party-javascript',
          'efficiently-load-third-party-javascript',
        ],
      },
      {
        title: 'Optymalizacja czcionek',
        pathItems: ['avoid-invisible-text'],
      },
      {
        title: 'Optymalizacja infrastruktury sieciowej',
        pathItems: ['adaptive-serving-based-on-network-quality'],
      },
      {
        title: 'Zmierz swoją wydajność',
        pathItems: [
          'chrome-ux-report',
          'chrome-ux-report-data-studio-dashboard',
          'chrome-ux-report-pagespeed-insights',
          'chrome-ux-report-bigquery',
        ],
      },
      {
        title: 'Wytwórz kulturę wydajności',
        pathItems: [
          'value-of-speed',
          'how-can-performance-improve-conversion',
          'what-should-you-measure-to-improve-performance',
          'how-to-report-metrics',
          'fixing-website-speed-cross-functionally',
        ],
      },
    ],
  },
};
