export interface Activity {
  id: number;
  slug: string;
  title: string;
  date: string;
  year: number;
  place: string;
  modality: string;
  description: string;
  image?: string;
  gallery?: string[];
  featured?: boolean;
}

export const activities: Activity[] = [
  {
    id: 1,
    slug: "bienvenida-cachimbos-2025",
    title: "Bienvenida Cachimbos 2025",
    date: "19 y 21 de marzo de 2025",
    year: 2025,
    place: "Facultad de Derecho y Ciencia Política – UNT",
    modality: "Presencial",
    description:
      "Espacio de presentación de CIDEPAC dirigido a nuevos estudiantes para dar a conocer sus ejes temáticos, dinámica y principios.",
    image: "/images/activities/bienvenida-cachimbos-portada.webp",
  },
  {
    id: 2,
    slug: "convocatoria-2025-i",
    title: "Convocatoria 2025-I",
    date: "17 al 31 de marzo de 2025",
    year: 2025,
    place: "Redes sociales de CIDEPAC",
    modality: "Virtual",
    description:
      "Convocatoria dirigida a estudiantes interesados en fortalecer sus conocimientos en ciencia política y áreas afines.",
  },
  {
    id: 3,
    slug: "reunion-confraternidad-2025",
    title: "Reunión de Confraternidad 2025",
    date: "7 de mayo de 2025",
    year: 2025,
    place: "Restaurante D´Luchos",
    modality: "Presencial",
    description:
      "Actividad de integración orientada a fortalecer los vínculos entre los integrantes de CIDEPAC.",
  },
  {
    id: 4,
    slug: "taller-lectura-rebelion-granja",
    title: "Taller de Lectura: Rebelión en la granja",
    date: "24 de mayo de 2025",
    year: 2025,
    place: "Google Meet",
    modality: "Virtual",
    description:
      "Taller de lectura y discusión dedicado al análisis de la obra de George Orwell desde diferentes perspectivas.",
  },
  {
    id: 5,
    slug: "aprende-con-cidepac",
    title: "Aprende con CIDEPAC",
    date: "18 al 28 de junio de 2025",
    year: 2025,
    place: "Google Meet",
    modality: "Virtual",
    description:
      "Ciclo de capacitaciones internas para fortalecer capacidades de los integrantes en distintas áreas de trabajo.",
  },
  {
    id: 6,
    slug: "convocatoria-2025-ii",
    title: "Convocatoria 2025-II",
    date: "20 al 30 de agosto de 2025",
    year: 2025,
    place: "Redes sociales",
    modality: "Virtual",
    description:
      "Nueva convocatoria dirigida a estudiantes universitarios interesados en ciencia política y áreas afines.",
  },
  {
    id: 7,
    slug: "gran-torneo-uno",
    title: "Gran Torneo UNO",
    date: "26 de septiembre de 2025",
    year: 2025,
    place: "Biblioteca de Ciencias Económicas – UNT",
    modality: "Presencial",
    description:
      "Actividad recreativa orientada a promover la integración y el compañerismo entre estudiantes y simpatizantes de CIDEPAC.",
  },
  {
    id: 8,
    slug: "bienvenida-integrantes-2025-ii",
    title: "Bienvenida Integrantes 2025-II",
    date: "5 de noviembre de 2025",
    year: 2025,
    place: "Facultad de Derecho y Ciencia Política – UNT",
    modality: "Presencial",
    description:
      "Encuentro con nuevos integrantes, reconocimiento de miembros destacados y presentación de nuevas actividades.",
    image: "/images/activities/bienvenida-cidepac-foto-grupal.jpeg",
    gallery: [
      "/images/activities/bienvenida-cidepac-charla-aula.jpg",
      "/images/activities/bienvenida-cidepac-charla-aula-vertical.jpeg",
      "/images/activities/bienvenida-cidepac-foto-grupal-aula.jpeg",
    ],
  },
  {
    id: 9,
    slug: "tertulias-politicas-cidepac-cecip",
    title: "Tertulias Políticas — CIDEPAC x CECIP",
    date: "6 de noviembre de 2025",
    year: 2025,
    place: "Parque de Derecho y Ciencias Políticas – UNT",
    modality: "Presencial",
    description:
      "Espacio de diálogo sobre democracia, filosofía política y cultura política desarrollado junto con CECIP.",
    image: "/images/activities/tertulias-politicas-jueves-6.jpg",
  },
  {
    id: 10,
    slug: "comunicar-el-poder",
    title: "Comunicar el Poder",
    date: "21 de noviembre de 2025",
    year: 2025,
    place: "Facultad de Derecho y Ciencia Política – UNT",
    modality: "Presencial",
    description:
      "Taller sobre estrategias políticas y sociales en tiempos de transformación con participación interuniversitaria.",
  },
  {
    id: 11,
    slug: "taller-redaccion-articulos-opinion",
    title: "Taller de Redacción de Artículos de Opinión",
    date: "14 de diciembre de 2025",
    year: 2025,
    place: "Google Meet",
    modality: "Virtual",
    description:
      "Taller teórico-práctico orientado al desarrollo de capacidades para redactar artículos de opinión.",
  },
  {
    id: 12,
    slug: "ius-conecta",
    title: "Ponencia IUS CONECTA",
    date: "16 de diciembre de 2025",
    year: 2025,
    place: "Auditorio Florencio Mixán Mass",
    modality: "Presencial",
    description:
      "Espacio académico de encuentro entre Derecho y Ciencia Política desarrollado junto con organizaciones aliadas.",
    image: "/images/activities/ius-conecta.webp",
  },
  {
    id: 13,
    slug: "rodolfo-y-cidepac-celebran",
    title: "Rodolfo y CIDEPAC celebran",
    date: "20 de diciembre de 2025",
    year: 2025,
    place: "Parque de Derecho – UNT",
    modality: "Presencial",
    description:
      "Encuentro de confraternidad y reconocimiento al esfuerzo y participación de los integrantes durante el año.",
  },
  {
    id: 14,
    slug: "cidepac-360",
    title: "CIDEPAC 360 — Semana de Aniversario",
    date: "19 al 23 de enero de 2026",
    year: 2026,
    place: "Google Meet y Auditorio Florencio Mixán Mass",
    modality: "Presencial y virtual",
    description:
      "Semana académica con talleres y ponencias sobre democracia, gobernabilidad, participación política y otros temas.",
  },
  {
    id: 15,
    slug: "yachay-politik",
    title: "Yachay Politik",
    date: "7 al 15 de febrero de 2026",
    year: 2026,
    place: "Google Meet",
    modality: "Virtual",
    description:
      "Taller de inducción y formación ciudadana dedicado a fortalecer conocimientos sobre ciudadanía activa y responsable.",
  },
  {
    id: 16,
    slug: "voto-informado",
    title: "Voto Informado",
    date: "3 de marzo de 2026",
    year: 2026,
    place: "Plaza de Armas",
    modality: "Presencial",
    description:
      "Actividad de orientación ciudadana sobre el proceso electoral de 2026 y conceptos básicos del sistema político.",
  },
  {
    id: 17,
    slug: "debate-electoral-decanato-2026",
    title: "Debate Electoral — Decanato 2026",
    date: "4 de junio de 2026",
    year: 2026,
    place: "Auditorio Florencio Mixán Mass – UNT",
    modality: "Presencial + transmisión en vivo",
    description:
      "Espacio formal y plural de confrontación de propuestas entre las listas candidatas al Decanato de la Facultad.",
    image: "/images/activities/debate-decanal-publico-auditorio.jpg",
    gallery: ["/images/activities/debate-academico-foto-grupal.jpeg"],
    featured: true,
  },
  {
    id: 18,
    slug: "ciencia-politica-fest-2026",
    title: "Ciencia Política Fest — Feria Gastronómica",
    date: "22 de julio de 2026",
    year: 2026,
    place: "Facultad de Derecho y Ciencias Políticas – UNT",
    modality: "Presencial",
    description:
      "Feria organizada junto con distintas organizaciones estudiantiles para fortalecer la integración de la comunidad de Ciencia Política.",
  },
];
