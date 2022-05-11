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

  export const Horizontal_with_Image = () => (
    <MCQ
      question={data.question}
      description={data.description}
      required={data.required}
      options={data.options}
      currect_option={data.currect_option}
      orientation={data.orientation}
      image={"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png"}
    />
  );
  
  export const Vertical_with_Image = () => (
      <MCQ
        question={data.question}
        description={data.description}
        required={data.required}
        options={data.options}
        currect_option={data.currect_option}
        orientation={"vertical"}
        image={"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png"}
      />
    );




    
    





