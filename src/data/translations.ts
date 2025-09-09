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
    }
  }
};