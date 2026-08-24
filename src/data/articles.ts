export type ArticleType = "Artículo" | "Reseña";

export interface Article {
  id: number;
  slug: string;
  title: string;
  author: string;
  type: ArticleType;
  externalUrl: string;
  source: "Instagram" | "Google Docs";
  image?: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "resena-rebelion-en-la-granja",
    title: "Reseña destacada del libro “Rebelión en la Granja” de George Orwell",
    author: "Walter Hugo Vasquez Villa",
    type: "Reseña",
    source: "Google Docs",
    externalUrl:
      "https://docs.google.com/document/d/1whEPgG4GcvLCE1nEH7sDcmWNL5m0enD5XI4_Qp-jKM8/edit",
  },
  {
    id: 2,
    slug: "cidepac-un-nuevo-espacio-para-pensar-la-democracia",
    title: "CIDEPAC: un nuevo espacio para pensar la democracia",
    author: "Carlos Yemeri Arón Herrera Alayo",
    type: "Artículo",
    source: "Instagram",
    externalUrl: "https://www.instagram.com/p/DQZtJVAkSSY/",
    image: "/images/articles/cidepac-en-la-industria-carlos-herrera.webp",
    featured: true,
  },
  {
    id: 3,
    slug: "corrupcion-la-mascara-oculta-de-la-realidad-en-la-democracia",
    title: "Corrupción: la máscara oculta de la realidad en la democracia",
    author: "Luciana Milena Castillo Palacios",
    type: "Artículo",
    source: "Instagram",
    externalUrl: "https://www.instagram.com/p/DRAbFdSEk-l/",
  },
  {
    id: 4,
    slug: "la-ciudadania-y-la-vida-politica",
    title: "La ciudadanía y la vida política",
    author: "Luciano Alberto Chuquihuara Tirado",
    type: "Artículo",
    source: "Instagram",
    externalUrl: "https://www.instagram.com/p/DQw11Y-Edzq/",
  },
  {
    id: 5,
    slug: "la-satira-de-los-movimientos-politicos-en-la-libertad",
    title: "La sátira de los movimientos políticos en La Libertad",
    author: "Óscar Francisco Pérez Cáceres",
    type: "Artículo",
    source: "Instagram",
    externalUrl: "https://www.instagram.com/p/DRQiiXTDPaT/",
  },
  {
    id: 6,
    slug: "la-falla-es-el-sistema-o-las-personas",
    title: "¿La falla es el sistema o las personas?",
    author: "Cesar Brito Ochoa",
    type: "Artículo",
    source: "Instagram",
    externalUrl: "https://www.instagram.com/p/DR06IKRjOR8/",
  },
  {
    id: 7,
    slug: "cuando-masticar-se-convierte-en-un-lujo",
    title: "Cuando masticar se convierte en un lujo",
    author: "Yuriko Ariana Pérez Saavedra",
    type: "Artículo",
    source: "Instagram",
    externalUrl: "https://www.instagram.com/p/DSSxMjBkaWe/",
  },
  {
    id: 8,
    slug: "de-los-pasos-del-caudillo-al-revoloteo-del-populista",
    title: "De los pasos del caudillo al revoloteo del populista",
    author: "Renata Viviana Morales Núñez",
    type: "Artículo",
    source: "Instagram",
    externalUrl: "https://www.instagram.com/p/DTViPI-jkqG/",
    image: "/images/articles/la-industria-renata-morales-articulo.webp",
  },
];
