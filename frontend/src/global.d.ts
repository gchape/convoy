// src/global-types.d.ts
import type { TargetAndTransition, Transition } from "motion";
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

  interface Shape {
    id: string;
    type: "rect" | "circle" | "plus";
    style: Record<string, string | number>;
    animate: TargetAndTransition;
    transition: Transition;
    stroke: string;
    fill?: string;
    strokeWidth: number;
    strokeDasharray?: string;
  }

  type Feature = Array<string>;

  type Plan = {
    id: string;
    name: string;
    price: string;
    period: string | null;
    description: string;
    highlight: boolean;
    features: Feature;
  };
}

export {};
