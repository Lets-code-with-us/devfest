export class Assert {
	public assert({ expected, actual }: { expected: any; actual: any }) {
		if (expected != actual) {
			throw new Error(`Expected ${expected} - Actual ${actual}`);
		}
	}
}
