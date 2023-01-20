"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Profile = () => (
  <div className="flex flex-row items-center mt-4 justify-between">
    <div className="flex flex-col">
      <motion.h3
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:tracking-wider text-3xl"
      >
        Abigaël Laldji
      </motion.h3>
      <motion.span
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-sm text-rosePineDawn-iris"
      >
        Developpeur web full-stack, nomade.
      </motion.span>
    </div>
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Image
        className="border-rosePine-love border rounded-full object-none w-28 h-28 lg:w-40 lg:h-40"
        src="/static/images/portrait.jpg"
        alt=""
        width={140}
        height={4}
      />
    </motion.div>
  </div>
);

export default Profile;
