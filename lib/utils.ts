// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import providersData from "../data/providers.json";

// Funksion për Tailwind class merging
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Funksion për marrjen e providers
export const getProviders = () => {
  return providersData;
};
