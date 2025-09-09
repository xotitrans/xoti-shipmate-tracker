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