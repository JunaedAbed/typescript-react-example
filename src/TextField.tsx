import React, { useRef, useState } from "react";

interface Person {
  fName: string;
  lName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  obj?: {
    f1: string;
  };
  person: Person;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<TextNode>({ text: "hola" });

  const ref = useRef<HTMLInputElement>(null);

  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input ref={ref} onChange={handleChange} />
    </div>
  );
};
