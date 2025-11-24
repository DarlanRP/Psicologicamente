declare module "*.svg" {
  import * as React from "react";

  // Para importar como React Component
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  // Para importar como caminho (string)
  const src: string;
  export default src;
}
