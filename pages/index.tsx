import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Task App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {
          (setAlert: Function) => (
            <div className="card text-center">
              <div className="card-header">
                Welcome to Task APP
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Created by
                  {' '}
                  <a href="https://github.com/lexx54" className="link-success" rel='noreferrer' target="_blank" id="githubprofile">
                    Codelexx
                  </a>
                </h5>
                <p className="card-text">The app you need for your daily routine</p>
              </div>
              <div className="card-footer text-muted">
                Created at 28/07/2022
              </div>
            </div>
          )
        }
      </Layout >
    </div >
  )
}

export default Home
