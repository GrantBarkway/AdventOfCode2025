import * as fs from 'fs'

const filePath: string = 'AdventOfCodeDay8/AOC8_input.txt'

const content = fs.readFileSync(filePath, 'utf-8')

// Computes the Euclidean distance between two 3D points represented as stribgs
function computeDistance(coord1: string, coord2: string) {
    const [x1, y1, z1] = coord1.split(",").map(x => parseInt(x))
    const [x2, y2, z2] = coord2.split(",").map(x => parseInt(x))
    return Math.sqrt((x1!-x2!) ** 2 + (y1!-y2!) ** 2 + (z1!-z2!) ** 2)
}

function day8part1(input: string) {
    const lines = input.split(/\r?\n/)
    const distance_map = new Map()
    
    for (let i = 0; i < lines.length; i++) {
        for (let j = i + 1; j < lines.length; j++) {
            distance_map.set([lines[i],lines[j]].sort(), computeDistance(lines[i]!, lines[j]!))
        }
    }
    
    const sorted_map = new Map([...distance_map.entries()].sort((a,b) => a[1] - b[1]))
    
    const junctions = input.split(/\r?\n/)
    
    for (const key of sorted_map.keys()) {
        console.log(key)
    }

    console.log(sorted_map)
}

console.log(day8part1(content))