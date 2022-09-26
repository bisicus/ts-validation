import * as z from 'zod';

class Validator {
	constructor() {}

	public validate = (payload: unknown, validator: z.AnyZodObject) => {
		return validator.parse(payload);
	};
}
export const validator = new Validator();
