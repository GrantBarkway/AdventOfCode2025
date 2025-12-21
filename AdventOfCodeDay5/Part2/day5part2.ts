import * as fs from 'fs';

const filePath: string = 'AdventOfCodeDay5/Part2/adventofcode5_input.txt';

const content: string = fs.readFileSync(filePath, 'utf-8')
const lines: string[] = content.split(/\r?\n/);

let ranges = []
for (const line of lines) {
    if (line == "") {
        break
    } else {
        ranges.push([line.split("-")[0],line.split("-")[1]])
    }
}

function simplify_ranges(ranges: any[]) {
    let new_ranges: any[] = []
    ranges = ranges.toSorted((a,b) => a[0] - b[0])

    let current_interval = ranges[0]
    for (let i = 1; i < ranges.length; i++) {
        const next_interval = ranges[i]
        
        if ((parseInt(next_interval[0]) <= parseInt(current_interval[1])) && (parseInt(current_interval[1]) <= parseInt(next_interval[1]))) {
            current_interval[1] = next_interval[1]
        } else if ((parseInt(current_interval[0]) <= parseInt(next_interval[1])) && (parseInt(current_interval[1]) >= parseInt(next_interval[1]))) {
            // Do nothing because that interval is fully enveloped
        } else {
            new_ranges.push(current_interval)
            current_interval = next_interval
        }
    }

    new_ranges.push(current_interval)
    return new_ranges
}

let valid_values = 0
for (const range of simplify_ranges(ranges)) {
    valid_values += (range[1] - range[0]) + 1
}

console.log(valid_values)
