import * as fs from 'fs'

const filePath: string = 'AdventOfCodeDay7/AOC7_input.txt'

const content: string = fs.readFileSync(filePath, 'utf-8')

const day7part2 = (input: string) => {
    const lines = input.split(/\r?\n/)
    // Replaces the starting position with 
    const set_starting_lines: string[] = lines[0].split("").map(x => x === "." ? "." : "1")

    return lines
        // Gets the path the tachyon took by generating the computed state for an input that is truncated at each level. This was my only idea on how to write this purely functionally.
        .map((_,i) => lines
            .slice(1,i+2)
                .reduce((cur, next) => cur
                    // Computes and reassigns the "state" of each row, row by row
                    .map((_,i) => {
                        // Splits the next line to do operations on individual cells
                        const split_next = next.split("")
                        // Parses integers for relevant indexes
                        const next_int = parseInt(cur[i+1])
                        const cur_int = parseInt(cur[i])
                        const prev_int = parseInt(cur[i-1])
                        // booleans for if the cell at position i in the current row needs to be updated
                        // If the current index, i will contain a tachyon
                        const next_cell_split = split_next[i+1] === "^" && !isNaN(next_int)
                        // If a tachyon is being extended without splitting
                        const downwards_no_split = split_next[i] === "." && !isNaN(cur_int)
                        // If the current index, i will contain a tachyon
                        const prev_cell_split = split_next[i-1] === "^" && !isNaN(prev_int)
                        // If there is a splitter directly below
                        const splitter_below = split_next[i] === "^" && !isNaN(cur_int)
                        
                        // Assigns a number to how many potential paths a tachyon can take to reach a position. (I know this is not pretty, but this was the only way I could think of to make it functional)
                        return next_cell_split || prev_cell_split || downwards_no_split || splitter_below
                            ? splitter_below
                                ? "^"
                                : downwards_no_split
                                    ? next_cell_split
                                        ? prev_cell_split
                                            ? (cur_int + next_int + prev_int).toString()
                                            : (cur_int + next_int).toString()
                                        : prev_cell_split
                                            ? (cur_int + prev_int).toString()
                                            : cur[i]
                                    : next_cell_split
                                        ? prev_cell_split
                                            ? (next_int + prev_int).toString()
                                            : cur[i+1]
                                        : prev_cell_split
                                            ? cur[i-1]
                                            : cur[i]
                            : "."
                        }
                    ),
                set_starting_lines)
        )
        // Gives the line containing all of the tachyon counts
        [lines.length - 3]
        // Removes commas
        .filter(x => !isNaN(parseInt(x)))
        // Sums all the values
        .map(x => parseInt(x))
        .reduce((a,b) => a + b, 0)
}

console.log(day7part2(content))