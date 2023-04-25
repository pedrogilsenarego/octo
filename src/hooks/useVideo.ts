import { useEffect, useState } from "react";

const fetchAndCacheVideo = async (videoUrl: string, cacheName:string) => {
 
  const cache = await caches.open(cacheName);

  const cachedResponse = await cache.match(videoUrl);
  if (cachedResponse) {
    return { url: cachedResponse.url, isCached: true };
  }

  // Cache the video in the background
  fetch(videoUrl).then(async (response) => {
    await cache.put(videoUrl, response.clone());
  });

  return { url: videoUrl, isCached: false };
};

export const useVideo = (videoUrl: string, cacheName:string) => {
  const [urlData, setUrlData] = useState({ url: '', isCached: false });
  console.log(urlData)

  useEffect(() => {
    fetchAndCacheVideo(videoUrl, cacheName).then((data) => setUrlData(data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoUrl]);

  return urlData;
};