import {Props,Options} from "./mcq.types"

const optionsArray:Array<Options>=[
    {value:1,labelText:"Classes and IDs both are reusable"},
    {value:2,labelText:"Classes are unique and IDs are reusable"},
    {value:1,labelText:"IDs are unique and Classes are reusable"},
    {value:1,labelText:"Both classes and IDs are reusable"},

]
const data:Props = {
    question:"What is the  difference between class and id in css",
    description:"Classes and IDs in are something we have learned in unit-2",
    required: true,
    options:optionsArray,
    currect_option:3,
    orientation:"horizontal",
}
export default data;