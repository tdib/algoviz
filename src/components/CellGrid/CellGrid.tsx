import styles from './CellGrid.module.scss'

import { For } from 'solid-js'
import { Cell } from '~/components/Cell/Cell'
import { bfs } from '~/algorithms'
import { findCoordinate } from '~/algorithms/util'
import { grid, displayGrid } from '~/stores/grid'

export function CellGrid() {
  let start = findCoordinate(grid(), 'S')
  let goal = findCoordinate(grid(), 'G')

  if (!start || !goal) throw new Error('Start or goal not found')

  bfs(start, goal)

  return (
    <div class={styles.grid}>
      <For each={displayGrid()}>{(row) => (
        <div class={styles.row}>
          <For each={row}>{(cell) => (
            <Cell state={cell} />
          )}</For>
        </div>
      )}</For>
    </div>
  )
}