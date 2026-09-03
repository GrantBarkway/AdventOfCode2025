import * as fs from 'fs';

const filePath: string = 'AdventOfCodeDay3/AOC3_input.txt';
    
const content: string = fs.readFileSync(filePath, 'utf-8');

const day3part1 = (input: string) => {
    const lines = input.split(/\r?\n/);
    
    return lines.map(line => {
        const line_array = line.split("").map(x => Number(x))
        // Gets index of largest value from the first n-1 spots
        const first_index = line_array.indexOf(Math.max(...line_array.slice(0,-1)));
        // Gets index of largest value from the remaining spots that follow
        const second_index = line_array.indexOf(Math.max(...line_array.slice(first_index+1)))
        return Number(String(line[first_index]) + String(line[second_index]))
    }).reduce((a,b) => a + b, 0)
}

console.log(day3part1(content))