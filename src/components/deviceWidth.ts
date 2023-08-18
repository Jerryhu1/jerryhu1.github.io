// @ts-nocheck
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig)

export const getTextWidth = (deviceWidth: number): number => {
  console.log(fullConfig.theme.screens)
  if (deviceWidth >= pxAsNumber(fullConfig.theme.screens.lg)) {
    return 60
  } else if (deviceWidth >= pxAsNumber(fullConfig.theme.screens.md)) {
    return 60
  } else if (deviceWidth >= pxAsNumber(fullConfig.theme.screens.sm)) {
    return 20
  }

  return 15
}

const pxAsNumber = (value: string) => {
  return Number.parseInt(value.replace("px", ""))
}