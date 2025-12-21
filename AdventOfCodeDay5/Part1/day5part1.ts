import * as fs from 'fs';

const filePath: string = 'AdventOfCodeDay5/Part1/adventofcode5_input.txt';

const content: string = fs.readFileSync(filePath, 'utf-8')
const lines: string[] = content.split(/\r?\n/);

function inRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

let ranges = []
let ids = []
let reached_ids = false
for (const line of lines) {
    if (line == "") {
        reached_ids = true
    } else {
        if (reached_ids) {
            ids.push(line)
        } else {
            ranges.push([line.split("-")[0],line.split("-")[1]])
        }
    }
}

let fresh_id_count = 0
for (const id of ids) {
    for (const range of ranges) {
        if (inRange(parseInt(id),parseInt(range[0]!),parseInt(range[1]!))) {
            fresh_id_count++
            break
        }
    }
}

console.log(fresh_id_count)
