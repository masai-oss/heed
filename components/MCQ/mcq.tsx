import { RadioGroup, Radio } from "@mantine/core";
import React, { useState } from "react";
import { Props } from "./mcq.types";
import { Image } from "@mantine/core";
import { imageStyles } from "./styles";
import { Grid } from "@mantine/core";
export default function MCQ(props: Props) {
  const { question, description, required, options, orientation, image, alt } = props;
  const [value, setValue] = useState<string>("1");
  let span = orientation == "horizontal" ? 8 : 3;
  return (
    <Grid>
      <Grid.Col span={span}>
        <RadioGroup
          label={question}
          orientation={orientation}
          description={description}
          required={required}
          value={value.toString()}
          onChange={(value) => setValue(value)}
        >
          {options.map((option) => (
            <Radio
              key={option.value}
              value={option.value.toString()}
              label={option.labelText}
            ></Radio>
          ))}
        </RadioGroup>
      </Grid.Col>
      {image ? (
        <Grid.Col span={3}>
          <Image
            sx={imageStyles}
            radius="md"
            radioGroup="Question"
            src={image}
            alt={alt ? alt : "Image about Question"}
          />
        </Grid.Col>
      ) : null}
    </Grid>
  );
}



