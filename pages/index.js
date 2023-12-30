import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>User List | Home</title>
        <meta
          name="description"
          content="This is the home page for the JSON Placeholder Users list."
        />
        <meta name="keywords" content="JSON Placeholder Users" />
      </Head>
      <div>
        <h1 className={styles.title}>Welcome: JSON Placeholder Users</h1>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio,
          tempora porro sit voluptatum voluptatibus illo quaerat nisi tempore,
          ea aliquid obcaecati hic. Debitis et quos nulla eligendi eaque
          voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Placeat odio, tempora porro sit voluptatum voluptatibus illo quaerat
          nisi tempore, ea aliquid obcaecati hic. Debitis et quos nulla eligendi
          eaque voluptatibus!
        </p>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio,
          tempora porro sit voluptatum voluptatibus illo quaerat nisi tempore,
          ea aliquid obcaecati hic. Debitis et quos nulla eligendi eaque
          voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Placeat odio, tempora porro sit voluptatum voluptatibus illo quaerat
          nisi tempore, ea aliquid obcaecati hic. Debitis et quos nulla eligendi
          eaque voluptatibus!
        </p>

        <Link href="/users">
          <a className={styles.btn}>See User Listing</a>
        </Link>
      </div>
    </>
  );
}
