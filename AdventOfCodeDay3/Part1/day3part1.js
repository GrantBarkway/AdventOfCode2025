import * as fs from 'fs';
const filePath = 'AdventOfCodeDay3/Part1/adventofcode3_input.txt';
const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split(/\r?\n/);
let total_output = 0;
for (const line of lines) {
    let first_digit = 0;
    let second_digit = 0;
    if (line != "") {
        for (let i = 0; i < line.length; i++) {
            if ((Number(line[i]) > first_digit) && (i < line.length - 1)) {
                first_digit = Number(line[i]);
                second_digit = 0;
            }
            else {
                if (Number(line[i]) > second_digit) {
                    second_digit = Number(line[i]);
                }
            }
        }
    }
    let bank_jolts = Number(String(first_digit) + String(second_digit));
    total_output += bank_jolts;
}
console.log(total_output);
//# sourceMappingURL=day3part1.js.map