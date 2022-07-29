import React, { useReducer } from 'react'
import Head from 'next/head'
import HeaderList from '../../components/HeaderList';
import Layout from '../../components/Layout'
import List from '../../components/List';
import { NextPage } from 'next';

const Task: NextPage = () => {
  const [hasUpdated, toggleHasUpdated] = useReducer(prev => !prev, false);
  return (
    <div>
      <Head>
        <title>Tasks list</title>
      </Head>
      <Layout>
        {
          (handleAlert: Function) => (
            <>
              <HeaderList handleAlert={handleAlert} setUpdate={toggleHasUpdated} />
              <List hasUpdated={hasUpdated} />
            </>
          )
        }
      </Layout>
    </div>
  )
}

export default Task