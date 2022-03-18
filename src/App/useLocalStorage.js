import { useEffect, useState } from "react"

function useLocalStorage(itemName, initialValue) {
  const [sincronise, setSincronise] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        setItem(parsedItem)
        setLoading(false)
        setSincronise(true)
      }, 3000)
    } catch (error) {
      setError(error)
    }
  }, [initialValue, itemName, sincronise])

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }

  const sincronised = () => {
    setLoading(true)
    setSincronise(false)
  }

  return {item, saveItem, loading, error, sincronised}

}

export { useLocalStorage }