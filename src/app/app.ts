import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  protected readonly title = signal('MAXIFUM DEL BAJIO');

  ngOnInit(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    this.setCanonicalLink();
    this.setStructuredData();
  }

  private setCanonicalLink(): void {
    const currentUrl = new URL(window.location.href);
    const canonicalHref = `${currentUrl.origin}${currentUrl.pathname.replace(/\/$/, '') || '/'}`;
    const existingLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const canonicalLink = existingLink ?? document.createElement('link');

    canonicalLink.rel = 'canonical';
    canonicalLink.href = canonicalHref;

    if (!existingLink) {
      document.head.appendChild(canonicalLink);
    }
  }

  private setStructuredData(): void {
    const scriptId = 'maxifum-local-business-jsonld';
    const existingScript = document.getElementById(scriptId);
    const script = (existingScript ?? document.createElement('script')) as HTMLScriptElement;

    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'MAXIFUM DEL BAJIO',
      url: window.location.origin,
      telephone: '+52 55 1234 5678',
      email: 'info@fumimax.com',
      areaServed: [
        'Guadalajara',
        'Michoacán',
        'Querétaro',
        'Puebla',
        'Estado de México',
        'Nuevo León',
        'Ciudad de México',
        'Morelos'
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Protección 123, Col. Seguridad',
        addressLocality: 'CDMX',
        addressRegion: 'Ciudad de México',
        addressCountry: 'MX'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de fumigación y control de plagas',
        itemListElement: [
          'Fumigación general',
          'Control de termitas',
          'Desinfección',
          'Protección para hogares',
          'Servicios para empresas y restaurantes',
          'Fumigación ecológica'
        ]
      }
    });

    if (!existingScript) {
      document.head.appendChild(script);
    }
  }
}
