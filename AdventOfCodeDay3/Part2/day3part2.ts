import * as fs from 'fs';

const filePath: string = 'AdventOfCodeDay3/Part2/adventofcode3_input.txt';

const content: string = fs.readFileSync(filePath, 'utf-8')
const lines: string[] = content.split(/\r?\n/);

let total_output = 0

for (const line of lines) {
    let bank_jolts = line.slice(0,12).split("")
    for (let i = 12; i < line.length; i++) {
        for (let j = 0; j <  bank_jolts.length; j++) {
            let bank_jolts_copy = JSON.parse(JSON.stringify(bank_jolts))
            bank_jolts_copy.splice(j,1)
            bank_jolts_copy.push(String(line[i]))
            if (Number(bank_jolts_copy.join("")) > Number(bank_jolts.join(""))) {
                bank_jolts = bank_jolts_copy
                break
            }
        }
    }
    total_output += Number(bank_jolts.join(""))
}

console.log(total_output)