export interface Parroquia {
  id: string;
  nombre: string;
  subtitulo: string;
  tag: string;
  tagColor: 'primary' | 'secondary' | 'accent';
  imagen: string;
  descripcionCorta: string;
  historia: string;
  fundacion: string;
  estilo: string;
  horario: string;
  misa: string;
  direccion: string;
  coordenadas: { lat: number; lng: number };
  recomendaciones: string[];
  datosInteresantes: { titulo: string; valor: string }[];
  orden: number;
}

export const parroquias: Parroquia[] = [
  {
    id: 'san-pedro-apostol',
    nombre: 'Parroquia San Pedro Apóstol',
    subtitulo: 'Templo Mayor de la Zona Pastoral',
    tag: 'Patronal',
    tagColor: 'primary',
    imagen: '/images/parroquia-san-pedro.jpg',
    descripcionCorta:
      'El templo más emblemático de la Zona Pastoral Valera, dedicado al Príncipe de los Apóstoles. Centro de la vida religiosa y cultural del municipio.',
    historia:
      'La Parroquia San Pedro Apóstol es el corazón espiritual de la Zona Pastoral Valera. Dedicada al Príncipe de los Apóstoles, su historia está profundamente entrelazada con la fundación y el crecimiento de la ciudad. Desde sus orígenes coloniales, este templo ha sido testigo de momentos clave de la vida religiosa y civil de la región. Su arquitectura mezcla elementos del estilo colonial venezolano con influencias neoclásicas y en su interior se conservan imágenes, retablos y obras de arte sacro de gran valor patrimonial.',
    fundacion: 'Época colonial venezolana',
    estilo: 'Colonial venezolano con influencia neoclásica',
    horario: 'Lun–Sáb: 7:00 a.m. – 12:00 m. | 3:00 p.m. – 7:00 p.m.',
    misa: 'Dom: 7:00, 9:00, 11:00 a.m. | Lun–Sáb: 7:00 a.m. y 6:00 p.m.',
    direccion: 'Centro Histórico, Valera, Estado Trujillo, Venezuela',
    coordenadas: { lat: 9.3241, lng: -70.6065 },
    recomendaciones: [
      'Visita el 29 de junio para la festividad de San Pedro y San Pablo.',
      'Llega temprano para disfrutar la luz natural del interior.',
      'Asiste a la misa dominical de 9:00 a.m.',
      'Observa los detalles del altar mayor y sus retablos.',
      'Tómate tiempo en la plaza frente al templo.',
    ],
    datosInteresantes: [
      { titulo: 'Patrono', valor: 'San Pedro Apóstol' },
      { titulo: 'Festividad principal', valor: '29 de junio — San Pedro y San Pablo' },
      { titulo: 'Estilo arquitectónico', valor: 'Colonial venezolano' },
      { titulo: 'Diócesis', valor: 'Diócesis de Trujillo' },
      { titulo: 'Ubicación', valor: 'Centro histórico de Valera' },
    ],
    orden: 1,
  },
  {
    id: 'san-juan-bautista',
    nombre: 'Parroquia San Juan Bautista',
    subtitulo: 'Parroquia Histórica de Valera',
    tag: 'S. XVIII',
    tagColor: 'secondary',
    imagen: '/images/parroquia-san-juan.jpg',
    descripcionCorta:
      'Una de las parroquias más antiguas de la región, con raíces coloniales y una rica tradición de festividades.',
    historia:
      'La Parroquia San Juan Bautista es uno de los templos más antiguos de Valera. Su fundación está ligada a la evangelización de las comunidades de la región andina. A lo largo de los siglos ha sido custodio de un importante patrimonio artístico y religioso. Es especialmente conocida por sus festividades del 24 de junio, con procesiones, música tradicional y expresiones de fe popular.',
    fundacion: 'Período colonial venezolano',
    estilo: 'Barroco colonial venezolano',
    horario: 'Lun–Sáb: 6:30 a.m. – 12:00 m. | 3:30 p.m. – 6:30 p.m.',
    misa: 'Dom: 7:00, 9:00 a.m. | Lun–Sáb: 6:30 a.m. y 6:00 p.m.',
    direccion: 'Sector San Juan, Valera, Estado Trujillo, Venezuela',
    coordenadas: { lat: 9.3228, lng: -70.6042 },
    recomendaciones: [
      'Visita el 24 de junio para la festividad de San Juan Bautista.',
      'Pide permiso antes de fotografiar imágenes religiosas.',
      'Asiste a la misa de 6:30 a.m.',
      'Observa los detalles del techo y los retablos laterales.',
      'Conversa con los feligreses sobre la historia del templo.',
    ],
    datosInteresantes: [
      { titulo: 'Patrono', valor: 'San Juan Bautista' },
      { titulo: 'Festividad principal', valor: '24 de junio — Natividad de San Juan' },
      { titulo: 'Estilo arquitectónico', valor: 'Barroco colonial' },
      { titulo: 'Período de fundación', valor: 'Época colonial venezolana' },
      { titulo: 'Sector', valor: 'San Juan, Valera' },
    ],
    orden: 2,
  },
  {
    id: 'candelaria-beatriz',
    nombre: 'Parroquia Ntra. Sra. de La Candelaria de La Beatriz',
    subtitulo: 'Devoción Mariana de La Beatriz',
    tag: 'Mariana',
    tagColor: 'accent',
    imagen: '/images/parroquia-candelaria.jpg',
    descripcionCorta:
      'Dedicada a Nuestra Señora de La Candelaria, patrona del sector La Beatriz.',
    historia:
      'La Parroquia Nuestra Señora de La Candelaria de La Beatriz es el centro de la devoción mariana de este sector de Valera. Su festividad del 2 de febrero congrega a una comunidad profundamente arraigada en la espiritualidad mariana. Las celebraciones incluyen procesiones con velas encendidas y una atmósfera de recogimiento muy especial.',
    fundacion: 'Siglo XX',
    estilo: 'Colonial venezolano moderno',
    horario: 'Lun–Sáb: 7:00 a.m. – 12:00 m. | 4:00 p.m. – 7:00 p.m.',
    misa: 'Dom: 8:00, 10:00 a.m. y 6:00 p.m. | Lun–Sáb: 7:00 a.m. y 6:30 p.m.',
    direccion: 'Sector La Beatriz, Valera, Estado Trujillo, Venezuela',
    coordenadas: { lat: 9.326, lng: -70.605 },
    recomendaciones: [
      'Visita el 2 de febrero para la festividad de La Candelaria.',
      'Observa la imagen de la Virgen con respeto.',
      'Aprovecha el ambiente tranquilo para la contemplación.',
      'Lleva una vela blanca si visitas en febrero.',
      'Consulta el calendario parroquial para novenas.',
    ],
    datosInteresantes: [
      { titulo: 'Patrona', valor: 'Nuestra Señora de La Candelaria' },
      { titulo: 'Festividad principal', valor: '2 de febrero — La Candelaria' },
      { titulo: 'Sector', valor: 'La Beatriz, Valera' },
      { titulo: 'Símbolo', valor: 'Procesión de velas encendidas' },
      { titulo: 'Diócesis', valor: 'Diócesis de Trujillo' },
    ],
    orden: 3,
  },
  {
    id: 'san-jose',
    nombre: 'Parroquia San José',
    subtitulo: 'Templo del Patrono de la Iglesia Universal',
    tag: 'San José',
    tagColor: 'primary',
    imagen: '/images/parroquia-san-jose.jpg',
    descripcionCorta:
      'Dedicada a San José, patrono de la Iglesia Universal y modelo de padre y trabajador.',
    historia:
      'La Parroquia San José está dedicada al esposo de la Virgen María y padre adoptivo de Jesús. La devoción a San José ocupa un lugar central en la espiritualidad de muchas familias de Valera. Cada 19 de marzo, la parroquia se convierte en el centro de celebraciones religiosas y comunitarias que reúnen a numerosos fieles.',
    fundacion: 'Siglo XX',
    estilo: 'Colonial venezolano',
    horario: 'Lun–Sáb: 7:00 a.m. – 12:00 m. | 3:30 p.m. – 7:00 p.m.',
    misa: 'Dom: 7:00, 9:00, 11:00 a.m. | Lun–Sáb: 7:00 a.m. y 6:00 p.m.',
    direccion: 'Sector San José, Valera, Estado Trujillo, Venezuela',
    coordenadas: { lat: 9.325, lng: -70.608 },
    recomendaciones: [
      'Visita el 19 de marzo para la festividad de San José.',
      'El mes de marzo suele incluir actividades especiales.',
      'Observa la imagen de San José con el Niño Jesús.',
      'Consulta actividades para trabajadores y familias.',
      'Pregunta por grupos de oración San José.',
    ],
    datosInteresantes: [
      { titulo: 'Patrono', valor: 'San José' },
      { titulo: 'Festividad principal', valor: '19 de marzo — San José' },
      { titulo: 'Mes especial', valor: 'Marzo — Mes San José' },
      { titulo: 'Título universal', valor: 'Patrono de la Iglesia Universal' },
      { titulo: 'Sector', valor: 'San José, Valera' },
    ],
    orden: 4,
  },
  {
    id: 'valle-san-luis',
    nombre: 'Parroquia Ntra. Sra. del Valle de San Luis',
    subtitulo: 'Devoción Mariana de San Luis',
    tag: 'Del Valle',
    tagColor: 'secondary',
    imagen: '/images/parroquia-valle.jpg',
    descripcionCorta:
      'Dedicada a Nuestra Señora del Valle, patrona del Oriente venezolano y devoción muy querida por los fieles.',
    historia:
      'La Parroquia Nuestra Señora del Valle de San Luis representa un puente entre la devoción oriental y la fe andina. En este templo se reúnen fieles que han llevado consigo la tradición espiritual de la Virgen del Valle, construyendo en Valera un espacio de encuentro, oración y celebración profundamente significativo.',
    fundacion: 'Siglo XX',
    estilo: 'Colonial venezolano',
    horario: 'Lun–Sáb: 7:00 a.m. – 12:00 m. | 4:00 p.m. – 6:30 p.m.',
    misa: 'Dom: 8:00, 10:30 a.m. | Lun–Sáb: 7:00 a.m. y 6:00 p.m.',
    direccion: 'Sector San Luis, Valera, Estado Trujillo, Venezuela',
    coordenadas: { lat: 9.322, lng: -70.607 },
    recomendaciones: [
      'Visita en septiembre para las festividades de la Virgen del Valle.',
      'Observa la imagen con respeto y atención.',
      'El sector San Luis es ideal para el recogimiento.',
      'Conversa con feligreses sobre su tradición devocional.',
      'Asiste a la misa dominical de 10:30 a.m.',
    ],
    datosInteresantes: [
      { titulo: 'Patrona', valor: 'Nuestra Señora del Valle' },
      { titulo: 'Festividad principal', valor: 'Septiembre — Mes de la Virgen del Valle' },
      { titulo: 'Sector', valor: 'San Luis, Valera' },
      { titulo: 'Conexión', valor: 'Devoción oriental en tierra andina' },
      { titulo: 'Santuario principal', valor: 'Isla de Margarita, Venezuela' },
    ],
    orden: 5,
  },
];

export function getParroquiaById(id: string) {
  return parroquias.find((p) => p.id === id);
}