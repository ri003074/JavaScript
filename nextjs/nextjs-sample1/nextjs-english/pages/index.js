import Head from 'next/head'
import Link from 'next/link'
import HeaderLayout from './header'
import { Router, useRouter } from "next/router"
import phrase from './phrase/[phrase]';

const products = [{name: "bag" }, {name: "shoes"}, {name: "socks"}];

export default function Home({ posts }) {
  const router = useRouter();
  var post_data = posts.map(post =>{
    return {
      id:post.id
    }
  })
  console.log(post_data)
  // post_data = [1,2,3]
  // post_data = {'id':"xxx", 'data':"yyy"}
  post_data = [{'id':'xxx'},{'id':'yyy'}]
  console.log(post_data)



  // const counters = prevState.counters.map(counter => {
  //   return {id: counter.id, count: counter.count, color: counter.color};
  // });

  return (
    <div className="container">
      <HeaderLayout></HeaderLayout>



      <ul>
        {products.map(product => {
          return (
            <li key={product.name}>
              <Link as={`/products/${product.name}`} href="/products/[name]">
              {product.name}
              </Link>
              </li>
          );
        })}
      </ul>



      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome!
        </h1>
        <Link href="/quiz">
          <a>go to Quiz</a>
        </Link>
        <Link href={{ pathname:"/quiz", query: post_data}}>
        {/* <Link href={{ pathname:"/quiz", query: {id: posts.id}}}> */}
          <a>go to Quiz with data</a>
        </Link>

        <h1>POST一覧</h1>
        <ul>
          {posts.map((post) => {
            return (

              <li key={post.id}>
              <Link as={`/phrase/${post.phrase_en}`} href="/phrase/[phrase_en]">
                  {post.phrase_en}
              </Link>
              <span onClick={() => router.push(`/phrase/${post.phrase_en}`)}>
                click me
              </span>

              </li>
            );
          })}
        </ul>

      </main>

    </div>
  )
}

export async function getServerSideProps() {
  const res = await
    // fetch(`https://jsonplaceholder.typicode.com/posts`);

    fetch('http://localhost:8000/api/')

  const posts = await res.json();
  console.log(posts);
  return { props: { posts } };
}

