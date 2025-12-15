import { ReactNode } from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: ReactNode;
  tags: string[];
}

export interface ContactDetails {
  phone: string;
  whatsappUrl: string;
  schedule: string;
  days: string;
  closedDay: string;
}