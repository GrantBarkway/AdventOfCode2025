import * as fs from 'fs';

const filePath: string = 'AdventOfCodeDay5/AOC5_input.txt';

const content: string = fs.readFileSync(filePath, 'utf-8')

const numberRegex = new RegExp('^(\\d+)$');
const rangeRegex = new RegExp('^(\\d+)-(\\d+)$')

function inRange(value: number, range: string): boolean {
    const split_range = range.split("-")
    return value >= parseInt(split_range[0]!) && value <= parseInt(split_range[1]!);
}

const day5part1 = (input: string): number => { 
    const lines = input.split(/\r?\n/)
    return lines
    .filter(x => numberRegex.test(x))
    // Checks each available ID against each range
    .map(x => 
        lines
        .filter(x => 
            rangeRegex.test(x)
        )
        .map(y => 
            inRange(parseInt(x), y)
        )
        // Removes all falses from each array, meaning the value did not fit in that corresponding range 
        .filter(x => x)
    )
    // Only keeps arrays with at least one true in them (implying the value corresponding to that array is in a fresh range)
    .filter(x => x.length > 0)
    // Counts the ID's that are in at least one range
    .length
}

console.log(day5part1(content))