import React from 'react'
import logo from './logo.png';
import './App.css';
import { useTable } from 'react-table'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ9pLA5iHoAijrd-Gf7XHOH_qhz7asE74",
  authDomain: "inflow-3382f.firebaseapp.com",
  projectId: "inflow-3382f",
  storageBucket: "inflow-3382f.appspot.com",
  messagingSenderId: "16173008953",
  appId: "1:16173008953:web:dd099b7b74b4c64d1ee5e8",
  measurementId: "G-8FCDTE5ZRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>Inflow</p>
      </header>
      <body>
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
      </body>
    </div>
  );
}

export default App;
