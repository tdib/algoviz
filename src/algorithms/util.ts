
export type Coordinate = {
  i: number
  j: number
}

/**
 * Finds a coordinate with a given symbol in a 2D array.
 * If multiple coordinates with the symbol are found,
 * the first one is returned. If no coordinates are found,
 * null is returned.
 * 
 * @param {any[][]} arr The 2D array to search.
 */
export function findCoordinate(arr: any[][], symbol: any): Coordinate | null {
  for (const [i, row] of arr.entries()) {
    for (const [j, cell] of row.entries()) {
      if (cell === symbol) {
        return { i, j }
      }
    }
  }

  return null
}


/**
 * Given a position in a 2D array, returns an array of
 * coordinates that are possible moves from that position.
 * 
 * @param arr The 2D array to search.
 * @param currPosition The coordinate position to search from.
 * @param wallSymbol The symbol that represents a wall.
 * @returns An array of coordinates that are possible moves from the given position.
 */
export function getPossibleMoves(arr: any[][], currPosition: Coordinate, wallSymbol: String = '#'): Coordinate[] {
  const possibleMoves: Coordinate[] = []

  const { i: currRow, j: currCol } = currPosition

  // Up
  if (currRow > 0 && arr[currRow - 1][currCol] !== wallSymbol) {
    possibleMoves.push({ i: currRow - 1, j: currCol })
  }

  // Down
  if (currRow < arr.length - 1 && arr[currRow + 1][currCol] !== wallSymbol) {
    possibleMoves.push({ i: currRow + 1, j: currCol })
  }
  
  // Left
  if (currCol > 0 && arr[currRow][currCol - 1] !== wallSymbol) {
    possibleMoves.push({ i: currRow, j: currCol - 1 })
  }

  // Right
  if (currCol < arr[0].length - 1 && arr[currRow][currCol + 1] !== wallSymbol) {
    possibleMoves.push({ i: currRow, j: currCol + 1 })
  }

  return possibleMoves
}

export class Queue<T> {
  private items: T[] = []

  enqueue(item: T) {
    this.items.push(item)
  }

  dequeue(): T | undefined {
    return this.items.shift()
  }

  get length() {
    return this.items.length
  }
}