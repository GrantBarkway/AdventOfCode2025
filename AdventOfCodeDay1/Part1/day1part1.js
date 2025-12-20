import * as fs from 'fs';
const filePath = 'AdventOfCodeDay1/Part2/adventofcode1_input.txt';
function solveSafe(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split(/\r?\n/);
    let total_number = 0;
    let pos = 50;
    let direction;
    let magnitude;
    for (const line of lines) {
        direction = line.slice(0, 1);
        magnitude = Number.parseInt(line.slice(1));
        if (direction == "L") {
            pos = (((pos - magnitude) + 100) % 100) % 100;
        }
        else if (direction == "R") {
            pos = (((pos + magnitude) + 100) % 100) % 100;
        }
        if (pos == 0) {
            total_number += 1;
        }
    }
    return total_number;
}
console.log(solveSafe(filePath));
//# sourceMappingURL=day1part1.js.map