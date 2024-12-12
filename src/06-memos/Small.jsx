import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("I've printed again!!");
  return <small>{value}</small>;
});
