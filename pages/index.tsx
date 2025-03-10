import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Head>
        <title>Sicht-Bär</title>
      </Head>

      <header className="w-full bg-blue-600 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Willkommen bei Sicht-Bär 🐻</h1>
        <p className="text-lg">Dein KI-gestützter Social-Media-Manager</p>
      </header>

      <main className="flex flex-col items-center mt-10">
        <p className="text-xl text-gray-700 mb-4">Optimiere deine Social-Media-Posts mit KI</p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Jetzt starten
        </button>
      </main>
    </div>
  );
}
