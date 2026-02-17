import type { LucideIcon } from "lucide-react";

// Service card type (used in WhatWeDo)
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Step card type (used in HowItWorks)
export interface Step {
  icon: LucideIcon;
  step: string;
  description: string;
}