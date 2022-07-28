import React, { useEffect } from 'react'
import useTask from '../hooks/useTask';
import Link from 'next/link';

type ListProps = {
  hasUpdated: boolean
}

const List = ({ hasUpdated }: ListProps) => {
  const { getTasks, list, isLoading, error } = useTask();
  useEffect(() => {
    getTasks()
  }, [getTasks, hasUpdated])

  if (isLoading) <p>Loading</p>
  if (error) <p>Something went wrong</p>
  return (
    <>
      <ul className="list-group">
        {
          list?.length === 0 && <li className="list-group-item list-group-item-dark text-center">No task added</li>
        }
        {
          list?.length !== 0 && list
            ?.sort((a, b) => a.status === 'pending' ? -1 : 1)
            ?.map(item => (
              <li
                className={`list-group-item list-group-item-${item.status === 'completed' ? "dark" : "light"} 
              d-flex justify-content-between align-items-center
              ${item.status === 'completed' && "text-decoration-line-through"}
              `}
                key={item.id}
              >
                {item.tasktext}
                <span>
                  <Link href={`/tasks/${item.id}`}>
                    <a className="btn btn-light">see details</a>
                  </Link>
                </span>
              </li>
            ))
        }
      </ul>
    </>
  )
}

export default List