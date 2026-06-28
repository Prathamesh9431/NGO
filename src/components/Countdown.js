import { useState, useEffect } from "react";

function Countdown() {
  const targetDate = new Date("2026-07-15T09:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      ),
      minutes: Math.floor(
        (difference % (1000 * 60 * 60)) /
          (1000 * 60)
      ),
      seconds: Math.floor(
        (difference % (1000 * 60)) / 1000
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-5 section-dark">
      <div className="container text-center">
        <h2 className="mb-3">
          Next Campaign Starts In
        </h2>

        <h4 className="mb-5">
          Free Health Camp - 15 July 2026
        </h4>

        <div className="row justify-content-center">
          <div className="col-6 col-md-2 mb-3">
            <div className="count-box">
              <h1>{timeLeft.days}</h1>
              <p>Days</p>
            </div>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <div className="count-box">
              <h1>{timeLeft.hours}</h1>
              <p>Hours</p>
            </div>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <div className="count-box">
              <h1>{timeLeft.minutes}</h1>
              <p>Minutes</p>
            </div>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <div className="count-box">
              <h1>{timeLeft.seconds}</h1>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Countdown;