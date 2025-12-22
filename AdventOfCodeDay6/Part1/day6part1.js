import * as fs from 'fs';
const filePath = 'AdventOfCodeDay6/Part1/adventofcode6_input.txt';
const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split(/\r?\n/);
let line_values = [];
for (const line of lines) {
    line_values.push(line.split(" "));
}
let solution_array = [];
for (let i = 0; i < line_values[0].length; i++) {
    let solution;
    if (line_values[line_values.length - 1][i] == "+") {
        solution = 0;
    }
    else {
        solution = 1;
    }
    for (let j = 0; j < line_values.length - 1; j++) {
        if (line_values[line_values.length - 1][i] == "+") {
            solution += parseInt(line_values[j][i]);
        }
        else if (line_values[line_values.length - 1][i] == "*") {
            solution *= parseInt(line_values[j][i]);
        }
    }
    solution_array.push(solution);
}
console.log(solution_array);
console.log(solution_array.reduce((sum, current) => sum + current, 0));
//# sourceMappingURL=day6part1.js.map