import { useState } from 'react'
import styled from 'styled-components'
import { productos } from '../data/productos'

const TableProducts = () => {

  const [input, setInput] = useState('')

  const filterData = () => {
    if(input.length === 0) return productos
    return productos.filter( el => el.id.toString() === input.trim() )
  }
  
  const onSearchChange = ({ target }) => {
    setInput( target.value );
  }
  return (
    <ContentTable>
        <Input 
            value={ input }
            onChange={onSearchChange}
            placeholder='Busqueda por codigo'
          />
          <Table>
            <thead>
              <tr>
                <th>codigo</th>
                <th>Descripcion</th>
                <th>Publicado</th>
              </tr>
            </thead>
            <tbody>
              {
                filterData()?.map( data => (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.description}</td>
                    <td>{data.date}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        <p>{`Mostrando ${ filterData().length } de ${productos.length} registros`}</p>
      </ContentTable>
  )
}

export default TableProducts


const Table = styled.table`
  width: 100%;
  border-spacing: 1rem;

  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  thead tr {
    background-color: #1B48FA;
    color: #ffffff;
    text-align: left;
  }

  th, td {
    padding: 12px 15px;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  tbody tr:last-of-type {
    border-bottom: 2px solid #1B48FA;
  }

  tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}
`


const ContentTable = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
`

const Input = styled.input`
  height: 35px;
  width: 250px;
  font-size: 1rem;
  border-radius: 10px;
  padding-left: 5px;
  border: 2px solid #e1e1e1;
  outline: none;
`