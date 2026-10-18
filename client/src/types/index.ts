/**
 * Domain model for the SHAZA Data Map.
 *
 * These types describe the shape of a real agricultural data catalogue. The
 * repository currently fills them with clearly-labelled illustrative values,
 * but the contracts are the ones a live API should eventually satisfy — so
 * swapping mock data for a fetch does not ripple into the components.
 */

/** How well a country or domain is covered by discoverable data. */
export type CoverageLevel = 'strong' | 'limited' | 'gap' | 'unassessed';

/** Where a record's values come from. Nothing on the site may claim 'verified'
 *  until it actually has been. */
export type Provenance = 'illustrative' | 'in-progress' | 'verified';

export type DataDomainId =
  | 'climate'
  | 'soil'
  | 'crops'
  | 'earth-observation'
  | 'water'
  | 'markets'
  | 'research';

export interface DataDomain {
  id: DataDomainId;
  index: string;
  name: string;
  summary: string;
  /** Examples of what the domain covers, used as tags on the domain cards. */
  examples: string[];
  icon: IconName;
}

export interface AfricanCountry {
  id: string;
  name: string;
  /** Centroid, in degrees. Drives both the map regions and the labels. */
  lon: number;
  lat: number;
  region: 'north' | 'west' | 'central' | 'east' | 'southern';
  /** Illustrative until a country's inventory is actually complete. */
  coverage: CoverageLevel;
  provenance: Provenance;
  /** Only set where a country has been looked at. Rwanda is the pilot. */
  domains?: Partial<Record<DataDomainId, CoverageLevel>>;
  note?: string;
}

/** One catalogue entry, as the Data Map would eventually describe it. */
export interface DatasetRecord {
  id: string;
  country: string;
  title: string;
  domain: DataDomainId;
  coverageYears: [number, number];
  resolution: string;
  access: 'Open' | 'Restricted' | 'On request' | 'Unknown';
  formats: string[];
  quality: 'HIGH COVERAGE' | 'MODERATE' | 'LIMITED';
  qualityLevel: CoverageLevel;
  provenance: Provenance;
}

export type RoadmapStatus = 'building' | 'research' | 'future';

export interface RoadmapStage {
  id: string;
  title: string;
  summary: string;
  status: RoadmapStatus;
  /** Optional sub-items, used by the open-ended final stage. */
  items?: string[];
}

export interface MethodologyStep {
  id: string;
  index: string;
  title: string;
  summary: string;
}

export interface GlobalCase {
  id: string;
  country: string;
  focus: string;
  question: string;
}

export interface Audience {
  id: string;
  name: string;
  summary: string;
  /** Farmer tooling is downstream of everything else, and must say so. */
  future?: boolean;
}

export interface PipelineStage {
  id: string;
  label: string;
  kind: 'input' | 'shaza' | 'downstream' | 'outcome';
}

export interface Principle {
  id: string;
  name: string;
  summary: string;
}

export type IconName =
  | 'climate'
  | 'soil'
  | 'crops'
  | 'satellite'
  | 'water'
  | 'markets'
  | 'research'
  | 'discover'
  | 'connect'
  | 'build';
