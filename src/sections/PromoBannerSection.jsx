import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PromoBannerSection() {
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState({
    days: "01",
    hours: "05",
    minutes: "09",
    seconds: "50",
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      let d = parseInt(timeLeft.days);
      let h = parseInt(timeLeft.hours);
      let m = parseInt(timeLeft.minutes);
      let s = parseInt(timeLeft.seconds);

      if (s > 0) s--;
      else {
        s = 59;
        if (m > 0) m--;
        else {
          m = 59;
          if (h > 0) h--;
          else {
            h = 23;
            if (d > 0) d--;
          }
        }
      }

      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [timeLeft]);

  return (
    <section className="promo-banner-section">
      <div className="promo-content">
        <h2>
          Hurry Up! Get Up to <span className="highlight">50% Off</span>
        </h2>

        <p>
          Step into summer with sun-ready styles at can't-miss prices.
        </p>

        {/* COUNTDOWN TIMER */}
        <div className="countdown-timer">
          <div className="time-box">
            <h3>{timeLeft.days}</h3>
            <span>Days</span>
          </div>
          <div className="time-box">
            <h3>{timeLeft.hours}</h3>
            <span>Hours</span>
          </div>
          <div className="time-box">
            <h3>{timeLeft.minutes}</h3>
            <span>Mins</span>
          </div>
          <div className="time-box">
            <h3>{timeLeft.seconds}</h3>
            <span>Secs</span>
          </div>
        </div>

        {/* SHOP BUTTON */}
        <button
          className="btn btn-promo mt-4"
          onClick={() => navigate("/shop")}
        >
          Shop the Summer Sale
        </button>
      </div>
    </section>
  );
}

export default PromoBannerSection;
