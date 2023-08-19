import { For } from 'solid-js'
import { Cell } from '~/components/Cell/Cell'
import { CellState } from '~/components/Cell/Cell'
import styles from './CellGrid.module.scss'

export function CellGrid({ grid }: { grid: CellState[][] }) {
  return (
    <div class={styles.grid}>
      <For each={grid}>{(row) => (
        <div class={styles.row}>
          <For each={row}>{(cell) => (
            <Cell state={cell} />
          )}</For>
        </div>
      )}</For>
    </div>
  )
}