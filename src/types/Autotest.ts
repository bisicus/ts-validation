import * as z from 'zod';
import * as atz from './Autotest_zod';

export type PreTest = z.infer<typeof atz.PreTest_Zod>;
export type PostTest = z.infer<typeof atz.PostTest_Zod>;
export type AutoTest = z.infer<typeof atz.AutoTest_Zod>;
