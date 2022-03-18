import React from 'react'
import styled from 'styled-components'

const ui = {
  Header: styled.header`
    margin-bottom: 20px;
  `
}

function TodoHeader({children, loading }) {
  return (
    //React.cloneElement(que se va a clonar, las porpiedades que va tener el clon)
    //React.Children ->   Nos permite manipular la prop children entre uno de sus usos podemos volver un conjunto de nodos react a un array
    <ui.Header>
      {React.Children.toArray(children).map(child => React.cloneElement(child, { loading }))}
    </ui.Header>
  )
}

export { TodoHeader }
