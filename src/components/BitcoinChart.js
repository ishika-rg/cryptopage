// import React from 'react'

// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function BitcoinChart({ height }) {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [["BITSTAMP:BTCUSD|1D"]],

      height: height,
      width: "100%",
      autosize: true,

      chartOnly: false,
      locale: "en",
      colorTheme: "light",
      showVolume: false,
      showMA: true,
      hideDateRanges: false,
      hideMarketStatus: true,
      hideSymbolLogo: false,
      scalePosition: "left",
      scaleMode: "Normal",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      fontSize: "10",
      noTimeScale: false,
      valuesTracking: "1",
      changeMode: "price-only",
      chartType: "area",
      maLineColor: "#2962FF",
      maLineWidth: 1,
      maLength: 9,
      lineWidth: 2,
      lineType: 0,
      dateRanges: ["1d|1", "1w|30", "1m|30", "3m|60", "6m|1M"],
      timeHoursFormat: "24-hours",
    });

    if (!container.current.firstChild) {
      container.current.appendChild(script);
    }
   
  }, []);

  return <div ref={container}></div>;
}

export default memo(BitcoinChart);
