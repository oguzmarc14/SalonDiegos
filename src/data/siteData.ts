// ===== Datos editables del sitio =====
// Modifica estos arreglos para actualizar el contenido de la página.

export const WHATSAPP_NUMBER = '524759532106';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const SITE_INFO = {
  name: 'Salón Diego\'s',
  location: 'Encarnación de Díaz, Jalisco',
  phone: '475 953 2106',
  wazeUrl: 'https://www.waze.com/es/live-map/directions/mx/jal./encarnacion-de-diaz/salon-de-eventos-diegos?to=place.ChIJDbfd2raEKYQRo4zgD0RFgYU',
  facebook: 'https://www.facebook.com/salondiegos?locale=es_LA', // Reemplazar con URL real
  instagram: 'https://www.instagram.com/salon.diegos?fbclid=IwY2xjawTGT7BleHRuA2FlbQIxMABicmlkETFtbHBYUXlyaVpXdlpLTVJGc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiEj5fdyDVCP3t9eCcHy0fLcxEORY7k1JUFllFC4Ot4M9K8Sz6gAfDmePmFk_aem_eCtn4d723Qnn5qmCOSfJiQ', // Reemplazar con URL real
};

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'El salón', href: '#salon' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Paquetes', href: '#paquetes' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
];

export const EVENTOS = [
  {
    nombre: 'Bodas',
    descripcion: 'Haz de tu boda un momento mágico en un espacio diseñado para el amor.',
    imagen: '/bodas.jpg',
    mensajeWA: 'Hola, me interesa realizar una boda en Salón Diego\'s. ¿Me pueden compartir información y disponibilidad?',
  },
  {
    nombre: 'XV Años',
    descripcion: 'Celebra esta etapa tan especial con una fiesta inolvidable.',
    imagen: '/xvaños.jpg',
    mensajeWA: 'Hola, me interesa realizar una fiesta de XV años en Salón Diego\'s. ¿Me pueden compartir información y disponibilidad?',
  },
  {
    nombre: 'Graduaciones',
    descripcion: 'Festeja tus logros rodeado de quienes te acompañaron en el camino.',
    imagen: '/diegos1.jpg',
    mensajeWA: 'Hola, me interesa realizar una graduación en Salón Diego\'s. ¿Me pueden compartir información y disponibilidad?',
  },
  {
    nombre: 'Bautizos y Primeras Comuniones',
    descripcion: 'Un entorno cálido y elegante para celebrar momentos de fe.',
    imagen: '/bautizos.jpg',
    mensajeWA: 'Hola, me interesa realizar un bautizo o primera comunión en Salón Diego\'s. ¿Me pueden compartir información y disponibilidad?',
  },
  {
    nombre: 'Cumpleaños',
    descripcion: 'Sorprende a tus seres queridos con una celebración que recordarán siempre.',
    imagen: '/cumpleaños.jpg',
    mensajeWA: 'Hola, me interesa realizar una fiesta de cumpleaños en Salón Diego\'s. ¿Me pueden compartir información y disponibilidad?',
  },
  {
    nombre: 'Eventos Empresariales',
    descripcion: 'Un espacio profesional y versátil para conferencias, cenas corporativas y más.',
    imagen: '/eventos.jpg',
    mensajeWA: 'Hola, me interesa realizar un evento empresarial en Salón Diego\'s. ¿Me pueden compartir información y disponibilidad?',
  },
];

export const PAQUETES = [
  {
    nombre: 'Esencial',
    subtitulo: 'Ideal para quienes desean organizar cada detalle a su manera.',
    popular: false,
    items: [
      'Renta del salón',
      'Mesas y sillas',
      'Tiempo de servicio',
      'Limpieza',
      'Personal de apoyo',
    ],
    botonTexto: 'Cotizar paquete Esencial',
    mensajeWA: 'Hola, me interesa el Paquete Esencial de Salón Diego\'s. ¿Me pueden compartir más información y disponibilidad?',
  },
  {
    nombre: 'Celebración',
    subtitulo: 'Una opción con mayor comodidad para disfrutar el evento.',
    popular: true,
    items: [
      'Renta del salón',
      'Mesas y sillas',
      'Mantelería',
      'Montaje',
      'Decoración básica',
      'Limpieza',
    ],
    botonTexto: 'Cotizar paquete Celebración',
    mensajeWA: 'Hola, me interesa el Paquete Celebración de Salón Diego\'s. ¿Me pueden compartir más información y disponibilidad?',
  },
  {
    nombre: 'Todo Incluido',
    subtitulo: 'Una experiencia integral, diseñada de acuerdo con las necesidades del evento.',
    popular: false,
    items: [
      'Uso del salón',
      'Mobiliario',
      'Decoración personalizada',
      'Alimentos y bebidas',
      'Música o DJ',
      'Coordinación del evento',
    ],
    botonTexto: 'Diseñar mi paquete',
    mensajeWA: 'Hola, me interesa el Paquete Todo Incluido de Salón Diego\'s. ¿Me pueden compartir más información y disponibilidad?',
  },
];

