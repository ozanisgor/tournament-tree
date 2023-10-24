import Image from "next/image";
import cup from "@/public/images/cup.png";
import { useChampion } from "@/store/champion";
import { motion } from "framer-motion";

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
    <div className="flex flex-col items-center justify-center mx-10 gap-4 w-52">
      <h3 className="text-white">Champion</h3>

      <motion.div
        transition={BounceTransition}
        animate={{
          y: ["8%", "-8%"],
        }}
      >
        <Image src={cup} alt="cup" width={200} height={200} />
      </motion.div>
      <p className="text-white">{champion?.name}</p>
    </div>
  );
}
