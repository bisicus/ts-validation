import * as z from 'zod';

/////   PRE-TEST   /////
const ContactTest_Zod = z
	.object({
		cartridge: z.boolean(),
		tau_changed: z.boolean(),
		tau: z.number().nullable(),
		ramp: z.number().nullable(),
		dc_voltage_compensation: z.optional(z.number().positive().nullable()),
	})
	.strict();

export const PreTest_Zod = z
	.object({
		contact: ContactTest_Zod,
	})
	.strict();

/////   POST-TEST   /////

const _pixelWells = z.array(z.number().int()).length(2);

const ChannelOffset_Zod = z
	.object({
		average: z.array(z.number()).length(2),
		stdev: z.array(z.number()).length(2),
		farthest: _pixelWells,
		wells: z.record(_pixelWells),
	})
	.strict();

const OffsetTest_Zod = z.record(ChannelOffset_Zod);

export const PostTest_Zod = z
	.object({
		binning: z.number().int(),
		offset: OffsetTest_Zod,
	})
	.strict();

/////   MAIN OBJECT   /////

export const AutoTest_Zod = z
	.object({
		pre_test: PreTest_Zod.nullable().optional(),
		post_test: PostTest_Zod.nullable().optional(),
	})
	.strict();

// TODO: additional properties: false
