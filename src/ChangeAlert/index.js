import React from 'react'
import styled from 'styled-components'
import { withStorageListener } from './withStorageListener'

const ui = {
  ChangeAlertWrapper: styled.div`
    max-width: 100vw;
    max-height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, .5);
  `,
  Button: styled.button`
    padding: 12px 16px;
    background-color: red;
    color: white;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  `
}

function ChangeAlert ({ show, toggleShow }) {
  if (show) {
    return (
      <ui.ChangeAlertWrapper>
        <p>Hubo cambios</p>
        <ui.Button onClick={toggleShow} type="button">Refresh</ui.Button>
      </ui.ChangeAlertWrapper>
    )
  } else {
    return null
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }