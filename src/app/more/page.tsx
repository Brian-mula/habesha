"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";


export default function Page() {
  const url = "https://embed.tawk.to/6082a08d62662a09efc16533/1f3v46arb";
  const href = "https://habeshabets.com/en/home";
  const habeshaFirstText = `የተከበራችሁ ደንበኞቻችን ላለፉት 3 ዓመታት በ`
  const intermediateText = `ህጋዊ ባለቤት እና ሀበሻ ቤቲንግ ኃላ/የተ/የግ/ማህበር መካከል ተፈርሞ በነበረው የፍራንቻይዝ ስምምነት መሰረት`
  const amHaricFirstParaGraph = ` habesabets.bet `
  const habeshaSecondText = `የተሰኘውን ዶሜይን  የሚያቀርበውን አገልግሎት ስታገኙ የቆያችሁ መሆኑ ይታወቃል። 
ሆኖም ሀበሻ ቤቲንግ ኅላ/የተ/የግ/ማህበር በስምምነቱ መሰረት ለ `
const habeshaSecondIntermediate = `እና ለሶፍትዌር አቅራቢዎች ሊፈፅም የሚጠበቅበትን ክፍያ ሳይከፍል ደንበኞችን በሚያሳስት ሁኔታ የዶሜኑ ባለቤት እንደሆነ በማስመሰል ስምምነቱን የሚጥሱ ህገወጥ ድርጊቶች ሲፈጽም የቆየ መሆኑን አዉቀናል።`
  const amHaricSecondText = `ስለዚህ ይህን ህገወጥ ተግባር እንዲያቆምና በፍራንቻይዝ ስምምነቱ መሰረት እንዲሰራ ተደጋጋሚ ማስጠንቀቂያ ብንሰጥም በህገወጥ ተግባሩ የቀጠለ በመሆኑ በመካከላችን ፈፅመነው የነበረውን በዶሜይናችን የመጠቀም የፍራንቻይዝ ስምምነት በመሰረዝ በምትኩ አዲስ የፍራንቻይዝ ስምምነት ኢትዮጽያ ዉስጥ በህጋዊ መንገድ ከተመሰርተዉ flash.bet ከተሰኘ ዶሜይን ጋር ልንመሰርት ችለናል።`
const amHaricThirdText = `ስለዚህ ደንበኞቻችን ከሀበሻ ቤቲንግ ኃላ/የተ/የግ/ማህበር ጋር በነበረው ዶሜን ያገኛችኋቸውን መብቶችና ያሉባችሁን ሃላፊነቶች ወደ አዲስ የተቋቋመው የንግድ መዋቅር የሚተላለፉላችሁ መሆኑንም ተረድታችሁ አዲስ የንግድ ስራ ግንኙነት ወደ መሰረትንበት`
const flashText = `flash.bet`
const flashUrl = "https://flash.bet/"
const amharicThirdIntermediate = `ዶሜን በሚል ወደ ተቋቋመው አዲሱ የስራ አጋራችን ድህረ ገጽ ከዚህ በኋላ ያለውን ሊንክ በመጫን ከድርጅታችን የሚቀርብላችሁ የውርርድ ጨዋታዎች በአዲሱ ዶሜን በኩል እንደሚቀጥሉ እያሳወቅን በተደረገው ማሻሻያ ምክንያት ሊያጋጥም ለሚችለው መጉላላት ከወዲሁ ይቅርታችሁን እንጠይቃለን።  
 ሚስተር ሲረል ሬነር`

  const amharicTitle = "ጥብቅ ማሳሰቢያ:-"
  const habeshUrl = "https://habeshabets.com/en/home"

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
    <div className="bg-tertiary h-screen overflow-y-auto">
      <div className="w-screen flex justify-start lg:justify-center flex-col items-center py-16 px-4 lg:px-36 h-screen mx-auto ">
        <Image
          src="/image/habesha.png"
          alt="Vamos Logo"
          width={100}
          height={100}
          className=""
        />
        <h1 className="text-primary text-2xl lg:text-5xl pt-6 pb-3 text-center">
          {amharicTitle}
        </h1>

        <p className="max-w-md lg:max-w-5xl text-center text-[12px] lg:text-2xl  py-3 text-white tracking-wider font-medium">
         {habeshaFirstText} <Link href={habeshUrl} className="text-yellow-400" > {amHaricFirstParaGraph}</Link>  {intermediateText} <Link href={habeshUrl} className="text-yellow-400" > {amHaricFirstParaGraph}</Link> {habeshaSecondText} <Link href={habeshUrl} className="text-yellow-400" > {amHaricFirstParaGraph}</Link> {habeshaSecondIntermediate}
        </p>

        <p className="max-w-md lg:max-w-5xl text-center text-[12px] lg:text-2xl  py-3 text-white tracking-wider font-medium">
          {amHaricSecondText}
        </p>
        <p className="max-w-md lg:max-w-5xl text-center text-[12px] lg:text-2xl  py-3 text-white tracking-wider font-medium">
          {amHaricThirdText} <Link href={flashUrl} className="text-yellow-400" > {flashText}</Link> {amharicThirdIntermediate}
        </p>
      

        <div className="flex space-x-3 justify-center items-center pt-10 w-full lg:w-96">
          <Link
            href={href}
            className=" w-full rounded-md bg-yellow-400 hover:bg-yellow-400 text-gray-950 text-lg font-bold p-6 flex justify-center items-center animate-bounce border-primary border"
          >
            <p>New Login</p>
          </Link>
         
        </div>
        

      
      </div>
    </div>
  );
}
