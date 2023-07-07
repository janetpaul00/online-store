import clsx from "clsx";

export default function Button({ disabled = false, className, children }) {
  let classes = clsx("ui-button", className);

  return (
    <button disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
