import React from 'react'
import { useTable } from 'react-table'

export function InfluencerTable (props) {
    const data = React.useMemo(
        () => [
          {
            col1: 'Jannik Obenhoff',
            col2: 'St Louis, Missouri, USA',
            col3: '767,5k',
            col4: 'placeholder',
            col5: '1',
            col6: 'May 28, 2019',
            col7: '1',
            col8: 'placeholder',
          },
          {
            col1: 'react-table',
            col2: 'rocks',
          },
          {
            col1: 'whatever',
            col2: 'you want',
          },
        ],
        []
    )
    const columns = React.useMemo(
        () => [
          {
            Header: 'Influencer',
            accessor: 'col1', // accessor is the "key" in the data
          },
          {
            Header: 'Location',
            accessor: 'col2',
          },
          {
            Header: 'Total Reach',
            accessor: 'col3',
          },
          {
            Header: 'Networks',
            accessor: 'col4',
          },
          {
            Header: 'Proposals',
            accessor: 'col5',
          },
          {
            Header: 'Proposal Created',
            accessor: 'col6',
          },
          {
            Header: 'Content Since Last Proposal',
            accessor: 'col7',
          },
          {
            Header: 'Actions',
            accessor: 'col8',
          },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <table {...getTableProps()} style={{ border: 'solid 1px gray' }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      background: 'white',
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '10px',
                          border: 'white',
                          background: 'white',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
    )
}