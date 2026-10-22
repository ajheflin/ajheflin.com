// Contact details shown publicly. The phone number on the PDF résumé is
// intentionally left off the site.
export const site = {
  name: 'Adam (AJ) Heflin',
  shortName: 'AJ Heflin',
  title: 'Software Engineer',
  location: 'Tampa, FL',
  email: 'me@ajheflin.com',
  description:
    'Adam (AJ) Heflin is a software engineer in Tampa, FL building reliable, performant systems in Go, currently at Red Hat on OpenShift Advanced Cluster Security.',
};

// Links render only when `href` is set.
export const links = [
  // TODO: add your LinkedIn profile URL.
  { label: 'LinkedIn', href: '' },
  { label: 'GitHub', href: 'https://github.com/ajheflin' },
  { label: 'GitHub (games)', href: 'https://github.com/ReignOfFROZE' },
  { label: 'Reizor Hosting', href: 'https://reizorhosting.com' },
].filter((link) => link.href);
