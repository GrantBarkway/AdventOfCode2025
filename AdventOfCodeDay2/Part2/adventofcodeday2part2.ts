import * as fs from 'fs';

const filePath: string = 'AdventOfCodeDay2/Part1/adventofcode2_input.txt';

function SumInvalidID(filePath: string) {
    const content: string = fs.readFileSync(filePath, 'utf-8')

    const id_ranges = content.split(",")
    
    const id_range_list = id_ranges.map(range => [Number(range.split("-")[0]), Number(range.split("-")[1])])
    
    let total_sum = 0

    let start_index
    let end_index
    for ([start_index, end_index] of id_range_list) {
        if ((start_index !== undefined) && (end_index !== undefined)) {
            for(start_index; start_index <= end_index; start_index++) {
                let start_index_string = start_index.toString()
                if (start_index_string.length % 2 == 0) {
                    if (start_index_string.slice(0,start_index_string.length/2) == start_index_string.slice(start_index_string.length/2)) {
                        total_sum += start_index
                    }
                }
            }
        }
    }

    return total_sum
}

console.log("Answer: ", SumInvalidID(filePath))