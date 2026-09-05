import * as fs from 'fs';

const filePath: string = 'AdventOfCodeDay4/AOC4_input.txt';

const content: string = fs.readFileSync(filePath, 'utf-8')

const day4part1 = (input: string) => {
    const lines = content.split(/\r?\n/);
    const num_rows = lines.length
    const num_cols = lines[0]?.length ?? 0
    const offsets = [1,-1,num_cols,num_cols+1,num_cols-1,-num_cols,-num_cols+1,-num_cols-1]
    // Indices of every element in the grid
    const indices = [...Array(num_rows * num_cols).keys()]
    const flattened_lines = lines.map(line => line.split("")).flat()

    return indices.map(i => {
        // Returns -1 if index is not a roll, and the surrounding (up to) 8 indices if it is a roll
        return flattened_lines[i] !== "@"
            ? -1
            // Maps an index to an array of the 8 surrounding indices
            : offsets.map(offset => {
                    const offset_index = i + offset
                    // Checks column boundaries to ensure that the offset index is not on the other side of the grid
                    return i % num_cols === 0 && (offset === -1 || offset === num_cols-1 || offset === -num_cols-1)
                        ? -1 
                        : ((i + 1) % num_cols === 0 && (offset === 1 || offset === num_cols+1 || offset === -num_cols+1))
                            ? - 1
                            : offset_index
                })
                // Removes indices that are out of bounds or are not "@" character
                .filter(j =>
                    j >= 0 && j < flattened_lines.length && flattened_lines[j] === "@"
                )
                // Returns arrays of indices that are adjacent the current index and are "@" character if said index is "@"
                .filter(_ => flattened_lines[i] === "@")
    })
    // Removes indices that are not rolls and arrays of adjacent indices that are not rolls
    .filter(a => 
        Array.isArray(a) && a.length < 4
    ).length
}

console.log(day4part1(content))