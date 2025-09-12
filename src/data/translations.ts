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
    updateLocation: string;
    updateLocationDesc: string;
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
    // Nouveaux champs pour la page de suivi
    error: string;
    enterTrackingNumber: string;
    packageFoundToast: string;
    notFoundTitle: string;
    notFoundDesc: string;
    searchError: string;
    searchErrorDesc: string;
    sender: string;
    recipient: string;
    name: string;
    address: string;
    phoneNumber: string;
    currentPosition: string;
    transportType: string;
    estimatedDeliveryDate: string;
    notDefined: string;
    dimensions: string;
    declaredValue: string;
    transportCost: string;
    priority: string;
    status: string;
    method: string;
    insuredValue: string;
    specialInstructions: string;
    deliveryInstructions: string;
    emergencyContact: string;
    notes: string;
    statuses: {
      pending: string;
      in_transit: string;
      delivered: string;
      failed: string;
    };
    transportTypes: {
      road: string;
      air: string;
      sea: string;
      express: string;
    };
    priorities: {
      normal: string;
      urgent: string;
      express: string;
    };
    paymentStatuses: {
      paid: string;
      pending: string;
      failed: string;
    };
    paymentMethods: {
      credit_card: string;
      bank_transfer: string;
      cash: string;
      paypal: string;
    };
    requiresSignature: string;
    preferredDeliveryTime: string;
    specialIndicators: string;
    fragile: string;
    dangerous: string;
    map: {
      title: string;
      subtitle: string;
      currentPosition: string;
      noGpsAvailable: string;
      sender: string;
      recipient: string;
      center: string;
      loading: string;
      noGpsPosition: string;
      noGpsCoordinates: string;
      latitude: string;
      longitude: string;
      location: string;
      loadError: string;
      mapError: string;
    };
    photos: {
      title: string;
      subtitle: string;
      noPhotos: string;
      noPhotosDesc: string;
      uploadedBy: string;
      viewPhoto: string;
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
        };
        support: {
          tracking: string;
          contact: string;
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
  airTransport: {
    hero: {
      backButton: string;
      badge: string;
      title: string;
      subtitle: string;
      quoteButton: string;
      trackButton: string;
    };
    services: {
      title: string;
      subtitle: string;
      express: {
        title: string;
        description: string;
        badge: string;
        features: [string, string, string, string];
        button: string;
      };
      standard: {
        title: string;
        description: string;
        features: [string, string, string, string];
        button: string;
      };
      economy: {
        title: string;
        description: string;
        features: [string, string, string, string];
        button: string;
      };
    };
    destinations: {
      title: string;
      subtitle: string;
      regions: {
        europe: { name: string; time: string; description: string; };
        northAmerica: { name: string; time: string; description: string; };
        asia: { name: string; time: string; description: string; };
        middleEast: { name: string; time: string; description: string; };
        africa: { name: string; time: string; description: string; };
        oceania: { name: string; time: string; description: string; };
      };
      connections: string;
    };
    advantages: {
      title: string;
      items: {
        speed: { title: string; description: string; };
        security: { title: string; description: string; };
        coverage: { title: string; description: string; };
        tracking: { title: string; description: string; };
      };
      premium: {
        title: string;
        features: [string, string, string, string, string, string];
      };
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
      stats: {
        express: { value: string; label: string; };
        destinations: { value: string; label: string; };
        satisfaction: { label: string; };
      };
    };
  };
  seaTransport: {
    hero: {
      backButton: string;
      badge: string;
      title: string;
      subtitle: string;
      quoteButton: string;
      trackButton: string;
    };
    services: {
      title: string;
      subtitle: string;
      fcl: {
        title: string;
        description: string;
        features: [string, string, string, string];
        button: string;
      };
      lcl: {
        title: string;
        description: string;
        features: [string, string, string, string];
        button: string;
      };
      special: {
        title: string;
        description: string;
        features: [string, string, string, string];
        button: string;
      };
    };
    routes: {
      title: string;
      subtitle: string;
      regions: {
        europe: { name: string; time: string; description: string; };
        asia: { name: string; time: string; description: string; };
        america: { name: string; time: string; description: string; };
        africa: { name: string; time: string; description: string; };
        oceania: { name: string; time: string; description: string; };
        middleEast: { name: string; time: string; description: string; };
      };
      ports: string;
    };
    advantages: {
      title: string;
      items: {
        economy: { title: string; description: string; };
        capacity: { title: string; description: string; };
        ecology: { title: string; description: string; };
        security: { title: string; description: string; };
      };
      sustainable: {
        title: string;
        features: [string, string, string, string, string, string];
      };
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
      stats: {
        containers: { value: string; label: string; };
        routes: { value: string; label: string; };
        co2: { value: string; label: string; };
      };
    };
  };
  express: {
    badge: string;
    title: string;
    description: string;
    getQuote: string;
    trackShipment: string;
    featuresTitle: string;
    featuresDescription: string;
    features: {
      speed: { title: string; description: string; };
      security: { title: string; description: string; };
      tracking: { title: string; description: string; };
      reliability: { title: string; description: string; };
    };
    servicesTitle: string;
    servicesDescription: string;
    services: {
      sameDay: {
        title: string;
        description: string;
        features: {
          pickup: string;
          delivery: string;
          tracking: string;
        };
      };
      nextDay: {
        title: string;
        description: string;
        features: {
          guarantee: string;
          coverage: string;
          insurance: string;
        };
      };
      international: {
        title: string;
        description: string;
        features: {
          customs: string;
          network: string;
          documentation: string;
        };
      };
    };
    ctaTitle: string;
    ctaDescription: string;
    contactUs: string;
    learnMore: string;
  };
  custom: {
    badge: string;
    title: string;
    description: string;
    getQuote: string;
    consultation: string;
    approachTitle: string;
    approachDescription: string;
    approach: {
      analysis: { title: string; description: string; };
      design: { title: string; description: string; };
      implementation: { title: string; description: string; };
      optimization: { title: string; description: string; };
    };
    industriesTitle: string;
    industriesDescription: string;
    industries: {
      automotive: {
        title: string;
        description: string;
        features: {
          parts: string;
          jit: string;
          quality: string;
        };
      };
      pharmaceutical: {
        title: string;
        description: string;
        features: {
          temperature: string;
          compliance: string;
          security: string;
        };
      };
      technology: {
        title: string;
        description: string;
        features: {
          fragile: string;
          speed: string;
          global: string;
        };
      };
    };
    processTitle: string;
    processDescription: string;
    process: {
      consultation: { title: string; description: string; };
      proposal: { title: string; description: string; };
      execution: { title: string; description: string; };
      optimization: { title: string; description: string; };
    };
    ctaTitle: string;
    ctaDescription: string;
    contactExpert: string;
    downloadBrochure: string;
  };
  about: {
    heroTitle: string;
    heroDescription: string;
    stats: {
      experience: string;
      countries: string;
      clients: string;
    };
    missionTitle: string;
    missionDescription1: string;
    missionDescription2: string;
    servicesButton: string;
    commitmentTitle: string;
    commitmentItems: [string, string, string, string];
    valuesTitle: string;
    valuesDescription: string;
    values: {
      excellence: { title: string; description: string; };
      punctuality: { title: string; description: string; };
      international: { title: string; description: string; };
      service: { title: string; description: string; };
    };
    historyTitle: string;
    historyDescription: string;
    timeline: Array<{ year: string; event: string; }>;
    ctaTitle: string;
    ctaDescription: string;
    contactButton: string;
  };
  servicesPage: {
    hero: {
      title: string;
      subtitle: string;
      badges: [string, string, string, string];
    };
    mainServices: {
      title: string;
      subtitle: string; 
      services: {
        road: {
          title: string;
          description: string;
          features: [string, string, string, string];
          destinations: string;
        };
        air: {
          title: string;
          description: string;
          features: [string, string, string, string];
          destinations: string;
        };
        sea: {
          title: string;
          description: string;
          features: [string, string, string, string];
          destinations: string;
        };
      };
      learnMore: string;
    };
    specialServices: {
      title: string;
      subtitle: string;
      services: {
        express: {
          title: string;
          description: string;
        };
        custom: {
          title: string;
          description: string;
        };
        tracking: {
          title: string;
          description: string;
        };
      };
      discover: string;
    };
    process: {
      title: string;
      subtitle: string;
      steps: {
        quote: { title: string; description: string; };
        pickup: { title: string; description: string; };
        transport: { title: string; description: string; };
        delivery: { title: string; description: string; };
      };
    };
    cta: {
      title: string;
      subtitle: string;
      quoteButton: string;
      trackButton: string;
    };
  };
  contactPage: {
    hero: {
      title: string;
      subtitle: string;
    };
    contactInfo: {
      address: { title: string; content: string; };
      phone: { title: string; content: string; };
      hours: { title: string; content: string; };
    };
    form: {
      title: string;
      subtitle: string;
      fields: {
        name: string;
        email: string;
        company: string;
        phone: string;
        service: string;
        message: string;
        messagePlaceholder: string;
      };
      serviceOptions: {
        placeholder: string;
        road: string;
        air: string;
        sea: string;
        express: string;
        custom: string;
      };
      submitButton: string;
      submitting: string;
      successTitle: string;
      successMessage: string;
      errorTitle: string;
      errorMessage: string;
    };
    location: {
      title: string;
      mapTitle: string;
      mapSubtitle: string;
      headquarters: string;
      access: string;
      accessDetails: string;
    };
    emergency: {
      title: string;
      subtitle: string;
      phoneButton: string;
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
      updateLocation: 'Modifier localisation',
      updateLocationDesc: 'Mettre à jour manuellement la position du colis',
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
      error: 'Erreur',
      enterTrackingNumber: 'Veuillez saisir un numéro de suivi',
      packageFoundToast: 'Colis trouvé',
      notFoundTitle: 'Colis non trouvé',
      notFoundDesc: 'Aucun colis ne correspond à ce numéro de suivi',
      searchError: 'Erreur',
      searchErrorDesc: 'Une erreur est survenue lors de la recherche',
      sender: 'Expéditeur',
      recipient: 'Destinataire',
      name: 'Nom',
      address: 'Adresse',
      phoneNumber: 'Téléphone',
      currentPosition: 'Position actuelle',
      notDefined: 'Non définie',
      transportType: 'Type de transport',
      estimatedDeliveryDate: 'Livraison prévue',
      statuses: {
        pending: 'En attente',
        in_transit: 'En transit',
        delivered: 'Livré',
        failed: 'Échec'
      },
      transportTypes: {
        road: 'Route',
        air: 'Aérien',
        sea: 'Maritime',
        express: 'Express'
      },
      dimensions: 'Dimensions',
      declaredValue: 'Valeur déclarée',
      transportCost: 'Frais de transport',
      priority: 'Priorité',
      status: 'Statut',
      method: 'Méthode',
      insuredValue: 'Valeur assurée',
      specialInstructions: 'Instructions spéciales',
      deliveryInstructions: 'Instructions de livraison',
      emergencyContact: 'Contact d\'urgence',
      notes: 'Notes',
      priorities: {
        normal: 'Normal',
        urgent: 'Urgent',
        express: 'Express'
      },
      paymentStatuses: {
        paid: 'Payé',
        pending: 'En attente',
        failed: 'Échec'
      },
      paymentMethods: {
        credit_card: 'Carte de crédit',
        bank_transfer: 'Virement bancaire',
        cash: 'Espèces',
        paypal: 'PayPal'
      },
      requiresSignature: 'Signature requise',
      preferredDeliveryTime: 'Heure préférée',
      specialIndicators: 'Indications spéciales',
      fragile: 'Fragile',
      dangerous: 'Dangereux',
      map: {
        title: 'Localisation GPS',
        subtitle: 'Position actuelle du colis',
        currentPosition: 'Position actuelle',
        noGpsAvailable: 'Aucune position GPS disponible',
        sender: 'Expéditeur',
        recipient: 'Destinataire',
        center: 'Centrer',
        loading: 'Chargement de la carte...',
        noGpsPosition: 'Position GPS non disponible',
        noGpsCoordinates: "Le colis n'a pas encore de coordonnées GPS",
        latitude: 'Latitude:',
        longitude: 'Longitude:',
        location: 'Lieu:',
        loadError: 'Impossible de charger la carte. Veuillez configurer le token Mapbox.',
      mapError: 'Erreur lors du chargement de la carte.'
    },
    photos: {
      title: 'Photos du colis',
      subtitle: 'Images associées à cette expédition',
      noPhotos: 'Aucune photo disponible',
      noPhotosDesc: 'Aucune photo n\'a été ajoutée pour ce colis.',
      uploadedBy: 'Ajoutée par',
      viewPhoto: 'Voir',
    },
      faq: {
        q1: 'Comment fonctionne le suivi ?',
        a1: 'Votre numéro de suivi commence par \'XTI-\' suivi de l\'année et d\'un numéro unique. Il vous est communiqué dès la prise en charge de votre colis.',
        q2: 'À quelle fréquence les informations sont-elles mises à jour ?',
        a2: 'Les informations de suivi sont actualisées en temps réel. Chaque étape importante est enregistrée automatiquement.',
        q3: 'Que faire si mon colis semble bloqué ?',
        a3: 'Contactez notre service client au +49 176 93722675. Nous résoudrons rapidement tout problème logistique.',
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
        },
        support: {
          tracking: 'Suivi de Colis',
          contact: 'Contact',
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
    seaTransport: {
      hero: {
        backButton: '← Services',
        badge: 'Transport Maritime',
        title: 'Fret Maritime International',
        subtitle: 'Solutions économiques et écologiques pour vos expeditions conteneurisées vers tous les continents. Transport FCL et LCL avec suivi complet.',
        quoteButton: 'Devis Maritime',
        trackButton: 'Suivre un Conteneur'
      },
      services: {
        title: 'Nos Solutions Maritimes',
        subtitle: 'Du conteneur complet au groupage, nous nous adaptons à vos volumes',
        fcl: {
          title: 'FCL - Conteneur Complet',
          description: 'Container exclusif pour vos gros volumes',
          features: ['20\' et 40\'', 'Exclusivité', 'Direct', 'Économique'],
          button: 'Choisir FCL'
        },
        lcl: {
          title: 'LCL - Groupage Maritime',
          description: 'Partagez un conteneur, payez votre volume',
          features: ['Petits volumes', 'Groupage', 'Flexible', 'Accessible'],
          button: 'Choisir LCL'
        },
        special: {
          title: 'Cargaisons Spéciales',
          description: 'Transport de marchandises hors-normes',
          features: ['Hors-gabarit', 'Dangereux', 'Frigorifique', 'Sur-mesure'],
          button: 'Solutions spéciales'
        }
      },
      routes: {
        title: 'Routes Mondiales',
        subtitle: 'Connecté aux principaux ports du monde entier',
        regions: {
          europe: {
            name: 'Europe',
            time: '5-15 jours',
            description: 'Hambourg, Rotterdam, Anvers'
          },
          asia: {
            name: 'Asie',
            time: '20-35 jours',
            description: 'Shanghai, Singapour, Hong Kong'
          },
          america: {
            name: 'Amériques',
            time: '10-25 jours',
            description: 'New York, Los Angeles, Santos'
          },
          africa: {
            name: 'Afrique',
            time: '8-20 jours',
            description: 'Casablanca, Durban, Lagos'
          },
          oceania: {
            name: 'Océanie',
            time: '25-40 jours',
            description: 'Sydney, Melbourne, Auckland'
          },
          middleEast: {
            name: 'Moyen-Orient',
            time: '12-25 jours',
            description: 'Dubaï, Jeddah, Doha'
          }
        },
        ports: 'Ports partenaires'
      },
      advantages: {
        title: 'Pourquoi choisir le transport maritime ?',
        items: {
          economy: {
            title: 'Économie maximale',
            description: 'Le mode de transport le plus économique pour gros volumes'
          },
          capacity: {
            title: 'Grande capacité',
            description: 'Transport de volumes importants en une seule fois'
          },
          ecology: {
            title: 'Transport écologique',
            description: '80% moins de CO2 que le transport routier'
          },
          security: {
            title: 'Sécurité optimale',
            description: 'Conteneurs scellés et contrôlés tout au long du transport'
          }
        },
        sustainable: {
          title: 'Transport Durable',
          features: ['Empreinte carbone réduite', 'Optimisation des routes', 'Conteneurs réutilisables', 'Normes environnementales', 'Efficacité énergétique', 'Transport de masse']
        }
      },
      cta: {
        title: 'Prêt pour le transport maritime ?',
        subtitle: 'Plus de 2 000 conteneurs expédiés chaque mois vers le monde entier. La solution économique et écologique.',
        button: 'Demander un devis',
        stats: {
          containers: {
            value: '2000+',
            label: 'Conteneurs/mois'
          },
          routes: {
            value: '150+',
            label: 'Ports desservis'
          },
          co2: {
            value: '-80%',
            label: 'Émissions CO2'
          }
        }
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
    },
    airTransport: {
      hero: {
        backButton: '← Services',
        badge: 'Transport Aérien',
        title: 'Fret Aérien International',
        subtitle: 'Solutions express pour vos expéditions urgentes vers toutes les destinations mondiales. Rapidité, sécurité et fiabilité garanties.',
        quoteButton: 'Devis Express',
        trackButton: 'Suivre un Vol'
      },
      services: {
        title: 'Nos Solutions Aériennes',
        subtitle: 'Trois niveaux de service pour répondre à tous vos besoins de rapidité',
        express: {
          title: 'Express 6h',
          description: 'Livraison ultra-rapide pour vos urgences',
          badge: 'Le plus rapide',
          features: ['6h chrono', 'Mondial', 'Priorité absolue', 'Suivi premium'],
          button: 'Choisir ce service'
        },
        standard: {
          title: 'Standard 24h',
          description: 'Solution équilibrée rapidité/prix',
          features: ['24h garanti', 'International', 'Assurance incluse', 'Suivi temps réel'],
          button: 'Choisir ce service'
        },
        economy: {
          title: 'Économique 48h',
          description: 'Option économique pour délais flexibles',
          features: ['48-72h', 'Groupage', 'Solution optimisée', 'Suivi standard'],
          button: 'Choisir ce service'
        }
      },
      destinations: {
        title: 'Destinations Mondiales',
        subtitle: 'Plus de 200 destinations dans le monde entier',
        regions: {
          europe: {
            name: 'Europe',
            time: '6-24h',
            description: 'Capitales européennes'
          },
          northAmerica: {
            name: 'Amérique du Nord',
            time: '12-48h',
            description: 'USA, Canada, Mexique'
          },
          asia: {
            name: 'Asie',
            time: '24-72h',
            description: 'Chine, Japon, Singapour'
          },
          middleEast: {
            name: 'Moyen-Orient',
            time: '18-48h',
            description: 'EAU, Arabie Saoudite'
          },
          africa: {
            name: 'Afrique',
            time: '24-72h',
            description: 'Afrique du Nord et Ouest'
          },
          oceania: {
            name: 'Océanie',
            time: '48-96h',
            description: 'Australie, Nouvelle-Zélande'
          }
        },
        connections: 'Connexions quotidiennes'
      },
      advantages: {
        title: 'Pourquoi choisir le fret aérien ?',
        items: {
          speed: {
            title: 'Rapidité inégalée',
            description: 'Livraison en 6h à 72h selon la destination'
          },
          security: {
            title: 'Sécurité maximale',
            description: 'Standards aéroportuaires et assurance tous risques'
          },
          coverage: {
            title: 'Couverture mondiale',
            description: 'Plus de 200 destinations via notre réseau de partenaires'
          },
          tracking: {
            title: 'Suivi précis',
            description: 'Tracking vol par vol avec notifications temps réel'
          }
        },
        premium: {
          title: 'Service Premium',
          features: ['Collecte et livraison J+1', 'Dédouanement express', 'Emballage spécialisé', 'Produits dangereux acceptés', 'Température contrôlée', 'Service porte-à-porte']
        }
      },
      cta: {
        title: 'Votre expédition ne peut pas attendre ?',
        subtitle: 'Plus de 5 000 expéditions aériennes par mois. Délais respectés à 99.8%.',
        button: 'Expédier maintenant',
        stats: {
          express: {
            value: '6h',
            label: 'Express minimum'
          },
          destinations: {
            value: '200+',
            label: 'Destinations'
          },
          satisfaction: {
            label: 'Satisfaction'
          }
        }
      }
    },
    express: {
      badge: "Service Express",
      title: "Livraison Express",
      description: "Solutions de transport rapides et fiables pour vos envois urgents avec suivi en temps réel et garantie de livraison.",
      getQuote: "Obtenir un devis",
      trackShipment: "Suivre mon colis",
      featuresTitle: "Pourquoi choisir notre service express ?",
      featuresDescription: "Des solutions de livraison ultra-rapides adaptées à tous vos besoins urgents",
      features: {
        speed: {
          title: "Livraison rapide",
          description: "Livraison en quelques heures selon la destination"
        },
        security: {
          title: "Sécurité maximale",
          description: "Protection complète de vos colis durant le transport"
        },
        tracking: {
          title: "Suivi en temps réel",
          description: "Suivez votre colis à chaque étape de la livraison"
        },
        reliability: {
          title: "Fiabilité garantie",
          description: "99.9% de taux de livraison dans les délais"
        }
      },
      servicesTitle: "Nos services express",
      servicesDescription: "Choisissez le service qui correspond le mieux à vos besoins de livraison",
      services: {
        sameDay: {
          title: "Livraison le jour même",
          description: "Pour vos envois les plus urgents, livraison garantie le jour même.",
          features: {
            pickup: "Enlèvement dans l'heure",
            delivery: "Livraison en 2-6 heures",
            tracking: "Suivi GPS en temps réel"
          }
        },
        nextDay: {
          title: "Livraison le lendemain",
          description: "Service fiable pour une livraison garantie le jour ouvrable suivant.",
          features: {
            guarantee: "Garantie avant 12h",
            coverage: "Couverture nationale",
            insurance: "Assurance incluse"
          }
        },
        international: {
          title: "Express international",
          description: "Livraison express vers l'international avec dédouanement inclus.",
          features: {
            customs: "Gestion douanière",
            network: "Réseau mondial",
            documentation: "Documents inclus"
          }
        }
      },
      ctaTitle: "Prêt à expédier ?",
      ctaDescription: "Contactez-nous dès maintenant pour vos besoins de livraison express et obtenez un devis personnalisé.",
      contactUs: "Nous contacter",
      learnMore: "En savoir plus"
    },
    custom: {
      badge: "Solutions Sur Mesure",
      title: "Services Personnalisés",
      description: "Solutions de transport adaptées à vos besoins spécifiques avec une approche consultative et des services sur mesure pour votre industrie.",
      getQuote: "Demander un devis",
      consultation: "Consultation gratuite",
      approachTitle: "Notre approche personnalisée",
      approachDescription: "Une méthodologie éprouvée pour concevoir des solutions de transport adaptées à vos contraintes",
      approach: {
        analysis: {
          title: "Analyse des besoins",
          description: "Étude approfondie de vos processus et contraintes"
        },
        design: {
          title: "Conception sur mesure",
          description: "Élaboration d'une solution adaptée à votre secteur"
        },
        implementation: {
          title: "Mise en œuvre",
          description: "Déploiement progressif avec accompagnement dédié"
        },
        optimization: {
          title: "Optimisation continue",
          description: "Amélioration et ajustement de la solution"
        }
      },
      industriesTitle: "Secteurs d'expertise",
      industriesDescription: "Des solutions spécialisées pour chaque industrie avec ses exigences particulières",
      industries: {
        automotive: {
          title: "Automobile",
          description: "Transport de pièces détachées et véhicules avec respect des délais de production.",
          features: {
            parts: "Pièces détachées",
            jit: "Juste-à-temps",
            quality: "Qualité garantie"
          }
        },
        pharmaceutical: {
          title: "Pharmaceutique",
          description: "Transport de produits sensibles avec chaîne du froid et traçabilité complète.",
          features: {
            temperature: "Chaîne du froid",
            compliance: "Conformité réglementaire",
            security: "Sécurité maximale"
          }
        },
        technology: {
          title: "Technologie",
          description: "Transport sécurisé d'équipements électroniques et composants sensibles.",
          features: {
            fragile: "Produits fragiles",
            speed: "Livraison rapide",
            global: "Couverture mondiale"
          }
        }
      },
      processTitle: "Notre processus",
      processDescription: "Une approche structurée pour développer la solution logistique idéale",
      process: {
        consultation: {
          title: "Consultation",
          description: "Analyse de vos besoins et contraintes spécifiques"
        },
        proposal: {
          title: "Proposition",
          description: "Conception d'une solution personnalisée adaptée"
        },
        execution: {
          title: "Exécution",
          description: "Mise en place et déploiement de la solution"
        },
        optimization: {
          title: "Optimisation",
          description: "Suivi et amélioration continue des performances"
        }
      },
      ctaTitle: "Discutons de votre projet",
      ctaDescription: "Nos experts analysent gratuitement vos besoins et vous proposent une solution sur mesure.",
      contactExpert: "Contacter un expert",
      downloadBrochure: "Télécharger la brochure"
    },
    about: {
      heroTitle: "À propos de XOTI",
      heroDescription: "Depuis 1999, XOTI (eXport Overseas Transport International) accompagne les entreprises dans leurs défis logistiques avec expertise et innovation.",
      stats: {
        experience: "Années d'expérience",
        countries: "Pays desservis",
        clients: "Clients satisfaits"
      },
      missionTitle: "Notre Mission",
      missionDescription1: "Chez XOTI, nous croyons que chaque expédition est unique et mérite une attention particulière. Notre mission est de simplifier la logistique internationale en offrant des solutions personnalisées et innovantes.",
      missionDescription2: "Nous combinons l'expertise humaine avec les dernières technologies pour garantir à nos clients une expérience de transport exceptionnelle, du premier contact jusqu'à la livraison finale.",
      servicesButton: "Découvrir nos services",
      commitmentTitle: "Notre Engagement",
      commitmentItems: [
        "Transparence totale sur nos services",
        "Innovation constante de nos solutions", 
        "Respect de l'environnement",
        "Formation continue de nos équipes"
      ],
      valuesTitle: "Nos Valeurs",
      valuesDescription: "Les principes qui guident notre action au quotidien",
      values: {
        excellence: {
          title: "Excellence",
          description: "Nous nous engageons à fournir des services de transport de la plus haute qualité."
        },
        punctuality: {
          title: "Ponctualité",
          description: "Respect des délais et livraisons dans les temps convenus avec nos clients."
        },
        international: {
          title: "International",
          description: "Une expertise reconnue dans le transport international depuis plus de 25 ans."
        },
        service: {
          title: "Service Client",
          description: "Une équipe dédiée disponible 24/7 pour répondre à toutes vos questions."
        }
      },
      historyTitle: "Notre Histoire",
      historyDescription: "Un quart de siècle d'innovation dans le transport international",
      timeline: [
        { year: "1999", event: "Création de XOTI avec une vision européenne du transport" },
        { year: "2005", event: "Expansion vers le transport aérien et maritime" },
        { year: "2012", event: "Lancement de la plateforme de suivi en temps réel" },
        { year: "2018", event: "Ouverture de 5 nouveaux hubs européens" },
        { year: "2024", event: "Plus de 15,000 expéditions mensuelles" }
      ],
      ctaTitle: "Rejoignez les 2000+ entreprises qui nous font confiance",
      ctaDescription: "Découvrez comment XOTI peut optimiser votre chaîne logistique",
      contactButton: "Contactez-nous"
    },
    servicesPage: {
      hero: {
        title: "Nos Services de Transport",
        subtitle: "Des solutions complètes et personnalisées pour tous vos besoins de transport international. Expertise, fiabilité et innovation.",
        badges: ["Transport Routier", "Transport Aérien", "Transport Maritime", "Solutions Express"]
      },
      mainServices: {
        title: "Services Principaux",
        subtitle: "Trois modes de transport complémentaires pour répondre à tous vos besoins logistiques",
        services: {
          road: {
            title: "Transport Routier",
            description: "Solutions complètes de transport terrestre pour l'Europe avec suivi GPS en temps réel.",
            features: ["Livraison 24-48h", "Suivi GPS temps réel", "Assurance incluse", "Véhicules adaptés"],
            destinations: "Europe"
          },
          air: {
            title: "Transport Aérien", 
            description: "Fret aérien express pour vos expéditions urgentes vers toutes destinations mondiales.",
            features: ["Express 6-24h", "Mondial", "Produits sensibles", "Dédouanement"],
            destinations: "Mondial"
          },
          sea: {
            title: "Transport Maritime",
            description: "Solutions économiques FCL et LCL pour vos expéditions en conteneurs.",
            features: ["FCL & LCL", "Économique", "Écologique", "Port à port"],
            destinations: "International"
          }
        },
        learnMore: "En savoir plus"
      },
      specialServices: {
        title: "Services Spécialisés",
        subtitle: "Solutions avancées pour des besoins spécifiques",
        services: {
          express: {
            title: "Logistique Express",
            description: "Service premium avec engagement de délais pour vos expéditions critiques."
          },
          custom: {
            title: "Solutions Sur Mesure", 
            description: "Solutions personnalisées pour les industries spécialisées."
          },
          tracking: {
            title: "Suivi Avancé",
            description: "Plateforme de tracking avec alertes et notifications personnalisées."
          }
        },
        discover: "Découvrir"
      },
      process: {
        title: "Comment ça marche ?",
        subtitle: "Un processus simple et transparent en 4 étapes",
        steps: {
          quote: { title: "Devis", description: "Recevez un devis personnalisé en moins de 2 heures" },
          pickup: { title: "Enlèvement", description: "Collecte à votre adresse aux horaires convenus" },
          transport: { title: "Transport", description: "Suivi en temps réel de votre expédition" },
          delivery: { title: "Livraison", description: "Réception confirmée avec preuve de livraison" }
        }
      },
      cta: {
        title: "Prêt à commencer ?",
        subtitle: "Obtenez un devis gratuit et personnalisé pour votre prochaine expédition",
        quoteButton: "Demander un Devis",
        trackButton: "Suivre un Colis"
      }
    },
    contactPage: {
      hero: {
        title: "Contactez-nous",
        subtitle: "Notre équipe d'experts est à votre disposition pour vous accompagner dans tous vos projets de transport international."
      },
      contactInfo: {
        address: { title: "Adresse", content: "123 Avenue de l'Europe\n75001 Paris, France" },
        phone: { title: "Téléphone", content: "+49 176 93722675" },
        hours: { title: "Horaires", content: "Lun-Ven: 8h-18h\nSam: 9h-12h\nDim: Fermé" }
      },
      form: {
        title: "Demande de devis",
        subtitle: "Remplissez ce formulaire pour recevoir un devis personnalisé",
        fields: {
          name: "Nom complet *",
          email: "Email *",
          company: "Entreprise",
          phone: "Téléphone",
          service: "Service souhaité",
          message: "Message *",
          messagePlaceholder: "Décrivez votre besoin : origine, destination, type de marchandise, délais souhaités..."
        },
        serviceOptions: {
          placeholder: "Sélectionnez un service",
          road: "Transport Routier",
          air: "Transport Aérien",
          sea: "Transport Maritime",
          express: "Logistique Express",
          custom: "Solution Sur Mesure"
        },
        submitButton: "Envoyer la demande",
        submitting: "Envoi en cours...",
        successTitle: "Message envoyé !",
        successMessage: "Nous vous répondrons dans les plus brefs délais.",
        errorTitle: "Erreur",
        errorMessage: "Une erreur est survenue. Veuillez réessayer."
      },
      location: {
        title: "Nous trouver",
        mapTitle: "Carte interactive",
        mapSubtitle: "Disponible prochainement",
        headquarters: "Siège social",
        access: "Accès",
        accessDetails: "• Métro : Ligne 1, Station Louvre-Rivoli\n• RER : RER A, Station Châtelet\n• Parking : Disponible sur site"
      },
      emergency: {
        title: "Urgence ou support 24/7 ?",
        subtitle: "Notre service client est disponible 24h/24 et 7j/7 pour toute urgence",
        phoneButton: "Urgence : +49 176 93722675"
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
      updateLocation: 'Modificar ubicación',
      updateLocationDesc: 'Actualizar manualmente la posición del paquete',
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
      error: 'Error',
      enterTrackingNumber: 'Por favor ingrese un número de seguimiento',
      packageFoundToast: 'Paquete encontrado',
      notFoundTitle: 'Paquete no encontrado',
      notFoundDesc: 'Ningún paquete corresponde a este número de seguimiento',
      searchError: 'Error',
      searchErrorDesc: 'Se produjo un error durante la búsqueda',
      sender: 'Remitente',
      recipient: 'Destinatario',
      name: 'Nombre',
      address: 'Dirección',
      phoneNumber: 'Teléfono',
      currentPosition: 'Posición actual',
      notDefined: 'No definida',
      transportType: 'Tipo de transporte',
      estimatedDeliveryDate: 'Entrega prevista',
      statuses: {
        pending: 'Pendiente',
        in_transit: 'En tránsito',
        delivered: 'Entregado',
        failed: 'Fallo'
      },
      transportTypes: {
        road: 'Carretera',
        air: 'Aéreo',
        sea: 'Marítimo',
        express: 'Express'
      },
      dimensions: 'Dimensiones',
      declaredValue: 'Valor declarado',
      transportCost: 'Costo de transporte',
      priority: 'Prioridad',
      status: 'Estado',
      method: 'Método',
      insuredValue: 'Valor asegurado',
      specialInstructions: 'Instrucciones especiales',
      deliveryInstructions: 'Instrucciones de entrega',
      emergencyContact: 'Contacto de emergencia',
      notes: 'Notas',
      priorities: {
        normal: 'Normal',
        urgent: 'Urgente',
        express: 'Express'
      },
      paymentStatuses: {
        paid: 'Pagado',
        pending: 'Pendiente',
        failed: 'Fallo'
      },
      paymentMethods: {
        credit_card: 'Tarjeta de crédito',
        bank_transfer: 'Transferencia bancaria',
        cash: 'Efectivo',
        paypal: 'PayPal'
      },
      requiresSignature: 'Firma requerida',
      preferredDeliveryTime: 'Hora preferida',
      specialIndicators: 'Indicaciones especiales',
      fragile: 'Frágil',
      dangerous: 'Peligroso',
      map: {
        title: 'Localización GPS',
        subtitle: 'Posición actual del paquete',
        currentPosition: 'Posición actual',
        noGpsAvailable: 'Ninguna posición GPS disponible',
        sender: 'Remitente',
        recipient: 'Destinatario',
        center: 'Centrar',
        loading: 'Cargando el mapa...',
        noGpsPosition: 'Posición GPS no disponible',
        noGpsCoordinates: 'El paquete aún no tiene coordenadas GPS',
        latitude: 'Latitud:',
        longitude: 'Longitud:',
        location: 'Lugar:',
        loadError: 'No se puede cargar el mapa. Configure el token de Mapbox.',
      mapError: 'Error al cargar el mapa.'
    },
    photos: {
      title: 'Fotos del paquete',
      subtitle: 'Imágenes asociadas a este envío',
      noPhotos: 'No hay fotos disponibles',
      noPhotosDesc: 'No se han agregado fotos para este paquete.',
      uploadedBy: 'Subida por',
      viewPhoto: 'Ver',
    },
      faq: {
        q1: '¿Cómo funciona el seguimiento?',
        a1: 'Tu número de seguimiento comienza con \'XTI-\' seguido del año y un número único. Se comunica tan pronto como se toma el paquete.',
        q2: '¿Con qué frecuencia se actualiza la información?',
        a2: 'La información de seguimiento se actualiza en tiempo real. Cada etapa importante se registra automáticamente.',
        q3: '¿Qué hacer si mi paquete parece bloqueado?',
        a3: 'Contacta nuestro servicio al cliente al +49 176 93722675. Resolveremos rápidamente cualquier problema logístico.',
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
        },
        support: {
          tracking: 'Seguimiento de Paquete',
          contact: 'Contacto',
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
    },
    airTransport: {
      hero: {
        backButton: '← Servicios',
        badge: 'Transporte Aéreo',
        title: 'Flete Aéreo Internacional',
        subtitle: 'Soluciones express para tus envíos urgentes hacia todos los destinos mundiales. Rapidez, seguridad y confiabilidad garantizadas.',
        quoteButton: 'Cotización Express',
        trackButton: 'Rastrear Vuelo'
      },
      services: {
        title: 'Nuestras Soluciones Aéreas',
        subtitle: 'Tres niveles de servicio para satisfacer todas tus necesidades de rapidez',
        express: {
          title: 'Express 6h',
          description: 'Entrega ultra-rápida para tus urgencias',
          badge: 'El más rápido',
          features: ['6h garantizado', 'Mundial', 'Prioridad absoluta', 'Seguimiento premium'],
          button: 'Elegir este servicio'
        },
        standard: {
          title: 'Estándar 24h',
          description: 'Solución equilibrada rapidez/precio',
          features: ['24h garantizado', 'Internacional', 'Seguro incluido', 'Seguimiento tiempo real'],
          button: 'Elegir este servicio'
        },
        economy: {
          title: 'Económico 48h',
          description: 'Opción económica para plazos flexibles',
          features: ['48-72h', 'Groupage', 'Solución optimizada', 'Seguimiento estándar'],
          button: 'Elegir este servicio'
        }
      },
      destinations: {
        title: 'Destinos Mundiales',
        subtitle: 'Más de 200 destinos en todo el mundo',
        regions: {
          europe: {
            name: 'Europa',
            time: '6-24h',
            description: 'Capitales europeas'
          },
          northAmerica: {
            name: 'América del Norte',
            time: '12-48h',
            description: 'EE.UU., Canadá, México'
          },
          asia: {
            name: 'Asia',
            time: '24-72h',
            description: 'China, Japón, Singapur'
          },
          middleEast: {
            name: 'Medio Oriente',
            time: '18-48h',
            description: 'EAU, Arabia Saudí'
          },
          africa: {
            name: 'África',
            time: '24-72h',
            description: 'África del Norte y Oeste'
          },
          oceania: {
            name: 'Oceanía',
            time: '48-96h',
            description: 'Australia, Nueva Zelanda'
          }
        },
        connections: 'Conexiones diarias'
      },
      advantages: {
        title: '¿Por qué elegir el flete aéreo?',
        items: {
          speed: {
            title: 'Rapidez inigualable',
            description: 'Entrega en 6h a 72h según el destino'
          },
          security: {
            title: 'Seguridad máxima',
            description: 'Estándares aeroportuarios y seguro todo riesgo'
          },
          coverage: {
            title: 'Cobertura mundial',
            description: 'Más de 200 destinos a través de nuestra red de socios'
          },
          tracking: {
            title: 'Seguimiento preciso',
            description: 'Tracking vuelo por vuelo con notificaciones tiempo real'
          }
        },
        premium: {
          title: 'Servicio Premium',
          features: ['Recogida y entrega D+1', 'Despacho express', 'Embalaje especializado', 'Productos peligrosos aceptados', 'Temperatura controlada', 'Servicio puerta a puerta']
        }
      },
      cta: {
        title: '¿Tu envío no puede esperar?',
        subtitle: 'Más de 5,000 envíos aéreos por mes. Plazos respetados al 99.8%.',
        button: 'Enviar ahora',
        stats: {
          express: {
            value: '6h',
            label: 'Express mínimo'
          },
          destinations: {
            value: '200+',
            label: 'Destinos'
          },
          satisfaction: {
            label: 'Satisfacción'
          }
        }
      }
    },
    seaTransport: {
      hero: {
        backButton: '← Servicios',
        badge: 'Transporte Marítimo',
        title: 'Flete Marítimo Internacional',
        subtitle: 'Soluciones económicas y ecológicas para sus expediciones en contenedores hacia todos los continentes. Transporte FCL y LCL con seguimiento completo.',
        quoteButton: 'Cotización Marítima',
        trackButton: 'Rastrear Contenedor'
      },
      services: {
        title: 'Nuestras Soluciones Marítimas',
        subtitle: 'Del contenedor completo al groupage, nos adaptamos a sus volúmenes',
        fcl: {
          title: 'FCL - Contenedor Completo',
          description: 'Container exclusivo para sus grandes volúmenes',
          features: ['20\' y 40\'', 'Exclusividad', 'Directo', 'Económico'],
          button: 'Elegir FCL'
        },
        lcl: {
          title: 'LCL - Groupage Marítimo',
          description: 'Comparta un contenedor, pague su volumen',
          features: ['Pequeños volúmenes', 'Groupage', 'Flexible', 'Accesible'],
          button: 'Elegir LCL'
        },
        special: {
          title: 'Cargas Especiales',
          description: 'Transporte de mercancías fuera de norma',
          features: ['Fuera de medida', 'Peligroso', 'Frigorífico', 'A medida'],
          button: 'Soluciones especiales'
        }
      },
      routes: {
        title: 'Rutas Mundiales',
        subtitle: 'Conectado a los principales puertos del mundo',
        regions: {
          europe: {
            name: 'Europa',
            time: '5-15 días',
            description: 'Hamburgo, Rotterdam, Amberes'
          },
          asia: {
            name: 'Asia',
            time: '20-35 días',
            description: 'Shanghai, Singapur, Hong Kong'
          },
          america: {
            name: 'Américas',
            time: '10-25 días',
            description: 'Nueva York, Los Ángeles, Santos'
          },
          africa: {
            name: 'África',
            time: '8-20 días',
            description: 'Casablanca, Durban, Lagos'
          },
          oceania: {
            name: 'Oceanía',
            time: '25-40 días',
            description: 'Sídney, Melbourne, Auckland'
          },
          middleEast: {
            name: 'Medio Oriente',
            time: '12-25 días',
            description: 'Dubái, Jeddah, Doha'
          }
        },
        ports: 'Puertos socios'
      },
      advantages: {
        title: '¿Por qué elegir el transporte marítimo?',
        items: {
          economy: {
            title: 'Economía máxima',
            description: 'El modo de transporte más económico para grandes volúmenes'
          },
          capacity: {
            title: 'Gran capacidad',
            description: 'Transporte de volúmenes importantes de una sola vez'
          },
          ecology: {
            title: 'Transporte ecológico',
            description: '80% menos CO2 que el transporte por carretera'
          },
          security: {
            title: 'Seguridad óptima',
            description: 'Contenedores sellados y controlados durante todo el transporte'
          }
        },
        sustainable: {
          title: 'Transporte Sostenible',
          features: ['Huella de carbono reducida', 'Optimización de rutas', 'Contenedores reutilizables', 'Normas ambientales', 'Eficiencia energética', 'Transporte masivo']
        }
      },
      cta: {
        title: '¿Listo para el transporte marítimo?',
        subtitle: 'Más de 2,000 contenedores enviados cada mes al mundo entero. La solución económica y ecológica.',
        button: 'Solicitar cotización',
        stats: {
          containers: {
            value: '2000+',
            label: 'Contenedores/mes'
          },
          routes: {
            value: '150+',
            label: 'Puertos servidos'
          },
          co2: {
            value: '-80%',
            label: 'Emisiones CO2'
          }
        }
      }
    },
    express: {
      badge: "Servicio Exprés",
      title: "Entrega Exprés",
      description: "Soluciones de transporte rápidas y confiables para sus envíos urgentes con seguimiento en tiempo real y garantía de entrega.",
      getQuote: "Obtener cotización",
      trackShipment: "Rastrear mi paquete",
      featuresTitle: "¿Por qué elegir nuestro servicio exprés?",
      featuresDescription: "Soluciones de entrega ultra-rápidas adaptadas a todas sus necesidades urgentes",
      features: {
        speed: {
          title: "Entrega rápida",
          description: "Entrega en pocas horas según el destino"
        },
        security: {
          title: "Seguridad máxima",
          description: "Protección completa de sus paquetes durante el transporte"
        },
        tracking: {
          title: "Seguimiento en tiempo real",
          description: "Rastree su paquete en cada etapa de la entrega"
        },
        reliability: {
          title: "Confiabilidad garantizada",
          description: "99.9% de tasa de entrega a tiempo"
        }
      },
      servicesTitle: "Nuestros servicios exprés",
      servicesDescription: "Elija el servicio que mejor se adapte a sus necesidades de entrega",
      services: {
        sameDay: {
          title: "Entrega el mismo día",
          description: "Para sus envíos más urgentes, entrega garantizada el mismo día.",
          features: {
            pickup: "Recogida en una hora",
            delivery: "Entrega en 2-6 horas",
            tracking: "Seguimiento GPS en tiempo real"
          }
        },
        nextDay: {
          title: "Entrega al día siguiente",
          description: "Servicio confiable para entrega garantizada el siguiente día hábil.",
          features: {
            guarantee: "Garantía antes de las 12h",
            coverage: "Cobertura nacional",
            insurance: "Seguro incluido"
          }
        },
        international: {
          title: "Exprés internacional",
          description: "Entrega exprés internacional con despacho de aduanas incluido.",
          features: {
            customs: "Gestión aduanera",
            network: "Red mundial",
            documentation: "Documentos incluidos"
          }
        }
      },
      ctaTitle: "¿Listo para enviar?",
      ctaDescription: "Contáctenos ahora para sus necesidades de entrega exprés y obtenga una cotización personalizada.",
      contactUs: "Contáctanos",
      learnMore: "Saber más"
    },
    custom: {
      badge: "Soluciones Personalizadas",
      title: "Servicios Personalizados",
      description: "Soluciones de transporte adaptadas a sus necesidades específicas con un enfoque consultivo y servicios a medida para su industria.",
      getQuote: "Solicitar cotización",
      consultation: "Consulta gratuita",
      approachTitle: "Nuestro enfoque personalizado",
      approachDescription: "Una metodología probada para diseñar soluciones de transporte adaptadas a sus restricciones",
      approach: {
        analysis: {
          title: "Análisis de necesidades",
          description: "Estudio profundo de sus procesos y restricciones"
        },
        design: {
          title: "Diseño a medida",
          description: "Desarrollo de una solución adaptada a su sector"
        },
        implementation: {
          title: "Implementación",
          description: "Despliegue progresivo con acompañamiento dedicado"
        },
        optimization: {
          title: "Optimización continua",
          description: "Mejora y ajuste de la solución"
        }
      },
      industriesTitle: "Sectores de especialización",
      industriesDescription: "Soluciones especializadas para cada industria con sus exigencias particulares",
      industries: {
        automotive: {
          title: "Automotriz",
          description: "Transporte de repuestos y vehículos respetando los plazos de producción.",
          features: {
            parts: "Repuestos",
            jit: "Justo a tiempo",
            quality: "Calidad garantizada"
          }
        },
        pharmaceutical: {
          title: "Farmacéutico",
          description: "Transporte de productos sensibles con cadena de frío y trazabilidad completa.",
          features: {
            temperature: "Cadena de frío",
            compliance: "Cumplimiento normativo",
            security: "Seguridad máxima"
          }
        },
        technology: {
          title: "Tecnología",
          description: "Transporte seguro de equipos electrónicos y componentes sensibles.",
          features: {
            fragile: "Productos frágiles",
            speed: "Entrega rápida",
            global: "Cobertura mundial"
          }
        }
      },
      processTitle: "Nuestro proceso",
      processDescription: "Un enfoque estructurado para desarrollar la solución logística ideal",
      process: {
        consultation: {
          title: "Consulta",
          description: "Análisis de sus necesidades y restricciones específicas"
        },
        proposal: {
          title: "Propuesta",
          description: "Diseño de una solución personalizada adaptada"
        },
        execution: {
          title: "Ejecución",
          description: "Implementación y despliegue de la solución"
        },
        optimization: {
          title: "Optimización",
          description: "Seguimiento y mejora continua del rendimiento"
        }
      },
      ctaTitle: "Hablemos de su proyecto",
      ctaDescription: "Nuestros expertos analizan gratuitamente sus necesidades y le proponen una solución a medida.",
      contactExpert: "Contactar un experto",
      downloadBrochure: "Descargar el folleto"
    },
    about: {
      heroTitle: "Acerca de XOTI",
      heroDescription: "Desde 1999, XOTI (eXport Overseas Transport International) acompaña a las empresas en sus desafíos logísticos con experiencia e innovación.",
      stats: {
        experience: "Años de experiencia",
        countries: "Países servidos",
        clients: "Clientes satisfechos"
      },
      missionTitle: "Nuestra Misión",
      missionDescription1: "En XOTI, creemos que cada envío es único y merece una atención particular. Nuestra misión es simplificar la logística internacional ofreciendo soluciones personalizadas e innovadoras.",
      missionDescription2: "Combinamos la experiencia humana con las últimas tecnologías para garantizar a nuestros clientes una experiencia de transporte excepcional, desde el primer contacto hasta la entrega final.",
      servicesButton: "Descubrir nuestros servicios",
      commitmentTitle: "Nuestro Compromiso",
      commitmentItems: [
        "Transparencia total en nuestros servicios",
        "Innovación constante de nuestras soluciones",
        "Respeto al medio ambiente",
        "Formación continua de nuestros equipos"
      ],
      valuesTitle: "Nuestros Valores",
      valuesDescription: "Los principios que guían nuestra acción diaria",
      values: {
        excellence: {
          title: "Excelencia",
          description: "Nos comprometemos a brindar servicios de transporte de la más alta calidad."
        },
        punctuality: {
          title: "Puntualidad",
          description: "Respeto de plazos y entregas en los tiempos acordados con nuestros clientes."
        },
        international: {
          title: "Internacional",
          description: "Una experiencia reconocida en el transporte internacional desde hace más de 25 años."
        },
        service: {
          title: "Servicio al Cliente",
          description: "Un equipo dedicado disponible 24/7 para responder a todas sus preguntas."
        }
      },
      historyTitle: "Nuestra Historia",
      historyDescription: "Un cuarto de siglo de innovación en el transporte internacional",
      timeline: [
        { year: "1999", event: "Creación de XOTI con una visión europea del transporte" },
        { year: "2005", event: "Expansión hacia el transporte aéreo y marítimo" },
        { year: "2012", event: "Lanzamiento de la plataforma de seguimiento en tiempo real" },
        { year: "2018", event: "Apertura de 5 nuevos hubs europeos" },
        { year: "2024", event: "Más de 15,000 expediciones mensuales" }
      ],
      ctaTitle: "Únase a las 2000+ empresas que confían en nosotros",
      ctaDescription: "Descubra cómo XOTI puede optimizar su cadena logística",
      contactButton: "Contáctenos"
    },
    servicesPage: {
      hero: {
        title: "Nuestros Servicios de Transporte",
        subtitle: "Soluciones completas y personalizadas para todas sus necesidades de transporte internacional. Experiencia, confiabilidad e innovación.",
        badges: ["Transporte Terrestre", "Transporte Aéreo", "Transporte Marítimo", "Soluciones Express"]
      },
      mainServices: {
        title: "Servicios Principales",
        subtitle: "Tres modos de transporte complementarios para responder a todas sus necesidades logísticas",
        services: {
          road: {
            title: "Transporte Terrestre",
            description: "Soluciones completas de transporte terrestre para Europa con seguimiento GPS en tiempo real.",
            features: ["Entrega 24-48h", "Seguimiento GPS en tiempo real", "Seguro incluido", "Vehículos adaptados"],
            destinations: "Europa"
          },
          air: {
            title: "Transporte Aéreo",
            description: "Carga aérea express para sus envíos urgentes a todos los destinos mundiales.",
            features: ["Express 6-24h", "Mundial", "Productos sensibles", "Despacho aduanero"],
            destinations: "Mundial"
          },
          sea: {
            title: "Transporte Marítimo",
            description: "Soluciones económicas FCL y LCL para sus envíos en contenedores.",
            features: ["FCL y LCL", "Económico", "Ecológico", "Puerto a puerto"],
            destinations: "Internacional"
          }
        },
        learnMore: "Saber más"
      },
      specialServices: {
        title: "Servicios Especializados",
        subtitle: "Soluciones avanzadas para necesidades específicas",
        services: {
          express: {
            title: "Logística Express",
            description: "Servicio premium con compromiso de plazos para sus envíos críticos."
          },
          custom: {
            title: "Soluciones a Medida",
            description: "Soluciones personalizadas para industrias especializadas."
          },
          tracking: {
            title: "Seguimiento Avanzado",
            description: "Plataforma de seguimiento con alertas y notificaciones personalizadas."
          }
        },
        discover: "Descubrir"
      },
      process: {
        title: "¿Cómo funciona?",
        subtitle: "Un proceso simple y transparente en 4 pasos",
        steps: {
          quote: { title: "Cotización", description: "Reciba una cotización personalizada en menos de 2 horas" },
          pickup: { title: "Recogida", description: "Recolección en su dirección en los horarios acordados" },
          transport: { title: "Transporte", description: "Seguimiento en tiempo real de su envío" },
          delivery: { title: "Entrega", description: "Recepción confirmada con prueba de entrega" }
        }
      },
      cta: {
        title: "¿Listo para comenzar?",
        subtitle: "Obtenga una cotización gratuita y personalizada para su próximo envío",
        quoteButton: "Solicitar Cotización",
        trackButton: "Rastrear Paquete"
      }
    },
    contactPage: {
      hero: {
        title: "Contáctenos",
        subtitle: "Nuestro equipo de expertos está a su disposición para acompañarle en todos sus proyectos de transporte internacional."
      },
      contactInfo: {
        address: { title: "Dirección", content: "123 Avenue de l'Europe\n75001 París, Francia" },
        phone: { title: "Teléfono", content: "+49 176 93722675" },
        hours: { title: "Horarios", content: "Lun-Vie: 8h-18h\nSáb: 9h-12h\nDom: Cerrado" }
      },
      form: {
        title: "Solicitud de cotización",
        subtitle: "Complete este formulario para recibir una cotización personalizada",
        fields: {
          name: "Nombre completo *",
          email: "Email *",
          company: "Empresa",
          phone: "Teléfono",
          service: "Servicio deseado",
          message: "Mensaje *",
          messagePlaceholder: "Describa su necesidad: origen, destino, tipo de mercancía, plazos deseados..."
        },
        serviceOptions: {
          placeholder: "Seleccione un servicio",
          road: "Transporte Terrestre",
          air: "Transporte Aéreo",
          sea: "Transporte Marítimo",
          express: "Logística Express",
          custom: "Solución a Medida"
        },
        submitButton: "Enviar solicitud",
        submitting: "Enviando...",
        successTitle: "¡Mensaje enviado!",
        successMessage: "Le responderemos lo antes posible.",
        errorTitle: "Error",
        errorMessage: "Ha ocurrido un error. Por favor, inténtelo de nuevo."
      },
      location: {
        title: "Encuéntranos",
        mapTitle: "Mapa interactivo",
        mapSubtitle: "Disponible próximamente",
        headquarters: "Sede central",
        access: "Acceso",
        accessDetails: "• Metro: Línea 1, Estación Louvre-Rivoli\n• RER: RER A, Estación Châtelet\n• Parking: Disponible en el sitio"
      },
      emergency: {
        title: "¿Urgencia o soporte 24/7?",
        subtitle: "Nuestro servicio al cliente está disponible 24h/24 y 7d/7 para cualquier urgencia",
        phoneButton: "Urgencia: +49 176 93722675"
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
      updateLocation: 'Standort ändern',
      updateLocationDesc: 'Position des Pakets manuell aktualisieren',
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
      error: 'Fehler',
      enterTrackingNumber: 'Bitte geben Sie eine Sendungsnummer ein',
      packageFoundToast: 'Paket gefunden',
      notFoundTitle: 'Paket nicht gefunden',
      notFoundDesc: 'Kein Paket entspricht dieser Sendungsnummer',
      searchError: 'Fehler',
      searchErrorDesc: 'Bei der Suche ist ein Fehler aufgetreten',
      sender: 'Absender',
      recipient: 'Empfänger',
      name: 'Name',
      address: 'Adresse',
      phoneNumber: 'Telefon',
      currentPosition: 'Aktuelle Position',
      notDefined: 'Nicht definiert',
      transportType: 'Transportart',
      estimatedDeliveryDate: 'Voraussichtliche Lieferung',
      statuses: {
        pending: 'Ausstehend',
        in_transit: 'Unterwegs',
        delivered: 'Zugestellt',
        failed: 'Fehler'
      },
      transportTypes: {
        road: 'Straße',
        air: 'Luftfracht',
        sea: 'Seefracht',
        express: 'Express'
      },
      dimensions: 'Abmessungen',
      declaredValue: 'Angegebener Wert',
      transportCost: 'Transportkosten',
      priority: 'Priorität',
      status: 'Status',
      method: 'Methode',
      insuredValue: 'Versicherungswert',
      specialInstructions: 'Besondere Anweisungen',
      deliveryInstructions: 'Lieferanweisungen',
      emergencyContact: 'Notfallkontakt',
      notes: 'Notizen',
      priorities: {
        normal: 'Normal',
        urgent: 'Dringend',
        express: 'Express'
      },
      paymentStatuses: {
        paid: 'Bezahlt',
        pending: 'Ausstehend',
        failed: 'Fehlgeschlagen'
      },
      paymentMethods: {
        credit_card: 'Kreditkarte',
        bank_transfer: 'Banküberweisung',
        cash: 'Bargeld',
        paypal: 'PayPal'
      },
      requiresSignature: 'Unterschrift erforderlich',
      preferredDeliveryTime: 'Bevorzugte Zeit',
      specialIndicators: 'Besondere Angaben',
      fragile: 'Zerbrechlich',
      dangerous: 'Gefährlich',
      map: {
        title: 'GPS-Lokalisierung',
        subtitle: 'Aktuelle Position des Pakets',
        currentPosition: 'Aktuelle Position',
        noGpsAvailable: 'Keine GPS-Position verfügbar',
        sender: 'Absender',
        recipient: 'Empfänger',
        center: 'Zentrieren',
        loading: 'Karte wird geladen...',
        noGpsPosition: 'GPS-Position nicht verfügbar',
        noGpsCoordinates: 'Das Paket hat noch keine GPS-Koordinaten',
        latitude: 'Breitengrad:',
        longitude: 'Längengrad:',
        location: 'Ort:',
        loadError: 'Karte kann nicht geladen werden. Konfigurieren Sie das Mapbox-Token.',
      mapError: 'Fehler beim Laden der Karte.'
    },
    photos: {
      title: 'Paket-Fotos',
      subtitle: 'Mit dieser Sendung verbundene Bilder',
      noPhotos: 'Keine Fotos verfügbar',
      noPhotosDesc: 'Für dieses Paket wurden keine Fotos hinzugefügt.',
      uploadedBy: 'Hochgeladen von',
      viewPhoto: 'Ansehen',
    },
      faq: {
        q1: 'Wie funktioniert die Verfolgung?',
        a1: 'Ihre Tracking-Nummer beginnt mit \'XTI-\' gefolgt vom Jahr und einer eindeutigen Nummer. Sie wird Ihnen mitgeteilt, sobald Ihr Paket übernommen wurde.',
        q2: 'Wie oft werden die Informationen aktualisiert?',
        a2: 'Die Tracking-Informationen werden in Echtzeit aktualisiert. Jeder wichtige Schritt wird automatisch erfasst.',
        q3: 'Was tun, wenn mein Paket blockiert erscheint?',
        a3: 'Kontaktieren Sie unseren Kundenservice unter +49 176 93722675. Wir lösen schnell jedes logistische Problem.',
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
        },
        support: {
          tracking: 'Paketverfolgung',
          contact: 'Kontakt',
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
    },
    airTransport: {
      hero: {
        backButton: '← Dienstleistungen',
        badge: 'Lufttransport',
        title: 'Internationale Luftfracht',
        subtitle: 'Express-Lösungen für Ihre dringenden Sendungen zu allen weltweiten Destinationen. Geschwindigkeit, Sicherheit und Zuverlässigkeit garantiert.',
        quoteButton: 'Express-Angebot',
        trackButton: 'Flug verfolgen'
      },
      services: {
        title: 'Unsere Luftfracht-Lösungen',
        subtitle: 'Drei Service-Level für alle Ihre Geschwindigkeitsanforderungen',
        express: {
          title: 'Express 6h',
          description: 'Ultra-schnelle Lieferung für Ihre Notfälle',
          badge: 'Das Schnellste',
          features: ['6h garantiert', 'Weltweit', 'Absolute Priorität', 'Premium-Tracking'],
          button: 'Diesen Service wählen'
        },
        standard: {
          title: 'Standard 24h',
          description: 'Ausgewogene Lösung Geschwindigkeit/Preis',
          features: ['24h garantiert', 'International', 'Versicherung inklusive', 'Echtzeit-Tracking'],
          button: 'Diesen Service wählen'
        },
        economy: {
          title: 'Wirtschaftlich 48h',
          description: 'Wirtschaftliche Option für flexible Zeiten',
          features: ['48-72h', 'Groupage', 'Optimierte Lösung', 'Standard-Tracking'],
          button: 'Diesen Service wählen'
        }
      },
      destinations: {
        title: 'Weltweite Destinationen',
        subtitle: 'Über 200 Destinationen weltweit',
        regions: {
          europe: {
            name: 'Europa',
            time: '6-24h',
            description: 'Europäische Hauptstädte'
          },
          northAmerica: {
            name: 'Nordamerika',
            time: '12-48h',
            description: 'USA, Kanada, Mexiko'
          },
          asia: {
            name: 'Asien',
            time: '24-72h',
            description: 'China, Japan, Singapur'
          },
          middleEast: {
            name: 'Naher Osten',
            time: '18-48h',
            description: 'VAE, Saudi-Arabien'
          },
          africa: {
            name: 'Afrika',
            time: '24-72h',
            description: 'Nordafrika und Westafrika'
          },
          oceania: {
            name: 'Ozeanien',
            time: '48-96h',
            description: 'Australien, Neuseeland'
          }
        },
        connections: 'Tägliche Verbindungen'
      },
      advantages: {
        title: 'Warum Luftfracht wählen?',
        items: {
          speed: {
            title: 'Unübertroffene Geschwindigkeit',
            description: 'Lieferung in 6h bis 72h je nach Destination'
          },
          security: {
            title: 'Maximale Sicherheit',
            description: 'Flughafen-Standards und Vollkaskoversicherung'
          },
          coverage: {
            title: 'Weltweite Abdeckung',
            description: 'Über 200 Destinationen über unser Partnernetzwerk'
          },
          tracking: {
            title: 'Präzises Tracking',
            description: 'Flug-für-Flug-Verfolgung mit Echtzeit-Benachrichtigungen'
          }
        },
        premium: {
          title: 'Premium-Service',
          features: ['Abholung und Lieferung T+1', 'Express-Zollabfertigung', 'Spezialverpackung', 'Gefahrgut akzeptiert', 'Temperaturkontrolle', 'Tür-zu-Tür-Service']
        }
      },
      cta: {
        title: 'Ihre Sendung kann nicht warten?',
        subtitle: 'Über 5.000 Luftfrachtsendungen pro Monat. Termine zu 99,8% eingehalten.',
        button: 'Jetzt versenden',
        stats: {
          express: {
            value: '6h',
            label: 'Express-Minimum'
          },
          destinations: {
            value: '200+',
            label: 'Destinationen'
          },
          satisfaction: {
            label: 'Zufriedenheit'
          }
        }
      }
    },
    seaTransport: {
      hero: {
        backButton: '← Dienstleistungen',
        badge: 'Seetransport',
        title: 'Internationale Seefracht',
        subtitle: 'Wirtschaftliche und ökologische Lösungen für Ihre Containersendungen zu allen Kontinenten. FCL- und LCL-Transport mit vollständiger Verfolgung.',
        quoteButton: 'Seefracht-Angebot',
        trackButton: 'Container verfolgen'
      },
      services: {
        title: 'Unsere Seefracht-Lösungen',
        subtitle: 'Vom Vollcontainer bis zur Sammelladung, wir passen uns Ihren Volumina an',
        fcl: {
          title: 'FCL - Vollcontainer',
          description: 'Exklusiver Container für Ihre großen Volumina',
          features: ['20\' und 40\'', 'Exklusivität', 'Direkt', 'Wirtschaftlich'],
          button: 'FCL wählen'
        },
        lcl: {
          title: 'LCL - Sammelladung',
          description: 'Container teilen, nur Ihr Volumen bezahlen',
          features: ['Kleine Volumina', 'Sammelladung', 'Flexibel', 'Zugänglich'],
          button: 'LCL wählen'
        },
        special: {
          title: 'Spezialladungen',
          description: 'Transport von Waren außerhalb der Norm',
          features: ['Übermaß', 'Gefahrgut', 'Kühl', 'Maßgeschneidert'],
          button: 'Spezielle Lösungen'
        }
      },
      routes: {
        title: 'Weltweite Routen',
        subtitle: 'Verbunden mit den wichtigsten Häfen der Welt',
        regions: {
          europe: {
            name: 'Europa',
            time: '5-15 Tage',
            description: 'Hamburg, Rotterdam, Antwerpen'
          },
          asia: {
            name: 'Asien',
            time: '20-35 Tage',
            description: 'Shanghai, Singapur, Hongkong'
          },
          america: {
            name: 'Amerika',
            time: '10-25 Tage',
            description: 'New York, Los Angeles, Santos'
          },
          africa: {
            name: 'Afrika',
            time: '8-20 Tage',
            description: 'Casablanca, Durban, Lagos'
          },
          oceania: {
            name: 'Ozeanien',
            time: '25-40 Tage',
            description: 'Sydney, Melbourne, Auckland'
          },
          middleEast: {
            name: 'Naher Osten',
            time: '12-25 Tage',
            description: 'Dubai, Jeddah, Doha'
          }
        },
        ports: 'Partner-Häfen'
      },
      advantages: {
        title: 'Warum Seetransport wählen?',
        items: {
          economy: {
            title: 'Maximale Wirtschaftlichkeit',
            description: 'Der wirtschaftlichste Transportmodus für große Volumina'
          },
          capacity: {
            title: 'Große Kapazität',
            description: 'Transport großer Volumina in einem Mal'
          },
          ecology: {
            title: 'Ökologischer Transport',
            description: '80% weniger CO2 als Straßentransport'
          },
          security: {
            title: 'Optimale Sicherheit',
            description: 'Versiegelte und kontrollierte Container während des gesamten Transports'
          }
        },
        sustainable: {
          title: 'Nachhaltiger Transport',
          features: ['Reduzierter CO2-Fußabdruck', 'Routenoptimierung', 'Wiederverwendbare Container', 'Umweltstandards', 'Energieeffizienz', 'Massentransport']
        }
      },
      cta: {
        title: 'Bereit für Seetransport?',
        subtitle: 'Über 2.000 Container monatlich weltweit versandt. Die wirtschaftliche und ökologische Lösung.',
        button: 'Angebot anfordern',
        stats: {
          containers: {
            value: '2000+',
            label: 'Container/Monat'
          },
          routes: {
            value: '150+',
            label: 'Belieferte Häfen'
          },
          co2: {
            value: '-80%',
            label: 'CO2-Emissionen'
          }
        }
      }
    },
    express: {
      badge: "Express Service",
      title: "Express Lieferung",
      description: "Schnelle und zuverlässige Transportlösungen für Ihre dringenden Sendungen mit Echtzeit-Verfolgung und Liefergarantie.",
      getQuote: "Angebot erhalten",
      trackShipment: "Paket verfolgen",
      featuresTitle: "Warum unseren Express-Service wählen?",
      featuresDescription: "Ultra-schnelle Lieferlösungen für alle Ihre dringenden Bedürfnisse",
      features: {
        speed: {
          title: "Schnelle Lieferung",
          description: "Lieferung in wenigen Stunden je nach Zielort"
        },
        security: {
          title: "Maximale Sicherheit",
          description: "Vollständiger Schutz Ihrer Pakete während des Transports"
        },
        tracking: {
          title: "Echtzeit-Verfolgung",
          description: "Verfolgen Sie Ihr Paket bei jedem Schritt der Lieferung"
        },
        reliability: {
          title: "Garantierte Zuverlässigkeit",
          description: "99.9% pünktliche Lieferrate"
        }
      },
      servicesTitle: "Unsere Express-Services",
      servicesDescription: "Wählen Sie den Service, der am besten zu Ihren Lieferanforderungen passt",
      services: {
        sameDay: {
          title: "Lieferung am selben Tag",
          description: "Für Ihre dringendsten Sendungen, garantierte Lieferung am selben Tag.",
          features: {
            pickup: "Abholung innerhalb einer Stunde",
            delivery: "Lieferung in 2-6 Stunden",
            tracking: "GPS-Verfolgung in Echtzeit"
          }
        },
        nextDay: {
          title: "Lieferung am nächsten Tag",
          description: "Zuverlässiger Service für garantierte Lieferung am nächsten Werktag.",
          features: {
            guarantee: "Garantie vor 12 Uhr",
            coverage: "Nationale Abdeckung",
            insurance: "Versicherung inbegriffen"
          }
        },
        international: {
          title: "International Express",
          description: "Express-Lieferung ins Ausland mit inkludierter Zollabfertigung.",
          features: {
            customs: "Zollabwicklung",
            network: "Weltweites Netzwerk",
            documentation: "Dokumente inbegriffen"
          }
        }
      },
      ctaTitle: "Bereit zum Versenden?",
      ctaDescription: "Kontaktieren Sie uns jetzt für Ihre Express-Lieferanforderungen und erhalten Sie ein personalisiertes Angebot.",
      contactUs: "Kontaktieren Sie uns",
      learnMore: "Mehr erfahren"
    },
    custom: {
      badge: "Maßgeschneiderte Lösungen",
      title: "Individuelle Services",
      description: "Auf Ihre spezifischen Bedürfnisse zugeschnittene Transportlösungen mit beratungsorientierten Ansatz und branchenspezifischen Services.",
      getQuote: "Angebot anfordern",
      consultation: "Kostenlose Beratung",
      approachTitle: "Unser individueller Ansatz",
      approachDescription: "Eine bewährte Methodik zur Entwicklung von Transportlösungen, die auf Ihre Anforderungen zugeschnitten sind",
      approach: {
        analysis: {
          title: "Bedarfsanalyse",
          description: "Tiefgreifende Untersuchung Ihrer Prozesse und Anforderungen"
        },
        design: {
          title: "Maßgeschneidertes Design",
          description: "Entwicklung einer branchenspezifischen Lösung"
        },
        implementation: {
          title: "Umsetzung",
          description: "Schrittweise Implementierung mit dedizierter Betreuung"
        },
        optimization: {
          title: "Kontinuierliche Optimierung",
          description: "Verbesserung und Anpassung der Lösung"
        }
      },
      industriesTitle: "Fachbereiche",
      industriesDescription: "Spezialisierte Lösungen für jede Branche mit ihren besonderen Anforderungen",
      industries: {
        automotive: {
          title: "Automobil",
          description: "Transport von Ersatzteilen und Fahrzeugen unter Einhaltung der Produktionszeiten.",
          features: {
            parts: "Ersatzteile",
            jit: "Just-in-Time",
            quality: "Garantierte Qualität"
          }
        },
        pharmaceutical: {
          title: "Pharmazie",
          description: "Transport empfindlicher Produkte mit Kühlkette und vollständiger Rückverfolgbarkeit.",
          features: {
            temperature: "Kühlkette",
            compliance: "Regulatorische Compliance",
            security: "Maximale Sicherheit"
          }
        },
        technology: {
          title: "Technologie",
          description: "Sicherer Transport von elektronischen Geräten und empfindlichen Komponenten.",
          features: {
            fragile: "Zerbrechliche Produkte",
            speed: "Schnelle Lieferung",
            global: "Weltweite Abdeckung"
          }
        }
      },
      processTitle: "Unser Prozess",
      processDescription: "Ein strukturierter Ansatz zur Entwicklung der idealen Logistiklösung",
      process: {
        consultation: {
          title: "Beratung",
          description: "Analyse Ihrer spezifischen Bedürfnisse und Anforderungen"
        },
        proposal: {
          title: "Vorschlag",
          description: "Entwicklung einer angepassten personalisierten Lösung"
        },
        execution: {
          title: "Ausführung",
          description: "Einrichtung und Implementierung der Lösung"
        },
        optimization: {
          title: "Optimierung",
          description: "Überwachung und kontinuierliche Leistungsverbesserung"
        }
      },
      ctaTitle: "Lassen Sie uns über Ihr Projekt sprechen",
      ctaDescription: "Unsere Experten analysieren kostenlos Ihre Bedürfnisse und schlagen Ihnen eine maßgeschneiderte Lösung vor.",
      contactExpert: "Experten kontaktieren",
      downloadBrochure: "Broschüre herunterladen"
    },
    about: {
      heroTitle: "Über XOTI",
      heroDescription: "Seit 1999 begleitet XOTI (eXport Overseas Transport International) Unternehmen bei ihren logistischen Herausforderungen mit Expertise und Innovation.",
      stats: {
        experience: "Jahre Erfahrung",
        countries: "Bediente Länder",
        clients: "Zufriedene Kunden"
      },
      missionTitle: "Unsere Mission",
      missionDescription1: "Bei XOTI glauben wir, dass jede Sendung einzigartig ist und besondere Aufmerksamkeit verdient. Unsere Mission ist es, die internationale Logistik zu vereinfachen, indem wir personalisierte und innovative Lösungen anbieten.",
      missionDescription2: "Wir kombinieren menschliche Expertise mit den neuesten Technologien, um unseren Kunden ein außergewöhnliches Transporterlebnis zu garantieren, vom ersten Kontakt bis zur endgültigen Lieferung.",
      servicesButton: "Unsere Services entdecken",
      commitmentTitle: "Unser Engagement",
      commitmentItems: [
        "Vollständige Transparenz unserer Services",
        "Konstante Innovation unserer Lösungen",
        "Umweltschutz",
        "Kontinuierliche Schulung unserer Teams"
      ],
      valuesTitle: "Unsere Werte",
      valuesDescription: "Die Prinzipien, die unser tägliches Handeln leiten",
      values: {
        excellence: {
          title: "Exzellenz",
          description: "Wir verpflichten uns, Transportdienstleistungen höchster Qualität zu liefern."
        },
        punctuality: {
          title: "Pünktlichkeit",
          description: "Einhaltung von Terminen und Lieferungen zu den mit unseren Kunden vereinbarten Zeiten."
        },
        international: {
          title: "International",
          description: "Anerkannte Expertise im internationalen Transport seit über 25 Jahren."
        },
        service: {
          title: "Kundenservice",
          description: "Ein engagiertes Team, das 24/7 verfügbar ist, um alle Ihre Fragen zu beantworten."
        }
      },
      historyTitle: "Unsere Geschichte",
      historyDescription: "Ein Vierteljahrhundert Innovation im internationalen Transport",
      timeline: [
        { year: "1999", event: "Gründung von XOTI mit einer europäischen Vision für den Transport" },
        { year: "2005", event: "Expansion in Luft- und Seetransport" },
        { year: "2012", event: "Einführung der Echtzeit-Verfolgungsplattform" },
        { year: "2018", event: "Eröffnung von 5 neuen europäischen Hubs" },
        { year: "2024", event: "Über 15.000 monatliche Sendungen" }
      ],
      ctaTitle: "Schließen Sie sich den 2000+ Unternehmen an, die uns vertrauen",
      ctaDescription: "Entdecken Sie, wie XOTI Ihre Lieferkette optimieren kann",
      contactButton: "Kontaktieren Sie uns"
    },
    servicesPage: {
      hero: {
        title: "Unsere Transportdienstleistungen",
        subtitle: "Komplette und maßgeschneiderte Lösungen für alle Ihre internationalen Transportbedürfnisse. Expertise, Zuverlässigkeit und Innovation.",
        badges: ["Straßentransport", "Lufttransport", "Seetransport", "Express-Lösungen"]
      },
      mainServices: {
        title: "Hauptdienstleistungen",
        subtitle: "Drei komplementäre Transportmodi für alle Ihre logistischen Bedürfnisse",
        services: {
          road: {
            title: "Straßentransport",
            description: "Komplette Landtransportlösungen für Europa mit GPS-Echtzeit-Verfolgung.",
            features: ["Lieferung 24-48h", "GPS-Echtzeit-Verfolgung", "Versicherung inbegriffen", "Angepasste Fahrzeuge"],
            destinations: "Europa"
          },
          air: {
            title: "Lufttransport",
            description: "Express-Luftfracht für Ihre dringenden Sendungen zu allen weltweiten Zielen.",
            features: ["Express 6-24h", "Weltweit", "Empfindliche Produkte", "Zollabfertigung"],
            destinations: "Weltweit"
          },
          sea: {
            title: "Seetransport",
            description: "Wirtschaftliche FCL- und LCL-Lösungen für Ihre Containersendungen.",
            features: ["FCL & LCL", "Wirtschaftlich", "Umweltfreundlich", "Hafen zu Hafen"],
            destinations: "International"
          }
        },
        learnMore: "Mehr erfahren"
      },
      specialServices: {
        title: "Spezialdienstleistungen",
        subtitle: "Erweiterte Lösungen für spezifische Bedürfnisse",
        services: {
          express: {
            title: "Express-Logistik",
            description: "Premium-Service mit Termingarantie für Ihre kritischen Sendungen."
          },
          custom: {
            title: "Maßgeschneiderte Lösungen",
            description: "Personalisierte Lösungen für spezialisierte Branchen."
          },
          tracking: {
            title: "Erweiterte Verfolgung",
            description: "Tracking-Plattform mit personalisierten Alarmen und Benachrichtigungen."
          }
        },
        discover: "Entdecken"
      },
      process: {
        title: "Wie funktioniert es?",
        subtitle: "Ein einfacher und transparenter Prozess in 4 Schritten",
        steps: {
          quote: { title: "Angebot", description: "Erhalten Sie ein personalisiertes Angebot in weniger als 2 Stunden" },
          pickup: { title: "Abholung", description: "Abholung an Ihrer Adresse zu vereinbarten Zeiten" },
          transport: { title: "Transport", description: "Echtzeit-Verfolgung Ihrer Sendung" },
          delivery: { title: "Lieferung", description: "Bestätigte Annahme mit Liefernachweis" }
        }
      },
      cta: {
        title: "Bereit anzufangen?",
        subtitle: "Erhalten Sie ein kostenloses und personalisiertes Angebot für Ihre nächste Sendung",
        quoteButton: "Angebot anfordern",
        trackButton: "Paket verfolgen"
      }
    },
    contactPage: {
      hero: {
        title: "Kontaktieren Sie uns",
        subtitle: "Unser Expertenteam steht Ihnen für alle Ihre internationalen Transportprojekte zur Verfügung."
      },
      contactInfo: {
        address: { title: "Adresse", content: "123 Avenue de l'Europe\n75001 Paris, Frankreich" },
        phone: { title: "Telefon", content: "+49 176 93722675" },
        hours: { title: "Öffnungszeiten", content: "Mo-Fr: 8h-18h\nSa: 9h-12h\nSo: Geschlossen" }
      },
      form: {
        title: "Angebotsanfrage",
        subtitle: "Füllen Sie dieses Formular aus, um ein personalisiertes Angebot zu erhalten",
        fields: {
          name: "Vollständiger Name *",
          email: "E-Mail *",
          company: "Unternehmen",
          phone: "Telefon",
          service: "Gewünschter Service",
          message: "Nachricht *",
          messagePlaceholder: "Beschreiben Sie Ihren Bedarf: Herkunft, Ziel, Warenart, gewünschte Termine..."
        },
        serviceOptions: {
          placeholder: "Service auswählen",
          road: "Straßentransport",
          air: "Lufttransport",
          sea: "Seetransport",
          express: "Express-Logistik",
          custom: "Maßgeschneiderte Lösung"
        },
        submitButton: "Anfrage senden",
        submitting: "Wird gesendet...",
        successTitle: "Nachricht gesendet!",
        successMessage: "Wir werden Ihnen so schnell wie möglich antworten.",
        errorTitle: "Fehler",
        errorMessage: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut."
      },
      location: {
        title: "Uns finden",
        mapTitle: "Interaktive Karte",
        mapSubtitle: "Demnächst verfügbar",
        headquarters: "Hauptsitz",
        access: "Zugang",
        accessDetails: "• Metro: Linie 1, Station Louvre-Rivoli\n• RER: RER A, Station Châtelet\n• Parkplatz: Vor Ort verfügbar"
      },
      emergency: {
        title: "Notfall oder 24/7 Support?",
        subtitle: "Unser Kundendienst ist 24 Stunden am Tag und 7 Tage die Woche für Notfälle verfügbar",
        phoneButton: "Notfall: +49 176 93722675"
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
      updateLocation: 'Modifica posizione',
      updateLocationDesc: 'Aggiorna manualmente la posizione del pacco',
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
      error: 'Errore',
      enterTrackingNumber: 'Si prega di inserire un numero di tracciamento',
      packageFoundToast: 'Pacco trovato',
      notFoundTitle: 'Pacco non trovato',
      notFoundDesc: 'Nessun pacco corrisponde a questo numero di tracciamento',
      searchError: 'Errore',
      searchErrorDesc: 'Si è verificato un errore durante la ricerca',
      sender: 'Mittente',
      recipient: 'Destinatario',
      name: 'Nome',
      address: 'Indirizzo',
      phoneNumber: 'Telefono',
      currentPosition: 'Posizione attuale',
      notDefined: 'Non definita',
      transportType: 'Tipo di trasporto',
      estimatedDeliveryDate: 'Consegna prevista',
      statuses: {
        pending: 'In attesa',
        in_transit: 'In transito',
        delivered: 'Consegnato',
        failed: 'Fallito'
      },
      transportTypes: {
        road: 'Strada',
        air: 'Aereo',
        sea: 'Marittimo',
        express: 'Express'
      },
      dimensions: 'Dimensioni',
      declaredValue: 'Valore dichiarato',
      transportCost: 'Costo di trasporto',
      priority: 'Priorità',
      status: 'Stato',
      method: 'Metodo',
      insuredValue: 'Valore assicurato',
      specialInstructions: 'Istruzioni speciali',
      deliveryInstructions: 'Istruzioni di consegna',
      emergencyContact: 'Contatto di emergenza',
      notes: 'Note',
      priorities: {
        normal: 'Normale',
        urgent: 'Urgente',
        express: 'Express'
      },
      paymentStatuses: {
        paid: 'Pagato',
        pending: 'In sospeso',
        failed: 'Fallito'
      },
      paymentMethods: {
        credit_card: 'Carta di credito',
        bank_transfer: 'Bonifico bancario',
        cash: 'Contanti',
        paypal: 'PayPal'
      },
      requiresSignature: 'Firma richiesta',
      preferredDeliveryTime: 'Orario preferito',
      specialIndicators: 'Indicazioni speciali',
      fragile: 'Fragile',
      dangerous: 'Pericoloso',
      map: {
        title: 'Localizzazione GPS',
        subtitle: 'Posizione attuale del pacco',
        currentPosition: 'Posizione attuale',
        noGpsAvailable: 'Nessuna posizione GPS disponibile',
        sender: 'Mittente',
        recipient: 'Destinatario',
        center: 'Centrare',
        loading: 'Caricamento della mappa...',
        noGpsPosition: 'Posizione GPS non disponibile',
        noGpsCoordinates: 'Il pacco non ha ancora coordinate GPS',
        latitude: 'Latitudine:',
        longitude: 'Longitudine:',
        location: 'Luogo:',
        loadError: 'Impossibile caricare la mappa. Configurare il token Mapbox.',
      mapError: 'Errore durante il caricamento della mappa.'
    },
    photos: {
      title: 'Foto del pacco',
      subtitle: 'Immagini associate a questa spedizione',
      noPhotos: 'Nessuna foto disponibile',
      noPhotosDesc: 'Nessuna foto è stata aggiunta per questo pacco.',
      uploadedBy: 'Caricata da',
      viewPhoto: 'Vedi',
    },
      faq: {
        q1: 'Come funziona il tracciamento?',
        a1: 'Il tuo numero di tracciamento inizia con \'XTI-\' seguito dall\'anno e da un numero unico. Ti viene comunicato non appena il pacco viene preso in carico.',
        q2: 'Con quale frequenza vengono aggiornate le informazioni?',
        a2: 'Le informazioni di tracciamento sono aggiornate in tempo reale. Ogni fase importante viene registrata automaticamente.',
        q3: 'Cosa fare se il mio pacco sembra bloccato?',
        a3: 'Contatta il nostro servizio clienti al +49 176 93722675. Risolveremo rapidamente qualsiasi problema logistico.',
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
        },
        support: {
          tracking: 'Tracciamento Pacco',
          contact: 'Contatto',
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
    },
    airTransport: {
      hero: {
        backButton: '← Servizi',
        badge: 'Trasporto Aereo',
        title: 'Trasporto Aereo Internazionale',
        subtitle: 'Soluzioni express per le tue spedizioni urgenti verso tutte le destinazioni mondiali. Velocità, sicurezza e affidabilità garantite.',
        quoteButton: 'Preventivo Express',
        trackButton: 'Traccia Volo'
      },
      services: {
        title: 'Le Nostre Soluzioni Aeree',
        subtitle: 'Tre livelli di servizio per soddisfare tutte le tue esigenze di velocità',
        express: {
          title: 'Express 6h',
          description: 'Consegna ultra-rapida per le tue urgenze',
          badge: 'Il più veloce',
          features: ['6h garantito', 'Mondiale', 'Priorità assoluta', 'Tracciamento premium'],
          button: 'Scegli questo servizio'
        },
        standard: {
          title: 'Standard 24h',
          description: 'Soluzione equilibrata velocità/prezzo',
          features: ['24h garantito', 'Internazionale', 'Assicurazione inclusa', 'Tracciamento tempo reale'],
          button: 'Scegli questo servizio'
        },
        economy: {
          title: 'Economico 48h',
          description: 'Opzione economica per tempi flessibili',
          features: ['48-72h', 'Groupage', 'Soluzione ottimizzata', 'Tracciamento standard'],
          button: 'Scegli questo servizio'
        }
      },
      destinations: {
        title: 'Destinazioni Mondiali',
        subtitle: 'Oltre 200 destinazioni in tutto il mondo',
        regions: {
          europe: {
            name: 'Europa',
            time: '6-24h',
            description: 'Capitali europee'
          },
          northAmerica: {
            name: 'Nord America',
            time: '12-48h',
            description: 'USA, Canada, Messico'
          },
          asia: {
            name: 'Asia',
            time: '24-72h',
            description: 'Cina, Giappone, Singapore'
          },
          middleEast: {
            name: 'Medio Oriente',
            time: '18-48h',
            description: 'EAU, Arabia Saudita'
          },
          africa: {
            name: 'Africa',
            time: '24-72h',
            description: 'Nord Africa e Africa Occidentale'
          },
          oceania: {
            name: 'Oceania',
            time: '48-96h',
            description: 'Australia, Nuova Zelanda'
          }
        },
        connections: 'Connessioni giornaliere'
      },
      advantages: {
        title: 'Perché scegliere il trasporto aereo?',
        items: {
          speed: {
            title: 'Velocità ineguagliabile',
            description: 'Consegna da 6h a 72h secondo la destinazione'
          },
          security: {
            title: 'Sicurezza massima',
            description: 'Standard aeroportuali e assicurazione tutti i rischi'
          },
          coverage: {
            title: 'Copertura mondiale',
            description: 'Oltre 200 destinazioni attraverso la nostra rete di partner'
          },
          tracking: {
            title: 'Tracciamento preciso',
            description: 'Tracking volo per volo con notifiche tempo reale'
          }
        },
        premium: {
          title: 'Servizio Premium',
          features: ['Ritiro e consegna G+1', 'Sdoganamento express', 'Imballaggio specializzato', 'Merci pericolose accettate', 'Temperatura controllata', 'Servizio porta a porta']
        }
      },
      cta: {
        title: 'La tua spedizione non può aspettare?',
        subtitle: 'Oltre 5.000 spedizioni aeree al mese. Tempi rispettati al 99,8%.',
        button: 'Spedisci ora',
        stats: {
          express: {
            value: '6h',
            label: 'Express minimo'
          },
          destinations: {
            value: '200+',
            label: 'Destinazioni'
          },
          satisfaction: {
            label: 'Soddisfazione'
          }
        }
      }
    },
    seaTransport: {
      hero: {
        backButton: '← Servizi',
        badge: 'Trasporto Marittimo',
        title: 'Trasporto Marittimo Internazionale',
        subtitle: 'Soluzioni economiche ed ecologiche per le tue spedizioni containerizzate verso tutti i continenti. Trasporto FCL e LCL con tracciamento completo.',
        quoteButton: 'Preventivo Marittimo',
        trackButton: 'Traccia Container'
      },
      services: {
        title: 'Le Nostre Soluzioni Marittime',
        subtitle: 'Dal container completo al groupage, ci adattiamo ai tuoi volumi',
        fcl: {
          title: 'FCL - Container Completo',
          description: 'Container esclusivo per i tuoi grandi volumi',
          features: ['20\' e 40\'', 'Esclusività', 'Diretto', 'Economico'],
          button: 'Scegli FCL'
        },
        lcl: {
          title: 'LCL - Groupage Marittimo',
          description: 'Condividi un container, paga il tuo volume',
          features: ['Piccoli volumi', 'Groupage', 'Flessibile', 'Accessibile'],
          button: 'Scegli LCL'
        },
        special: {
          title: 'Carichi Speciali',
          description: 'Trasporto di merci fuori norma',
          features: ['Fuori misura', 'Pericoloso', 'Frigorifero', 'Su misura'],
          button: 'Soluzioni speciali'
        }
      },
      routes: {
        title: 'Rotte Mondiali',
        subtitle: 'Collegato ai principali porti del mondo',
        regions: {
          europe: {
            name: 'Europa',
            time: '5-15 giorni',
            description: 'Amburgo, Rotterdam, Anversa'
          },
          asia: {
            name: 'Asia',
            time: '20-35 giorni',
            description: 'Shanghai, Singapore, Hong Kong'
          },
          america: {
            name: 'Americhe',
            time: '10-25 giorni',
            description: 'New York, Los Angeles, Santos'
          },
          africa: {
            name: 'Africa',
            time: '8-20 giorni',
            description: 'Casablanca, Durban, Lagos'
          },
          oceania: {
            name: 'Oceania',
            time: '25-40 giorni',
            description: 'Sydney, Melbourne, Auckland'
          },
          middleEast: {
            name: 'Medio Oriente',
            time: '12-25 giorni',
            description: 'Dubai, Jeddah, Doha'
          }
        },
        ports: 'Porti partner'
      },
      advantages: {
        title: 'Perché scegliere il trasporto marittimo?',
        items: {
          economy: {
            title: 'Economia massima',
            description: 'Il modo di trasporto più economico per grandi volumi'
          },
          capacity: {
            title: 'Grande capacità',
            description: 'Trasporto di volumi importanti in una sola volta'
          },
          ecology: {
            title: 'Trasporto ecologico',
            description: '80% meno CO2 del trasporto stradale'
          },
          security: {
            title: 'Sicurezza ottimale',
            description: 'Container sigillati e controllati durante tutto il trasporto'
          }
        },
        sustainable: {
          title: 'Trasporto Sostenibile',
          features: ['Impronta carbonica ridotta', 'Ottimizzazione delle rotte', 'Container riutilizzabili', 'Norme ambientali', 'Efficienza energetica', 'Trasporto di massa']
        }
      },
      cta: {
        title: 'Pronto per il trasporto marittimo?',
        subtitle: 'Oltre 2.000 container spediti ogni mese verso il mondo intero. La soluzione economica ed ecologica.',
        button: 'Richiedere preventivo',
        stats: {
          containers: {
            value: '2000+',
            label: 'Container/mese'
          },
          routes: {
            value: '150+',
            label: 'Porti serviti'
          },
          co2: {
            value: '-80%',
            label: 'Emissioni CO2'
          }
        }
      }
    },
    express: {
      badge: "Servizio Express",
      title: "Consegna Express",
      description: "Soluzioni di trasporto veloci e affidabili per le tue spedizioni urgenti con tracciamento in tempo reale e garanzia di consegna.",
      getQuote: "Ottieni preventivo",
      trackShipment: "Traccia il mio pacco",
      featuresTitle: "Perché scegliere il nostro servizio express?",
      featuresDescription: "Soluzioni di consegna ultra-rapide adatte a tutte le tue esigenze urgenti",
      features: {
        speed: {
          title: "Consegna veloce",
          description: "Consegna in poche ore a seconda della destinazione"
        },
        security: {
          title: "Sicurezza massima",
          description: "Protezione completa dei tuoi pacchi durante il trasporto"
        },
        tracking: {
          title: "Tracciamento in tempo reale",
          description: "Traccia il tuo pacco ad ogni fase della consegna"
        },
        reliability: {
          title: "Affidabilità garantita",
          description: "99.9% di tasso di consegna puntuale"
        }
      },
      servicesTitle: "I nostri servizi express",
      servicesDescription: "Scegli il servizio che meglio si adatta alle tue esigenze di consegna",
      services: {
        sameDay: {
          title: "Consegna in giornata",
          description: "Per le tue spedizioni più urgenti, consegna garantita in giornata.",
          features: {
            pickup: "Ritiro entro un'ora",
            delivery: "Consegna in 2-6 ore",
            tracking: "Tracciamento GPS in tempo reale"
          }
        },
        nextDay: {
          title: "Consegna il giorno successivo",
          description: "Servizio affidabile per consegna garantita il giorno lavorativo successivo.",
          features: {
            guarantee: "Garanzia entro le 12",
            coverage: "Copertura nazionale",
            insurance: "Assicurazione inclusa"
          }
        },
        international: {
          title: "Express internazionale",
          description: "Consegna express internazionale con sdoganamento incluso.",
          features: {
            customs: "Gestione doganale",
            network: "Rete mondiale",
            documentation: "Documenti inclusi"
          }
        }
      },
      ctaTitle: "Pronto per spedire?",
      ctaDescription: "Contattaci ora per le tue esigenze di consegna express e ottieni un preventivo personalizzato.",
      contactUs: "Contattaci",
      learnMore: "Scopri di più"
    },
    custom: {
      badge: "Soluzioni Su Misura",
      title: "Servizi Personalizzati",
      description: "Soluzioni di trasporto adattate alle tue esigenze specifiche con un approccio consultivo e servizi su misura per il tuo settore.",
      getQuote: "Richiedi preventivo",
      consultation: "Consulenza gratuita",
      approachTitle: "Il nostro approccio personalizzato",
      approachDescription: "Una metodologia collaudata per progettare soluzioni di trasporto adattate ai tuoi vincoli",
      approach: {
        analysis: {
          title: "Analisi dei bisogni",
          description: "Studio approfondito dei tuoi processi e vincoli"
        },
        design: {
          title: "Progettazione su misura",
          description: "Sviluppo di una soluzione adattata al tuo settore"
        },
        implementation: {
          title: "Implementazione",
          description: "Distribuzione progressiva con accompagnamento dedicato"
        },
        optimization: {
          title: "Ottimizzazione continua",
          description: "Miglioramento e aggiustamento della soluzione"
        }
      },
      industriesTitle: "Settori di competenza",
      industriesDescription: "Soluzioni specializzate per ogni industria con le sue esigenze particolari",
      industries: {
        automotive: {
          title: "Automotive",
          description: "Trasporto di ricambi e veicoli rispettando i tempi di produzione.",
          features: {
            parts: "Ricambi",
            jit: "Just-in-time",
            quality: "Qualità garantita"
          }
        },
        pharmaceutical: {
          title: "Farmaceutico",
          description: "Trasporto di prodotti sensibili con catena del freddo e tracciabilità completa.",
          features: {
            temperature: "Catena del freddo",
            compliance: "Conformità normativa",
            security: "Sicurezza massima"
          }
        },
        technology: {
          title: "Tecnologia",
          description: "Trasporto sicuro di attrezzature elettroniche e componenti sensibili.",
          features: {
            fragile: "Prodotti fragili",
            speed: "Consegna rapida",
            global: "Copertura mondiale"
          }
        }
      },
      processTitle: "Il nostro processo",
      processDescription: "Un approccio strutturato per sviluppare la soluzione logistica ideale",
      process: {
        consultation: {
          title: "Consulenza",
          description: "Analisi delle tue esigenze e vincoli specifici"
        },
        proposal: {
          title: "Proposta",
          description: "Progettazione di una soluzione personalizzata adattata"
        },
        execution: {
          title: "Esecuzione",
          description: "Implementazione e distribuzione della soluzione"
        },
        optimization: {
          title: "Ottimizzazione",
          description: "Monitoraggio e miglioramento continuo delle prestazioni"
        }
      },
      ctaTitle: "Parliamo del tuo progetto",
      ctaDescription: "I nostri esperti analizzano gratuitamente le tue esigenze e ti propongono una soluzione su misura.",
      contactExpert: "Contatta un esperto",
      downloadBrochure: "Scarica la brochure"
    },
    about: {
      heroTitle: "Chi siamo - XOTI",
      heroDescription: "Dal 1999, XOTI (eXport Overseas Transport International) accompagna le aziende nelle loro sfide logistiche con competenza e innovazione.",
      stats: {
        experience: "Anni di esperienza",
        countries: "Paesi serviti",
        clients: "Clienti soddisfatti"
      },
      missionTitle: "La Nostra Missione",
      missionDescription1: "In XOTI, crediamo che ogni spedizione sia unica e meriti un'attenzione particolare. La nostra missione è semplificare la logistica internazionale offrendo soluzioni personalizzate e innovative.",
      missionDescription2: "Combiniamo l'expertise umana con le ultime tecnologie per garantire ai nostri clienti un'esperienza di trasporto eccezionale, dal primo contatto fino alla consegna finale.",
      servicesButton: "Scopri i nostri servizi",
      commitmentTitle: "Il Nostro Impegno",
      commitmentItems: [
        "Trasparenza totale sui nostri servizi",
        "Innovazione costante delle nostre soluzioni",
        "Rispetto dell'ambiente",
        "Formazione continua dei nostri team"
      ],
      valuesTitle: "I Nostri Valori",
      valuesDescription: "I principi che guidano la nostra azione quotidiana",
      values: {
        excellence: {
          title: "Eccellenza",
          description: "Ci impegniamo a fornire servizi di trasporto della massima qualità."
        },
        punctuality: {
          title: "Puntualità",
          description: "Rispetto dei tempi e consegne nei tempi concordati con i nostri clienti."
        },
        international: {
          title: "Internazionale",
          description: "Un'expertise riconosciuta nel trasporto internazionale da oltre 25 anni."
        },
        service: {
          title: "Servizio Clienti",
          description: "Un team dedicato disponibile 24/7 per rispondere a tutte le vostre domande."
        }
      },
      historyTitle: "La Nostra Storia",
      historyDescription: "Un quarto di secolo di innovazione nel trasporto internazionale",
      timeline: [
        { year: "1999", event: "Creazione di XOTI con una visione europea del trasporto" },
        { year: "2005", event: "Espansione verso il trasporto aereo e marittimo" },
        { year: "2012", event: "Lancio della piattaforma di tracciamento in tempo reale" },
        { year: "2018", event: "Apertura di 5 nuovi hub europei" },
        { year: "2024", event: "Oltre 15.000 spedizioni mensili" }
      ],
      ctaTitle: "Unisciti alle 2000+ aziende che si fidano di noi",
      ctaDescription: "Scopri come XOTI può ottimizzare la tua catena logistica",
      contactButton: "Contattaci"
    },
    servicesPage: {
      hero: {
        title: "I Nostri Servizi di Trasporto",
        subtitle: "Soluzioni complete e personalizzate per tutte le vostre esigenze di trasporto internazionale. Competenza, affidabilità e innovazione.",
        badges: ["Trasporto Stradale", "Trasporto Aereo", "Trasporto Marittimo", "Soluzioni Express"]
      },
      mainServices: {
        title: "Servizi Principali",
        subtitle: "Tre modalità di trasporto complementari per rispondere a tutte le vostre esigenze logistiche",
        services: {
          road: {
            title: "Trasporto Stradale",
            description: "Soluzioni complete di trasporto terrestre per l'Europa con tracciamento GPS in tempo reale.",
            features: ["Consegna 24-48h", "Tracciamento GPS in tempo reale", "Assicurazione inclusa", "Veicoli adattati"],
            destinations: "Europa"
          },
          air: {
            title: "Trasporto Aereo",
            description: "Trasporto aereo express per le vostre spedizioni urgenti verso tutte le destinazioni mondiali.",
            features: ["Express 6-24h", "Mondiale", "Prodotti sensibili", "Sdoganamento"],
            destinations: "Mondiale"
          },
          sea: {
            title: "Trasporto Marittimo",
            description: "Soluzioni economiche FCL e LCL per le vostre spedizioni in container.",
            features: ["FCL e LCL", "Economico", "Ecologico", "Porto a porto"],
            destinations: "Internazionale"
          }
        },
        learnMore: "Scopri di più"
      },
      specialServices: {
        title: "Servizi Specializzati",
        subtitle: "Soluzioni avanzate per esigenze specifiche",
        services: {
          express: {
            title: "Logistica Express",
            description: "Servizio premium con impegno sui tempi per le vostre spedizioni critiche."
          },
          custom: {
            title: "Soluzioni Su Misura",
            description: "Soluzioni personalizzate per industrie specializzate."
          },
          tracking: {
            title: "Tracciamento Avanzato",
            description: "Piattaforma di tracking con avvisi e notifiche personalizzate."
          }
        },
        discover: "Scopri"
      },
      process: {
        title: "Come funziona?",
        subtitle: "Un processo semplice e trasparente in 4 passaggi",
        steps: {
          quote: { title: "Preventivo", description: "Ricevete un preventivo personalizzato in meno di 2 ore" },
          pickup: { title: "Ritiro", description: "Raccolta al vostro indirizzo negli orari concordati" },
          transport: { title: "Trasporto", description: "Tracciamento in tempo reale della vostra spedizione" },
          delivery: { title: "Consegna", description: "Ricezione confermata con prova di consegna" }
        }
      },
      cta: {
        title: "Pronti per iniziare?",
        subtitle: "Ottenete un preventivo gratuito e personalizzato per la vostra prossima spedizione",
        quoteButton: "Richiedi Preventivo",
        trackButton: "Traccia Pacco"
      }
    },
    contactPage: {
      hero: {
        title: "Contattaci",
        subtitle: "Il nostro team di esperti è a vostra disposizione per accompagnarvi in tutti i vostri progetti di trasporto internazionale."
      },
      contactInfo: {
        address: { title: "Indirizzo", content: "123 Avenue de l'Europe\n75001 Parigi, Francia" },
        phone: { title: "Telefono", content: "+49 176 93722675" },
        hours: { title: "Orari", content: "Lun-Ven: 8h-18h\nSab: 9h-12h\nDom: Chiuso" }
      },
      form: {
        title: "Richiesta di preventivo",
        subtitle: "Compilate questo modulo per ricevere un preventivo personalizzato",
        fields: {
          name: "Nome completo *",
          email: "Email *",
          company: "Azienda",
          phone: "Telefono",
          service: "Servizio desiderato",
          message: "Messaggio *",
          messagePlaceholder: "Descrivete il vostro bisogno: origine, destinazione, tipo di merce, tempi desiderati..."
        },
        serviceOptions: {
          placeholder: "Selezionate un servizio",
          road: "Trasporto Stradale",
          air: "Trasporto Aereo",
          sea: "Trasporto Marittimo",
          express: "Logistica Express",
          custom: "Soluzione Su Misura"
        },
        submitButton: "Invia richiesta",
        submitting: "Invio in corso...",
        successTitle: "Messaggio inviato!",
        successMessage: "Vi risponderemo nel più breve tempo possibile.",
        errorTitle: "Errore",
        errorMessage: "Si è verificato un errore. Si prega di riprovare."
      },
      location: {
        title: "Trovarci",
        mapTitle: "Mappa interattiva",
        mapSubtitle: "Disponibile prossimamente",
        headquarters: "Sede centrale",
        access: "Accesso",
        accessDetails: "• Metro: Linea 1, Stazione Louvre-Rivoli\n• RER: RER A, Stazione Châtelet\n• Parcheggio: Disponibile in loco"
      },
      emergency: {
        title: "Urgenza o supporto 24/7?",
        subtitle: "Il nostro servizio clienti è disponibile 24 ore su 24 e 7 giorni su 7 per qualsiasi urgenza",
        phoneButton: "Urgenza: +49 176 93722675"
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
      updateLocation: 'Modificar localização',
      updateLocationDesc: 'Atualizar manualmente a posição da encomenda',
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
      error: 'Erro',
      enterTrackingNumber: 'Por favor, insira um número de rastreamento',
      packageFoundToast: 'Encomenda encontrada',
      notFoundTitle: 'Encomenda não encontrada',
      notFoundDesc: 'Nenhuma encomenda corresponde a este número de rastreamento',
      searchError: 'Erro',
      searchErrorDesc: 'Ocorreu um erro durante a pesquisa',
      sender: 'Remetente',
      recipient: 'Destinatário',
      name: 'Nome',
      address: 'Endereço',
      phoneNumber: 'Telefone',
      currentPosition: 'Posição atual',
      notDefined: 'Não definida',
      transportType: 'Tipo de transporte',
      estimatedDeliveryDate: 'Entrega prevista',
      statuses: {
        pending: 'Pendente',
        in_transit: 'Em trânsito',
        delivered: 'Entregue',
        failed: 'Falhou'
      },
      transportTypes: {
        road: 'Estrada',
        air: 'Aéreo',
        sea: 'Marítimo',
        express: 'Express'
      },
      dimensions: 'Dimensões',
      declaredValue: 'Valor declarado',
      transportCost: 'Custo de transporte',
      priority: 'Prioridade',
      status: 'Status',
      method: 'Método',
      insuredValue: 'Valor segurado',
      specialInstructions: 'Instruções especiais',
      deliveryInstructions: 'Instruções de entrega',
      emergencyContact: 'Contato de emergência',
      notes: 'Notas',
      priorities: {
        normal: 'Normal',
        urgent: 'Urgente',
        express: 'Express'
      },
      paymentStatuses: {
        paid: 'Pago',
        pending: 'Pendente',
        failed: 'Falhou'
      },
      paymentMethods: {
        credit_card: 'Cartão de crédito',
        bank_transfer: 'Transferência bancária',
        cash: 'Dinheiro',
        paypal: 'PayPal'
      },
      requiresSignature: 'Assinatura necessária',
      preferredDeliveryTime: 'Hora preferida',
      specialIndicators: 'Indicações especiais',
      fragile: 'Frágil',
      dangerous: 'Perigoso',
      map: {
        title: 'Localização GPS',
        subtitle: 'Posição atual da encomenda',
        currentPosition: 'Posição atual',
        noGpsAvailable: 'Nenhuma posição GPS disponível',
        sender: 'Remetente',
        recipient: 'Destinatário',
        center: 'Centralizar',
        loading: 'Carregando o mapa...',
        noGpsPosition: 'Posição GPS não disponível',
        noGpsCoordinates: 'A encomenda ainda não tem coordenadas GPS',
        latitude: 'Latitude:',
        longitude: 'Longitude:',
        location: 'Local:',
        loadError: 'Não é possível carregar o mapa. Configure o token Mapbox.',
      mapError: 'Erro ao carregar o mapa.'
    },
    photos: {
      title: 'Fotos da encomenda',
      subtitle: 'Imagens associadas a esta remessa',
      noPhotos: 'Nenhuma foto disponível',
      noPhotosDesc: 'Nenhuma foto foi adicionada para esta encomenda.',
      uploadedBy: 'Carregada por',
      viewPhoto: 'Ver',
    },
      faq: {
        q1: 'Como funciona o rastreamento?',
        a1: 'Seu número de rastreamento começa com \'XTI-\' seguido do ano e um número único. É comunicado assim que a encomenda é coletada.',
        q2: 'Com que frequência as informações são atualizadas?',
        a2: 'As informações de rastreamento são atualizadas em tempo real. Cada etapa importante é registrada automaticamente.',
        q3: 'O que fazer se minha encomenda parece travada?',
        a3: 'Entre em contato com nosso atendimento no +49 176 93722675. Resolveremos rapidamente qualquer problema logístico.',
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
        },
        support: {
          tracking: 'Rastreamento de Encomenda',
          contact: 'Contato',
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
    },
    airTransport: {
      hero: {
        backButton: '← Serviços',
        badge: 'Transporte Aéreo',
        title: 'Transporte Aéreo Internacional',
        subtitle: 'Soluções expressas para seus envios urgentes para todos os destinos mundiais. Rapidez, segurança e confiabilidade garantidas.',
        quoteButton: 'Orçamento Express',
        trackButton: 'Rastrear Voo'
      },
      services: {
        title: 'Nossas Soluções Aéreas',
        subtitle: 'Três níveis de serviço para atender todas as suas necessidades de rapidez',
        express: {
          title: 'Express 6h',
          description: 'Entrega ultra-rápida para suas urgências',
          badge: 'O mais rápido',
          features: ['6h garantido', 'Mundial', 'Prioridade absoluta', 'Rastreamento premium'],
          button: 'Escolher este serviço'
        },
        standard: {
          title: 'Padrão 24h',
          description: 'Solução equilibrada rapidez/preço',
          features: ['24h garantido', 'Internacional', 'Seguro incluído', 'Rastreamento tempo real'],
          button: 'Escolher este serviço'
        },
        economy: {
          title: 'Econômico 48h',
          description: 'Opção econômica para prazos flexíveis',
          features: ['48-72h', 'Groupage', 'Solução otimizada', 'Rastreamento padrão'],
          button: 'Escolher este serviço'
        }
      },
      destinations: {
        title: 'Destinos Mundiais',
        subtitle: 'Mais de 200 destinos em todo o mundo',
        regions: {
          europe: {
            name: 'Europa',
            time: '6-24h',
            description: 'Capitais europeias'
          },
          northAmerica: {
            name: 'América do Norte',
            time: '12-48h',
            description: 'EUA, Canadá, México'
          },
          asia: {
            name: 'Ásia',
            time: '24-72h',
            description: 'China, Japão, Singapura'
          },
          middleEast: {
            name: 'Oriente Médio',
            time: '18-48h',
            description: 'EAU, Arábia Saudita'
          },
          africa: {
            name: 'África',
            time: '24-72h',
            description: 'África do Norte e Ocidental'
          },
          oceania: {
            name: 'Oceania',
            time: '48-96h',
            description: 'Austrália, Nova Zelândia'
          }
        },
        connections: 'Conexões diárias'
      },
      advantages: {
        title: 'Por que escolher o transporte aéreo?',
        items: {
          speed: {
            title: 'Rapidez incomparável',
            description: 'Entrega de 6h a 72h segundo o destino'
          },
          security: {
            title: 'Segurança máxima',
            description: 'Padrões aeroportuários e seguro todos os riscos'
          },
          coverage: {
            title: 'Cobertura mundial',
            description: 'Mais de 200 destinos através da nossa rede de parceiros'
          },
          tracking: {
            title: 'Rastreamento preciso',
            description: 'Tracking voo por voo com notificações tempo real'
          }
        },
        premium: {
          title: 'Serviço Premium',
          features: ['Coleta e entrega D+1', 'Desembaraço express', 'Embalagem especializada', 'Produtos perigosos aceitos', 'Temperatura controlada', 'Serviço porta a porta']
        }
      },
      cta: {
        title: 'Seu envio não pode esperar?',
        subtitle: 'Mais de 5.000 envios aéreos por mês. Prazos respeitados em 99,8%.',
        button: 'Enviar agora',
        stats: {
          express: {
            value: '6h',
            label: 'Express mínimo'
          },
          destinations: {
            value: '200+',
            label: 'Destinos'
          },
          satisfaction: {
            label: 'Satisfação'
          }
        }
      }
    },
    seaTransport: {
      hero: {
        backButton: '← Serviços',
        badge: 'Transporte Marítimo',
        title: 'Transporte Marítimo Internacional',
        subtitle: 'Soluções econômicas e ecológicas para seus envios containerizados para todos os continentes. Transporte FCL e LCL com rastreamento completo.',
        quoteButton: 'Orçamento Marítimo',
        trackButton: 'Rastrear Container'
      },
      services: {
        title: 'Nossas Soluções Marítimas',
        subtitle: 'Do container completo ao groupage, nos adaptamos aos seus volumes',
        fcl: {
          title: 'FCL - Container Completo',
          description: 'Container exclusivo para seus grandes volumes',
          features: ['20\' e 40\'', 'Exclusividade', 'Direto', 'Econômico'],
          button: 'Escolher FCL'
        },
        lcl: {
          title: 'LCL - Groupage Marítimo',
          description: 'Compartilhe um container, pague seu volume',
          features: ['Pequenos volumes', 'Groupage', 'Flexível', 'Acessível'],
          button: 'Escolher LCL'
        },
        special: {
          title: 'Cargas Especiais',
          description: 'Transporte de mercadorias fora do padrão',
          features: ['Fora de medida', 'Perigoso', 'Frigorífico', 'Sob medida'],
          button: 'Soluções especiais'
        }
      },
      routes: {
        title: 'Rotas Mundiais',
        subtitle: 'Conectado aos principais portos do mundo',
        regions: {
          europe: {
            name: 'Europa',
            time: '5-15 dias',
            description: 'Hamburgo, Rotterdam, Antuérpia'
          },
          asia: {
            name: 'Ásia',
            time: '20-35 dias',
            description: 'Shangai, Singapura, Hong Kong'
          },
          america: {
            name: 'Américas',
            time: '10-25 dias',
            description: 'Nova York, Los Angeles, Santos'
          },
          africa: {
            name: 'África',
            time: '8-20 dias',
            description: 'Casablanca, Durban, Lagos'
          },
          oceania: {
            name: 'Oceania',
            time: '25-40 dias',
            description: 'Sydney, Melbourne, Auckland'
          },
          middleEast: {
            name: 'Oriente Médio',
            time: '12-25 dias',
            description: 'Dubai, Jeddah, Doha'
          }
        },
        ports: 'Portos parceiros'
      },
      advantages: {
        title: 'Por que escolher o transporte marítimo?',
        items: {
          economy: {
            title: 'Economia máxima',
            description: 'O modo de transporte mais econômico para grandes volumes'
          },
          capacity: {
            title: 'Grande capacidade',
            description: 'Transporte de volumes importantes de uma só vez'
          },
          ecology: {
            title: 'Transporte ecológico',
            description: '80% menos CO2 que o transporte rodoviário'
          },
          security: {
            title: 'Segurança ótima',
            description: 'Containers selados e controlados durante todo o transporte'
          }
        },
        sustainable: {
          title: 'Transporte Sustentável',
          features: ['Pegada de carbono reduzida', 'Otimização de rotas', 'Containers reutilizáveis', 'Normas ambientais', 'Eficiência energética', 'Transporte de massa']
        }
      },
      cta: {
        title: 'Pronto para o transporte marítimo?',
        subtitle: 'Mais de 2.000 containers enviados a cada mês para o mundo inteiro. A solução econômica e ecológica.',
        button: 'Solicitar orçamento',
        stats: {
          containers: {
            value: '2000+',
            label: 'Containers/mês'
          },
          routes: {
            value: '150+',
            label: 'Portos atendidos'
          },
          co2: {
            value: '-80%',
            label: 'Emissões CO2'
          }
        }
      }
    },
    express: {
      badge: "Serviço Expresso",
      title: "Entrega Expressa",
      description: "Soluções de transporte rápidas e confiáveis para suas remessas urgentes com rastreamento em tempo real e garantia de entrega.",
      getQuote: "Obter orçamento",
      trackShipment: "Rastrear minha encomenda",
      featuresTitle: "Por que escolher nosso serviço expresso?",
      featuresDescription: "Soluções de entrega ultra-rápidas adaptadas a todas as suas necessidades urgentes",
      features: {
        speed: {
          title: "Entrega rápida",
          description: "Entrega em poucas horas dependendo do destino"
        },
        security: {
          title: "Segurança máxima",
          description: "Proteção completa de suas encomendas durante o transporte"
        },
        tracking: {
          title: "Rastreamento em tempo real",
          description: "Rastreie sua encomenda a cada etapa da entrega"
        },
        reliability: {
          title: "Confiabilidade garantida",
          description: "99.9% de taxa de entrega no prazo"
        }
      },
      servicesTitle: "Nossos serviços expressos",
      servicesDescription: "Escolha o serviço que melhor se adapta às suas necessidades de entrega",
      services: {
        sameDay: {
          title: "Entrega no mesmo dia",
          description: "Para suas remessas mais urgentes, entrega garantida no mesmo dia.",
          features: {
            pickup: "Coleta em uma hora",
            delivery: "Entrega em 2-6 horas",
            tracking: "Rastreamento GPS em tempo real"
          }
        },
        nextDay: {
          title: "Entrega no dia seguinte",
          description: "Serviço confiável para entrega garantida no próximo dia útil.",
          features: {
            guarantee: "Garantia antes das 12h",
            coverage: "Cobertura nacional",
            insurance: "Seguro incluído"
          }
        },
        international: {
          title: "Expresso internacional",
          description: "Entrega expressa internacional com desembaraço aduaneiro incluído.",
          features: {
            customs: "Gestão aduaneira",
            network: "Rede mundial",
            documentation: "Documentos incluídos"
          }
        }
      },
      ctaTitle: "Pronto para enviar?",
      ctaDescription: "Entre em contato conosco agora para suas necessidades de entrega expressa e obtenha um orçamento personalizado.",
      contactUs: "Entre em contato",
      learnMore: "Saiba mais"
    },
    custom: {
      badge: "Soluções Personalizadas",
      title: "Serviços Personalizados",
      description: "Soluções de transporte adaptadas às suas necessidades específicas com uma abordagem consultiva e serviços sob medida para sua indústria.",
      getQuote: "Solicitar orçamento",
      consultation: "Consulta gratuita",
      approachTitle: "Nossa abordagem personalizada",
      approachDescription: "Uma metodologia comprovada para projetar soluções de transporte adaptadas às suas restrições",
      approach: {
        analysis: {
          title: "Análise das necessidades",
          description: "Estudo aprofundado de seus processos e restrições"
        },
        design: {
          title: "Design sob medida",
          description: "Desenvolvimento de uma solução adaptada ao seu setor"
        },
        implementation: {
          title: "Implementação",
          description: "Implantação progressiva com acompanhamento dedicado"
        },
        optimization: {
          title: "Otimização contínua",
          description: "Melhoria e ajuste da solução"
        }
      },
      industriesTitle: "Setores de especialização",
      industriesDescription: "Soluções especializadas para cada indústria com suas exigências particulares",
      industries: {
        automotive: {
          title: "Automotivo",
          description: "Transporte de peças e veículos respeitando os prazos de produção.",
          features: {
            parts: "Peças de reposição",
            jit: "Just-in-time",
            quality: "Qualidade garantida"
          }
        },
        pharmaceutical: {
          title: "Farmacêutico",
          description: "Transporte de produtos sensíveis com cadeia de frio e rastreabilidade completa.",
          features: {
            temperature: "Cadeia de frio",
            compliance: "Conformidade regulatória",
            security: "Segurança máxima"
          }
        },
        technology: {
          title: "Tecnologia",
          description: "Transporte seguro de equipamentos eletrônicos e componentes sensíveis.",
          features: {
            fragile: "Produtos frágeis",
            speed: "Entrega rápida",
            global: "Cobertura mundial"
          }
        }
      },
      processTitle: "Nosso processo",
      processDescription: "Uma abordagem estruturada para desenvolver a solução logística ideal",
      process: {
        consultation: {
          title: "Consulta",
          description: "Análise de suas necessidades e restrições específicas"
        },
        proposal: {
          title: "Proposta",
          description: "Projeto de uma solução personalizada adaptada"
        },
        execution: {
          title: "Execução",
          description: "Implementação e implantação da solução"
        },
        optimization: {
          title: "Otimização",
          description: "Monitoramento e melhoria contínua do desempenho"
        }
      },
      ctaTitle: "Vamos conversar sobre seu projeto",
      ctaDescription: "Nossos especialistas analisam gratuitamente suas necessidades e propõem uma solução sob medida.",
      contactExpert: "Contatar um especialista",
      downloadBrochure: "Baixar o folheto"
    },
    about: {
      heroTitle: "Sobre a XOTI",
      heroDescription: "Desde 1999, a XOTI (eXport Overseas Transport International) acompanha as empresas em seus desafios logísticos com expertise e inovação.",
      stats: {
        experience: "Anos de experiência",
        countries: "Países atendidos",
        clients: "Clientes satisfeitos"
      },
      missionTitle: "Nossa Missão",
      missionDescription1: "Na XOTI, acreditamos que cada remessa é única e merece atenção especial. Nossa missão é simplificar a logística internacional oferecendo soluções personalizadas e inovadoras.",
      missionDescription2: "Combinamos a expertise humana com as mais recentes tecnologias para garantir aos nossos clientes uma experiência de transporte excepcional, do primeiro contato até a entrega final.",
      servicesButton: "Descobrir nossos serviços",
      commitmentTitle: "Nosso Compromisso",
      commitmentItems: [
        "Transparência total em nossos serviços",
        "Inovação constante de nossas soluções",
        "Respeito ao meio ambiente",
        "Formação contínua de nossas equipes"
      ],
      valuesTitle: "Nossos Valores",
      valuesDescription: "Os princípios que guiam nossa ação diária",
      values: {
        excellence: {
          title: "Excelência",
          description: "Nos comprometemos a fornecer serviços de transporte da mais alta qualidade."
        },
        punctuality: {
          title: "Pontualidade",
          description: "Respeito aos prazos e entregas nos tempos acordados com nossos clientes."
        },
        international: {
          title: "Internacional",
          description: "Uma expertise reconhecida no transporte internacional há mais de 25 anos."
        },
        service: {
          title: "Atendimento ao Cliente",
          description: "Uma equipe dedicada disponível 24/7 para responder a todas as suas perguntas."
        }
      },
      historyTitle: "Nossa História",
      historyDescription: "Um quarto de século de inovação no transporte internacional",
      timeline: [
        { year: "1999", event: "Criação da XOTI com uma visão europeia do transporte" },
        { year: "2005", event: "Expansão para o transporte aéreo e marítimo" },
        { year: "2012", event: "Lançamento da plataforma de rastreamento em tempo real" },
        { year: "2018", event: "Abertura de 5 novos hubs europeus" },
        { year: "2024", event: "Mais de 15.000 remessas mensais" }
      ],
      ctaTitle: "Junte-se às 2000+ empresas que confiam em nós",
      ctaDescription: "Descubra como a XOTI pode otimizar sua cadeia logística",
      contactButton: "Entre em contato"
    },
    servicesPage: {
      hero: {
        title: "Nossos Serviços de Transporte",
        subtitle: "Soluções completas e personalizadas para todas as suas necessidades de transporte internacional. Expertise, confiabilidade e inovação.",
        badges: ["Transporte Rodoviário", "Transporte Aéreo", "Transporte Marítimo", "Soluções Express"]
      },
      mainServices: {
        title: "Serviços Principais",
        subtitle: "Três modos de transporte complementares para atender todas as suas necessidades logísticas",
        services: {
          road: {
            title: "Transporte Rodoviário",
            description: "Soluções completas de transporte terrestre para a Europa com rastreamento GPS em tempo real.",
            features: ["Entrega 24-48h", "Rastreamento GPS em tempo real", "Seguro incluído", "Veículos adaptados"],
            destinations: "Europa"
          },
          air: {
            title: "Transporte Aéreo",
            description: "Frete aéreo express para suas remessas urgentes para todos os destinos mundiais.",
            features: ["Express 6-24h", "Mundial", "Produtos sensíveis", "Desembaraço aduaneiro"],
            destinations: "Mundial"
          },
          sea: {
            title: "Transporte Marítimo",
            description: "Soluções econômicas FCL e LCL para suas remessas em contêineres.",
            features: ["FCL e LCL", "Econômico", "Ecológico", "Porto a porto"],
            destinations: "Internacional"
          }
        },
        learnMore: "Saiba mais"
      },
      specialServices: {
        title: "Serviços Especializados",
        subtitle: "Soluções avançadas para necessidades específicas",
        services: {
          express: {
            title: "Logística Express",
            description: "Serviço premium com compromisso de prazos para suas remessas críticas."
          },
          custom: {
            title: "Soluções Sob Medida",
            description: "Soluções personalizadas para indústrias especializadas."
          },
          tracking: {
            title: "Rastreamento Avançado",
            description: "Plataforma de rastreamento com alertas e notificações personalizadas."
          }
        },
        discover: "Descobrir"
      },
      process: {
        title: "Como funciona?",
        subtitle: "Um processo simples e transparente em 4 etapas",
        steps: {
          quote: { title: "Orçamento", description: "Receba um orçamento personalizado em menos de 2 horas" },
          pickup: { title: "Coleta", description: "Retirada em seu endereço nos horários combinados" },
          transport: { title: "Transporte", description: "Rastreamento em tempo real de sua remessa" },
          delivery: { title: "Entrega", description: "Recebimento confirmado com comprovante de entrega" }
        }
      },
      cta: {
        title: "Pronto para começar?",
        subtitle: "Obtenha um orçamento gratuito e personalizado para sua próxima remessa",
        quoteButton: "Solicitar Orçamento",
        trackButton: "Rastrear Encomenda"
      }
    },
    contactPage: {
      hero: {
        title: "Entre em contato",
        subtitle: "Nossa equipe de especialistas está à sua disposição para acompanhá-lo em todos os seus projetos de transporte internacional."
      },
      contactInfo: {
        address: { title: "Endereço", content: "123 Avenue de l'Europe\n75001 Paris, França" },
        phone: { title: "Telefone", content: "+49 176 93722675" },
        hours: { title: "Horários", content: "Seg-Sex: 8h-18h\nSáb: 9h-12h\nDom: Fechado" }
      },
      form: {
        title: "Solicitação de orçamento",
        subtitle: "Preencha este formulário para receber um orçamento personalizado",
        fields: {
          name: "Nome completo *",
          email: "Email *",
          company: "Empresa",
          phone: "Telefone",
          service: "Serviço desejado",
          message: "Mensagem *",
          messagePlaceholder: "Descreva sua necessidade: origem, destino, tipo de mercadoria, prazos desejados..."
        },
        serviceOptions: {
          placeholder: "Selecione um serviço",
          road: "Transporte Rodoviário",
          air: "Transporte Aéreo",
          sea: "Transporte Marítimo",
          express: "Logística Express",
          custom: "Solução Sob Medida"
        },
        submitButton: "Enviar solicitação",
        submitting: "Enviando...",
        successTitle: "Mensagem enviada!",
        successMessage: "Responderemos o mais breve possível.",
        errorTitle: "Erro",
        errorMessage: "Ocorreu um erro. Por favor, tente novamente."
      },
      location: {
        title: "Nos encontrar",
        mapTitle: "Mapa interativo",
        mapSubtitle: "Disponível em breve",
        headquarters: "Sede central",
        access: "Acesso",
        accessDetails: "• Metro: Linha 1, Estação Louvre-Rivoli\n• RER: RER A, Estação Châtelet\n• Estacionamento: Disponível no local"
      },
      emergency: {
        title: "Urgência ou suporte 24/7?",
        subtitle: "Nosso atendimento ao cliente está disponível 24 horas por dia, 7 dias por semana para qualquer urgência",
        phoneButton: "Urgência: +49 176 93722675"
      }
    }
  }
};