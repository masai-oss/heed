export type Props = {
    question: string;
    description: string;
    options:Array<Options>;
    required: boolean;
    currect_option:number,
    orientation:"horizontal" | "vertical",
    image?:string,
    alt?:string,
}

export type Options = {
    value: number;
    labelText: string;
};






