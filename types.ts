export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Wrench' | 'Droplet' | 'Snowflake' | 'Speaker' | 'Shield' | 'Zap';
}

export interface QuoteRequest {
  name: string;
  phone: string;
  vehicle: string;
  issue: string;
}

export interface AIResponse {
  technicalSummary: string;
  suggestedService: string;
  whatsappMessage: string;
}