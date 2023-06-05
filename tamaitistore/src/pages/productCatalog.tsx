import React from "react";
import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import GenderCatalogButton from "../../components/GenderCatalogButton";

export default function productCatalog() {
  const router = useRouter();
  const [gender, setGender] = useState("boy");
  const [isFilter, setFilter] = useState(true);

  useEffect(() => {
    if (router.isReady) {
      let initialGender = "boy"; // default to 'boy'
      if (Array.isArray(router.query.gender)) {
        initialGender = router.query.gender[0]; // use the first value
      } else if (typeof router.query.gender === "string") {
        initialGender = router.query.gender; // use the string directly
      }
      setGender(initialGender);
    }
  }, [router.isReady, router.query]);

  const toggleFilters = () => {
    setFilter((prevFilter) => !prevFilter);
  };

  return (
    <Layout title="Browsing" typeHeaderAndFooter={`${gender}`}>
      <div className="py-28  px-28 flex flex-col space-y-4 bg-slate-300">
        <div className="self-center">
          <GenderCatalogButton gender={gender} setGender={setGender} />
        </div>
        <div> Seach Bar </div>
        <div className="flex flex-row justify-between">
          <button onClick={toggleFilters}>
            {isFilter ? "Close Filters X" : "Open Filters"}
          </button>
          <div>Sort By</div>
        </div>
        <div className="flex flex-row space-x-8">
          {isFilter && <div className="w-[15%]">Actual Filter</div>}
          <div className="w-full">Clothes</div>
        </div>
      </div>
    </Layout>
  );
}
