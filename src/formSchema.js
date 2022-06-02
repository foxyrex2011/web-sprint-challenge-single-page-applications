import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("name must be at least 2 characters")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(["small", "medium", "large"], "Pick a size"),
    special: yup
        .string()
        .trim()
        .required("sepcial instructions only")
        .min(0, "Anything else?"),
    topping1: yup.boolean(),
    topping2: yup.boolean(),
    topping3: yup.boolean(),
    topping4: yup.boolean()
});

export default formSchema;