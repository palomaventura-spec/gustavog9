const SITE_URL = "https://gustavoaguiarg9.online";

export default function PersonSchema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#gustavo-aguiar`,

    name: "Gustavo Aguiar",
    alternateName: ["Gustavo Aguiar G9", "G9"],

    url: SITE_URL,

    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/og-image.jpg`,
      width: 1200,
      height: 630,
    },

    description:
      "Gustavo Aguiar, conhecido como G9, é um jovem atleta luso-brasileiro, atacante no futebol e pivô no futsal. O site apresenta sua trajetória esportiva, estatísticas, conquistas e vídeos.",

    nationality: [
      {
        "@type": "Country",
        name: "Portugal",
      },
      {
        "@type": "Country",
        name: "Brasil",
      },
    ],

    jobTitle: "Jovem atleta",

    knowsAbout: [
      "Futebol",
      "Futsal",
      "Futebol de base",
      "Futsal de base",
      "Atacante",
      "Pivô",
    ],

    affiliation: {
      "@type": "SportsTeam",
      name: "Botafogo de Futebol e Regatas",
      sport: ["Futebol", "Futsal"],
    },

    alumniOf: {
      "@type": "SportsTeam",
      name: "Arouca",
      sport: "Futsal",
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": SITE_URL,
    },
  };

  return (
    <script
      id="person-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}