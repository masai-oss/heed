import { RadioGroup, Radio } from "@mantine/core";
import React, { useState } from "react";
import { Props } from "./mcq.types";

export default function MCQ(props: Props) {
  const { question, description, required, options, orientation } = props;
  const [value, setValue] = useState<string>("1");
  return (
    <RadioGroup
      label={question}
      orientation={orientation}
      description={description}
      required={required}
      value={value.toString()}
      onChange={(value)=> setValue(value)}
    >
      {options.map((option) => (
        <Radio key={option.value} value={option.value.toString()} label={option.labelText}></Radio>
      ))}
    </RadioGroup>
  );
};










