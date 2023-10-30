import Image from "next/image";
import cup from "@/public/images/cup.png";
import { useChampion } from "@/store/champion";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

const BounceTransition = {
  y: {
    duration: 0.7,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeOut",
  },
};

export default function Champion() {
  const { champion } = useChampion();

  return (
    <div className="flex flex-col items-center justify-center mx-10 gap-4 w-52 relative">
      <Confetti
        width={208}
        height={500}
        numberOfPieces={100}
        gravity={0.07}
        className="absolute"
      />
      <motion.div
        transition={BounceTransition}
        animate={{
          y: ["8%", "-8%"],
        }}
      >
        <Image src={cup} alt="cup" width={200} height={300} />
      </motion.div>
      <p className="text-[#FACD3E] text-lg bg-black py-2 px-4 rounded-md">
        {champion?.name}
      </p>
    </div>
  );
}
