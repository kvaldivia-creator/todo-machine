import React, { useContext } from 'react'
import styled from 'styled-components'
import { TodoContext } from '../TodoContext'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ui = {
  Header: styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #A9333A;
    border-radius: 8px;
  `,
  Figure: styled.figure`
    margin: 0;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    overflow: hidden;
  `,
  Img: styled.img`
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
  `,
  Information: styled.div`
    width: 70%;
  `,
  Title: styled.h1`
    margin: 0;
    color: #fff;
    text-align: center;
    font-size: 24px;
  `,
  Span: styled.span`
    width: 100%;
    display: inline-block;
    text-align: center;
  `
}

function TodoCounter() {
  const { totalTodos, completeTodos, loading } = useContext(TodoContext)
  return (
    <>
      <ui.Header>
        <ui.Figure>
          {
            !loading 
              ? <ui.Img src='https://www.getbillage.com/files/user/avatar/_usuario.png' />  
              : <Skeleton circle width={70} height={70} />
          }
        </ui.Figure>
        <ui.Information>
          {
            !loading
              ? <><ui.Title>Hola Kevin!!!</ui.Title>
                  <ui.Span>Has completado {completeTodos} de {totalTodos} TODOs</ui.Span></>
              : <Skeleton count={2} width='80%' height='80%' />
          }
          
        </ui.Information>
      </ui.Header>
    </>
  )
}

export { TodoCounter }