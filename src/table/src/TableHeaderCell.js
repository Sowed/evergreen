import React, { memo } from 'react'
import TableCell from './TableCell'

const TableHeaderCell = memo(props => <TableCell overflow="visible" borderBottom={null} {...props} />)

TableHeaderCell.propTypes = {
  /**
   * Composes the TableCell component as the base.
   */
  ...TableCell.propTypes
}

export default TableHeaderCell
