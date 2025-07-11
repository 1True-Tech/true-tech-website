"use client";
import { useScrollView } from "@/lib/hooks/useScreenScrollPosition";
import { motion } from "framer-motion";
import { useEffect } from "react";

type Props = {};

export default function WhyUsSection({}: Props) {
  const {ref, setStartEnd} = useScrollView()
useEffect(() => {
  setStartEnd((s)=>({...s, main:{
    ...s.main,
    s:"170px",
  }}))
}, [])

  return (
    <section className="w-full lg:px-16 my-6">
      <motion.div
        ref={ref}
        id="why-us-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-r from-secondary via-blue-600 to-secondary text-white p-[20px] lg:p-[50px] flex flex-col gap-[20px] items-center rounded-[20px] lg:rounded-[50px]"
      >
        <motion.h4
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="relative w-fit mx-auto text-white font-semibold text-lg md:text-xl leading-[140%] before:absolute before:content-[''] before:left-1/2 before:translate-x-[-50%] before:bottom-0 before:w-1/2 before:h-[2px] before:bg-white before:rounded-full"
        >
          Why Us?
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-bold tracking-tight  text-xl sm:text-2xl lg:text-3xl leading-[140%] text-white"
        >
          The True-Tech Advantages
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl mx-auto text-[1.07rem] text-white text-center"
        >
          At True-Tech, we combine deep expertise, transparent communication,
          and an agile approach to deliver custom digital solutions that drive
          real results. From discovery through long-term support, our dedicated
          team ensures your vision becomes a <br />
          high-impact reality—on time, on budget, and built to grow.
        </motion.p>

        <div className="w-full flex flex-col gap-[20px] mt-4">
          {/* Top Row */}
          <div className="w-full flex flex-col lg:flex-row gap-[20px] lg:justify-between items-center">
            {[
              {
                title: "Proven Expertise",
                desc: "With deep experience across industries, our team builds scalable, secure, and user-centric solutions tailored to your business needs.",
              },
              {
                title: "Personalized Collaboration",
                desc: "We take time to understand your goals and challenges. Every solution is custom-built, ensuring alignment with your vision and budget.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.2 * idx, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                className={`border-2 border-white p-[20px] w-full ${
                  idx % 2 === 0 ? "lg:max-w-[425px]" : "w-full"
                } min-h-[12.3rem] rounded-[10px] flex flex-col items-center gap-[24px] bg-blue-600`}
              >
                <h2 className="font-bold tracking-tight text-white text-md sm:text-lg lg:text-xl leading-[140%]">
                  {item.title}
                </h2>
                <p className="text-[1.07rem] text-white text-center">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="w-full flex flex-col md:flex-row gap-[20px] lg:justify-between items-center">
            {[
              {
                title: "Agile & Transparent Process",
                desc: "Our agile approach keeps you involved and informed at every stage. You get regular updates, fast iterations, and complete clarity from start to finish.",
              },
              {
                title: "Long-Term Support & Results",
                desc: "Beyond launch, we stay with you—offering maintenance, performance upgrades, and strategic improvements to keep you growing.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.2 * (idx + 2), duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                className="border-2 border-white p-[20px] w-full min-h-[12.3rem] rounded-[10px] flex flex-col items-center gap-[24px] bg-blue-600"
              >
                <h2 className="font-bold tracking-tight text-white text-md sm:text-lg lg:text-xl leading-[140%]">
                  {item.title}
                </h2>
                <p className="text-[1.07rem] text-white text-center">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
