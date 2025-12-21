import * as fs from 'fs';

const filePath: string = 'AdventOfCodeDay4/Part2/adventofcode4_input.txt';

const content: string = fs.readFileSync(filePath, 'utf-8')
const lines: string[] = content.split(/\r?\n/);

const offset_indices: number[] = [-1,0,1] 

let paper_roll_indices = []
for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < (lines[i]?.length ?? 0); j++) {
        if ((lines[i]?.[j]) === "@") {
            paper_roll_indices.push([i,j])
        }
    }
}

let i
let j
function remove_rolls(paper_roll_indices: any[]) : [any[], number] {
    let total_removed = 0
    for (let roll in paper_roll_indices) {
        [i,j] = paper_roll_indices[roll]
        let total_adjacent = 0
        for (const x of offset_indices) {
            for (const y of offset_indices) {
                if (!((x == 0) && (y == 0))) {
                    if (lines[i+x]?.[j+y] == "@") {
                        total_adjacent += 1
                    }
                }
            }
        }
        if (total_adjacent < 4) {
            let new_line = lines[i]!.split("")
            new_line[j] = "."
            lines[i] = new_line.join("")
            paper_roll_indices.splice(parseInt(roll),1)
            total_removed++
        }
    }
    return [paper_roll_indices, total_removed]
}

let new_roll_indices: any[]
let removed_prev: number

function recursively_remove(paper_roll_indices: any[], total_removed: number) {
    [new_roll_indices, removed_prev] = remove_rolls(paper_roll_indices)
    if (removed_prev == 0) {
        return total_removed
    } else {
        return recursively_remove(new_roll_indices, total_removed + removed_prev)
    }
}

const answer = recursively_remove(paper_roll_indices,0)
console.log(answer)