export const FAQ = [
  {
    pregunta: '¿Con cuánto tiempo de anticipación debo reservar?',
    respuesta: 'Te recomendamos comunicarte con nosotros lo antes posible para verificar la disponibilidad de tu fecha. Las fechas más solicitadas suelen apartarse con varios meses de anticipación.',
  },
  {
    pregunta: '¿Cómo puedo apartar una fecha?',
    respuesta: 'Contáctanos por WhatsApp para consultar disponibilidad. Una vez confirmada tu fecha, te indicaremos los pasos para formalizar tu reservación.',
  },
  {
    pregunta: '¿Puedo personalizar un paquete?',
    respuesta: 'Sí, nuestros paquetes son flexibles. Podemos adaptar servicios según las necesidades de tu evento. Platícanos tu idea y te haremos una propuesta a la medida.',
  },
  {
    pregunta: '¿Qué tipos de eventos reciben?',
    respuesta: 'Recibimos bodas, XV años, graduaciones, bautizos, primeras comuniones, cumpleaños, eventos empresariales y todo tipo de celebraciones sociales y familiares.',
  },
  {
    pregunta: '¿Puedo visitar las instalaciones?',
    respuesta: 'Por supuesto. Agenda una visita por WhatsApp y con gusto te mostramos nuestras instalaciones para que puedas imaginar tu evento.',
  },
  {
    pregunta: '¿Dónde se encuentra el salón?',
    respuesta: 'Estamos ubicados en Encarnación de Díaz, Jalisco. Puedes consultar nuestra ubicación exacta en la sección de ubicación o abrir la ruta en Waze.',
  },
];

export const PASOS_RESERVACION = [
  {
    numero: '01',
    titulo: 'Cuéntanos sobre tu evento',
    descripcion: 'Comparte los detalles de la celebración que tienes en mente.',
  },
  {
    numero: '02',
    titulo: 'Consulta la disponibilidad',
    descripcion: 'Verifica que tu fecha esté disponible en nuestro calendario.',
  },
  {
    numero: '03',
    titulo: 'Elige o personaliza tu paquete',
    descripcion: 'Selecciona el paquete que mejor se adapte a tu evento.',
  },
  {
    numero: '04',
    titulo: 'Aparta tu fecha',
    descripcion: 'Formaliza tu reservación y comienza a planear cada detalle.',
  },
];

export const GALLERY_CATEGORIES = [
  'Todos',
  'Bodas',
  'XV años',
  'Decoraciones',
  'Instalaciones',
  'Otros eventos',
];

// Imágenes de galería - Reemplazar con fotos reales del salón
export const GALLERY_IMAGES = [
  { src: '/galeria/boda.jpg', alt: 'Salón decorado para boda', category: 'Bodas' },
  { src: '/galeria/xvaños.jpg', alt: 'Mesa principal de XV años', category: 'XV años' },
  { src: '/galeria/floralelegante.jpg', alt: 'Decoración floral elegante', category: 'Decoraciones' },
  { src: '/galeria/mesa.jpg', alt: 'Vista del salón principal', category: 'Instalaciones' },
  { src: '/galeria/graduacion.jpg', alt: 'Montaje para graduaciones', category: 'Bodas' },
  { src: '/galeria/xvaños2.jpg', alt: 'Decoración de XV años', category: 'XV años' },
  { src: '/galeria/dj.jpg', alt: 'Estructuras para iluminacion', category: 'Decoraciones' },
  { src: '/galeria/vistaprincipal.jpg', alt: 'Entrada del salón', category: 'Instalaciones' },
  { src: '/galeria/evento.jpg', alt: 'Evento empresarial', category: 'Otros eventos' },
];

// Testimonios - DEJAR VACÍO hasta tener opiniones reales
export const TESTIMONIOS = [
  {
    nombre: 'Jerry Moo',
    texto: 'Muy buen lugar, amplio, cómodo, con todas las instalaciones para realizar eventos inolvidables',
    evento: 'Graduación',
    estrellas: 5,
  },
  {
    nombre: 'Carmen Lopez',
    texto: 'Excelente superó mis expectativas, siempre están atentos a cualquier duda para dar el mejor servicio ❤️‍🩹',
    evento: 'Graduación',
    estrellas: 5,
  },
  {
    nombre: 'Eduardo González',
    texto: 'Muy padre el salón y de excelente tamaño para cualquier evento',
    evento: 'Boda',
    estrellas: 5,
  },

];
