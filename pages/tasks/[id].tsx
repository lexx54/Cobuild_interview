import Link from 'next/link';
import { useRouter } from 'next/router'
import Router from 'next/router';
import React, { useEffect, useReducer, useState } from 'react'
import Layout, { SUCCESS } from '../../components/Layout';
import useTask from '../../hooks/useTask';

const Id = () => {
  const [data, setData] = useState<string | undefined>('');
  const [isEdit, toggleEdit] = useReducer(prev => !prev, false);
  const [hasUpdated, toggleHasUpdated] = useReducer(prev => !prev, false);
  const router = useRouter();
  const { id } = router.query;
  const { getCurrentTask, current, deleteTask, updateStatus, updateTask } = useTask();

  useEffect(() => {
    getCurrentTask(String(id))
    if (isEdit) setData(current?.tasktext)
  }, [getCurrentTask, isEdit, id, hasUpdated, current?.tasktext])

  const handleDelete = () => {
    deleteTask(String(id))
    Router.push('/tasks')
  }

  const handleComplete = async (handleAlert: Function) => {
    const res = await updateStatus(String(id), current?.status === 'pending' ? 'completed' : 'pending')
    handleAlert(res.message, SUCCESS)
    toggleHasUpdated()
  }

  const handleUpdate = () => {
    updateTask(String(id), data)
    Router.push('/tasks')
  }

  return (
    <Layout>
      {
        (handleAlert: Function) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-between align-items-center">

                <span className='me-auto'>{current?.username.toLocaleUpperCase()}</span>
                <span>
                  {current?.taskdate}
                  <Link href='/tasks'>
                    <a className='btn btn-sm'>X</a>
                  </Link>
                </span>

              </h5>
              <p className="card-text">
                Status:
                {' '}
                <span className={`badge ${current?.status === 'pending' ? "bg-warning" : "bg-secondary"}`}>{current?.status}</span>
              </p>
              {
                isEdit && (
                  <input value={data} onChange={({ target }) => setData(target.value)} />
                )
              }
              {
                !isEdit && (
                  <p className="card-text">
                    Text:
                    {' '}
                    {current?.tasktext}
                  </p>
                )
              }

              <div className='card-footer d-flex'>
                {
                  !isEdit && (
                    <>
                      <button className="btn btn-info btn-sm me-2" onClick={toggleEdit}>Edit</button>
                      <button className="btn btn-info btn-sm" onClick={() => handleComplete(handleAlert)}>
                        mark as {current?.status === 'pending' ? "completed" : "pending"}
                      </button>
                      <button className="btn btn-danger btn-sm ms-auto" onClick={handleDelete}>Delete</button>
                    </>
                  )
                }
                {
                  isEdit && (
                    <>
                      <button className="btn btn-info btn-sm me-2" onClick={handleUpdate}>update</button>
                      <button className="btn btn-secondary btn-sm me-2" onClick={toggleEdit}>Cancel</button>
                    </>
                  )
                }
              </div>
            </div>
          </div>
        )
      }
    </Layout >
  );
};

export default Id;