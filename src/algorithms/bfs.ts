import { getPossibleMoves, Queue, Coordinate } from './util'
import { grid, updateGridValue } from '~/stores/grid'

/**
 * Performs a breadth first search on the global grid state.
 * 
 * @param start The coordinate of the start node.
 * @param goal The coordinate of the goal node.
 * @returns A list of coordinates that represent the path from the start node to the goal node.
 */
export default async function bfs(start: Coordinate, goal: Coordinate): Promise<Coordinate[]> {
  let q = new Queue<Coordinate>()
  let visited = new Set()
  let predecessors = new Map<string, Coordinate>()

  // Add the start node to the queue and mark it as visited
  q.enqueue(start)
  visited.add(JSON.stringify(start))
  updateGridValue(start.i, start.j, 'x')

  while (q.length > 0) {
    let curr = q.dequeue()!
    let neighbours = getPossibleMoves(grid(), curr)

    // We have found the goal node, so perform a backtrace to find the route
    if (curr.i === goal.i && curr.j === goal.j) {
      let trace = backtrack(predecessors, goal)
      for (const coord of trace) {
        await new Promise((resolve) => setTimeout(resolve, 25))
        updateGridValue(coord.i, coord.j, 'X')
      }
      return trace
    }
    
    // Visit each of the neighbours of the current node (that haven't been visited already)
    for (const neighbour of neighbours) {
      if (!visited.has(JSON.stringify(neighbour))) {
        await new Promise((resolve) => setTimeout(resolve, 50))
        predecessors.set(JSON.stringify(neighbour), curr)
        q.enqueue(neighbour)
        visited.add(JSON.stringify(neighbour))
        updateGridValue(neighbour.i, neighbour.j, 'x')
      }
    }
  }

  return []
}


/**
 * Performs backtracking from a goal node to its origin (i.e. the start node) by
 * iteratively checking whether there is a predecessor to the current node.
 * 
 * @param predecessors A map of coordinates to the coordinates that preceded them.
 * @param goal The coordinate of the goal node (i.e. the node to backtrack from).
 * @returns A list of coordinates that represent the path from the start node to the goal node.
 */
function backtrack(predecessors: Map<string, Coordinate>, goal: Coordinate): Coordinate[] {
  let path = [goal]
  while (predecessors.has(JSON.stringify(goal))) {
    goal = predecessors.get(JSON.stringify(goal))!
    path.unshift(goal)
  }

  return path
}