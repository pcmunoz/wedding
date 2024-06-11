"use client";
import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";

import Image from "next/image";
import React from "react";
import Location from "./_components/Location";

const useCountdown = (targetDate: string) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = React.useState(countDownDate - new Date().getTime());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export default function Index() {
  const [days, hours, minutes, seconds] = useCountdown("07-05-2024");
  const theDay = days < 0 && hours < 9 && minutes < 0 && seconds < 0;
  return (
    <main>
      <Container>
        <Image src="/images/20191009_110102.jpg" width={100} height={50} alt="us" />
        <Intro />
        {!theDay && (
          <>
            <h2 className="text-5xl font-bold tracking-tighter leading-tight md:pr-8">Countdown</h2>

            <p className="text-3xl">{`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds to go...`}</p>
          </>
        )}
        <Location />
      </Container>
    </main>
  );
}
