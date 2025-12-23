import * as fs from 'fs';

const filePath: string = 'AdventOfCodeDay6/AOC6_input.txt';

const content: string = fs.readFileSync(filePath, 'utf-8')
const lines: string[] = content.split(/\r?\n/);

let line_values = []
for (const line of lines) {
    if (line != '') {
        line_values.push(line.trim().split(/\s+/))
    }
}

let solution_array = []
for (let i = 0; i < line_values[0]!.length; i++) {
    
    let solution;
    if (line_values[line_values.length-1]![i] == "+") {
        solution = 0
    } else {
        solution = 1
    }
    
    for (let j = 0; j < line_values.length - 1; j++) {
        if (line_values[line_values.length-1]![i] == "+") {
            solution += parseInt(line_values[j]![i]!)
        } else if (line_values[line_values.length-1]![i] == "*") {
            solution *= parseInt(line_values[j]![i]!)
        }
    }
    solution_array.push(solution)
}

console.log(solution_array.reduce((sum, current) => sum + current, 0))
