import LandingLayout from "@/components/LandingLayout";
import Bracket from "../components/Bracket";
import { ReactElement } from "react";
import { getLocalData } from "@/utils/localdata";
import { Match as MatchType } from "@/models/types";

export default function Home({ matches }: { matches: MatchType[] }) {
  return (
    <>
      <div className="overflow-x-scroll max-w-8xl flex mx-auto mt-5">
        <Bracket matches={matches} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const matches = await getLocalData();

  return {
    props: { matches },
  };
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};
