
import { MainTheme } from "@/theme/mainTheme";

type mainType = typeof MainTheme;

declare module "styled-components" {
    export interface DefaultTheme extends mainType {}
}