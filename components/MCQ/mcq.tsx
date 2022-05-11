import { RadioGroup, Radio } from "@mantine/core";
import React, { useState } from "react";
import { Props } from "./mcq.types";
import { Image } from '@mantine/core';
import { imageStyles } from "./styles";
export default function MCQ(props: Props) {
  const { question, description, required, options, orientation,image,alt } = props;
  const [value, setValue] = useState<string>("1");
  return (
    <div style={{display: 'flex'}}>
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
    {image ? (<Image sx={imageStyles} radius="md" radioGroup="Question"  src={image} alt={alt?alt:"Image about Question"}/>):<></>} 
    </div>
  );
};










