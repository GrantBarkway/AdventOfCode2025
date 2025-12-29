import * as fs from 'fs';

const filePath: string = 'AdventOfCodeDay2/AOC2_input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8')

// Regex for numbers repeated twice or more
const repeatedNumberRegex = new RegExp('^(\\d+)\\1{1,}$');

const day2part2 = (input: string): number =>
    input.split(",")
    .map(range => {
        const split_range = range.split("-")
        return [parseInt(split_range[0]!), parseInt(split_range[1]!)]
    })
    // Creates an array of all values in the range
    .flatMap(([start, end]) => 
        Array.from(
            Array(end! - start! + 1),(_,i)=> i + start!
        )
    )
    // Removes all ID's that are not invalid
    .filter(x => repeatedNumberRegex.test(x.toString()))
    // Sums all invalid ID's
    .reduce((a,b) => a + b, 0)

console.log("Sum of invalid ids: ", day2part2(content))