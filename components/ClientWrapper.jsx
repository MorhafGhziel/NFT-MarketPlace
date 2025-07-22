"use client";

import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import TrendingCollection from "./TrendingCollection";
import TopCreators from "./TopCreators";
import BrowseCategories from "./BrowseCategories";
import DiscovermoreNFTs from "./DiscovermoreNFTs";
import NFTHighlight from "./NFTHighlight";

export default function ClientWrapper() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <>
      <Navigation />
      <Hero />
      <TrendingCollection />
      <TopCreators />
      <BrowseCategories />
      <DiscovermoreNFTs />
      <NFTHighlight />
    </>
  );
}
