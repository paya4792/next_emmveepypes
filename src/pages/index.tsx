import Link from 'next/link';

import styles from '../styles/Home.module.css';
import Meta from '../utils/meta';

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta pageTitle="えんびぱいぷす" />

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to えんびぱいぷす</h1>

        <div className={styles.grid}>
          <Link href="/mochi">
            <h2>Mochi &rarr;</h2>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>Powered by emmveepypes</footer>
    </div>
  );
}
