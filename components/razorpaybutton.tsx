"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface RazorpayButtonProps {
  amount: number;
  temp: boolean;
}

const loadScript = (src: string, callback: () => void) => {
  const script = document.createElement("script");
  script.src = src;
  script.onload = callback;
  document.head.appendChild(script);
};

const RazorpayButton: React.FC<RazorpayButtonProps> = ({ amount, temp }) => {
  const [payment, setPayment] = useState<any>(null); // Use any for now

  console.log(temp);

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js", () => {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: amount * 100,
        currency: "INR",
        name: "Jan Sevaa Foundation",
        description: "Donate for a better cause",
        handler: (response: any) => {
          // Handle payment success or failure here
          console.log(response);
        },
      };

      // Declare Razorpay on window explicitly
      const paymentObject: any = new (window as any).Razorpay(options);
      setPayment(paymentObject);
    });
  }, [amount]);

  const handleClick = () => {
    if (payment) {
      payment.open();
    }
  };

  return (
    <Button
      className="bg-blue-500 hover:bg-blue-400 text-lg items-center border rounded-xl"
      onClick={handleClick}
      disabled={temp}
    >
      Donate Now
    </Button>
  );
};

export default RazorpayButton;
