import BrowseCategories from "@/components/BrowseCategories";
import DiscovermoreNFTs from "@/components/DiscovermoreNFTs";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import TopCreators from "@/components/TopCreators";
import TrendingCollection from "@/components/TrendingCollection";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <TrendingCollection />
      <TopCreators />
      <BrowseCategories />
      <DiscovermoreNFTs />
    </>
  );
}
