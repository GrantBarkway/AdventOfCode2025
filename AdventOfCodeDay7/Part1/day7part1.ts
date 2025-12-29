import * as fs from 'fs'

const filePath: string = 'AdventOfCodeDay7/AOC7_input.txt'

const content: string = fs.readFileSync(filePath, 'utf-8')

const day7part1 = (input: string): number => {
    const lines = input.split(/\r?\n/)
    
    return lines
        // The last element is all .'s, this removes it for efficiency
        .slice(0,lines.length - 1)
        // Gets the path the tachyon took by generating the computed state for an input that is truncated at each level. This was my only idea on how to write this purely functionally.
        .map((_,i) => lines
            .slice(1,i+2)
                .reduce((cur, next) => cur
                    // Computes and reassigns the "state" of each row, row by row
                    .map((_,i) => {
                        // Splits the next line to do operations on individual cells
                        const split_next = next.split("")
                        // booleans for if the cell at position i in the current row needs to be updated
                        const next_cell_split = split_next[i+1] === "^" && cur[i+1] === "|"
                        const current_cell_downwards = split_next[i] === "." && (cur[i] === "S" || cur[i] ==="|")
                        const prev_cell_split = split_next[i-1] === "^" && cur[i-1] === "|"
                        const next_is_split = split_next[i] === "^" && cur[i] === "|"
                        
                        return next_cell_split || prev_cell_split || current_cell_downwards || next_is_split
                            ? next_is_split
                                ? "^"
                                : "|"
                            : "."
                    }),
                lines[0].split("")
            )
        )
        // Removes all rows that do not contain "^"
        .map(x => x
            .filter(y => y === "^"))
        .filter(x => x.length > 0)
        // Sums the total number of splits
        .reduce((a,b) => a + b.length, 0)
}

console.log(day7part1(content))