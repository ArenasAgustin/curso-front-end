export default {
  github: 'https://github.com/ArenasAgustin/cursoFrontEnd',
  docsRepositoryBase: 'https://github.com/ArenasAgustin/cursoFrontEnd',
  titleSuffix: ' – ArenasAgustin',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">
        Curso Front-end
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="es" />
      <meta name="apple-mobile-web-app-title" content="Curso Front-end" />

      <link rel="apple-touch-icon" sizes="256x256" href="/colegio256.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="256x256"
        href="/colegio256.png"
      />
      <link rel="icon" type="image/png" sizes="32x32" href="/colegio32.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="128x128"
        href="/colegio128.png"
      />
      <link rel="icon" type="image/png" sizes="16x16" href="/colegio16.png" />
      <meta name="msapplication-TileImage" content="/colegio256.png" />

      <title>Curso Front-end</title>
      <meta name="title" content="Curso Front-end" />
      <meta
        name="description"
        content="Proyecto para que conozcas desde conceptos básicos hasta un nivel avanzado de front-end de aplicaciones web. En este proyecto se abarca JavaScript, HTML, CSS, React y un poco de Redux, con explicaciones, ejemplos, demostraciones y actividades."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://cursofrontend.vercel.app/" />
      <meta property="og:title" content="Curso Front-end" />
      <meta
        property="og:description"
        content="Proyecto para que conozcas desde conceptos básicos hasta un nivel avanzado de front-end de aplicaciones web. En este proyecto se abarca JavaScript, HTML, CSS, React y un poco de Redux, con explicaciones, ejemplos, demostraciones y actividades."
      />
      <meta
        property="og:image"
        content="https://cursofrontend.vercel.app/cursofrontend.png"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://cursofrontend.vercel.app/"
      />
      <meta property="twitter:title" content="Curso Front-end" />
      <meta
        property="twitter:description"
        content="Proyecto para que conozcas desde conceptos básicos hasta un nivel avanzado de front-end de aplicaciones web. En este proyecto se abarca JavaScript, HTML, CSS, React y un poco de Redux, con explicaciones, ejemplos, demostraciones y actividades."
      />
      <meta
        property="twitter:image"
        content="https://cursofrontend.vercel.app/cursofrontend.png"
      />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Puedes contribuir al curso aquí',
  footerText: <>MIT 2022 © Arenas Agustín.</>,
  unstable_faviconGlyph: '👋',
  defaultMenuCollapsed: true,
}
