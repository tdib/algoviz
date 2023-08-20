import { Accessor, For, Setter } from 'solid-js'
import { Cell } from '~/components/Cell/Cell'
import { CellState } from '~/components/Cell/Cell'
import styles from './CellGrid.module.scss'
import { bfs } from '~/algorithms'
import { findCoordinate } from '~/algorithms/util'
import { grid } from '~/stores/grid'

export function CellGrid() {
  let start = findCoordinate(grid(), 'S')!
  let goal = findCoordinate(grid(), 'G')!
  bfs(start, goal)

  return (
    <div class={styles.grid}>
      <For each={grid()}>{(row) => (
        <div class={styles.row}>
          <For each={row}>{(cell) => (
            <Cell state={cell} />
          )}</For>
        </div>
      )}</For>
    </div>
  )
}