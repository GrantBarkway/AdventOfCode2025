import * as fs from 'fs';

import { Scan } from "../Library.ts";

const filePath: string = 'AdventOfCodeDay1/AOC1_input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8')

const day1part1 = (input: string) => {
    const lines = input.split(/\r?\n/)
    
    // Determines all positions of the dial at the end of every rotation
    return Scan(
        lines.map(x => {
            const magnitude = parseInt(x.slice(1))
            // -magnitude corresponds to counterclockwise (left movement), magnitude corresponds to clockwise (right movement)
            return x.slice(0,1) === "L"
                ? -magnitude
                : magnitude
            }
        ),
        (cur: number, next: number) => (((cur + next) % 100) + 100) % 100,
        50
    )
    // Count the number of 0's
    .filter(x => x === 0)
    .length
}

console.log(day1part1(content))