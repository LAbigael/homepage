"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Profile = () => {
  return (
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
          className="text-sm mt-1 text-rosePineDawn-iris"
        >
          Developpeur web full-stack, nomade.
        </motion.span>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-row mt-2"
        >
          <Image
            src="/static/images/email.svg"
            alt=""
            width={20}
            height={4}
          />
          <span className="pl-2 text-sm">contact@abigael.dev</span>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-row mt-2"
        >
          <Image
            src="/static/images/phone.svg"
            alt=""
            width={20}
            height={4}
          />
          <span className="pl-2 text-sm">+33 605 028 823</span>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-row mt-2"
        >
          <Image
            src="/static/images/location-pointer.svg"
            alt=""
            width={20}
            height={4}
          />
          <span className="pl-2 text-sm">Fontainebleau</span>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Image
          className="border-rosePine-foam border-2 rounded-full object-cover w-28 h-28 lg:w-40 lg:h-40"
          src="/static/images/portrait_50.jpg"
          alt=""
          width={500}
          height={500}
        />
      </motion.div>
    </div>
  );
};

export default Profile;
