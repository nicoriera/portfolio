module.exports = {
  siteMetadata: {
    title: "Porfolio de Nicolas RIERA",
    description: "Ma page est dédiée à présenter mes compétences en développement web, mes projets récents et mes réalisations en tant que développeur web. Avec des compétences en développement front-end et back-end, j'ai créé des sites web réactifs et faciles à naviguer en utilisant des technologies modernes telles que Gatsby, React et Node.js. Mon portfolio comprend des projets passionnants qui démontrent mon expertise en matière de développement web. Explorez mon portfolio pour en savoir plus sur mes compétences et mon travail, et n'hésitez pas à me contacter si vous souhaitez en discuter.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://www.nicolasriera.online/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "Nicolas RIERA", // Used in manifest.json
          shortName: "Portfolio", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
  ],
};
