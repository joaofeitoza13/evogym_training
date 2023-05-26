import { TChildren } from "./types";

const errorStyles = "mt-1 text-primary-700 text-sm/4";

export const ErrorMessage = ({ children }: TChildren) => {
  return (
    <>
      <p className={errorStyles}>{children}</p>
    </>
  );
};
