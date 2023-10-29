import LandingLayout from "@/components/LandingLayout";
import Bracket from "../components/Bracket";
import { ReactElement } from "react";

export default function Home() {
  return (
    <>
      <div className="overflow-x-scroll max-w-8xl flex mx-auto mt-5">
        <Bracket />
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};
