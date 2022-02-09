import React from "react";
import Character from "../../views/Character";

export default function Component({ id }: { id: string }): JSX.Element {
  return <Character id={id} />;
}
