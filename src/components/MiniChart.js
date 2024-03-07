import React from "react";
import { useRef, useEffect } from "react";

const MiniChart = ({ symbol }) => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: symbol,
      width: 200,
      height: 200,
      locale: "en",
      dateRange: "12M",
      colorTheme: "light",
      isTransparent: false,
      autosize: false,
      largeChartUrl: "",
      noTimeScale: true,
      chartOnly: false,
    });

    if (!container.current.firstChild) {
      container.current.appendChild(script);
    }
  }, [symbol]);

  return <div ref={container}></div>;
};

export default MiniChart;


