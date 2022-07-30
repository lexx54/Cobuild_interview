import React, { useState } from 'react'
import useTask from '../hooks/useTask'
import { ERROR, SUCCESS } from './Layout'

type HeaderProps = {
  handleAlert: Function
  setUpdate: Function
}

const HeaderList = ({ handleAlert, setUpdate }: HeaderProps) => {
  const [task, setTask] = useState('');
  const { addTask } = useTask();
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (task === '') return handleAlert('Task is empty, can not be created', ERROR)
    const dateNow = new Date()
    const dd = String(dateNow.getDate()).padStart(2, '0');
    const mm = String(dateNow.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = dateNow.getFullYear();
    const today = `${mm}/${dd}/${yyyy}`
    const dataToSend = {
      username: 'lexx',
      tasktext: task,
      status: 'pending',
      taskdate: today,
    }

    await addTask(dataToSend)
    setTask('')
    setUpdate()
    handleAlert('Task Created', SUCCESS)
  }
  return (
    <>
      <div className='mb-4'>
        <h2 className='text-center'>Task list</h2>
        <form className='row' onSubmit={handleSubmit}>
          <div className='col-2'>
            <label htmlFor="taskCreator" className='form-label'>Create a new task</label>
          </div>
          <div className='col-8'>
            <input
              type="text"
              className='form-control'
              id="taskCreator"
              onChange={({ target }) => setTask(target.value)}
              value={task}
            />
          </div>
          <div className='col-2'>
            <button type="submit" className="btn btn-dark">Create</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default HeaderList