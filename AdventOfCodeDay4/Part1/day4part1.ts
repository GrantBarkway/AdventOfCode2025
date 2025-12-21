import * as fs from 'fs';

const filePath: string = 'AdventOfCodeDay4/Part1/adventofcode4_input.txt';

const content: string = fs.readFileSync(filePath, 'utf-8')
const lines: string[] = content.split(/\r?\n/);

const offset_indices: Number[] = [-1,0,1] 

let total_accessible_paper = 0
for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < (lines[i]?.length ?? 0); j++) {
        if ((lines[i]?.[j]) === "@") {
            let total_adjacent = 0
            for (const x of offset_indices) {
                for (const y of offset_indices) {
                    if (!((Number(x) == 0) && (Number(y) == 0))) {
                        if (lines[i+Number(x)]?.[j+Number(y)] == "@") {
                            total_adjacent += 1
                        }
                    }
                }
            }
            if (total_adjacent < 4) {
                total_accessible_paper += 1
            }
        }
    }
}

console.log(total_accessible_paper)