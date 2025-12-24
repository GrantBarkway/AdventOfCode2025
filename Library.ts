//------------------------------------------------------------------------------
// Arrays
//------------------------------------------------------------------------------
export const Scan = <T>(
	arr: T[],
	f: (acc: T, val: T) => T,
	init: T,
): T[] => {
	let acc = init;
	return arr.map((val) => {
		acc = f(acc, val);
		return acc;
	})
}

export const Init = <T>(n: number, f: (i: number) => T): T[] =>
	Array(n).fill(0).map((_, i) => f(i))

export const Iota = (n: number, start: number): number[] =>
	Init(n, i => start + i)

export const AllPairs = <T>(xs: T[]): [T, T][] => {
	const allPairsRec = <T>(acc: [T, T][], xs: T[]): [T, T][] => {
		if (xs.length === 0) return acc
		const [head, tail] = [xs[0]!, xs.slice(1)]
		const pairs = tail.map((t): [T, T] => [head, t])
		return allPairsRec(acc.concat(pairs), tail)
	}
	return allPairsRec([], xs)
}

//------------------------------------------------------------------------------
// SemiGroups
//------------------------------------------------------------------------------
export const Sum = (a: number, b: number): number => a + b

export const MaxBy = <T>(f: (t: T) => number) => (a: T, b: T): T =>
	f(a) > f(b) ? a : b