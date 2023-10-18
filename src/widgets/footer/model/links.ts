export type LinksType = Record<string, { href: string; style?: string; title: string }[]>;
export const defaultFooterLinks: LinksType = {
  'footer.about-us': [
    {
      href: 'https://corp.ivi.ru/',
      title: 'footer.about-company',
    },
    {
      href: 'https://corp.ivi.ru/career/#career-vacancy-block',
      title: 'footer.vacancies',
    },
    {
      href: 'https://www.ivi.ru/pages/beta/',
      title: 'footer.beta',
    },
    {
      href: 'https://www.ivi.ru/info/partners',
      title: 'footer.partners',
    },
    {
      href: 'https://corp.ivi.ru/advertisers/',
      title: 'footer.advertisers',
    },
    {
      href: 'https://www.ivi.ru/info/agreement',
      title: 'footer.agreement',
    },
    {
      href: 'https://www.ivi.ru/info/confidential',
      title: 'footer.confidential',
    },
    {
      href: 'https://www.ivi.ru/info/goryachaya-liniya-komplaens',
      title: 'footer.compliance',
    },
  ],
  'footer.sections': [
    {
      href: '/',
      title: 'sections.my-ivi',
    },
    {
      href: 'https://www.ivi.ru/new',
      title: 'sections.whats-new',
    },
    {
      href: '/movies',
      title: 'sections.movies',
    },
    {
      href: '/series',
      title: 'sections.series',
    },
    {
      href: '/animation',
      title: 'sections.animation',
    },
    {
      href: 'https://www.ivi.ru/tvplus',
      title: 'sections.tv-plus',
    },
    {
      href: 'https://www.ivi.ru/goodmovies',
      title: 'sections.good-movies',
    },
    {
      href: 'https://www.ivi.ru/cert',
      title: 'footer.cert',
      style: 'cert_link',
    },
  ],
};
