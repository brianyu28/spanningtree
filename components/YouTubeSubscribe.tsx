import { useEffect, useRef } from "react";

function YouTubeSubscribe() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;
    if (ref.current) {
      ref.current.appendChild(script);
    }
    return () => {
      if (ref.current) {
        ref.current.removeChild(script);
      }
    }
  }, [ref]);
  return (
    <div ref={ref}>
      {/* <Script src="https://apis.google.com/js/platform.js"></Script> */}
      <div className="g-ytsubscribe" data-channelid="UCDzVUXiTr3hClI-zzCWbYzg" data-layout="full" data-count="default"></div>
    </div>
  );
}

export default YouTubeSubscribe;
