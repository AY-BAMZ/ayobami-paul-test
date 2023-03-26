import React from 'react'

function TableBody(props) {
  return (
    <>
    {props.data?.map((product) => (<tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>{product.photo}</td>
      <td>{product.rating}</td>
      <td>{product.stock}</td>
      <td>{product.category}</td>
    </tr>))}
    </>
  )
}

export default TableBody