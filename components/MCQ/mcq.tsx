import { RadioGroup, Radio } from "@mantine/core";
import React from "react";
import { Props } from "./mcq.types";

export default function MCQ(props: Props) {
  const { question, description, required, options , orientation } = props;
  return (
    <RadioGroup label={question} orientation={orientation}  description={description} required={required}>
      {options.map((option) => (
        <Radio value={option.value.toString()} label={option.labelText}></Radio>
      ))}
    </RadioGroup>
  );
}
