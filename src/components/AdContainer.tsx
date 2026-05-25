import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { shouldShowAds } from "@/lib/adRules";
import { useApp } from "@/lib/store";

const ads = [
  {
    name: "Shopee",
    link: "https://shopee.ph/shop/80730266",
    title: "MerchLab Luxury You Can Afford",
    subtitle: "Shopee Deals",
    bg: "#EE4D2D",
    button: "#ff7a59",
  },
  {
    name: "Lazada",
    link: "https://www.lazada.com.ph/shop/merchlab-online/",
    title: "MerchLab Luxury You Can Afford",
    subtitle: "Lazada Finds",
    bg: "#0F146D",
    button: "#4A2BFF",
  },
];

export default function AdContainer() {
  const { pathname } = useLocation();
  const { state } = useApp();
  const [adIndex, setAdIndex] = useState(() =>
    Math.floor(Math.random() * ads.length)
  );

  const subscription = state.profile?.subscription || "free";
  const canShowAds = shouldShowAds(pathname, subscription);

  useEffect(() => {
    if (!canShowAds) return;

    const interval = setInterval(() => {
      setAdIndex((prev) => (prev + 1) % ads.length);
    }, 45000);

    return () => clearInterval(interval);
  }, [canShowAds]);

  if (!canShowAds) {
    return null;
  }

  const ad = ads[adIndex];

  return (
    <div className="mt-6" data-ad-container="fallback">
      <a href={ad.link} target="_blank" rel="noopener noreferrer">
        <div
          style={{ background: ad.bg }}
          className="rounded-xl p-4 flex items-center justify-between gap-4 hover:opacity-95 transition"
        >
          <div className="flex items-center gap-4">
            <img
              src="/ML.png"
              alt="MerchLab"
              className="w-14 h-14 rounded-md bg-white p-1"
            />

            <div>
              <div className="text-white font-bold">{ad.title}</div>
              <div className="text-white/80 text-sm">{ad.subtitle}</div>
            </div>
          </div>

          <button
            style={{ background: ad.button }}
            className="px-4 py-2 rounded-lg text-white font-medium"
          >
            Shop Now
          </button>
        </div>
      </a>
    </div>
  );
}
