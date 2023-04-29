import React from "react"
import { Helmet } from "react-helmet"

const MyApp = ({ element }) => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Portfolio - Nicolas RIERA</title>
      <meta name="description" content="Ma page est dédiée à présenter mes compétences en développement web, mes projets récents et mes réalisations en tant que développeur web. Avec des compétences en développement front-end et back-end, j'ai créé des sites web réactifs et faciles à naviguer en utilisant des technologies modernes telles que Gatsby, React et Node.js. Mon portfolio comprend des projets passionnants qui démontrent mon expertise en matière de développement web. Explorez mon portfolio pour en savoir plus sur mes compétences et mon travail, et n'hésitez pas à me contacter si vous souhaitez en discuter." />

      <meta property="og:title" content="Portfolio - Nicolas RIERA" />
      <meta property="og:description" content="Ma page est dédiée à présenter mes compétences en développement web, mes projets récents et mes réalisations en tant que développeur web. Avec des compétences en développement front-end et back-end, j'ai créé des sites web réactifs et faciles à naviguer en utilisant des technologies modernes telles que Gatsby, React et Node.js. Mon portfolio comprend des projets passionnants qui démontrent mon expertise en matière de développement web. Explorez mon portfolio pour en savoir plus sur mes compétences et mon travail, et n'hésitez pas à me contacter si vous souhaitez en discuter." />
      <meta name="keywords" content="gatsby, react, développement web" />
      <meta property="og:image" content="https://res.cloudinary.com/dzceds5rc/image/upload/v1682777879/IMG_2430_wvoytj.jpg" />
      <meta property="og:url" content="https://www.nicolasriera.online/" />
    </Helmet>
    {element}
  </React.Fragment>
)

export const wrapRootElement = ({ element }) => <MyApp element={element} />
