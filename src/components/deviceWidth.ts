// @ts-nocheck
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig)

export const getTextWidth = (deviceWidth: number, characterSize?: number = 12, padding?: number = 6): number => {
  return deviceWidth / characterSize - padding
  if (deviceWidth >= pxAsNumber(fullConfig.theme.screens.lg)) {
    return 60
  } else if (deviceWidth >= pxAsNumber(fullConfig.theme.screens.md)) {
    return 60
  } else if (deviceWidth >= pxAsNumber(fullConfig.theme.screens.sm)) {
    return 30
  }

  return 20
}

const pxAsNumber = (value: string) => {
  return Number.parseInt(value.replace("px", ""))
}