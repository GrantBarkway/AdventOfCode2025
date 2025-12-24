import * as fs from 'fs';

const filePath: string = 'AdventOfCodeDay2/AOC2_input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8')

// Regex for numbers repeated exactly twice
const repeatedNumberRegex = new RegExp('^(\\d+)\\1{1}$');

const day2part1 = (input: string): number =>{
    const sum_invalid_ids = content.split(",")
    .map(range => [Number(range.split("-")[0]), Number(range.split("-")[1])])
    // Creates an array of all values in the range
    .map(start => Array.from(Array(start[1]! - start[0]! + 1),(x,i)=>i + start[0]!))
    // Puts all values in nested arrays into one single array
    .flat(1)
    // Removes all ID's that are not invalid
    .filter(x => repeatedNumberRegex.test(x.toString()))
    // Sums all unvalid ID's
    .reduce((a,b) => a + b, 0)
    return sum_invalid_ids
}

console.log("Sum of invalid ids: ", day2part1(content))