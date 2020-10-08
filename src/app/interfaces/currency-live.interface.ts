
export interface CurrencyLive{
  success: boolean;
  terms: string;
  privacy: string;
  historical?: boolean;
  date?: Date;
  timestamp: number;
  source: string;
  quotes: [];
}
