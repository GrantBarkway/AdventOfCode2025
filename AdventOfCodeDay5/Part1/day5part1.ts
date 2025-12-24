import * as fs from 'fs';

const filePath: string = 'AdventOfCodeDay5/AOC5_input.txt';

const content: string = fs.readFileSync(filePath, 'utf-8')

const numberRegex = new RegExp('^(\\d+)$');
const rangeRegex = new RegExp('^(\\d+)-(\\d+)$')

function inRange(value: number, range: string): boolean {
    const min = parseInt(range.split("-")[0])
    const max = parseInt(range.split("-")[1])
    return value >= min && value <= max;
}

const day5part1 = (input: string): number => { 
    const ranges = input.split(/\r?\n/).filter(x => rangeRegex.test(x) == true)
    const availableIds = input.split(/\r?\n/).filter(x => numberRegex.test(x) == true)
    
    return availableIds
    // Checks each available ID against each range
    .map(x => 
        ranges.map(y => inRange(parseInt(x), y))
    // Removes all falses from each array, meaning the value did not fit in that corresponding range 
    .filter(x => x == true))
    // Only keeps arrays with at least one true in them (implying the value corresponding to that array is in a fresh range)
    .filter(x => x.length > 0)
    // Counts the ID's that are in at least one range
    .length
}

console.log(day5part1(content))