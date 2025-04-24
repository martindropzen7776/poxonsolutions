import { FeatureType, IntegrationType, PricingTier } from "./types";
import { BarChart4, Mail, FileText, Video, Instagram, BookText, Mic, Users } from "lucide-react";

export const features: FeatureType[] = [
  {
    id: 1,
    title: "Automatiza facturas",
    description: "Genera y envía facturas automáticamente, ahorrando tiempo y reduciendo errores.",
    icon: "FileText"
  },
  {
    id: 2,
    title: "Capta leads y automatiza mails",
    description: "Captura potenciales clientes y envía correos de seguimiento personalizados.",
    icon: "Mail"
  },
  {
    id: 3,
    title: "Crea contenido con IA",
    description: "Automatización para sistema AI para crear contenido automático de alta calidad.",
    icon: "BarChart4"
  },
  {
    id: 4,
    title: "Correos masivos personalizados",
    description: "Envía campañas de email marketing personalizadas a gran escala.",
    icon: "Mail"
  },
  {
    id: 5,
    title: "Publicación de Shorts",
    description: "Automatización de creación y publicación en masa de Shorts de YT.",
    icon: "Video"
  },
  {
    id: 6,
    title: "Publicación en Instagram",
    description: "Automatización para crear y publicar posts de IG en masa.",
    icon: "Instagram"
  },
  {
    id: 7,
    title: "Creación de ebooks",
    description: "Automatización para crear ebooks personalizados completos.",
    icon: "BookText"
  },
  {
    id: 8,
    title: "Asistentes de voz",
    description: "Automatización para crear asistentes de voz (VAPI+ importar datos).",
    icon: "Mic"
  },
  {
    id: 9,
    title: "Prospecta y redacta",
    description: "Automatización para prospectar y redactar (Apity+Make).",
    icon: "Users"
  }
];

export const integrations: IntegrationType[] = [
  {
    id: 1,
    name: "WhatsApp",
    icon: "/whatsapp.svg"
  },
  {
    id: 2,
    name: "Gmail",
    icon: "/gmail.svg"
  },
  {
    id: 3,
    name: "AutomateIA",
    icon: "/automate.svg"
  },
  {
    id: 4,
    name: "Google Sheets",
    icon: "/sheets.svg"
  }
];

export const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: "Pack Completo",
    price: "$24.99",
    description: "Todas las automatizaciones en un solo paquete",
    features: [
      "Acceso a +10 automatizaciones listas para usar",
      "No necesitás saber programar",
      "Funciona con tus apps favoritas",
      "Actualizaciones incluidas",
      "Soporte técnico prioritario"
    ],
    isPopular: true
  }
];