import { Language } from '@/types/language';

export interface Translations {
  navigation: {
    home: string;
    about: string;
    services: string;
    tracking: string;
    contact: string;
  };
  hero: {
    title1: string;
    title2: string;
    subtitle: string;
    trackButton: string;
    features: {
      road: { title: string; description: string; };
      air: { title: string; description: string; };
      sea: { title: string; description: string; };
      tracking: { title: string; description: string; };
    };
  };
  services: {
    title: string;
    subtitle: string;
    learnMore: string;
    items: {
      road: {
        title: string;
        description: string;
        features: [string, string, string];
      };
      air: {
        title: string;
        description: string;
        features: [string, string, string];
      };
      sea: {
        title: string;
        description: string;
        features: [string, string, string];
      };
      express: {
        title: string;
        description: string;
        features: [string, string, string];
      };
      custom: {
        title: string;
        description: string;
        features: [string, string, string];
      };
      support: {
        title: string;
        description: string;
        features: [string, string, string];
      };
    };
  };
  tracking: {
    title: string;
    subtitle: string;
    searchTitle: string;
    searchSubtitle: string;
    placeholder: string;
    searchButton: string;
    searching: string;
    tryExample: string;
    packageFound: string;
    packageNotFound: string;
    packageNotFoundDesc: string;
    packageTitle: string;
    currentStatus: string;
    origin: string;
    destination: string;
    estimatedDelivery: string;
    trackingHistory: string;
    packageDetails: string;
    weight: string;
    service: string;
    reference: string;
    needHelp: string;
    helpDesc: string;
    phone: string;
    email: string;
    faqTitle: string;
    faqSubtitle: string;
    statuses: {
      collecte: string;
      en_transit: string;
      livre: string;
      probleme: string;
    };
    faq: {
      q1: string;
      a1: string;
      q2: string;
      a2: string;
      q3: string;
      a3: string;
      q4: string;
      a4: string;
    };
  };
  footer: {
    description: string;
    address: string;
    schedule: string;
    sections: {
      services: string;
      company: string;
      support: string;
    };
    links: {
      services: {
        road: string;
        air: string;
        sea: string;
        express: string;
        custom: string;
      };
      company: {
        about: string;
        team: string;
        careers: string;
        news: string;
      };
      support: {
        tracking: string;
        contact: string;
        faq: string;
        customerSupport: string;
      };
      legal: {
        legal: string;
        terms: string;
        privacy: string;
        cookies: string;
      };
    };
    copyright: string;
  };
  home: {
    stats: {
      expeditions: string;
      countries: string;
      satisfaction: string;
      experience: string;
    };
    testimonials: {
      title: string;
      subtitle: string;
      reviews: Array<{
        name: string;
        company: string;
        content: string;
        rating: number;
        avatar: string;
      }>;
    };
    cta: {
      title: string;
      subtitle: string;
      quoteButton: string;
      trackButton: string;
    };
  };
  roadTransport: {
    hero: {
      backButton: string;
      badge: string;
      title: string;
      subtitle: string;
      quoteButton: string;
      trackButton: string;
    };
    features: {
      title: string;
      subtitle: string;
      items: {
        delivery: { title: string; description: string; };
        tracking: { title: string; description: string; };
        insurance: { title: string; description: string; };
        vehicles: { title: string; description: string; };
      };
    };
    zones: {
      title: string;
      subtitle: string;
      included: {
        insurance: string;
        tracking: string;
        delivery: string;
      };
      quoteButton: string;
      countries: {
        france: string;
        germany: string;
        italy: string;
        spain: string;
        netherlands: string;
        belgium: string;
      };
    };
    process: {
      title: string;
      subtitle: string;
      steps: {
        quote: { title: string; description: string; time: string; };
        pickup: { title: string; description: string; time: string; };
        transport: { title: string; description: string; time: string; };
        delivery: { title: string; description: string; time: string; };
      };
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
      stats: {
        delivery: { value: string; label: string; };
        time: { value: string; label: string; };
        rating: { label: string; };
      };
    };
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    navigation: {
      home: 'Accueil',
      about: 'À propos', 
      services: 'Services',
      tracking: 'Suivi',
      contact: 'Contact'
    },
    hero: {
      title1: 'Transport International',
      title2: 'de Confiance',
      subtitle: 'XOTI vous accompagne dans vos expéditions internationales avec des solutions sur mesure, un suivi en temps réel et un service client d\'exception.',
      trackButton: 'Suivre un Colis/Véhicule',
      features: {
        road: {
          title: 'Transport Routier',
          description: 'Livraisons européennes rapides et sécurisées'
        },
        air: {
          title: 'Transport Aérien',
          description: 'Solutions express pour le monde entier'
        },
        sea: {
          title: 'Transport Maritime',
          description: 'Fret maritime économique et écologique'
        },
        tracking: {
          title: 'Suivi 24/7',
          description: 'Tracking en temps réel de vos expéditions'
        }
      }
    },
    services: {
      title: 'Nos Services de Transport',
      subtitle: 'Des solutions complètes pour tous vos besoins de transport international, de l\'express au maritime, avec un suivi personnalisé.',
      learnMore: 'En savoir plus',
      items: {
        road: {
          title: 'Transport Routier',
          description: 'Solutions de transport terrestre pour l\'Europe avec des délais optimisés et une traçabilité totale.',
          features: ['Livraison 24-48h', 'Suivi GPS', 'Véhicules adaptés']
        },
        air: {
          title: 'Transport Aérien',
          description: 'Fret aérien rapide et sécurisé vers toutes les destinations mondiales.',
          features: ['Express 24h', 'Mondial', 'Produits sensibles']
        },
        sea: {
          title: 'Transport Maritime',
          description: 'Solutions économiques pour vos expéditions en conteneurs complets ou groupage.',
          features: ['FCL & LCL', 'Économique', 'Écologique']
        },
        express: {
          title: 'Logistique Express',
          description: 'Service premium pour vos expéditions urgentes avec engagement de délais.',
          features: ['Same day', 'Urgences', 'Premium']
        },
        custom: {
          title: 'Solutions Sur Mesure',
          description: 'Solutions personnalisées adaptées à vos besoins spécifiques.',
          features: ['Personnalisé', 'Industries', 'Consulting']
        },
        support: {
          title: 'Suivi & Support',
          description: 'Plateforme de suivi avancée et support client disponible 24/7.',
          features: ['Temps réel', 'Support 24/7', 'Alertes']
        }
      }
    },
    tracking: {
      title: 'Suivi de Colis',
      subtitle: 'Suivez vos expéditions en temps réel avec notre système de tracking avancé. Entrez votre numéro de suivi pour obtenir des informations détaillées.',
      searchTitle: 'Rechercher votre colis',
      searchSubtitle: 'Entrez votre numéro de suivi (ex: XTI-2024-001234)',
      placeholder: 'Numéro de suivi...',
      searchButton: 'Suivre',
      searching: 'Recherche...',
      tryExample: 'Essayez le numéro d\'exemple :',
      packageFound: 'Colis trouvé !',
      packageNotFound: 'Colis non trouvé',
      packageNotFoundDesc: 'Vérifiez votre numéro de suivi et réessayez.',
      packageTitle: 'Colis',
      currentStatus: 'Statut actuel',
      origin: 'Origine',
      destination: 'Destination',
      estimatedDelivery: 'Livraison prévue',
      trackingHistory: 'Historique de suivi',
      packageDetails: 'Détails du Colis',
      weight: 'Poids :',
      service: 'Service :',
      reference: 'Références :',
      needHelp: 'Besoin d\'aide ?',
      helpDesc: 'Notre service client est à votre disposition pour toute question.',
      phone: 'Téléphone :',
      email: 'Email :',
      faqTitle: 'Questions fréquentes',
      faqSubtitle: 'Tout ce que vous devez savoir sur le suivi de vos colis',
      statuses: {
        collecte: 'Collecté',
        en_transit: 'En Transit',
        livre: 'Livré',
        probleme: 'Problème'
      },
      faq: {
        q1: 'Comment fonctionne le suivi ?',
        a1: 'Votre numéro de suivi commence par \'XTI-\' suivi de l\'année et d\'un numéro unique. Il vous est communiqué dès la prise en charge de votre colis.',
        q2: 'À quelle fréquence les informations sont-elles mises à jour ?',
        a2: 'Les informations de suivi sont actualisées en temps réel. Chaque étape importante est enregistrée automatiquement.',
        q3: 'Que faire si mon colis semble bloqué ?',
        a3: 'Contactez notre service client au +33 1 23 45 67 89. Nous résoudrons rapidement tout problème logistique.',
        q4: 'Puis-je modifier l\'adresse de livraison ?',
        a4: 'Oui, tant que le colis n\'est pas en cours de livraison finale. Contactez-nous pour effectuer la modification.'
      }
    },
    footer: {
      description: 'Leader européen du transport international, XOTI vous accompagne dans toutes vos expéditions avec expertise et fiabilité.',
      address: '123 Avenue de l\'Europe, 75001 Paris',
      schedule: 'Lun-Ven: 8h-18h, Sam: 9h-12h',
      sections: {
        services: 'Services',
        company: 'Entreprise',
        support: 'Support'
      },
      links: {
        services: {
          road: 'Transport Routier',
          air: 'Transport Aérien',
          sea: 'Transport Maritime',
          express: 'Logistique Express',
          custom: 'Solutions Sur Mesure'
        },
        company: {
          about: 'À propos',
          team: 'Nos équipes',
          careers: 'Carrières',
          news: 'Actualités'
        },
        support: {
          tracking: 'Suivi de Colis',
          contact: 'Contact',
          faq: 'FAQ',
          customerSupport: 'Support Client'
        },
        legal: {
          legal: 'Mentions Légales',
          terms: 'Conditions Générales',
          privacy: 'Politique de Confidentialité',
          cookies: 'Cookies'
        }
      },
      copyright: '© 2024 XOTI - eXport Overseas Transport International. Tous droits réservés.'
    },
    home: {
      stats: {
        expeditions: 'Expéditions par mois',
        countries: 'Pays desservis',
        satisfaction: 'Satisfaction client',
        experience: 'Années d\'expérience'
      },
      testimonials: {
        title: 'Ce que disent nos clients',
        subtitle: 'Plus de 2000 entreprises nous font confiance pour leurs expéditions internationales.',
        reviews: [
          {
            name: 'Marie Dubois',
            company: 'TechCorp Solutions',
            content: 'XOTI nous accompagne depuis 3 ans pour nos expéditions européennes. Service impeccable et suivi en temps réel.',
            rating: 5,
            avatar: '👩‍💼'
          },
          {
            name: 'Carlos Rodriguez',
            company: 'Import Export SA',
            content: 'Solutions personnalisées et équipe très professionnelle. Nos marchandises arrivent toujours en parfait état.',
            rating: 5,
            avatar: '👨‍💼'
          },
          {
            name: 'Hans Mueller',
            company: 'European Logistics',
            content: 'Délais respectés, prix compétitifs et excellent support client. Je recommande vivement XOTI.',
            rating: 5,
            avatar: '👨‍🦲'
          }
        ]
      },
      cta: {
        title: 'Prêt à expédier avec XOTI ?',
        subtitle: 'Obtenez un devis personnalisé en quelques minutes ou suivez vos expéditions en temps réel.',
        quoteButton: 'Demander un Devis',
        trackButton: 'Suivre un Colis'
      }
    },
    roadTransport: {
      hero: {
        backButton: '← Services',
        badge: 'Transport Terrestre',
        title: 'Transport Routier Européen',
        subtitle: 'Solutions complètes de transport terrestre pour l\'Europe avec suivi GPS en temps réel et livraison garantie sous 24-48h.',
        quoteButton: 'Demander un Devis',
        trackButton: 'Suivre un Transport'
      },
      features: {
        title: 'Pourquoi choisir notre transport routier ?',
        subtitle: 'Une solution fiable et économique pour vos expéditions européennes',
        items: {
          delivery: {
            title: 'Livraison 24-48h',
            description: 'Délais garantis pour l\'Europe'
          },
          tracking: {
            title: 'Suivi GPS',
            description: 'Localisation en temps réel'
          },
          insurance: {
            title: 'Assurance incluse',
            description: 'Couverture complète des marchandises'
          },
          vehicles: {
            title: 'Véhicules adaptés',
            description: 'Flotte moderne et spécialisée'
          }
        }
      },
      zones: {
        title: 'Zones et Délais',
        subtitle: 'Délais garantis pour vos expéditions européennes',
        included: {
          insurance: 'Assurance incluse',
          tracking: 'Suivi GPS temps réel',
          delivery: 'Livraison avec accusé'
        },
        quoteButton: 'Obtenir un Devis Personnalisé',
        countries: {
          france: 'France',
          germany: 'Allemagne',
          italy: 'Italie',
          spain: 'Espagne',
          netherlands: 'Pays-Bas',
          belgium: 'Belgique'
        }
      },
      process: {
        title: 'Notre Processus',
        subtitle: 'Simple, rapide et transparent',
        steps: {
          quote: {
            title: 'Demande de devis',
            description: 'Renseignez vos besoins via notre formulaire ou par téléphone',
            time: '2h'
          },
          pickup: {
            title: 'Collecte programmée',
            description: 'Enlèvement à votre adresse aux créneaux convenus',
            time: '24h'
          },
          transport: {
            title: 'Transport sécurisé',
            description: 'Acheminement avec suivi GPS et notifications automatiques',
            time: '24-48h'
          },
          delivery: {
            title: 'Livraison confirmée',
            description: 'Réception avec signature et preuve de livraison digitale',
            time: 'Immédiat'
          }
        }
      },
      cta: {
        title: 'Prêt à expédier par la route ?',
        subtitle: 'Plus de 10 000 expéditions routières réussies chaque mois. Rejoignez nos clients satisfaits.',
        button: 'Commencer maintenant',
        stats: {
          delivery: {
            value: '99.2%',
            label: 'Livraisons à temps'
          },
          time: {
            value: '24h',
            label: 'Délai moyen'
          },
          rating: {
            label: 'Note client'
          }
        }
      }
    }
  },
  es: {
    navigation: {
      home: 'Inicio',
      about: 'Acerca de',
      services: 'Servicios', 
      tracking: 'Seguimiento',
      contact: 'Contacto'
    },
    hero: {
      title1: 'Transporte Internacional',
      title2: 'de Confianza',
      subtitle: 'XOTI te acompaña en tus envíos internacionales con soluciones a medida, seguimiento en tiempo real y un servicio al cliente excepcional.',
      trackButton: 'Rastrear Paquete/Vehículo',
      features: {
        road: {
          title: 'Transporte Terrestre',
          description: 'Entregas europeas rápidas y seguras'
        },
        air: {
          title: 'Transporte Aéreo',
          description: 'Soluciones express para todo el mundo'
        },
        sea: {
          title: 'Transporte Marítimo',
          description: 'Flete marítimo económico y ecológico'
        },
        tracking: {
          title: 'Seguimiento 24/7',
          description: 'Rastreo en tiempo real de tus envíos'
        }
      }
    },
    services: {
      title: 'Nuestros Servicios de Transporte',
      subtitle: 'Soluciones completas para todas tus necesidades de transporte internacional, desde express hasta marítimo, con seguimiento personalizado.',
      learnMore: 'Saber más',
      items: {
        road: {
          title: 'Transporte Terrestre',
          description: 'Soluciones de transporte terrestre para Europa con tiempos optimizados y trazabilidad total.',
          features: ['Entrega 24-48h', 'Seguimiento GPS', 'Vehículos adaptados']
        },
        air: {
          title: 'Transporte Aéreo',
          description: 'Flete aéreo rápido y seguro hacia todos los destinos mundiales.',
          features: ['Express 24h', 'Mundial', 'Productos sensibles']
        },
        sea: {
          title: 'Transporte Marítimo',
          description: 'Soluciones económicas para tus expediciones en contenedores completos o groupage.',
          features: ['FCL y LCL', 'Económico', 'Ecológico']
        },
        express: {
          title: 'Logística Express',
          description: 'Servicio premium para tus expediciones urgentes con compromiso de plazos.',
          features: ['Same day', 'Urgencias', 'Premium']
        },
        custom: {
          title: 'Soluciones a Medida',
          description: 'Soluciones personalizadas adaptadas a tus necesidades específicas.',
          features: ['Personalizado', 'Industrias', 'Consultoría']
        },
        support: {
          title: 'Seguimiento y Soporte',
          description: 'Plataforma de seguimiento avanzada y soporte al cliente disponible 24/7.',
          features: ['Tiempo real', 'Soporte 24/7', 'Alertas']
        }
      }
    },
    tracking: {
      title: 'Seguimiento de Paquete',
      subtitle: 'Rastrea tus envíos en tiempo real con nuestro sistema de seguimiento avanzado. Ingresa tu número de seguimiento para obtener información detallada.',
      searchTitle: 'Buscar tu paquete',
      searchSubtitle: 'Ingresa tu número de seguimiento (ej: XTI-2024-001234)',
      placeholder: 'Número de seguimiento...',
      searchButton: 'Rastrear',
      searching: 'Buscando...',
      tryExample: 'Prueba el número de ejemplo:',
      packageFound: '¡Paquete encontrado!',
      packageNotFound: 'Paquete no encontrado',
      packageNotFoundDesc: 'Verifica tu número de seguimiento e inténtalo de nuevo.',
      packageTitle: 'Paquete',
      currentStatus: 'Estado actual',
      origin: 'Origen',
      destination: 'Destino',
      estimatedDelivery: 'Entrega estimada',
      trackingHistory: 'Historial de seguimiento',
      packageDetails: 'Detalles del Paquete',
      weight: 'Peso:',
      service: 'Servicio:',
      reference: 'Referencia:',
      needHelp: '¿Necesitas ayuda?',
      helpDesc: 'Nuestro servicio al cliente está disponible para cualquier pregunta.',
      phone: 'Teléfono:',
      email: 'Email:',
      faqTitle: 'Preguntas frecuentes',
      faqSubtitle: 'Todo lo que necesitas saber sobre el seguimiento de tus paquetes',
      statuses: {
        collecte: 'Recogido',
        en_transit: 'En Tránsito',
        livre: 'Entregado',
        probleme: 'Problema'
      },
      faq: {
        q1: '¿Cómo funciona el seguimiento?',
        a1: 'Tu número de seguimiento comienza con \'XTI-\' seguido del año y un número único. Se comunica tan pronto como se toma el paquete.',
        q2: '¿Con qué frecuencia se actualiza la información?',
        a2: 'La información de seguimiento se actualiza en tiempo real. Cada etapa importante se registra automáticamente.',
        q3: '¿Qué hacer si mi paquete parece bloqueado?',
        a3: 'Contacta nuestro servicio al cliente al +33 1 23 45 67 89. Resolveremos rápidamente cualquier problema logístico.',
        q4: '¿Puedo cambiar la dirección de entrega?',
        a4: 'Sí, mientras el paquete no esté en proceso de entrega final. Contáctanos para hacer el cambio.'
      }
    },
    footer: {
      description: 'Líder europeo del transporte internacional, XOTI te acompaña en todos tus envíos con experiencia y confiabilidad.',
      address: '123 Avenida de Europa, 75001 París',
      schedule: 'Lun-Vie: 8h-18h, Sáb: 9h-12h',
      sections: {
        services: 'Servicios',
        company: 'Empresa',
        support: 'Soporte'
      },
      links: {
        services: {
          road: 'Transporte Terrestre',
          air: 'Transporte Aéreo',
          sea: 'Transporte Marítimo',
          express: 'Logística Express',
          custom: 'Soluciones a Medida'
        },
        company: {
          about: 'Acerca de',
          team: 'Nuestros equipos',
          careers: 'Carreras',
          news: 'Noticias'
        },
        support: {
          tracking: 'Seguimiento de Paquete',
          contact: 'Contacto',
          faq: 'FAQ',
          customerSupport: 'Soporte al Cliente'
        },
        legal: {
          legal: 'Avisos Legales',
          terms: 'Términos y Condiciones',
          privacy: 'Política de Privacidad',
          cookies: 'Cookies'
        }
      },
      copyright: '© 2024 XOTI - eXport Overseas Transport International. Todos los derechos reservados.'
    },
    home: {
      stats: {
        expeditions: 'Envíos por mes',
        countries: 'Países servidos',
        satisfaction: 'Satisfacción del cliente',
        experience: 'Años de experiencia'
      },
      testimonials: {
        title: 'Lo que dicen nuestros clientes',
        subtitle: 'Más de 2000 empresas confían en nosotros para sus envíos internacionales.',
        reviews: [
          {
            name: 'María López',
            company: 'TechCorp Solutions España',
            content: 'XOTI nos acompaña desde hace 3 años en nuestros envíos europeos. Servicio impecable y seguimiento en tiempo real.',
            rating: 5,
            avatar: '👩‍💼'
          },
          {
            name: 'Carlos Rodriguez',
            company: 'Import Export SA',
            content: 'Soluciones personalizadas y equipo muy profesional. Nuestras mercancías siempre llegan en perfecto estado.',
            rating: 5,
            avatar: '👨‍💼'
          },
          {
            name: 'Antonio García',
            company: 'Logística Europea',
            content: 'Plazos respetados, precios competitivos y excelente atención al cliente. Recomiendo ampliamente XOTI.',
            rating: 5,
            avatar: '👨‍🦲'
          }
        ]
      },
      cta: {
        title: '¿Listo para enviar con XOTI?',
        subtitle: 'Obtén una cotización personalizada en pocos minutos o rastrea tus envíos en tiempo real.',
        quoteButton: 'Solicitar Cotización',
        trackButton: 'Rastrear Paquete'
      }
    },
    roadTransport: {
      hero: {
        backButton: '← Servicios',
        badge: 'Transporte Terrestre',
        title: 'Transporte por Carretera Europeo',
        subtitle: 'Soluciones completas de transporte terrestre para Europa con seguimiento GPS en tiempo real y entrega garantizada en 24-48h.',
        quoteButton: 'Solicitar Cotización',
        trackButton: 'Rastrear Transporte'
      },
      features: {
        title: '¿Por qué elegir nuestro transporte por carretera?',
        subtitle: 'Una solución confiable y económica para tus envíos europeos',
        items: {
          delivery: {
            title: 'Entrega 24-48h',
            description: 'Plazos garantizados para Europa'
          },
          tracking: {
            title: 'Seguimiento GPS',
            description: 'Localización en tiempo real'
          },
          insurance: {
            title: 'Seguro incluido',
            description: 'Cobertura completa de mercancías'
          },
          vehicles: {
            title: 'Vehículos adaptados',
            description: 'Flota moderna y especializada'
          }
        }
      },
      zones: {
        title: 'Zonas y Plazos',
        subtitle: 'Plazos garantizados para tus envíos europeos',
        included: {
          insurance: 'Seguro incluido',
          tracking: 'Seguimiento GPS tiempo real',
          delivery: 'Entrega con acuse de recibo'
        },
        quoteButton: 'Obtener Cotización Personalizada',
        countries: {
          france: 'Francia',
          germany: 'Alemania',
          italy: 'Italia',
          spain: 'España',
          netherlands: 'Países Bajos',
          belgium: 'Bélgica'
        }
      },
      process: {
        title: 'Nuestro Proceso',
        subtitle: 'Simple, rápido y transparente',
        steps: {
          quote: {
            title: 'Solicitud de cotización',
            description: 'Ingrese sus necesidades a través de nuestro formulario o por teléfono',
            time: '2h'
          },
          pickup: {
            title: 'Recogida programada',
            description: 'Recolección en su dirección en horarios acordados',
            time: '24h'
          },
          transport: {
            title: 'Transporte seguro',
            description: 'Envío con seguimiento GPS y notificaciones automáticas',
            time: '24-48h'
          },
          delivery: {
            title: 'Entrega confirmada',
            description: 'Recepción con firma y prueba de entrega digital',
            time: 'Inmediato'
          }
        }
      },
      cta: {
        title: '¿Listo para enviar por carretera?',
        subtitle: 'Más de 10,000 envíos por carretera exitosos cada mes. Únete a nuestros clientes satisfechos.',
        button: 'Comenzar ahora',
        stats: {
          delivery: {
            value: '99.2%',
            label: 'Entregas puntuales'
          },
          time: {
            value: '24h',
            label: 'Tiempo promedio'
          },
          rating: {
            label: 'Calificación cliente'
          }
        }
      }
    }
  },
  de: {
    navigation: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Dienstleistungen',
      tracking: 'Verfolgung', 
      contact: 'Kontakt'
    },
    hero: {
      title1: 'Internationaler Transport',
      title2: 'zum Vertrauen',
      subtitle: 'XOTI begleitet Sie bei Ihren internationalen Sendungen mit maßgeschneiderten Lösungen, Echtzeit-Tracking und außergewöhnlichem Kundenservice.',
      trackButton: 'Paket/Fahrzeug verfolgen',
      features: {
        road: {
          title: 'Straßentransport',
          description: 'Schnelle und sichere europäische Lieferungen'
        },
        air: {
          title: 'Lufttransport',
          description: 'Express-Lösungen für die ganze Welt'
        },
        sea: {
          title: 'Seetransport',
          description: 'Wirtschaftliche und ökologische Seefracht'
        },
        tracking: {
          title: 'Verfolgung 24/7',
          description: 'Echtzeit-Tracking Ihrer Sendungen'
        }
      }
    },
    services: {
      title: 'Unsere Transport-Dienstleistungen',
      subtitle: 'Komplette Lösungen für alle Ihre internationalen Transportbedürfnisse, von Express bis Seefracht, mit personalisierter Verfolgung.',
      learnMore: 'Mehr erfahren',
      items: {
        road: {
          title: 'Straßentransport',
          description: 'Straßentransportlösungen für Europa mit optimierten Zeiten und vollständiger Rückverfolgbarkeit.',
          features: ['Lieferung 24-48h', 'GPS-Tracking', 'Angepasste Fahrzeuge']
        },
        air: {
          title: 'Lufttransport',
          description: 'Schneller und sicherer Luftfracht zu allen weltweiten Destinationen.',
          features: ['Express 24h', 'Weltweit', 'Empfindliche Produkte']
        },
        sea: {
          title: 'Seetransport',
          description: 'Wirtschaftliche Lösungen für Ihre Sendungen in Vollcontainern oder Groupage.',
          features: ['FCL & LCL', 'Wirtschaftlich', 'Ökologisch']
        },
        express: {
          title: 'Express-Logistik',
          description: 'Premium-Service für Ihre dringenden Sendungen mit Zeitgarantie.',
          features: ['Same day', 'Notfälle', 'Premium']
        },
        custom: {
          title: 'Maßgeschneiderte Lösungen',
          description: 'Personalisierte Lösungen, angepasst an Ihre spezifischen Bedürfnisse.',
          features: ['Personalisiert', 'Industrien', 'Beratung']
        },
        support: {
          title: 'Verfolgung & Support',
          description: 'Erweiterte Verfolgungsplattform und Kundenservice verfügbar 24/7.',
          features: ['Echtzeit', 'Support 24/7', 'Benachrichtigungen']
        }
      }
    },
    tracking: {
      title: 'Paketverfolgung',
      subtitle: 'Verfolgen Sie Ihre Sendungen in Echtzeit mit unserem fortschrittlichen Tracking-System. Geben Sie Ihre Tracking-Nummer ein für detaillierte Informationen.',
      searchTitle: 'Ihr Paket suchen',
      searchSubtitle: 'Geben Sie Ihre Tracking-Nummer ein (z.B.: XTI-2024-001234)',
      placeholder: 'Tracking-Nummer...',
      searchButton: 'Verfolgen',
      searching: 'Suche...',
      tryExample: 'Probieren Sie die Beispiel-Nummer:',
      packageFound: 'Paket gefunden!',
      packageNotFound: 'Paket nicht gefunden',
      packageNotFoundDesc: 'Überprüfen Sie Ihre Tracking-Nummer und versuchen Sie es erneut.',
      packageTitle: 'Paket',
      currentStatus: 'Aktueller Status',
      origin: 'Herkunft',
      destination: 'Ziel',
      estimatedDelivery: 'Voraussichtliche Lieferung',
      trackingHistory: 'Verfolgungshistorie',
      packageDetails: 'Paket-Details',
      weight: 'Gewicht:',
      service: 'Service:',
      reference: 'Referenz:',
      needHelp: 'Brauchen Sie Hilfe?',
      helpDesc: 'Unser Kundenservice steht Ihnen für alle Fragen zur Verfügung.',
      phone: 'Telefon:',
      email: 'E-Mail:',
      faqTitle: 'Häufige Fragen',
      faqSubtitle: 'Alles was Sie über die Verfolgung Ihrer Pakete wissen müssen',
      statuses: {
        collecte: 'Abgeholt',
        en_transit: 'In Transit',
        livre: 'Zugestellt',
        probleme: 'Problem'
      },
      faq: {
        q1: 'Wie funktioniert die Verfolgung?',
        a1: 'Ihre Tracking-Nummer beginnt mit \'XTI-\' gefolgt vom Jahr und einer eindeutigen Nummer. Sie wird Ihnen mitgeteilt, sobald Ihr Paket übernommen wurde.',
        q2: 'Wie oft werden die Informationen aktualisiert?',
        a2: 'Die Tracking-Informationen werden in Echtzeit aktualisiert. Jeder wichtige Schritt wird automatisch erfasst.',
        q3: 'Was tun, wenn mein Paket blockiert erscheint?',
        a3: 'Kontaktieren Sie unseren Kundenservice unter +33 1 23 45 67 89. Wir lösen schnell jedes logistische Problem.',
        q4: 'Kann ich die Lieferadresse ändern?',
        a4: 'Ja, solange das Paket nicht in der finalen Zustellung ist. Kontaktieren Sie uns für die Änderung.'
      }
    },
    footer: {
      description: 'Europäischer Marktführer im internationalen Transport, XOTI begleitet Sie bei allen Ihren Sendungen mit Expertise und Zuverlässigkeit.',
      address: '123 Avenue de l\'Europe, 75001 Paris',
      schedule: 'Mo-Fr: 8-18 Uhr, Sa: 9-12 Uhr',
      sections: {
        services: 'Dienstleistungen',
        company: 'Unternehmen',
        support: 'Support'
      },
      links: {
        services: {
          road: 'Straßentransport',
          air: 'Lufttransport',
          sea: 'Seetransport',
          express: 'Express-Logistik',
          custom: 'Maßgeschneiderte Lösungen'
        },
        company: {
          about: 'Über uns',
          team: 'Unsere Teams',
          careers: 'Karrieren',
          news: 'Nachrichten'
        },
        support: {
          tracking: 'Paketverfolgung',
          contact: 'Kontakt',
          faq: 'FAQ',
          customerSupport: 'Kundenservice'
        },
        legal: {
          legal: 'Impressum',
          terms: 'Allgemeine Geschäftsbedingungen',
          privacy: 'Datenschutzrichtlinie',
          cookies: 'Cookies'
        }
      },
      copyright: '© 2024 XOTI - eXport Overseas Transport International. Alle Rechte vorbehalten.'
    },
    home: {
      stats: {
        expeditions: 'Sendungen pro Monat',
        countries: 'Belieferte Länder',
        satisfaction: 'Kundenzufriedenheit',
        experience: 'Jahre Erfahrung'
      },
      testimonials: {
        title: 'Was unsere Kunden sagen',
        subtitle: 'Über 2000 Unternehmen vertrauen uns bei ihren internationalen Sendungen.',
        reviews: [
          {
            name: 'Marie Schmidt',
            company: 'TechCorp Solutions Deutschland',
            content: 'XOTI begleitet uns seit 3 Jahren bei unseren europäischen Sendungen. Tadellose Leistung und Echtzeit-Tracking.',
            rating: 5,
            avatar: '👩‍💼'
          },
          {
            name: 'Hans Mueller',
            company: 'Import Export GmbH',
            content: 'Maßgeschneiderte Lösungen und sehr professionelles Team. Unsere Waren kommen immer in perfektem Zustand an.',
            rating: 5,
            avatar: '👨‍💼'
          },
          {
            name: 'Klaus Weber',
            company: 'European Logistics',
            content: 'Termine eingehalten, wettbewerbsfähige Preise und exzellenter Kundenservice. Ich empfehle XOTI wärmstens.',
            rating: 5,
            avatar: '👨‍🦲'
          }
        ]
      },
      cta: {
        title: 'Bereit für den Versand mit XOTI?',
        subtitle: 'Erhalten Sie ein personalisiertes Angebot in wenigen Minuten oder verfolgen Sie Ihre Sendungen in Echtzeit.',
        quoteButton: 'Angebot anfordern',
        trackButton: 'Paket verfolgen'
      }
    },
    roadTransport: {
      hero: {
        backButton: '← Dienstleistungen',
        badge: 'Straßentransport',
        title: 'Europäischer Straßentransport',
        subtitle: 'Komplette Straßentransportlösungen für Europa mit GPS-Tracking in Echtzeit und garantierter Lieferung in 24-48h.',
        quoteButton: 'Angebot anfordern',
        trackButton: 'Transport verfolgen'
      },
      features: {
        title: 'Warum unseren Straßentransport wählen?',
        subtitle: 'Eine zuverlässige und wirtschaftliche Lösung für Ihre europäischen Sendungen',
        items: {
          delivery: {
            title: 'Lieferung 24-48h',
            description: 'Garantierte Zeiten für Europa'
          },
          tracking: {
            title: 'GPS-Tracking',
            description: 'Lokalisierung in Echtzeit'
          },
          insurance: {
            title: 'Versicherung inklusive',
            description: 'Vollständige Warenabdeckung'
          },
          vehicles: {
            title: 'Angepasste Fahrzeuge',
            description: 'Moderne und spezialisierte Flotte'
          }
        }
      },
      zones: {
        title: 'Zonen und Lieferzeiten',
        subtitle: 'Garantierte Lieferzeiten für Ihre europäischen Sendungen',
        included: {
          insurance: 'Versicherung inklusive',
          tracking: 'GPS-Tracking Echtzeit',
          delivery: 'Lieferung mit Empfangsbestätigung'
        },
        quoteButton: 'Personalisiertes Angebot erhalten',
        countries: {
          france: 'Frankreich',
          germany: 'Deutschland',
          italy: 'Italien',
          spain: 'Spanien',
          netherlands: 'Niederlande',
          belgium: 'Belgien'
        }
      },
      process: {
        title: 'Unser Prozess',
        subtitle: 'Einfach, schnell und transparent',
        steps: {
          quote: {
            title: 'Angebotsanfrage',
            description: 'Teilen Sie uns Ihre Bedürfnisse über unser Formular oder telefonisch mit',
            time: '2h'
          },
          pickup: {
            title: 'Geplante Abholung',
            description: 'Abholung an Ihrer Adresse zu vereinbarten Zeiten',
            time: '24h'
          },
          transport: {
            title: 'Sicherer Transport',
            description: 'Versand mit GPS-Tracking und automatischen Benachrichtigungen',
            time: '24-48h'
          },
          delivery: {
            title: 'Bestätigte Lieferung',
            description: 'Empfang mit Unterschrift und digitalem Liefernachweis',
            time: 'Sofort'
          }
        }
      },
      cta: {
        title: 'Bereit für den Straßentransport?',
        subtitle: 'Über 10.000 erfolgreiche Straßentransporte jeden Monat. Schließen Sie sich unseren zufriedenen Kunden an.',
        button: 'Jetzt beginnen',
        stats: {
          delivery: {
            value: '99.2%',
            label: 'Pünktliche Lieferungen'
          },
          time: {
            value: '24h',
            label: 'Durchschnittliche Zeit'
          },
          rating: {
            label: 'Kundenbewertung'
          }
        }
      }
    }
  },
  it: {
    navigation: {
      home: 'Home',
      about: 'Chi siamo',
      services: 'Servizi',
      tracking: 'Tracciamento',
      contact: 'Contatto'
    },
    hero: {
      title1: 'Trasporto Internazionale',
      title2: 'di Fiducia',
      subtitle: 'XOTI ti accompagna nelle tue spedizioni internazionali con soluzioni su misura, tracciamento in tempo reale e un servizio clienti eccezionale.',
      trackButton: 'Traccia Pacco/Veicolo',
      features: {
        road: {
          title: 'Trasporto Stradale',
          description: 'Consegne europee rapide e sicure'
        },
        air: {
          title: 'Trasporto Aereo',
          description: 'Soluzioni express per tutto il mondo'
        },
        sea: {
          title: 'Trasporto Marittimo',
          description: 'Trasporto marittimo economico ed ecologico'
        },
        tracking: {
          title: 'Monitoraggio 24/7',
          description: 'Tracciamento in tempo reale delle tue spedizioni'
        }
      }
    },
    services: {
      title: 'I Nostri Servizi di Trasporto',
      subtitle: 'Soluzioni complete per tutte le tue esigenze di trasporto internazionale, dall\'express al marittimo, con tracciamento personalizzato.',
      learnMore: 'Scopri di più',
      items: {
        road: {
          title: 'Trasporto Stradale',
          description: 'Soluzioni di trasporto terrestre per l\'Europa con tempi ottimizzati e tracciabilità totale.',
          features: ['Consegna 24-48h', 'Tracciamento GPS', 'Veicoli adattati']
        },
        air: {
          title: 'Trasporto Aereo',
          description: 'Trasporto aereo rapido e sicuro verso tutte le destinazioni mondiali.',
          features: ['Express 24h', 'Mondiale', 'Prodotti sensibili']
        },
        sea: {
          title: 'Trasporto Marittimo',
          description: 'Soluzioni economiche per le tue spedizioni in container completi o groupage.',
          features: ['FCL e LCL', 'Economico', 'Ecologico']
        },
        express: {
          title: 'Logistica Express',
          description: 'Servizio premium per le tue spedizioni urgenti con impegno sui tempi.',
          features: ['Same day', 'Urgenze', 'Premium']
        },
        custom: {
          title: 'Soluzioni Su Misura',
          description: 'Soluzioni personalizzate adattate alle tue esigenze specifiche.',
          features: ['Personalizzato', 'Industrie', 'Consulenza']
        },
        support: {
          title: 'Tracciamento e Supporto',
          description: 'Piattaforma di tracciamento avanzata e supporto clienti disponibile 24/7.',
          features: ['Tempo reale', 'Supporto 24/7', 'Avvisi']
        }
      }
    },
    tracking: {
      title: 'Tracciamento Pacco',
      subtitle: 'Traccia le tue spedizioni in tempo reale con il nostro sistema di tracking avanzato. Inserisci il tuo numero di tracciamento per ottenere informazioni dettagliate.',
      searchTitle: 'Cerca il tuo pacco',
      searchSubtitle: 'Inserisci il tuo numero di tracciamento (es: XTI-2024-001234)',
      placeholder: 'Numero di tracciamento...',
      searchButton: 'Traccia',
      searching: 'Ricerca...',
      tryExample: 'Prova il numero di esempio:',
      packageFound: 'Pacco trovato!',
      packageNotFound: 'Pacco non trovato',
      packageNotFoundDesc: 'Verifica il tuo numero di tracciamento e riprova.',
      packageTitle: 'Pacco',
      currentStatus: 'Stato attuale',
      origin: 'Origine',
      destination: 'Destinazione',
      estimatedDelivery: 'Consegna prevista',
      trackingHistory: 'Cronologia tracciamento',
      packageDetails: 'Dettagli del Pacco',
      weight: 'Peso:',
      service: 'Servizio:',
      reference: 'Riferimento:',
      needHelp: 'Hai bisogno di aiuto?',
      helpDesc: 'Il nostro servizio clienti è a tua disposizione per qualsiasi domanda.',
      phone: 'Telefono:',
      email: 'Email:',
      faqTitle: 'Domande frequenti',
      faqSubtitle: 'Tutto quello che devi sapere sul tracciamento dei tuoi pacchi',
      statuses: {
        collecte: 'Ritirato',
        en_transit: 'In Transito',
        livre: 'Consegnato',
        probleme: 'Problema'
      },
      faq: {
        q1: 'Come funziona il tracciamento?',
        a1: 'Il tuo numero di tracciamento inizia con \'XTI-\' seguito dall\'anno e da un numero unico. Ti viene comunicato non appena il pacco viene preso in carico.',
        q2: 'Con quale frequenza vengono aggiornate le informazioni?',
        a2: 'Le informazioni di tracciamento sono aggiornate in tempo reale. Ogni fase importante viene registrata automaticamente.',
        q3: 'Cosa fare se il mio pacco sembra bloccato?',
        a3: 'Contatta il nostro servizio clienti al +33 1 23 45 67 89. Risolveremo rapidamente qualsiasi problema logistico.',
        q4: 'Posso modificare l\'indirizzo di consegna?',
        a4: 'Sì, finché il pacco non è in fase di consegna finale. Contattaci per effettuare la modifica.'
      }
    },
    footer: {
      description: 'Leader europeo del trasporto internazionale, XOTI ti accompagna in tutte le tue spedizioni con esperienza e affidabilità.',
      address: '123 Avenue de l\'Europe, 75001 Parigi',
      schedule: 'Lun-Ven: 8-18, Sab: 9-12',
      sections: {
        services: 'Servizi',
        company: 'Azienda',
        support: 'Supporto'
      },
      links: {
        services: {
          road: 'Trasporto Stradale',
          air: 'Trasporto Aereo',
          sea: 'Trasporto Marittimo',
          express: 'Logistica Express',
          custom: 'Soluzioni Su Misura'
        },
        company: {
          about: 'Chi siamo',
          team: 'I nostri team',
          careers: 'Carriere',
          news: 'Notizie'
        },
        support: {
          tracking: 'Tracciamento Pacco',
          contact: 'Contatto',
          faq: 'FAQ',
          customerSupport: 'Supporto Cliente'
        },
        legal: {
          legal: 'Note Legali',
          terms: 'Condizioni Generali',
          privacy: 'Politica sulla Privacy',
          cookies: 'Cookies'
        }
      },
      copyright: '© 2024 XOTI - eXport Overseas Transport International. Tutti i diritti riservati.'
    },
    home: {
      stats: {
        expeditions: 'Spedizioni al mese',
        countries: 'Paesi serviti',
        satisfaction: 'Soddisfazione cliente',
        experience: 'Anni di esperienza'
      },
      testimonials: {
        title: 'Cosa dicono i nostri clienti',
        subtitle: 'Oltre 2000 aziende si fidano di noi per le loro spedizioni internazionali.',
        reviews: [
          {
            name: 'Maria Rossi',
            company: 'TechCorp Solutions Italia',
            content: 'XOTI ci accompagna da 3 anni nelle nostre spedizioni europee. Servizio impeccabile e tracciamento in tempo reale.',
            rating: 5,
            avatar: '👩‍💼'
          },
          {
            name: 'Marco Bianchi',
            company: 'Import Export SRL',
            content: 'Soluzioni personalizzate e team molto professionale. Le nostre merci arrivano sempre in perfette condizioni.',
            rating: 5,
            avatar: '👨‍💼'
          },
          {
            name: 'Giuseppe Ferrari',
            company: 'Logistica Europea',
            content: 'Tempi rispettati, prezzi competitivi ed eccellente supporto clienti. Consiglio vivamente XOTI.',
            rating: 5,
            avatar: '👨‍🦲'
          }
        ]
      },
      cta: {
        title: 'Pronto a spedire con XOTI?',
        subtitle: 'Ottieni un preventivo personalizzato in pochi minuti o traccia le tue spedizioni in tempo reale.',
        quoteButton: 'Richiedi Preventivo',
        trackButton: 'Traccia Pacco'
      }
    },
    roadTransport: {
      hero: {
        backButton: '← Servizi',
        badge: 'Trasporto Stradale',
        title: 'Trasporto Stradale Europeo',
        subtitle: 'Soluzioni complete di trasporto terrestre per l\'Europa con tracciamento GPS in tempo reale e consegna garantita in 24-48h.',
        quoteButton: 'Richiedi Preventivo',
        trackButton: 'Traccia Trasporto'
      },
      features: {
        title: 'Perché scegliere il nostro trasporto stradale?',
        subtitle: 'Una soluzione affidabile ed economica per le tue spedizioni europee',
        items: {
          delivery: {
            title: 'Consegna 24-48h',
            description: 'Tempi garantiti per l\'Europa'
          },
          tracking: {
            title: 'Tracciamento GPS',
            description: 'Localizzazione in tempo reale'
          },
          insurance: {
            title: 'Assicurazione inclusa',
            description: 'Copertura completa delle merci'
          },
          vehicles: {
            title: 'Veicoli adattati',
            description: 'Flotta moderna e specializzata'
          }
        }
      },
      zones: {
        title: 'Zone e Tempi',
        subtitle: 'Tempi garantiti per le tue spedizioni europee',
        included: {
          insurance: 'Assicurazione inclusa',
          tracking: 'Tracciamento GPS tempo reale',
          delivery: 'Consegna con ricevuta'
        },
        quoteButton: 'Ottieni Preventivo Personalizzato',
        countries: {
          france: 'Francia',
          germany: 'Germania',
          italy: 'Italia',
          spain: 'Spagna',
          netherlands: 'Paesi Bassi',
          belgium: 'Belgio'
        }
      },
      process: {
        title: 'Il Nostro Processo',
        subtitle: 'Semplice, veloce e trasparente',
        steps: {
          quote: {
            title: 'Richiesta preventivo',
            description: 'Comunica le tue esigenze tramite il nostro modulo o per telefono',
            time: '2h'
          },
          pickup: {
            title: 'Ritiro programmato',
            description: 'Ritiro al tuo indirizzo negli orari concordati',
            time: '24h'
          },
          transport: {
            title: 'Trasporto sicuro',
            description: 'Spedizione con tracciamento GPS e notifiche automatiche',
            time: '24-48h'
          },
          delivery: {
            title: 'Consegna confermata',
            description: 'Ricezione con firma e prova di consegna digitale',
            time: 'Immediato'
          }
        }
      },
      cta: {
        title: 'Pronto a spedire su strada?',
        subtitle: 'Oltre 10.000 spedizioni stradali riuscite ogni mese. Unisciti ai nostri clienti soddisfatti.',
        button: 'Inizia ora',
        stats: {
          delivery: {
            value: '99.2%',
            label: 'Consegne puntuali'
          },
          time: {
            value: '24h',
            label: 'Tempo medio'
          },
          rating: {
            label: 'Valutazione cliente'
          }
        }
      }
    }
  },
  pt: {
    navigation: {
      home: 'Início',
      about: 'Sobre nós',
      services: 'Serviços',
      tracking: 'Rastreamento',
      contact: 'Contato'
    },
    hero: {
      title1: 'Transporte Internacional',
      title2: 'de Confiança',
      subtitle: 'A XOTI acompanha você em seus envios internacionais com soluções sob medida, rastreamento em tempo real e um atendimento ao cliente excepcional.',
      trackButton: 'Rastrear Encomenda/Veículo',
      features: {
        road: {
          title: 'Transporte Rodoviário',
          description: 'Entregas europeias rápidas e seguras'
        },
        air: {
          title: 'Transporte Aéreo',
          description: 'Soluções expressas para o mundo inteiro'
        },
        sea: {
          title: 'Transporte Marítimo',
          description: 'Frete marítimo econômico e ecológico'
        },
        tracking: {
          title: 'Rastreamento 24/7',
          description: 'Rastreamento em tempo real de seus envios'
        }
      }
    },
    services: {
      title: 'Nossos Serviços de Transporte',
      subtitle: 'Soluções completas para todas as suas necessidades de transporte internacional, do express ao marítimo, com rastreamento personalizado.',
      learnMore: 'Saiba mais',
      items: {
        road: {
          title: 'Transporte Rodoviário',
          description: 'Soluções de transporte terrestre para a Europa com prazos otimizados e rastreabilidade total.',
          features: ['Entrega 24-48h', 'Rastreamento GPS', 'Veículos adaptados']
        },
        air: {
          title: 'Transporte Aéreo',
          description: 'Frete aéreo rápido e seguro para todos os destinos mundiais.',
          features: ['Express 24h', 'Mundial', 'Produtos sensíveis']
        },
        sea: {
          title: 'Transporte Marítimo',
          description: 'Soluções econômicas para seus envios em contêineres completos ou groupage.',
          features: ['FCL e LCL', 'Econômico', 'Ecológico']
        },
        express: {
          title: 'Logística Express',
          description: 'Serviço premium para seus envios urgentes com compromisso de prazos.',
          features: ['Same day', 'Urgências', 'Premium']
        },
        custom: {
          title: 'Soluções Sob Medida',
          description: 'Soluções personalizadas adaptadas às suas necessidades específicas.',
          features: ['Personalizado', 'Indústrias', 'Consultoria']
        },
        support: {
          title: 'Rastreamento e Suporte',
          description: 'Plataforma de rastreamento avançada e suporte ao cliente disponível 24/7.',
          features: ['Tempo real', 'Suporte 24/7', 'Alertas']
        }
      }
    },
    tracking: {
      title: 'Rastreamento de Encomenda',
      subtitle: 'Rastreie seus envios em tempo real com nosso sistema de tracking avançado. Digite seu número de rastreamento para obter informações detalhadas.',
      searchTitle: 'Busque sua encomenda',
      searchSubtitle: 'Digite seu número de rastreamento (ex: XTI-2024-001234)',
      placeholder: 'Número de rastreamento...',
      searchButton: 'Rastrear',
      searching: 'Buscando...',
      tryExample: 'Experimente o número de exemplo:',
      packageFound: 'Encomenda encontrada!',
      packageNotFound: 'Encomenda não encontrada',
      packageNotFoundDesc: 'Verifique seu número de rastreamento e tente novamente.',
      packageTitle: 'Encomenda',
      currentStatus: 'Status atual',
      origin: 'Origem',
      destination: 'Destino',
      estimatedDelivery: 'Entrega prevista',
      trackingHistory: 'Histórico de rastreamento',
      packageDetails: 'Detalhes da Encomenda',
      weight: 'Peso:',
      service: 'Serviço:',
      reference: 'Referência:',
      needHelp: 'Precisa de ajuda?',
      helpDesc: 'Nosso atendimento ao cliente está à sua disposição para qualquer dúvida.',
      phone: 'Telefone:',
      email: 'E-mail:',
      faqTitle: 'Perguntas frequentes',
      faqSubtitle: 'Tudo o que você precisa saber sobre o rastreamento de suas encomendas',
      statuses: {
        collecte: 'Coletado',
        en_transit: 'Em Trânsito',
        livre: 'Entregue',
        probleme: 'Problema'
      },
      faq: {
        q1: 'Como funciona o rastreamento?',
        a1: 'Seu número de rastreamento começa com \'XTI-\' seguido do ano e um número único. É comunicado assim que a encomenda é coletada.',
        q2: 'Com que frequência as informações são atualizadas?',
        a2: 'As informações de rastreamento são atualizadas em tempo real. Cada etapa importante é registrada automaticamente.',
        q3: 'O que fazer se minha encomenda parece travada?',
        a3: 'Entre em contato com nosso atendimento no +33 1 23 45 67 89. Resolveremos rapidamente qualquer problema logístico.',
        q4: 'Posso alterar o endereço de entrega?',
        a4: 'Sim, desde que a encomenda não esteja em processo de entrega final. Entre em contato para fazer a alteração.'
      }
    },
    footer: {
      description: 'Líder europeu do transporte internacional, a XOTI acompanha você em todos os seus envios com expertise e confiabilidade.',
      address: '123 Avenue de l\'Europe, 75001 Paris',
      schedule: 'Seg-Sex: 8h-18h, Sáb: 9h-12h',
      sections: {
        services: 'Serviços',
        company: 'Empresa',
        support: 'Suporte'
      },
      links: {
        services: {
          road: 'Transporte Rodoviário',
          air: 'Transporte Aéreo',
          sea: 'Transporte Marítimo',
          express: 'Logística Express',
          custom: 'Soluções Sob Medida'
        },
        company: {
          about: 'Sobre nós',
          team: 'Nossas equipes',
          careers: 'Carreiras',
          news: 'Notícias'
        },
        support: {
          tracking: 'Rastreamento de Encomenda',
          contact: 'Contato',
          faq: 'FAQ',
          customerSupport: 'Suporte ao Cliente'
        },
        legal: {
          legal: 'Avisos Legais',
          terms: 'Termos e Condições',
          privacy: 'Política de Privacidade',
          cookies: 'Cookies'
        }
      },
      copyright: '© 2024 XOTI - eXport Overseas Transport International. Todos os direitos reservados.'
    },
    home: {
      stats: {
        expeditions: 'Expedições por mês',
        countries: 'Países atendidos',
        satisfaction: 'Satisfação do cliente',
        experience: 'Anos de experiência'
      },
      testimonials: {
        title: 'O que dizem nossos clientes',
        subtitle: 'Mais de 2000 empresas confiam em nós para seus envios internacionais.',
        reviews: [
          {
            name: 'Maria Silva',
            company: 'TechCorp Solutions Portugal',
            content: 'A XOTI nos acompanha há 3 anos em nossos envios europeus. Serviço impecável e rastreamento em tempo real.',
            rating: 5,
            avatar: '👩‍💼'
          },
          {
            name: 'João Santos',
            company: 'Import Export Lda',
            content: 'Soluções personalizadas e equipe muito profissional. Nossas mercadorias sempre chegam em perfeito estado.',
            rating: 5,
            avatar: '👨‍💼'
          },
          {
            name: 'António Costa',
            company: 'Logística Europeia',
            content: 'Prazos respeitados, preços competitivos e excelente suporte ao cliente. Recomendo vivamente a XOTI.',
            rating: 5,
            avatar: '👨‍🦲'
          }
        ]
      },
      cta: {
        title: 'Pronto para enviar com XOTI?',
        subtitle: 'Obtenha uma cotação personalizada em poucos minutos ou rastreie seus envios em tempo real.',
        quoteButton: 'Solicitar Orçamento',
        trackButton: 'Rastrear Encomenda'
      }
    },
    roadTransport: {
      hero: {
        backButton: '← Serviços',
        badge: 'Transporte Rodoviário',
        title: 'Transporte Rodoviário Europeu',
        subtitle: 'Soluções completas de transporte terrestre para a Europa com rastreamento GPS em tempo real e entrega garantida em 24-48h.',
        quoteButton: 'Solicitar Orçamento',
        trackButton: 'Rastrear Transporte'
      },
      features: {
        title: 'Por que escolher nosso transporte rodoviário?',
        subtitle: 'Uma solução confiável e econômica para seus envios europeus',
        items: {
          delivery: {
            title: 'Entrega 24-48h',
            description: 'Prazos garantidos para a Europa'
          },
          tracking: {
            title: 'Rastreamento GPS',
            description: 'Localização em tempo real'
          },
          insurance: {
            title: 'Seguro incluído',
            description: 'Cobertura completa das mercadorias'
          },
          vehicles: {
            title: 'Veículos adaptados',
            description: 'Frota moderna e especializada'
          }
        }
      },
      zones: {
        title: 'Zonas e Prazos',
        subtitle: 'Prazos garantidos para seus envios europeus',
        included: {
          insurance: 'Seguro incluído',
          tracking: 'Rastreamento GPS tempo real',
          delivery: 'Entrega com comprovante'
        },
        quoteButton: 'Obter Orçamento Personalizado',
        countries: {
          france: 'França',
          germany: 'Alemanha',
          italy: 'Itália',
          spain: 'Espanha',
          netherlands: 'Países Baixos',
          belgium: 'Bélgica'
        }
      },
      process: {
        title: 'Nosso Processo',
        subtitle: 'Simples, rápido e transparente',
        steps: {
          quote: {
            title: 'Solicitação de orçamento',
            description: 'Informe suas necessidades através do nosso formulário ou por telefone',
            time: '2h'
          },
          pickup: {
            title: 'Coleta programada',
            description: 'Retirada no seu endereço nos horários acordados',
            time: '24h'
          },
          transport: {
            title: 'Transporte seguro',
            description: 'Envio com rastreamento GPS e notificações automáticas',
            time: '24-48h'
          },
          delivery: {
            title: 'Entrega confirmada',
            description: 'Recebimento com assinatura e comprovante de entrega digital',
            time: 'Imediato'
          }
        }
      },
      cta: {
        title: 'Pronto para enviar por estrada?',
        subtitle: 'Mais de 10.000 envios rodoviários bem-sucedidos a cada mês. Junte-se aos nossos clientes satisfeitos.',
        button: 'Começar agora',
        stats: {
          delivery: {
            value: '99.2%',
            label: 'Entregas pontuais'
          },
          time: {
            value: '24h',
            label: 'Tempo médio'
          },
          rating: {
            label: 'Avaliação do cliente'
          }
        }
      }
    }
  }
};