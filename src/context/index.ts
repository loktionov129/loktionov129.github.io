import type { Locale } from '@/types';
import { createContext } from 'react';

export interface LangContextType {
  lang: string;
  t: Locale;
}

export const LangContext = createContext<LangContextType | null>(null);
