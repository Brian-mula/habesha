"use client";

import TawkToComponent from "@/components/TawkToComponent";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import "./page.css";

export default function Page() {
  const url = "https://embed.tawk.to/6082a08d62662a09efc16533/1f3v46arb";
  const href = "https://habeshabets.com/en/home";
  const amharicString = "በቫሞስ ዶት ቤትስ  ዶሜይን ላይ ስትገለገሉ የነበራችሁ ተጠቃሚዎች በሙሉ፤ ቫሞስ ኢንተርቴይመንት ኃ/የተ/ግ/ማህበር በገባውን ውል መሰረት ክፍያ ሊፈጽም ባለመቻሉ ዶሜይኑን እንዳይጠቀም ታግዷል።"
  const amharicStringFirsthalf = "ስለሆነም ከዛሬ ጀምሮ የምታደርጉትን ጨዋታዎች  አራዳ ዶት ቤትስ";
  const amharicLink = "(habesha.bet)"
  const amharicSecondHalf = "በተሰኘ ድህረ ገጽ ላይ ማግኘት የምትችሉ መሆኑን በታላቅ ደስታ እንገልጻለሁ።"
  const amharicTitle = "ጥብቅ ማሳሰቢያ:-"
  const subtextAmharic = "ለበለጠ መረጃ "
  const firstSubtext = "ን ይጫኑ።"
  const hyperLinkText = "ተጨማሪ ያንብቡ"
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.setAttribute("chat", "true");
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
    console.log(script);
  }, []);
  return (
    <div className="vamos-bg">
      <div className="w-screen flex justify-start lg:justify-center flex-col items-center py-16 px-4 lg:px-36 h-screen mx-auto bg-gray-800/80 ">
        <Image
          src="/image/habesha.png"
          alt="Vamos Logo"
          width={100}
          height={100}
          className="a"
        />
        <div className="flex space-x-3 justify-center items-center pt-10 w-full lg:w-96">
          <Link
            href={href}
            className=" w-full rounded-md bg-yellow-400 hover:bg-yellow-400 text-gray-950 text-lg font-bold p-6 flex justify-center items-center animate-bounce border-primary border"
          >
            <p>New Login</p>
          </Link>
          <TawkToComponent />
        </div>
        <h1 className="text-primary text-2xl lg:text-5xl pt-6 pb-3 text-center">
          {amharicTitle}
        </h1>

        <p className="max-w-md lg:max-w-5xl text-center text-[12px] lg:text-2xl  py-3 text-white tracking-wider font-medium">
          {amharicString}
        </p>

        {/* <h1 className="text-primary text-2xl lg:text-5xl py-3 text-center">
          Good news!
        </h1> */}

        <p className="max-w-md lg:max-w-5xl text-center text-[12px] lg:text-2xl  py-8 text-white tracking-wider font-medium">
         {amharicStringFirsthalf}
          <Link href={href} className="text-primary text font-bold text-sm lg:text-2xl">
            {" "}
           {amharicLink}
          </Link>{" "}
          {amharicSecondHalf}
        </p>

        <h1 className="text-white text-xl lg:text-2xl py-4 text-center">
          {subtextAmharic} <Link href={href} className="text-primary text font-bold text-sm lg:text-2xl">{amharicLink}</Link> {firstSubtext}
        </h1>

        <Link href="/more" className="text-yellow-400 text-xl lg:text-2xl py-3 text-center underline">{hyperLinkText}</Link>

        <div className="flex space-x-3 justify-center items-center pt-10 w-full lg:w-96">
          <Link
            href={href}
            className=" w-full rounded-md bg-yellow-400 hover:bg-yellow-400 text-gray-950 text-lg font-bold p-6 flex justify-center items-center animate-bounce border-primary border"
          >
            <p>New Login</p>
          </Link>
          <TawkToComponent />
        </div>
      </div>
    </div>
  );
}
