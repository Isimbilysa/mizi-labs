import type { AfricanCountry } from '@/types';

/**
 * African countries with approximate centroids.
 *
 * IMPORTANT: every `coverage` value here is ILLUSTRATIVE. It represents how a
 * finished inventory would be expressed, not a finding. Only Rwanda carries a
 * per-domain breakdown, because Rwanda is the country we are actually studying,
 * and even that is marked `in-progress` rather than verified.
 *
 * The map derives its regions from these centroids, so the shapes are a
 * Voronoi approximation and never official borders.
 */
export const COUNTRIES: AfricanCountry[] = [
  // --- North ---------------------------------------------------------------
  { id: 'ma', name: 'Morocco', lon: -6.0, lat: 31.8, region: 'north', coverage: 'limited', provenance: 'illustrative' },
  { id: 'dz', name: 'Algeria', lon: 2.6, lat: 28.0, region: 'north', coverage: 'unassessed', provenance: 'illustrative' },
  { id: 'tn', name: 'Tunisia', lon: 9.5, lat: 34.0, region: 'north', coverage: 'limited', provenance: 'illustrative' },
  { id: 'ly', name: 'Libya', lon: 17.2, lat: 26.3, region: 'north', coverage: 'gap', provenance: 'illustrative' },
  { id: 'eg', name: 'Egypt', lon: 30.0, lat: 26.8, region: 'north', coverage: 'limited', provenance: 'illustrative' },

  // --- West ----------------------------------------------------------------
  { id: 'mr', name: 'Mauritania', lon: -10.9, lat: 20.3, region: 'west', coverage: 'gap', provenance: 'illustrative' },
  { id: 'ml', name: 'Mali', lon: -4.0, lat: 17.6, region: 'west', coverage: 'limited', provenance: 'illustrative' },
  { id: 'ne', name: 'Niger', lon: 8.1, lat: 17.6, region: 'west', coverage: 'limited', provenance: 'illustrative' },
  { id: 'sn', name: 'Senegal', lon: -14.5, lat: 14.5, region: 'west', coverage: 'limited', provenance: 'illustrative' },
  { id: 'gm', name: 'Gambia', lon: -15.4, lat: 13.4, region: 'west', coverage: 'gap', provenance: 'illustrative' },
  { id: 'gw', name: 'Guinea-Bissau', lon: -15.2, lat: 12.0, region: 'west', coverage: 'gap', provenance: 'illustrative' },
  { id: 'gn', name: 'Guinea', lon: -10.9, lat: 10.4, region: 'west', coverage: 'gap', provenance: 'illustrative' },
  { id: 'sl', name: 'Sierra Leone', lon: -11.8, lat: 8.5, region: 'west', coverage: 'gap', provenance: 'illustrative' },
  { id: 'lr', name: 'Liberia', lon: -9.4, lat: 6.4, region: 'west', coverage: 'gap', provenance: 'illustrative' },
  { id: 'bf', name: 'Burkina Faso', lon: -1.6, lat: 12.3, region: 'west', coverage: 'limited', provenance: 'illustrative' },
  { id: 'ci', name: "Côte d'Ivoire", lon: -5.5, lat: 7.5, region: 'west', coverage: 'limited', provenance: 'illustrative' },
  { id: 'gh', name: 'Ghana', lon: -1.0, lat: 7.9, region: 'west', coverage: 'strong', provenance: 'illustrative' },
  { id: 'tg', name: 'Togo', lon: 0.8, lat: 8.6, region: 'west', coverage: 'gap', provenance: 'illustrative' },
  { id: 'bj', name: 'Benin', lon: 2.3, lat: 9.3, region: 'west', coverage: 'limited', provenance: 'illustrative' },
  { id: 'ng', name: 'Nigeria', lon: 8.7, lat: 9.1, region: 'west', coverage: 'strong', provenance: 'illustrative' },

  // --- Central -------------------------------------------------------------
  { id: 'td', name: 'Chad', lon: 18.7, lat: 15.4, region: 'central', coverage: 'gap', provenance: 'illustrative' },
  { id: 'cm', name: 'Cameroon', lon: 12.4, lat: 5.7, region: 'central', coverage: 'limited', provenance: 'illustrative' },
  { id: 'cf', name: 'Central African Rep.', lon: 20.9, lat: 6.6, region: 'central', coverage: 'gap', provenance: 'illustrative' },
  { id: 'gq', name: 'Eq. Guinea', lon: 10.3, lat: 1.6, region: 'central', coverage: 'gap', provenance: 'illustrative' },
  { id: 'ga', name: 'Gabon', lon: 11.6, lat: -0.8, region: 'central', coverage: 'gap', provenance: 'illustrative' },
  { id: 'cg', name: 'Congo', lon: 15.8, lat: -0.7, region: 'central', coverage: 'gap', provenance: 'illustrative' },
  { id: 'cd', name: 'DR Congo', lon: 23.6, lat: -2.9, region: 'central', coverage: 'gap', provenance: 'illustrative' },
  { id: 'ao', name: 'Angola', lon: 17.9, lat: -11.2, region: 'central', coverage: 'limited', provenance: 'illustrative' },

  // --- East ----------------------------------------------------------------
  { id: 'sd', name: 'Sudan', lon: 30.2, lat: 15.5, region: 'east', coverage: 'gap', provenance: 'illustrative' },
  { id: 'ss', name: 'South Sudan', lon: 30.2, lat: 7.0, region: 'east', coverage: 'gap', provenance: 'illustrative' },
  { id: 'er', name: 'Eritrea', lon: 39.0, lat: 15.2, region: 'east', coverage: 'gap', provenance: 'illustrative' },
  { id: 'et', name: 'Ethiopia', lon: 39.6, lat: 9.1, region: 'east', coverage: 'strong', provenance: 'illustrative' },
  { id: 'dj', name: 'Djibouti', lon: 42.6, lat: 11.8, region: 'east', coverage: 'gap', provenance: 'illustrative' },
  { id: 'so', name: 'Somalia', lon: 46.2, lat: 5.2, region: 'east', coverage: 'gap', provenance: 'illustrative' },
  { id: 'ug', name: 'Uganda', lon: 32.3, lat: 1.4, region: 'east', coverage: 'limited', provenance: 'illustrative' },
  { id: 'ke', name: 'Kenya', lon: 37.9, lat: 0.4, region: 'east', coverage: 'strong', provenance: 'illustrative' },
  {
    id: 'rw',
    name: 'Rwanda',
    lon: 29.9,
    lat: -1.9,
    region: 'east',
    coverage: 'limited',
    provenance: 'in-progress',
    domains: {
      climate: 'strong',
      soil: 'limited',
      crops: 'limited',
      'earth-observation': 'strong',
      water: 'gap',
      markets: 'limited',
      research: 'limited',
    },
    note: 'Pilot country. Inventory in progress.',
  },
  { id: 'bi', name: 'Burundi', lon: 29.9, lat: -3.4, region: 'east', coverage: 'gap', provenance: 'illustrative' },
  { id: 'tz', name: 'Tanzania', lon: 34.9, lat: -6.4, region: 'east', coverage: 'limited', provenance: 'illustrative' },

  // --- Southern ------------------------------------------------------------
  { id: 'zm', name: 'Zambia', lon: 27.8, lat: -13.1, region: 'southern', coverage: 'limited', provenance: 'illustrative' },
  { id: 'mw', name: 'Malawi', lon: 34.3, lat: -13.3, region: 'southern', coverage: 'limited', provenance: 'illustrative' },
  { id: 'mz', name: 'Mozambique', lon: 35.5, lat: -18.7, region: 'southern', coverage: 'gap', provenance: 'illustrative' },
  { id: 'zw', name: 'Zimbabwe', lon: 29.2, lat: -19.0, region: 'southern', coverage: 'limited', provenance: 'illustrative' },
  { id: 'bw', name: 'Botswana', lon: 24.7, lat: -22.3, region: 'southern', coverage: 'limited', provenance: 'illustrative' },
  { id: 'na', name: 'Namibia', lon: 17.1, lat: -22.6, region: 'southern', coverage: 'limited', provenance: 'illustrative' },
  { id: 'za', name: 'South Africa', lon: 24.7, lat: -29.0, region: 'southern', coverage: 'strong', provenance: 'illustrative' },
  { id: 'ls', name: 'Lesotho', lon: 28.2, lat: -29.6, region: 'southern', coverage: 'gap', provenance: 'illustrative' },
  { id: 'sz', name: 'Eswatini', lon: 31.5, lat: -26.5, region: 'southern', coverage: 'gap', provenance: 'illustrative' },
  { id: 'mg', name: 'Madagascar', lon: 46.9, lat: -18.8, region: 'southern', coverage: 'gap', provenance: 'illustrative' },
];

/** Countries whose names are worth printing on the map at desktop size. */
export const LABELLED_COUNTRIES = new Set([
  'ma', 'dz', 'eg', 'ml', 'ne', 'ng', 'gh', 'sn', 'td', 'cd', 'ao',
  'et', 'ke', 'tz', 'rw', 'za', 'na', 'zm', 'mz', 'mg', 'sd',
]);

export const PILOT_COUNTRY_ID = 'rw';
