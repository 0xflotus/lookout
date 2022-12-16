import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Hits } from "react-instantsearch-dom";
import BlurryCircle from "../components/BlurryCircle";
import HitList from "../components/HitList";
import SearchBar from "../components/SearchBar";
import SplashScreen from "../components/SplashScreen";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen pattern p-10 flex flex-col items-center justify-center after-splash">
        <BlurryCircle />
        <div className="p-20">
          <HitList />
        </div>

        <SearchBar />
      </main>

      <footer></footer>
    </div>
  );
}
