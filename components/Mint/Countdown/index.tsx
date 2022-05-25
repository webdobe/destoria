import s from "./styles";
import {
  FunctionComponent,
  useEffect,
  useRef,
  useMemo,
  useState,
  useCallback,
} from "react";
import Image from "next/image";
import Link from "next/link";
const Countdown: FunctionComponent = function () {
  const [countdown, setCountdown] = useState('dd.hh:mm:ss')

  useEffect(() => {
    var countDownDate = new Date("Jul 18, 2022 15:37:25").getTime();
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24)) > 9 ? Math.floor(distance / (1000 * 60 * 60 * 24)) : '0' + Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) > 9 ? Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : '0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) > 9 ? Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) : '0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000) > 9 ? Math.floor((distance % (1000 * 60)) / 1000) : '0' + Math.floor((distance % (1000 * 60)) / 1000);
    
    setCountdown(days + "." + hours + ":" + minutes + ":" + seconds)

    var x = setInterval(function () {

      var now = new Date().getTime();

      var distance = countDownDate - now;

      var days =  Math.floor(distance / (1000 * 60 * 60 * 24)) > 9 ? Math.floor(distance / (1000 * 60 * 60 * 24)) : '0' + Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) > 9 ? Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : '0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) > 9 ? Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) : '0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000) > 9 ? Math.floor((distance % (1000 * 60)) / 1000) : '0' + Math.floor((distance % (1000 * 60)) / 1000);
      
      setCountdown(days + "." + hours + ":" + minutes + ":" + seconds)

      if (distance < 0) {
        clearInterval(x);
        setCountdown('MINT IS ON!')
      }
    }, 1000)
  }, [])

  return (
    <section {...s.countdown} style={{ maxWidth: "1440px", width: "100%" }}>
      <div {...s.countdownContent}>
        <div {...s.countdownBox}>
          <div {...s.destoria}>
            <Image
              {...s.destoriaLogo}
              src="/large-logo-svg.svg"
              alt="Destoria"
              width={340}
              height={220}
            />
          </div>
          <div {...s.countdownTitle}>BEASTS OF PRIME</div>
          <div {...s.countdownSubtitle}>Price: Free    
            <span {...s.hexangle}><Image
                src="/hexangle.png"
                alt="Hexangle"
                width={10}
                height={12}
              /></span> 0/1500 Minted
          </div>
          <div {...s.countdownSubtitle}>
            MINT STARTS IN
          </div>
          <div {...s.countdownItself}>
            ??.??:??:??
            <div {...s.countdownLabels}>
              <div>
                days
              </div>
              <div>
                hours
              </div>
              <div>
                minutes
              </div>
              <div>
                seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Countdown;
