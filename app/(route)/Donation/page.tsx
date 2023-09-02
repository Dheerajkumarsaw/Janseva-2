"use client";
import React from "react";
import Form from "./Form";
import { ContextAccess } from "../../components/ContextAccess";
import Image from "next/image";

const page = () => {
  const { isHindi } = ContextAccess();
  /*   {!isHindi?``:``} */
  return (
    <main className=" min-h-screen">
      <div className="">
        <div className="flex justify-center items-center ">
          <Image
            width={1000}
            height={800}
            className="h-[80vh] w-full object-cover max-md:h-[50vh]"
            src="/donation-baccha.jpg"
            alt="VHL GROUP"
          />
        </div>
        <Form></Form>
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-semibold mb-4">
            {!isHindi
              ? `Supporting Positive Change: Donate to Jansevaa's Initiatives
`
              : `सकारात्मक परिवर्तन का समर्थन: जनसेवा की पहल के लिए दान करें
`}
          </h1>
          <p className="mb-6">
            {!isHindi
              ? `Are you passionate about creating a positive impact in the world? Do
            you believe in the power of education, healthcare, and community
            empowerment? If so, here's an opportunity to make a meaningful
            difference by supporting Jansevaa's initiatives through your
            generous donations.`
              : `क्या आप दुनिया में सकारात्मक प्रभाव पैदा करने को लेकर उत्साहित हैं? क्या आप शिक्षा, स्वास्थ्य देखभाल और सामुदायिक सशक्तिकरण की शक्ति में विश्वास करते हैं? यदि हां, तो यहां आपके उदार दान के माध्यम से जनसेवा की पहल का समर्थन करके एक सार्थक बदलाव लाने का अवसर है।`}
          </p>

          <div className="bg-white rounded shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              {!isHindi ? `Why Donate to Jansevaa?` : `जनसेवा को दान क्यों?`}
            </h2>
            <p>
              {!isHindi
                ? `Jansevaa is a renowned NGO foundation that stands committed to
              uplifting societies and individuals in need. With a multifaceted
              approach encompassing medical assistance, student education, and
              training programs, Jansevaa strives to create a lasting positive
              impact on the lives of countless people.`
                : `जनसेवा एक प्रसिद्ध एनजीओ फाउंडेशन है जो जरूरत में समाजों और व्यक्तियों के उत्थान के लिए प्रतिबद्ध है. चिकित्सा सहायता, छात्र शिक्षा और प्रशिक्षण कार्यक्रमों को शामिल करने वाले एक बहुमुखी दृष्टिकोण के साथ, जनसेवा अनगिनत लोगों के जीवन पर एक स्थायी सकारात्मक प्रभाव बनाने का प्रयास करता है.`}
            </p>
          </div>

          <div className="bg-white rounded shadow-md p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">
              {!isHindi ? `Your Donation Matters` : `आपका दान मायने रखता है`}
            </h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>
                  {!isHindi
                    ? `Enabling Medical Assistance:`
                    : `चिकित्सा सहायता सक्षम करना:`}
                </strong>
                {!isHindi
                  ? `Your support helps provide crucial medical aid to underserved
                communities. It ensures access to quality healthcare services,
                medicines, and treatment for those who need it most.`
                  : `आपका समर्थन वंचित समुदायों को महत्वपूर्ण चिकित्सा सहायता प्रदान करने में मदद करता है। यह उन लोगों के लिए गुणवत्तापूर्ण स्वास्थ्य सेवाओं, दवाओं और उपचार तक पहुंच सुनिश्चित करता है जिन्हें इसकी सबसे अधिक आवश्यकता है।`}
              </li>
              <li>
                <strong>
                  {!isHindi
                    ? `Empowering Education:`
                    : `शिक्षा को सशक्त बनाना:`}
                </strong>
                {!isHindi
                  ? `By donating to Jansevaa, you contribute to
                enhancing educational opportunities for students in
                disadvantaged areas. Your generosity can pave the way for
                students to access quality education and pursue their dreams.`
                  : `जनसेवा में दान देकर, आप वंचित क्षेत्रों में छात्रों के लिए शैक्षिक अवसरों को बढ़ाने में योगदान करते हैं। आपकी उदारता छात्रों को गुणवत्तापूर्ण शिक्षा प्राप्त करने और उनके सपनों को साकार करने का मार्ग प्रशस्त कर सकती है।`}
              </li>
              <li>
                <strong>
                  {!isHindi
                    ? `Fueling Skill Development:`
                    : `कौशल विकास को बढ़ावा`}
                </strong>
                {!isHindi
                  ? `Jansevaa's training programs equip
                individuals with essential skills for personal and professional
                growth. Your donation helps create pathways to sustainable
                livelihoods and economic independence.`
                  : `जनसेवा के प्रशिक्षण कार्यक्रम व्यक्तियों को व्यक्तिगत और व्यावसायिक विकास के लिए आवश्यक कौशल से लैस करते हैं। आपका दान स्थायी आजीविका और आर्थिक स्वतंत्रता के मार्ग बनाने में मदद करता है।`}
              </li>
            </ul>
          </div>

          <p className="mt-6 text-gray-600 italic">
            {!isHindi
              ? `Donate today and be the change you want to see in the world.
            Together, let's make a lasting impact!`
              : `आज दान करें और वह बदलाव बनें जो आप दुनिया में देखना चाहते हैं।
            आइए मिलकर एक स्थायी प्रभाव डालें!`}
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
