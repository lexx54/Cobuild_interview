import { useReducer, useState, useCallback } from 'react';

export type listProps = {
  username: string
  tasktext: string
  status: string
  taskdate: string
  id?: string
}


const useTask = () => {
  const [list, setList] = useState<listProps[] | null>(null);
  const [current, setCurrent] = useState<listProps | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, toggleIsLoading] = useReducer((prev) => !prev, false);
  const url = 'http://localhost:3000/api/tasks'

  const getTasks = useCallback(() => {
    const func = async () => {
      toggleIsLoading()
      const res = await fetch(url)
      const json = await res.json();
      console.log('data', json.data)
      toggleIsLoading()
      if (json.error) return setError(true)
      setList(json.data)
    }
    func()
  }, [])

  const getCurrentTask = useCallback((id: string) => {
    const func = async (id: string) => {
      toggleIsLoading()
      const res = await fetch(`${url}/${id}`)
      const json = await res.json();
      console.log('data', json.data)
      toggleIsLoading()
      if (json.error) return setError(true)
      setCurrent(json.data[0])
    }
    func(id)
  }, [])

  const addTask = async (data: listProps) => {
    toggleIsLoading()
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    const json = await res.json();
    toggleIsLoading()
    if (json.error) return setError(true)
    return json;
  }

  const deleteTask = useCallback((id: string) => {
    const func = async (id: string) => {
      toggleIsLoading()
      const res = await fetch(`${url}/${id}`, {
        method: 'DELETE',
      })
      const json = await res.json();
      toggleIsLoading()
      if (json.error) return setError(true)
    }

    func(id)
  }, [])

  const updateStatus = useCallback((id: string, data: string) => {
    const func = async (id: string) => {
      toggleIsLoading()
      const res = await fetch(`${url}/${id}`, {
        method: 'PUT',
        body: data
      })
      const json = await res.json();
      toggleIsLoading()
      if (json.error) return setError(true)
      return json;
    }

    return func(id)
  }, [])

  const updateTask = useCallback((id: string, data: string) => {
    const func = async (id: string) => {
      toggleIsLoading()
      const res = await fetch(`${url}/${id}`, {
        method: 'PUT',
        body: data
      })
      const json = await res.json();
      toggleIsLoading()
      if (json.error) return setError(true)
    }

    func(id)
  }, [])

  return {
    getTasks,
    getCurrentTask,
    addTask,
    deleteTask,
    updateStatus,
    updateTask,
    list,
    current,
    isLoading,
    error,
  }
}

export default useTask;