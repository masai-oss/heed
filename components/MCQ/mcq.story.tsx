import MCQ from "./mcq";
import data from "./data";
export default {
  title: "MCQ",
};

export const Horizontal = () => (
  <MCQ
    question={data.question}
    description={data.description}
    required={data.required}
    options={data.options}
    currect_option={data.currect_option}
    orientation={data.orientation}
  />
);

export const Vertical = () => (
    <MCQ
      question={data.question}
      description={data.description}
      required={data.required}
      options={data.options}
      currect_option={data.currect_option}
      orientation={"vertical"}
    />
  );
