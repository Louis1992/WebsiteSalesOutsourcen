// Translation strings for LeadGenies website

export type Language = 'de' | 'en';

export const translations = {
  de: {
    // Header
    header: {
      menuItems: [
        { label: 'Was wir tun', href: '#hero' },
        { label: 'So funktioniert es', href: '#how-it-works' },
        { label: 'ROI-Rechner', href: '#roi-calculator' },
        { label: 'Garantie & DSGVO', href: '#guarantee' },
        { label: 'Partnerschafts-Modelle', href: '#pricing' }
      ],
      ctaText: 'Jetzt beraten lassen'
    },

    // Hero
    hero: {
      title: 'Professionelle B2B-Telemarketing-Experten für Ihren skalierbaren Vertrieb',
      subtitle: 'Wir sind Ihre externe Telemarketing-Abteilung. Von Kaltakquise über Lead-Nachverfolgung bis hin zur CRM-Pflege – unsere erfahrenen Sales-Mitarbeiter arbeiten täglich 2-3 Stunden exklusiv für Ihr Unternehmen. Flexibel einsetzbar, DSGVO-konform und ohne Personalrisiko.',
      cta: 'Jetzt unverbindlich beraten lassen',
      belowText: 'Für etablierte B2B-Unternehmen mit <strong>ambitionierten Wachstumszielen</strong>',
      reviews: [
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Logo-TEC-Experts-v1.svg',
          text: 'Die Caller von LeadGenies agieren extrem professionell und auf Augenhöhe mit Geschäftsführern aus verschiedenen Branchen. Wirklich Super!',
          attribution: '— Vivien Poswiat, Gründer, Tech-Experts',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/vivien.png'
        },
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/app-v1.svg',
          text: 'Wir hatten Zweifel, ob externe Caller unsere Software erklären können. LeadGenies hat uns überzeugt: Die Termine sind zahlreich und die Entscheider wissen genau, worum es geht.',
          attribution: '— Thomas Reppa, CEO, CoffeeCup.app',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Aerion_-Coffee-Cup.png'
        },
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech-v1.svg',
          text: 'LeadGenies hat unsere komplexen technischen Produkte schnell verstanden und liefert konstant qualifizierte Termine mit genau den richtigen Unternehmen.',
          attribution: '— Sebastian R., Sales Manager, Intech Automation',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech.png'
        }
      ],
      mobileReviews: [
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Logo-TEC-Experts-v1.svg',
          text: 'Extrem professionell und auf Augenhöhe mit Geschäftsführern. Wirklich Super!',
          attribution: '— Vivien P., Tech-Experts',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/vivien.png'
        },
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/app-v1.svg',
          text: 'Externe Caller, die unsere Software erklären können – LeadGenies hat uns überzeugt.',
          attribution: '— Thomas R., CoffeeCup.app',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Aerion_-Coffee-Cup.png'
        },
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech-v1.svg',
          text: 'Komplexe Produkte verstanden. Liefert qualifizierte Termine mit den richtigen Unternehmen.',
          attribution: '— Sebastian R., Intech',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech.png'
        }
      ]
    },

    // Trust Section
    trust: {
      title: 'Für wen ist LeadGenies die richtige Lösung?',
      subtitle: 'Wir arbeiten mit etablierten B2B-Unternehmen (ab 20 Mitarbeitern) zusammen, die bereits über ein funktionierendes Vertriebsteam verfügen und ihren Sales-Prozess systematisch skalieren möchten. Unsere Partner sehen die Terminvereinbarung nicht als Notlösung, sondern als strategischen Hebel für planbares Wachstum.',
      checklistTitle: 'Qualifizierungs-Checkliste',
      checklist: [
        'Sie haben ein etabliertes Produkt mit klarem Product-Market-Fit.',
        'Ihr Vertriebsteam (mind. 3-5 Mitarbeiter) kann und will mehr qualifizierte Termine wahrnehmen.',
        'Sie suchen einen langfristigen Partner, keine kurzfristige "Feuerwehr".'
      ],
      checklistFooter: 'Trifft das auf Sie zu? Dann lassen Sie uns sprechen.',
      stats: [
        { label: 'Zufriedene Partner' },
        { label: 'Geführte Gespräche' },
        { label: 'Zufriedenheitsquote' }
      ],
      badge: {
        topRated: 'Top-bewerteter Service 2025',
        verifiedBy: 'Verifiziert von:',
        tooltip: 'Trustindex bestätigt, dass Unternehmen eine Google-Bewertung von 4,5 oder höher basierend auf Bewertungen der letzten 12 Monate aufrechterhalten.'
      }
    },

    // How It Works
    howItWorks: {
      title: 'So funktioniert es',
      subtitle: '5 Schritte zum Erfolg'
    },

    // ROI Calculator
    roiCalculator: {
      title: 'Lohnt sich LeadGenies für Sie?',
      subtitle: 'Berechnen Sie den potenziellen Umsatz durch unseren KI-gestützten Cold-Calling-Service',
      yourMetrics: 'Ihre Kennzahlen',
      dealValue: 'Ø Kundenwert (CLV) / Ø Gewinn pro Abschluss',
      closingRate: 'Abschlussquote (%)',
      monthlyAppointments: 'Termine pro Monat',
      yourPotentialROI: 'Ihr potenzieller ROI',
      expectedMonthlyRevenue: 'Erwarteter monatlicher Umsatz',
      serviceCost: 'LeadGenies Servicekosten',
      netMonthlyGain: 'Netto-Monatsgewinn',
      fomoMessage: 'Ihr ungenutztes Potenzial: Sie lassen €{amount} Umsatz liegen, wenn Sie auf professionelle Akquise verzichten.',
      adjustMetrics: 'Passen Sie Ihre Kennzahlen an, um positives ROI-Potenzial zu sehen.',
      chartTitle: 'Kumulierter Umsatz vs. Servicekosten',
      chartSubtitle: 'Sehen Sie, wie sich Ihre Investition über 12 Monate auszahlt',
      greatROI: 'Großartiges ROI-Potenzial!',
      letsDiscuss: 'Lassen Sie uns besprechen, wie LeadGenies Ihnen helfen kann, diese Ergebnisse zu erzielen.',
      cta: 'Kostenlos beraten lassen',
      revenueGenerated: 'Generierter Umsatz',
      months: ['Monat 1', 'Monat 2', 'Monat 3', 'Monat 4', 'Monat 5', 'Monat 6', 'Monat 7', 'Monat 8', 'Monat 9', 'Monat 10', 'Monat 11', 'Monat 12']
    },

    // Guarantee Section
    guarantee: {
      title: 'Garantie & DSGVO',
      items: [
        {
          title: '100% DSGVO-konform',
          subtitle: 'Deutsche Datenschutzstandards, Server in Deutschland'
        },
        {
          title: 'Was abgedeckt ist',
          subtitle: 'Komplettes Onboarding, voller Monat Calling, alle Reports & Daten'
        },
        {
          title: 'Unsere Erfolgsbilanz',
          subtitle: '0 Rückerstattungen in 2024, 100% Kundenzufriedenheit, 12 Termine/Monat'
        },
        {
          title: '100% Geld zurück',
          subtitle: 'Wenn wir im ersten Monat keinen einzigen qualifizierten Termin vereinbaren, erhalten Sie Ihr Geld zu 100% zurück.'
        }
      ]
    },

    // FAQ Section
    faq: {
      title: 'Alles, was Sie wissen müssen',
      categories: [
        {
          title: 'Über unseren Service',
          items: [
            {
              question: 'Was unterscheidet Sie von einem klassischen Callcenter?',
              answer: 'Wir sind eine externe SDR-Abteilung (Sales Development Representative). Unsere Mitarbeiter sind hochqualifizierte Vertriebsprofis, die auf Augenhöhe mit Entscheidern kommunizieren. Der Fokus liegt auf der Qualität und Tiefe der Gespräche, nicht auf der reinen Anrufquantität. Wir nutzen zudem KI-Technologie zur Datenanalyse und Prozessoptimierung, was uns von traditionellen Agenturen abhebt.'
            },
            {
              question: 'Warum gibt es keine 1-Monats-Testphase?',
              answer: 'Nachhaltiger Vertriebsaufbau ist ein Marathon, kein Sprint. Der erste Monat dient dem Onboarding, der Einarbeitung und der Kalibrierung. Belastbare Ergebnisse und eine signifikante Pipeline-Entwicklung zeigen sich erfahrungsgemäß ab dem zweiten und dritten Monat. Eine 1-Monats-Zusammenarbeit wäre unseriös und würde Ihren und unseren Qualitätsansprüchen nicht gerecht.'
            },
            {
              question: 'Für welche Unternehmen eignet sich Ihr Service NICHT?',
              answer: 'Unser Service ist nicht geeignet für Startups in der Pre-Seed/Seed-Phase, Unternehmen ohne eigenes Vertriebsteam oder Firmen, deren Produkte/Dienstleistungen einen sehr niedrigen Auftragswert haben. Wir schaffen den größten Mehrwert für etablierte Unternehmen, die einen funktionierenden Prozess haben und diesen skalieren möchten.'
            },
            {
              question: 'Welche Branchen bedienen Sie?',
              answer: 'B2B SaaS, IT, Beratung, Immobilien, Professional Services – alle Branchen mit komplexen Produkten und höheren Auftragswerten (ACV 15.000+ €)'
            }
          ]
        },
        {
          title: 'Prozess & Technologie',
          items: [
            {
              question: 'Wie funktioniert Waterfall-Enrichment?',
              answer: 'Mehrere Datenquellen werden sequenziell validiert, um höchste Datenqualität für Ihre Zielgruppe zu gewährleisten'
            },
            {
              question: 'Was ist Company-Lookalike-Technologie?',
              answer: 'Unsere KI findet ähnliche Unternehmen wie Ihre besten Kunden, um Ihre Erfolgsquote zu maximieren'
            },
            {
              question: 'Wie stellen Sie Datenqualität sicher?',
              answer: '7-stufiger Verifizierungsprozess mit 99% Genauigkeit und kontinuierliche Validierung'
            }
          ]
        },
        {
          title: 'Ergebnisse & Investition',
          items: [
            {
              question: 'Welche Ergebnisse kann ich erwarten?',
              answer: 'Durchschnittlich 12-15 qualifizierte Termine pro Monat, abhängig von Ihrer Branche und Zielgruppe'
            },
            {
              question: 'Wie schnell können wir starten?',
              answer: 'Nach dem Strategie-Workshop starten wir innerhalb von 7-10 Tagen mit der aktiven Marktbearbeitung'
            },
            {
              question: 'Wie werden die Kosten strukturiert?',
              answer: 'Unser Preismodell ist transparent und fair: Eine kleine einmalige Onboarding-Pauschale für die Schulung und Integration plus ein monatlicher Festpreis für 2-3 Stunden tägliche Arbeitszeit Ihres persönlichen Sales-Mitarbeiters. Optional können Sie über uns DSGVO-konforme Leadlisten beziehen. Alle Details besprechen wir individuell im Beratungsgespräch.'
            }
          ]
        }
      ]
    },

    // Pricing Section
    pricing: {
      title: 'Transparente Preisgestaltung für Ihren externen Telemarketing-Mitarbeiter',
      subtitle: 'Unser Preismodell ist einfach und fair: Eine kleine Onboarding-Pauschale plus monatlicher Retainer. Optional können Sie über uns auch professionelle Leadlisten beziehen.',
      description: 'So funktioniert unser Preismodell:',
      packages: [
        {
          name: 'Onboarding-Pauschale',
          duration: 'Einmalig',
          price: 'Individuell',
          features: [
            'Intensive Schulung Ihres persönlichen Mitarbeiters',
            'Integration ins Team & Kennenlernen',
            'Einweisung in Ihre CRM-Systeme',
            'Entwicklung der Gesprächsleitfäden',
            'Setup von Reporting & Prozessen'
          ],
          bestFor: 'Perfekter Start',
          cta: 'Jetzt beraten lassen'
        },
        {
          name: 'Monatlicher Retainer',
          duration: 'Ab 6 Monate',
          price: 'Festpreis',
          features: [
            'Tägliche 2-3 Stunden dedizierter Sales-Mitarbeiter',
            'Flexibel einsetzbar: Kaltakquise, Lead-Nachverfolgung, CRM-Pflege',
            'Teilnahme an Schulungen & Feedback-Calls',
            'Wie ein eigener Mitarbeiter – ohne Personalrisiko',
            'DSGVO-konform & professionell'
          ],
          bestFor: 'Kontinuierliches Wachstum',
          cta: 'Jetzt beraten lassen'
        },
        {
          name: 'Leadlisten-Service',
          duration: 'Optional',
          price: 'Nach Bedarf',
          features: [
            'DSGVO-konforme Datenbanken (Cognism, EchoBot)',
            'Aufbereitete Leads in CSV, Excel oder Wunschformat',
            'Gezielt auf Ihre Zielgruppe zugeschnitten',
            'Kontinuierliche Aktualisierung möglich',
            'Optimale Unterstützung für Kaltakquise'
          ],
          bestFor: 'Maximale Effizienz',
          cta: 'Jetzt beraten lassen'
        }
      ],
      bestForLabel: 'Ideal für:',
      footerText: 'Möchten Sie ein individuelles Angebot erhalten? Vereinbaren Sie jetzt ein unverbindliches Beratungsgespräch und erfahren Sie, wie wir Ihren Vertrieb skalieren können.'
    },

    // Review Cards Section
    reviewCards: {
      row1: [
        {
          company: 'Case Study: CoffeeCup.app',
          review: 'Herausforderung: Als SaaS-Startup mit komplexem Produkt fehlte uns die Zeit für systematische Kaltakquise. Lösung: Seit über 12 Monaten arbeitet ein dedizierter LeadGenies-Mitarbeiter täglich 2-3 Stunden exklusiv für uns. Ergebnis: Durchschnittlich 3-4 qualifizierte B2B-Termine pro Monat mit Entscheidern, die unser Produkt verstehen. Der Mitarbeiter kennt unser Tool in- und auswendig.',
          name: 'Thomas Reppa',
          position: 'CEO',
          bgColor: '#E8F4F8'
        },
        {
          company: 'HappyFutter GmbH',
          review: 'LeadGenies hat uns geholfen, den Outbound-Vertrieb schneller zu skalieren als wir es intern konnten. Ihr Team versteht unsere Zielgruppe perfekt. Bereits im ersten Monat sahen wir einen deutlichen Anstieg bei den Partneranmeldungen.',
          name: 'Sascha Schwarz.',
          position: 'Vertriebsleiter',
          bgColor: '#F0F8E8'
        },
        {
          company: 'Case Study: Tech-Experts GmbH',
          review: 'Herausforderung: Unser internes Team war mit Projekten ausgelastet, für Outbound fehlten Ressourcen. Lösung: Seit 14 Monaten unterstützt uns LeadGenies mit einem erfahrenen Telemarketing-Mitarbeiter, der perfekt in unser Team integriert ist. Ergebnis: Konstant 3-4 hochwertige Termine monatlich mit C-Level aus dem Mittelstand. Die Zusammenarbeit läuft wie mit einem eigenen Mitarbeiter.',
          name: 'Vivien Poswiat',
          position: 'Gründer',
          bgColor: '#FFF9E6'
        },
        {
          company: 'YourHomie',
          review: 'LeadGenies hat unserem B2B-Outreach einen enormen Schub gegeben. Sie repräsentieren unsere Marke mit Energie und Klarheit. Wir erhalten regelmäßige Berichte und Feedback, sodass wir immer wissen, was passiert.',
          name: 'Mirco Meyer.',
          position: 'CEO',
          bgColor: '#F5F5F5'
        },
        {
          company: 'Case Study: Intech Automation',
          review: 'Herausforderung: Komplexe technische Produkte erfordern tiefes Verständnis in der Akquise. Lösung: LeadGenies hat sich intensiv in unsere Lösungen eingearbeitet. Seit 10 Monaten erhalten wir kontinuierlich Support in Kaltakquise und Lead-Nachverfolgung. Ergebnis: 3-4 qualifizierte Termine pro Monat mit genau den richtigen Industriekunden. Die Qualität der Gespräche ist beeindruckend.',
          name: 'Sebastian Rott',
          position: 'Sales Manager',
          bgColor: '#FFE8E8'
        }
      ],
      row2: [
        {
          company: 'Intech Automation',
          review: 'LeadGenies wurde ein zentraler Teil unseres Vertriebsprozesses. Ihr Team hat unsere komplexen technischen Produkte schnell verstanden und qualifizierte Termine mit genau den richtigen Unternehmen generiert.',
          name: 'Sebastian Rott.',
          position: 'Vertriebsleiter',
          bgColor: '#FFE8E8'
        },
        {
          company: 'Tech-Experts GmbH',
          review: 'Das Outsourcing an LeadGenies war effektiver und kosteneffizienter als internes Calling. Ihre Caller kommunizieren auf Augenhöhe mit Entscheidern und liefern konstant wertvolle Termine.',
          name: 'Vivien Poswiat.',
          position: 'Gründer',
          bgColor: '#E8F0F8'
        },
        {
          company: 'YourHomie',
          review: 'LeadGenies hat unserem B2B-Outreach einen enormen Schub gegeben. Sie repräsentieren unsere Marke mit Energie und Klarheit. Wir erhalten regelmäßige Berichte und Feedback, sodass wir immer wissen, was passiert.',
          name: 'Mirco Meyer.',
          position: 'CEO',
          bgColor: '#F0F8E8'
        },
        {
          company: 'CoffeeCup.app',
          review: 'Die Zusammenarbeit mit LeadGenies hat unsere Vertriebspipeline transformiert. Ihre Caller generieren zuverlässig jede Woche qualitativ hochwertige Termine. Unser Vertriebsteam kann sich jetzt auf den Abschluss konzentrieren, während LeadGenies die Kaltakquise übernimmt.',
          name: 'Thomas Reppa.',
          position: 'CEO',
          bgColor: '#FFF9E6'
        },
        {
          company: 'HappyFutter GmbH',
          review: 'LeadGenies hat uns geholfen, den Outbound-Vertrieb schneller zu skalieren als wir es intern konnten. Ihr Team versteht unsere Zielgruppe perfekt. Bereits im ersten Monat sahen wir einen deutlichen Anstieg bei den Partneranmeldungen.',
          name: 'Sascha Schwarz.',
          position: 'Vertriebsleiter',
          bgColor: '#F5F5F5'
        }
      ]
    },

    // Contact Section
    contact: {
      title: 'Bereit für mehr Umsatz?',
      subtitle: 'Lassen Sie uns herausfinden, ob wir zueinander passen.',
      formTitle: 'Schnellkontakt-Formular',
      nameLabel: 'Name*',
      nameRequired: 'Name ist erforderlich',
      companyLabel: 'Unternehmen*',
      companyRequired: 'Unternehmen ist erforderlich',
      emailLabel: 'E-Mail*',
      emailRequired: 'E-Mail ist erforderlich',
      phoneLabel: 'Telefon',
      challengeLabel: 'Was ist Ihre größte Vertriebsherausforderung?',
      submitButton: 'Kostenlos & unverbindlich sprechen',
      responseTime: 'Antwort innerhalb von 2 Stunden während der Geschäftszeiten',
      directContactTitle: 'Direkter Kontakt',
      officeHoursLabel: 'Bürozeiten',
      officeHours: 'Mo-Fr 8:00-18:00 MEZ',
      linkedInValue: 'Mit Louis verbinden'
    },

    // Footer
    footer: {
      copyright: '© {year} LeadGenies GmbH',
      legal: [
        { label: 'Impressum', href: '/impressum' },
        { label: 'AGB', href: '/agb' },
        { label: 'Datenschutz', href: '/datenschutz' }
      ]
    },

    // Language switcher
    language: {
      de: 'DE',
      en: 'EN'
    }
  },

  en: {
    // Header
    header: {
      menuItems: [
        { label: 'What We Do', href: '#hero' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'ROI Calculator', href: '#roi-calculator' },
        { label: 'Guarantee & GDPR', href: '#guarantee' },
        { label: 'Partnership Models', href: '#pricing' }
      ],
      ctaText: 'Get Advice Now'
    },

    // Hero
    hero: {
      title: 'Professional B2B Telemarketing Experts for Your Scalable Sales',
      subtitle: 'We are your external telemarketing department. From cold calling to lead follow-up and CRM management – our experienced sales professionals work 2-3 hours daily exclusively for your company. Flexibly deployable, GDPR-compliant, and without hiring risk.',
      cta: 'Get Free Consultation Now',
      belowText: 'For established B2B companies with <strong>ambitious growth goals</strong>',
      reviews: [
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Logo-TEC-Experts-v1.svg',
          text: '"More effective than in-house calling. Their well-prepared callers deliver quality appointments and feel like part of our team."',
          attribution: '— Vivien Poswiat, Founder, Tech-Experts',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/vivien.png'
        },
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/app-v1.svg',
          text: '"Transformed our pipeline with quality appointments every week. We focus on closing, they handle outreach. Fast ROI."',
          attribution: '— Thomas Reppa, CEO, CoffeeCup.app',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Aerion_-Coffee-Cup.png'
        },
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech-v1.svg',
          text: '"Quickly understood our complex technical products and consistently delivers qualified appointments with the right companies."',
          attribution: '— Sebastian R., Sales Manager, Intech Automation',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech.png'
        }
      ],
      mobileReviews: [
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Logo-TEC-Experts-v1.svg',
          text: '"Well-prepared callers who consistently deliver. Feels like an extension of our team."',
          attribution: '— Vivien P., Tech-Experts',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/vivien.png'
        },
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/app-v1.svg',
          text: '"Transformed our sales pipeline. High-quality appointments every week. Investment paid off within weeks."',
          attribution: '— Thomas R., CoffeeCup.app',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Aerion_-Coffee-Cup.png'
        },
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech-v1.svg',
          text: '"Quickly understood our complex products. Delivers qualified appointments with exactly the right companies."',
          attribution: '— Sebastian R., Intech',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech.png'
        }
      ]
    },

    // Trust Section
    trust: {
      title: 'Is LeadGenies the right solution for you?',
      subtitle: 'We work with established B2B companies (20+ employees) that already have a functioning sales team and want to systematically scale their sales process. Our partners see appointment setting not as a stopgap measure, but as a strategic lever for predictable growth.',
      checklistTitle: 'Qualification Checklist',
      checklist: [
        'You have an established product with clear product-market fit.',
        'Your sales team (min. 3-5 people) can and wants to handle more qualified appointments.',
        'You are looking for a long-term partner, not a short-term "firefighter".'
      ],
      checklistFooter: 'Does this apply to you? Let\'s talk.',
      stats: [
        { label: 'Satisfied Partners' },
        { label: 'Conversations Held' },
        { label: 'Appointment Rate' }
      ],
      badge: {
        topRated: 'Top-rated service 2025',
        verifiedBy: 'Verified by:',
        tooltip: 'Trustindex verifies that businesses maintain a Google rating of 4.5 or higher based on reviews collected over the past 12 months.'
      }
    },

    // How It Works
    howItWorks: {
      title: 'How It Works',
      subtitle: '5 Steps to Success'
    },

    // ROI Calculator
    roiCalculator: {
      title: 'Calculate Your Return on Investment',
      subtitle: 'Calculate the potential revenue from our AI-powered cold calling service',
      yourMetrics: 'Your Metrics',
      dealValue: 'Average Deal Value / CLV',
      closingRate: 'Closing Rate',
      monthlyAppointments: 'Monthly Appointments',
      yourPotentialROI: 'Your Potential ROI',
      expectedMonthlyRevenue: 'Expected Monthly Revenue',
      serviceCost: 'LeadGenies Service Cost',
      netMonthlyGain: 'Net Monthly Gain',
      fomoMessage: 'You\'re missing out on €{amount} per month by not working with LeadGenies.',
      adjustMetrics: 'Try adjusting your metrics to see positive ROI potential.',
      chartTitle: 'Cumulative Revenue vs Service Cost',
      chartSubtitle: 'See how your investment pays off over 12 months',
      greatROI: 'Great ROI Potential!',
      letsDiscuss: 'Let\'s discuss how LeadGenies can help you achieve these results.',
      cta: 'Book a Strategy Call',
      revenueGenerated: 'Revenue Generated',
      months: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12']
    },

    // Guarantee Section
    guarantee: {
      title: 'True Success Guarantee & GDPR Compliant',
      items: [
        {
          title: "What's Covered",
          subtitle: 'Complete onboarding, full month of calling, all reports & data'
        },
        {
          title: 'Our Track Record',
          subtitle: '0 refunds in 2024, 100% client satisfaction, 12 appointments/month'
        },
        {
          title: 'GDPR Compliant',
          subtitle: 'EU data protection, secure servers'
        },
        {
          title: '100% Money Back',
          subtitle: 'Secure Encrypted Payments'
        }
      ]
    },

    // FAQ Section
    faq: {
      title: 'Everything You Need to Know',
      categories: [
        {
          title: 'About Our Service',
          items: [
            {
              question: 'What distinguishes you from a traditional call center?',
              answer: 'We are an external SDR (Sales Development Representative) department. Our team consists of highly qualified sales professionals who communicate at eye level with decision-makers. The focus is on the quality and depth of conversations, not on pure call volume. We also use AI technology for data analysis and process optimization, which sets us apart from traditional agencies.'
            },
            {
              question: 'Why is there no 1-month trial period?',
              answer: 'Sustainable sales development is a marathon, not a sprint. The first month is for onboarding, training, and calibration. Reliable results and significant pipeline development typically show from the second and third month onwards. A 1-month collaboration would be unprofessional and would not meet your and our quality standards.'
            },
            {
              question: 'For which companies is your service NOT suitable?',
              answer: 'Our service is not suitable for startups in the pre-seed/seed phase, companies without their own sales team, or companies whose products/services have a very low contract value. We create the greatest added value for established companies that have a functioning process and want to scale it.'
            },
            {
              question: 'Which industries do you serve?',
              answer: 'B2B SaaS, IT, Consulting, Real Estate, Professional Services – all industries with complex products and higher contract values (ACV €15,000+)'
            }
          ]
        },
        {
          title: 'Process & Technology',
          items: [
            {
              question: 'How does waterfall enrichment work?',
              answer: 'Multiple data sources are validated sequentially to ensure the highest data quality for your target audience'
            },
            {
              question: 'What is company lookalike technology?',
              answer: 'Our AI finds similar companies to your best customers to maximize your success rate'
            },
            {
              question: 'How do you ensure data quality?',
              answer: '7-step verification process with 99% accuracy and continuous validation'
            }
          ]
        },
        {
          title: 'Results & Investment',
          items: [
            {
              question: 'What results can I expect?',
              answer: 'Average 12-15 qualified appointments per month, depending on your industry and target audience'
            },
            {
              question: 'How quickly can we start?',
              answer: 'After the strategy workshop, we start active market cultivation within 7-10 days'
            },
            {
              question: 'How are costs structured?',
              answer: 'Our pricing model is transparent and fair: A small one-time onboarding fee for training and integration plus a monthly fixed price for 2-3 hours daily working time of your personal sales professional. Optionally, you can obtain GDPR-compliant lead lists through us. We discuss all details individually in the consultation call.'
            }
          ]
        }
      ]
    },

    // Pricing Section
    pricing: {
      title: 'Transparent Pricing for Your External Telemarketing Professional',
      subtitle: 'Our pricing model is simple and fair: A small onboarding fee plus monthly retainer. Optionally, you can also obtain professional lead lists through us.',
      description: 'How our pricing model works:',
      packages: [
        {
          name: 'Onboarding Fee',
          duration: 'One-time',
          price: 'Individual',
          features: [
            'Intensive training of your personal team member',
            'Team integration & introduction',
            'Training in your CRM systems',
            'Development of conversation scripts',
            'Setup of reporting & processes'
          ],
          bestFor: 'Perfect Start',
          cta: 'Get Advice Now'
        },
        {
          name: 'Monthly Retainer',
          duration: 'From 6 months',
          price: 'Fixed Price',
          features: [
            'Daily 2-3 hours dedicated sales professional',
            'Flexibly deployable: Cold calling, lead follow-up, CRM management',
            'Participation in training & feedback calls',
            'Like your own employee – without hiring risk',
            'GDPR-compliant & professional'
          ],
          bestFor: 'Continuous Growth',
          cta: 'Get Advice Now'
        },
        {
          name: 'Lead List Service',
          duration: 'Optional',
          price: 'On Demand',
          features: [
            'GDPR-compliant databases (Cognism, EchoBot)',
            'Prepared leads in CSV, Excel or desired format',
            'Specifically tailored to your target audience',
            'Continuous updates possible',
            'Optimal support for cold calling'
          ],
          bestFor: 'Maximum Efficiency',
          cta: 'Get Advice Now'
        }
      ],
      bestForLabel: 'Best for:',
      footerText: 'Would you like to receive an individual offer? Schedule a non-binding consultation now and learn how we can scale your sales.'
    },

    // Review Cards Section
    reviewCards: {
      row1: [
        {
          company: 'Case Study: CoffeeCup.app',
          review: 'Challenge: As a SaaS startup with a complex product, we lacked time for systematic cold calling. Solution: For over 12 months, a dedicated LeadGenies professional has been working 2-3 hours daily exclusively for us. Result: Average 3-4 qualified B2B appointments per month with decision-makers who understand our product. The team member knows our tool inside out.',
          name: 'Thomas Reppa',
          position: 'CEO',
          bgColor: '#E8F4F8'
        },
        {
          company: 'HappyFutter GmbH',
          review: 'LeadGenies helped us scale outbound sales faster than we could internally. Their team understands our target audience perfectly. Within the first month, we saw a clear increase in partner sign-ups.',
          name: 'Sascha Schwarz.',
          position: 'Sales Director',
          bgColor: '#F0F8E8'
        },
        {
          company: 'Case Study: Tech-Experts GmbH',
          review: 'Challenge: Our internal team was busy with projects, resources for outbound were lacking. Solution: For 14 months, LeadGenies has been supporting us with an experienced telemarketing professional who is perfectly integrated into our team. Result: Consistently 3-4 high-quality appointments monthly with C-level from mid-market companies. The collaboration works like with our own employee.',
          name: 'Vivien Poswiat',
          position: 'Founder',
          bgColor: '#FFF9E6'
        },
        {
          company: 'YourHomie',
          review: 'LeadGenies gave our B2B outreach a huge boost. They represent our brand with energy and clarity. We get regular reports and feedback, so we always know what is happening.',
          name: 'Mirco Meyer.',
          position: 'CEO',
          bgColor: '#F5F5F5'
        },
        {
          company: 'Case Study: Intech Automation',
          review: 'Challenge: Complex technical products require deep understanding in acquisition. Solution: LeadGenies has intensively familiarized themselves with our solutions. For 10 months, we have been continuously receiving support in cold calling and lead follow-up. Result: 3-4 qualified appointments per month with exactly the right industrial customers. The quality of conversations is impressive.',
          name: 'Sebastian Rott',
          position: 'Sales Manager',
          bgColor: '#FFE8E8'
        }
      ],
      row2: [
        {
          company: 'Intech Automation',
          review: 'LeadGenies became a core part of our sales process. Their team quickly understood our complex technical products and generated qualified appointments with exactly the right companies.',
          name: 'Sebastian Rott.',
          position: 'Sales Manager',
          bgColor: '#FFE8E8'
        },
        {
          company: 'Tech-Experts GmbH',
          review: 'Outsourcing to LeadGenies was more effective and cost-efficient than in-house calling. Their callers communicate at eye level with decision-makers and consistently deliver valuable appointments.',
          name: 'Vivien Poswiat.',
          position: 'Founder',
          bgColor: '#E8F0F8'
        },
        {
          company: 'YourHomie',
          review: 'LeadGenies gave our B2B outreach a huge boost. They represent our brand with energy and clarity. We get regular reports and feedback, so we always know what is happening.',
          name: 'Mirco Meyer.',
          position: 'CEO',
          bgColor: '#F0F8E8'
        },
        {
          company: 'CoffeeCup.app',
          review: 'Working with LeadGenies transformed our sales pipeline. Their callers reliably generate quality appointments every week. Our sales team now focuses on closing deals while LeadGenies handles cold outreach.',
          name: 'Thomas Reppa.',
          position: 'CEO',
          bgColor: '#FFF9E6'
        },
        {
          company: 'HappyFutter GmbH',
          review: 'LeadGenies helped us scale outbound sales faster than we could internally. Their team understands our target audience perfectly. Within the first month, we saw a clear increase in partner sign-ups.',
          name: 'Sascha Schwarz.',
          position: 'Sales Director',
          bgColor: '#F5F5F5'
        }
      ]
    },

    // Contact Section
    contact: {
      title: 'Ready to Fill Your Pipeline with Qualified Leads?',
      subtitle: '',
      formTitle: 'Quick Contact Form',
      nameLabel: 'Name*',
      nameRequired: 'Name is required',
      companyLabel: 'Company*',
      companyRequired: 'Company is required',
      emailLabel: 'Email*',
      emailRequired: 'Email is required',
      phoneLabel: 'Phone',
      challengeLabel: "What's your biggest sales challenge?",
      submitButton: 'Get Your Free Strategy Session',
      responseTime: 'Response within 2 hours during business days',
      directContactTitle: 'Contact Directly',
      officeHoursLabel: 'Office Hours',
      officeHours: 'Mon-Fri 8:00-18:00 CET',
      linkedInValue: 'Connect with Louis'
    },

    // Footer
    footer: {
      copyright: '© {year} LeadGenies GmbH',
      legal: [
        { label: 'Imprint', href: '/impressum' },
        { label: 'Terms & Conditions', href: '/agb' },
        { label: 'Privacy Policy', href: '/datenschutz' }
      ]
    },

    // Language switcher
    language: {
      de: 'DE',
      en: 'EN'
    }
  }
};

export function getTranslations(lang: Language) {
  return translations[lang];
}
