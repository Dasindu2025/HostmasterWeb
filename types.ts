// Added React import to provide access to React namespace types
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
  mega?: boolean;
}

export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface PriceCard {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  color: string;
}