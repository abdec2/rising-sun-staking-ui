import React, { useEffect, useState } from "react";

const StakeTimerComponent = ({ startDate }) => {
  const startDate1 = new Date(parseInt(startDate)*1000)
  const currentDate = new Date();
  // console.log(currentDate);
  // console.log(endDate);
  const time = new Date(startDate1).getTime();
  const diff = currentDate.getTime() - time;

  const [sec, setSec] = useState(
    diff > 0 ? Math.floor((diff % (1000 * 60)) / 1000) : 0
  );
  const [min, setMin] = useState(
    diff > 0 ? Math.floor((diff % (1000 * 3600)) / (1000 * 60)) : 0
  );
  const [hour, setHour] = useState(
    diff > 0 ? Math.floor((diff % (1000 * 3600 * 24)) / (1000 * 3600)) : 0
  );
  const [days, setDays] = useState(
    diff > 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) : 0
  );
  useEffect(() => {
    const myInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const diff = currentTime - time;
      setSec(Math.floor((diff % (1000 * 60)) / 1000));
      setMin(Math.floor((diff % (1000 * 3600)) / (1000 * 60)));
      setHour(Math.floor((diff % (1000 * 3600 * 24)) / (1000 * 60 * 60)));
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [sec, min, hour, days]);

  return (
    <div className="tw-font-bold tw-text-[#F1AC5D]">
      <div className="tw-flex-col tw-items-center ">
        <div className="tw-flex">
          <div className="tw-flex tw-flex-col tw-items-center">
            <div className="">
              <p className="tw-text-center">{days.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}</p>
                <p className="tw-text-center">D</p>
            </div>
          </div>
          <div className="tw-mx-2">:</div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <div className="">
              <p className="tw-text-center">
                {hour.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                })}
              </p>
              <p className="tw-text-center">H</p>
            </div>
          </div>
          <div className="tw-mx-2">:</div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <div className="">
              <p>
                {min.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                })}
              </p>
              <p>M</p>
            </div>
          </div>
          <div className="tw-mx-2">:</div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <div className="">
              <p>
                {sec.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                })}
              </p>
              <p className="tw-text-center">S</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeTimerComponent;