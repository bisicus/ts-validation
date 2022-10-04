import * as z from 'zod';
import zodToJsonSchema from 'zod-to-json-schema';

import { AutoTest_Zod } from './types/Autotest_zod';

const jsonSchema = zodToJsonSchema(AutoTest_Zod, 'autotest');

console.log(JSON.stringify(jsonSchema));
