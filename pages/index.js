import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css';


export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Layout
        home
      >
        <Head>
          <title>
            Blog
          </title>
        </Head>
        <main>
          {
            data.map(({id,title,body})=>(
              <div key={id}>
                <h3>
                  <Link href={`/posts/${id}`}>
                  <a>
                    {id} -- {title}
                  </a>
                  </Link>
                </h3>
              </div>
            ))
          } 
        </main>
      </Layout>
    </div>
  )
}

export async function getStaticProps(){
  try {
    const res= await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data= await res.json();

    return{
      props:{
        data
      }
    }
  } catch (error) {
    console.log(error)
  }
}
