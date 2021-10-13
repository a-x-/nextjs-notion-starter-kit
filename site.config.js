module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '21a8e53f2561488f8f1e14f2875c90fe',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Tesla',
  domain: 'tesla-wiki.vercel.app/',
  author: 'Russian Tesla Community',

  // open graph metadata (optional)
  description: 'Tesla in Russia',
  socialImageTitle: '',
  socialImageSubtitle: '',

  // social usernames (optional)
  twitter: '',
  github: '',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.1,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    // '/app-and-acc': ''
    '/modem': '80e3b58a33274bc8a30b454e05a941bb', // no go
    '/plate': '1b2489e48b034625b96f3408a444f649',
    '/retro': '623efa05f04944a2bdae47886a34bef1',
    '/acdc': '0bcb2bd3841242ccb2f702cc6adee243',
    '/certs': '8520bae441cd484e903723dc6aa8bde6',
    '/reset': 'e89d8b3ef2dc407fa89905fd22e7e262',
    '/m3': '26bd09a54f6e4214a52335caf315118d', // go: manual3
    '/wtf': 'f23be42e3a8d4480a63a3636b853694d', // no go
    '/buy': '8887ffd127d846738bd71440d6f79679',
    '/musk': 'bb282172b3224f5ca8599492b81e287d', // go: support
    '/kents': 'c6903f59d69b4d199aca57d9801bd7d0', // go: tesla_kents
    '/chats': '9de15d9408f74315beabb32e1933d18c',
    '/wires': '26b08e230b1c439da35d829a3fdd380b',
    '/chargers': '8d7ad5f77349496fb3a6251cd7420c57'
  }
}
