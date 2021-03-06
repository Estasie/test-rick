import React from "react";
import Episode from "../../views/Episode";

export default function Component({ id }: { id: string }): JSX.Element {
  return <Episode id={id} />;
}
