import { handleSubmit } from "../src/client/js/formHandler.js";

describe(handleSubmit, () => {
    test("it is defined", () => {
        expect(handleSubmit).toBeDefined
    });
});