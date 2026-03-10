// src/global-types.d.ts
import * as React from "react";

declare global {
  interface MenuItem {
    label: string;
    icon: React.ReactNode;
    danger?: boolean;
  }

  interface MenuSeparator {
    sep: true;
  }

  type MenuEntry = MenuItem | MenuSeparator;

  type User = {
    name: string;
    email: string;
    initials: string;
    shortName: string;
  };

  type Plan = {
    id: string;
    name: string;
    price: string;
    period: string | null;
    description: string;
    highlight: boolean;
    features: string[];
  };
}

export {};
