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
      ctaText: 'Strategiegespräch anfordern'
    },

    // Hero
    hero: {
      title: 'Skalierbarer B2B-Vertrieb ohne Personalrisiko.',
      subtitle: 'Wir sind kein Callcenter. Wir sind Ihre strategische Vertriebserweiterung. LeadGenies integriert sich nahtlos in Ihre Prozesse und liefert vorqualifizierte, entscheidungsreife Termine direkt in die Kalender Ihrer Account Executives. Konzentrieren Sie sich auf das Closing – wir kümmern uns um die Pipeline.',
      cta: 'Unverbindliches Strategiegespräch anfordern',
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
        'Ihr durchschnittlicher Auftragswert (ACV) liegt bei über 15.000 €.',
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
              answer: 'Unsere Partnerschaften beinhalten eine einmalige Setup-Gebühr, einen monatlichen Retainer und optional eine erfolgsbasierte Komponente. Alle Details besprechen wir individuell im Strategiegespräch.'
            }
          ]
        }
      ]
    },

    // Pricing Section
    pricing: {
      title: 'Partnerschafts-Modelle für planbares Wachstum',
      subtitle: 'Jedes Unternehmen ist einzigartig. Deshalb bieten wir keine Standard-Pakete von der Stange, sondern maßgeschneiderte Lösungen, die sich an Ihren Zielen orientieren. Unsere Partnerschaften sind auf eine langfristige, strategische Zusammenarbeit ausgelegt und beginnen in der Regel mit einer Laufzeit von 6 Monaten.',
      description: 'Unsere Modelle beinhalten typischerweise:',
      packages: [
        {
          name: 'Setup-Gebühr',
          duration: 'Einmalig',
          price: 'Individuell',
          features: [
            'Strategie-Workshop & ICP-Definition',
            'Entwicklung der Gesprächsleitfäden',
            'KI-gestützte Datenanalyse',
            'CRM-System Integration',
            'Team-Onboarding'
          ],
          bestFor: 'Strategischer Start',
          cta: 'Angebot anfordern'
        },
        {
          name: 'Monatlicher Retainer',
          duration: 'Laufend',
          price: 'Ab 6 Monate',
          features: [
            'Festes Kontingent an SDR-Kapazität',
            'Definiertes Anrufvolumen',
            'Tägliches Reporting',
            'Wöchentliche Kalibrierung',
            'Quartalsweise Strategie-Sessions'
          ],
          bestFor: 'Kontinuierliches Wachstum',
          cta: 'Angebot anfordern'
        },
        {
          name: 'Erfolgsbasiert',
          duration: 'Optional',
          price: 'Performance-Fee',
          features: [
            'Vergütung pro qualifiziertem Termin',
            'Incentive-Alignment',
            'Gemeinsames Erfolgsinteresse',
            'Transparente Messbarkeit',
            'Flexible Skalierung'
          ],
          bestFor: 'Maximale Alignment',
          cta: 'Angebot anfordern'
        }
      ],
      bestForLabel: 'Ideal für:',
      footerText: 'Um ein individuelles Angebot zu erhalten, das perfekt auf Ihre Vertriebsziele zugeschnitten ist, vereinbaren Sie bitte ein unverbindliches Strategiegespräch mit uns.'
    },

    // Review Cards Section
    reviewCards: {
      row1: [
        {
          company: 'Case Study: Maschinenbau-Unternehmen, 150 Mitarbeiter',
          review: 'Herausforderung: Das interne Vertriebsteam war vollständig mit der Betreuung von Bestandskunden ausgelastet, die Neukundenakquise stagnierte. Lösung: Einsatz eines dedizierten LeadGenies-Teams (entspricht 1.5 Vollzeit-SDRs) zur gezielten Ansprache von C-Level-Entscheidern in der DACH-Region. Ergebnis nach 6 Monaten: 78 qualifizierte Termine, 12 neue Projekte mit einem Pipeline-Wert von 1,2 Mio. €.',
          name: 'Anonymisiert',
          position: 'Mittelstand DACH',
          bgColor: '#F0F8E8'
        },
        {
          company: 'HappyFutter GmbH',
          review: 'LeadGenies hat uns geholfen, den Outbound-Vertrieb schneller zu skalieren als wir es intern konnten. Ihr Team versteht unsere Zielgruppe perfekt. Bereits im ersten Monat sahen wir einen deutlichen Anstieg bei den Partneranmeldungen.',
          name: 'Sascha Schwarz.',
          position: 'Vertriebsleiter',
          bgColor: '#F0F8E8'
        },
        {
          company: 'Tech-Experts GmbH',
          review: 'Das Outsourcing an LeadGenies war effektiver und kosteneffizienter als internes Calling. Ihre Caller kommunizieren auf Augenhöhe mit Entscheidern und liefern konstant wertvolle Termine.',
          name: 'Vivien Poswiat.',
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
          company: 'Intech Automation',
          review: 'LeadGenies wurde ein zentraler Teil unseres Vertriebsprozesses. Ihr Team hat unsere komplexen technischen Produkte schnell verstanden und qualifizierte Termine mit genau den richtigen Unternehmen generiert.',
          name: 'Sebastian Rott.',
          position: 'Vertriebsleiter',
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
      ctaText: 'Request Strategy Call'
    },

    // Hero
    hero: {
      title: 'Scalable B2B Sales Without Hiring Risk.',
      subtitle: 'We are not a call center. We are your strategic sales extension. LeadGenies integrates seamlessly into your processes and delivers pre-qualified, decision-ready appointments directly into your Account Executives\' calendars. You focus on closing – we handle the pipeline.',
      cta: 'Request Non-binding Strategy Call',
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
        'Your average contract value (ACV) is over €15,000.',
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
              answer: 'Our partnerships include a one-time setup fee, a monthly retainer, and optionally a performance-based component. We discuss all details individually in the strategy call.'
            }
          ]
        }
      ]
    },

    // Pricing Section
    pricing: {
      title: 'Partnership Models for Predictable Growth',
      subtitle: 'Every company is unique. That\'s why we don\'t offer standard off-the-shelf packages, but customized solutions tailored to your goals. Our partnerships are designed for long-term, strategic collaboration and typically start with a minimum term of 6 months.',
      description: 'Our models typically include:',
      packages: [
        {
          name: 'Setup Fee',
          duration: 'One-time',
          price: 'Individual',
          features: [
            'Strategy Workshop & ICP Definition',
            'Development of conversation scripts',
            'AI-powered data analysis',
            'CRM System Integration',
            'Team Onboarding'
          ],
          bestFor: 'Strategic Start',
          cta: 'Request Quote'
        },
        {
          name: 'Monthly Retainer',
          duration: 'Ongoing',
          price: 'From 6 months',
          features: [
            'Fixed SDR capacity quota',
            'Defined call volume',
            'Daily reporting',
            'Weekly calibration',
            'Quarterly strategy sessions'
          ],
          bestFor: 'Continuous Growth',
          cta: 'Request Quote'
        },
        {
          name: 'Performance-based',
          duration: 'Optional',
          price: 'Performance Fee',
          features: [
            'Compensation per qualified appointment',
            'Incentive alignment',
            'Shared success interest',
            'Transparent measurability',
            'Flexible scaling'
          ],
          bestFor: 'Maximum Alignment',
          cta: 'Request Quote'
        }
      ],
      bestForLabel: 'Best for:',
      footerText: 'To receive a customized offer perfectly tailored to your sales goals, please schedule a non-binding strategy call with us.'
    },

    // Review Cards Section
    reviewCards: {
      row1: [
        {
          company: 'CoffeeCup.app',
          review: 'Working with LeadGenies transformed our sales pipeline. Their callers reliably generate quality appointments every week. Our sales team now focuses on closing deals while LeadGenies handles cold outreach.',
          name: 'Thomas Reppa.',
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
          company: 'Tech-Experts GmbH',
          review: 'Outsourcing to LeadGenies was more effective and cost-efficient than in-house calling. Their callers communicate at eye level with decision-makers and consistently deliver valuable appointments.',
          name: 'Vivien Poswiat.',
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
          company: 'Intech Automation',
          review: 'LeadGenies became a core part of our sales process. Their team quickly understood our complex technical products and generated qualified appointments with exactly the right companies.',
          name: 'Sebastian Rott.',
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
