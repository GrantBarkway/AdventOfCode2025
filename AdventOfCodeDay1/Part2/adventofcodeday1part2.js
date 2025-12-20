import * as fs from 'fs';
const filePath = 'AdventOfCodeDay1/Part1/adventofcode1_input.txt';
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
        if (!Number.isNaN(magnitude)) {
            total_number += Math.floor(magnitude / 100);
        }
        const remainder = magnitude % 100;
        let next_pos = 0;
        if (direction === "L") {
            next_pos = pos - remainder;
            if ((next_pos <= 0) && (pos != 0)) {
                total_number++;
                next_pos %= 100;
            }
        }
        else if (direction === "R") {
            next_pos = pos + remainder;
            if ((next_pos >= 100) && (pos != 0)) {
                total_number++;
                next_pos %= 100;
            }
        }
        if (next_pos < 0) {
            next_pos += 100;
        }
        pos = next_pos;
    }
    return total_number;
}
console.log("Answer: ", solveSafe(filePath));
//# sourceMappingURL=adventofcodeday1part2.js.map