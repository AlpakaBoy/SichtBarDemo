import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <Head>
        <title>Sicht-Bär</title>
      </Head>
      <h1>Willkommen bei Sicht-Bär 🐻</h1>
      <p>Dein KI-gestützter Social-Media-Manager</p>
      <button style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>
        Jetzt starten
      </button>
    </div>
  );
}
