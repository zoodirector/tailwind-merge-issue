import { PropsWithChildren, StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { cx } from "./lib/utils";

function Test({
  className,
  children,
}: PropsWithChildren<{ className?: string | undefined }>) {
  return (
    <p className={cx("mb-2 text-red-600 text-tremor-default", className)}>
      {children}
    </p>
  );
}

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <StrictMode>
      <div className="p-4">
        <Test>className undefined: red text ❌, small font ✔</Test>
        <Test className="bg-slate-100">
          className="bg-slate-100": red text ❌, small font ✔
        </Test>
        <Test className="text-green-600">
          className="text-green-600": green text ✔, small font: ❌
        </Test>
      </div>
    </StrictMode>,
  );
}
