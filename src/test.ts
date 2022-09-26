import * as z from 'zod';
import fs from 'fs';
import path from 'path';
import { AutoTest } from './types/Autotest';
import { AutoTest_Zod } from './types/Autotest_zod';
import { validator } from './modules/validator/validator';

const testFolderList = fs.readdirSync('./tests');

for (let filename of testFolderList) {
	if (!filename.endsWith('.json')) {
		continue;
	}

	console.log(`trying ${filename}`);

	let testFile = fs.readFileSync(path.join('./tests', filename), { encoding: 'utf8' });
	let testPayload: unknown = JSON.parse(testFile);

	try {
		let res: AutoTest = validator.validate(testPayload, AutoTest_Zod);
		console.log('PASS');
	} catch (e) {
		if (e instanceof z.ZodError) {
			for (let issue of e.issues) {
				console.error({
					message: issue.message,
					path: issue.path.join('.'),
					code: issue.code,
				});
			}
		}
	}
	console.log(`${'='.repeat(20) + '\n'}`.repeat(3));
}
