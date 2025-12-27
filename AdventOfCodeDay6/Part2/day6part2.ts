import * as fs from 'fs';

import { Transpose } from "../../Library.ts";

const filePath: string = 'AdventOfCodeDay6/AOC6_input.txt'

const content: string = fs.readFileSync(filePath, 'utf-8')

const day6part2 = (input: string) => {
    const lines = input.split(/\r?\n/)
    
    // Indices of where each column begins
    const start_indices = lines[lines.length - 1]!
        .split("")
        // Add filler variables for indices which are whitespace
        .flatMap((x,i) => x !== " " ? i : '-')
        // Remove filler variables
        .filter(x => x !== '-')
    
    // Columns for each operation, which include appropriate whitespace in the string
    const split_lines = lines.map(x => start_indices
        .map((_,i) => x
            .slice(start_indices[i]!, start_indices[i+1]! - 1 || x.length)))
    
    // Creates an array of all of the columns
    return Transpose(split_lines).map(x => {
        // Returns the length of the longest element in that column to determine how many columns to make for each instance of an operation
        const longestElement = x.reduce((longest, current) => {
            return current.length > longest.length
                ? current
                : longest
        },
        x[0]!)
        .length

        // Creates a column for each digit in each column
        const parsed_array = Array.from({ length: longestElement }, (_, i) => x
            // Removes operator
            .filter(x => !isNaN(parseInt(x)))
            // Creates an array for each column
            .map(x => x[i]!)
            // Makes each column into one value
            .join("")
        ).map(x => parseInt(x))
        
        // Assumes there are only two operations, "+" and "*"
        return x[x.length - 1]!.trim() === "+" 
            // If the operation is sum
            ? parsed_array
                .reduce((a,b) => a + b, 0)
            // If the operation is product
            : parsed_array
                .reduce((a,b) => a * b, 1)
    })
    // Sum all results of the operations in each column
    .reduce((a,b) => a + b, 0)
}

console.log(day6part2(content))
