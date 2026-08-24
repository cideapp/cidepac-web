export type AllianceScope = "UNT" | "Interuniversitaria";

export interface Alliance {
  id: number;
  acronym: string;
  name: string;
  institution: string;
  scope: AllianceScope;
  support: string;
  result: string;
  image?: string;
  featured?: boolean;
}

export const alliances: Alliance[] = [
  {
    id: 1,
    acronym: "CERI",
    name: "Círculo de Estudios en Relaciones Internacionales",
    institution: "Universidad Nacional de Trujillo",
    scope: "UNT",
    support: "Difusión y colaboración",
    result: "Trabajo conjunto en temas de interés para la ciencia política.",
    featured: true,
  },
  {
    id: 2,
    acronym: "METASOFIA",
    name: "Círculo de Estudios Jurídicos Filosóficos Metasofia",
    institution: "Universidad Nacional de Trujillo",
    scope: "UNT",
    support: "Alianza académica y económica",
    result:
      "Articulación de actividades académicas y acciones de recaudación de fondos.",
    image: "/images/alliances/alianza-cidepac-metasofia.jpg",
  },
  {
    id: 3,
    acronym: "LOGOS",
    name: "Taller de Pensamiento e Ideología Política",
    institution: "Universidad Nacional Mayor de San Marcos",
    scope: "Interuniversitaria",
    support: "Difusión y promoción",
    result:
      "Cooperación orientada a fortalecer la difusión y presencia de CIDEPAC en Lima.",
  },
  {
    id: 4,
    acronym: "DPCP",
    name: "Taller de Democracia DPCP",
    institution: "Universidad Católica de Santa María",
    scope: "Interuniversitaria",
    support: "Asesoría y consultoría",
    result:
      "Intercambio orientado al fortalecimiento del conocimiento sobre los ejes temáticos.",
  },
  {
    id: 5,
    acronym: "ASESDE",
    name: "ASESDE",
    institution: "Universidad Antonio Ruiz de Montoya",
    scope: "Interuniversitaria",
    support: "Alianza académica y de eventos",
    result:
      "Trabajo conjunto para la creación del evento “Del INPE a la SUNIR” en Lima.",
    image: "/images/alliances/alianza-cidepac-asesde-uarm.webp",
  },
  {
    id: 6,
    acronym: "JUDEX",
    name: "Círculo de Estudios JUDEX",
    institution: "Universidad Privada Antenor Orrego",
    scope: "Interuniversitaria",
    support: "Alianza académica y de difusión",
    result:
      "Cooperación para fortalecer el conocimiento de los ejes temáticos de CIDEPAC.",
    image: "/images/alliances/alianza-cidepac-judex.jpg",
  },
  {
    id: 7,
    acronym: "JUX AVANT",
    name: "Jux Avant",
    institution: "Universidad Científica del Sur",
    scope: "Interuniversitaria",
    support: "Alianza de difusión",
    result:
      "Cooperación orientada a ampliar la presencia y difusión de CIDEPAC en Lima.",
  },
  {
    id: 8,
    acronym: "CECIP",
    name: "Centro de Estudiantes de Ciencia Política",
    institution: "Universidad Nacional de Trujillo",
    scope: "UNT",
    support: "Reconocimiento estudiantil y cooperación",
    result:
      "Articulación y cooperación dentro de la comunidad estudiantil de Ciencia Política.",
    featured: true,
  },
  {
    id: 9,
    acronym: "CECOMPOL",
    name: "Centro de Estudios en Comunicación Política",
    institution: "Universidad Nacional de Trujillo",
    scope: "UNT",
    support: "Alianza académica e intercambio de experiencias",
    result:
      "Trabajo conjunto alrededor de temas de interés para la ciencia política.",
    featured: true,
  },
];
