import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import { Table } from 'react-bootstrap'
import Layout from '../components/layout'
import HeaderLayout from '../components/header'

export default function Home({ contents }) {

  return (
    <Layout>

      <Head>
        <title>Tangoo</title>
      </Head>

      <HeaderLayout/>

      <Table>
        <thead>
          {contents.map((content,index) =>
            <tr key={content.id}>
              <td>{index}</td>
              <td>{content.phrase_en}</td>
              <td>{content.phrase_ja}</td>
              <td>{content.word_en}</td>
              <td>{ ((content.c_counter / content.s_counter)*100).toFixed(0) } %</td>
              <td>[x]</td>
            </tr>
          )}
        </thead>
      </Table>

    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:8000/api/')

  const contents = await res.json();
  return { props: { contents } };
}

