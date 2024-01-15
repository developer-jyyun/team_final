import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import RQProvider from "./_component/common/RQProvider";

const container = (
  ui: ReactElement,
  option?: Omit<RenderOptions, "queries">,
) => {
  render(ui, { wrapper: RQProvider, ...option });
};

export * from "@testing-library/react";

export { container as render };
