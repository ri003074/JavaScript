import Head from 'next/head'
import Link from 'next/link'
import HeaderLayout from './header'

export default function Home({ posts }) {

  return (
    <div className="container">
      <HeaderLayout></HeaderLayout>

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

        <h1>POST一覧</h1>
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.id}:{post.phrase_en}:{post.phrase_ja}</li>;
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

