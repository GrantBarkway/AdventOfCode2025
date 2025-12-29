import * as fs from 'fs';

import { Transpose } from "../Library.ts";

const filePath: string = 'AdventOfCodeDay6/AOC6_input.txt'

const content: string = fs.readFileSync(filePath, 'utf-8')

const day6part1 = (input: string): number => {
    const lines = input.split(/\r?\n/).map(x => x.trim().split(/\s+/)).filter(x => x.toString() !== "")
    // Creates an array of all of the columns
    return Transpose(lines).map(x => {
        
        // Removes operators (+ and *) from the array
        const operatorless_array = x
            .map(x => parseInt(x))
            .filter(x => !isNaN(x))

        // Assumes there are only two operations, "+" and "*"
        return x[x.length - 1] === "+" 
            // If the operation is sum
            ? operatorless_array
                .reduce((a,b) => a + b, 0)
            // If the operation is product
            : operatorless_array
                .reduce((a,b) => a * b, 1)
    })
    // Sum all results of the operations in each column
    .reduce((a,b) => a + b, 0)
}

console.log(day6part1(content))
