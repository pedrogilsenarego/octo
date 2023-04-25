import { useEffect, useState } from "react";

const fetchAndCacheVideo = async (videoUrl: string, cacheName: string) => {
  const cache = await caches.open(cacheName);

  const cachedResponse = await cache.match(videoUrl);
  if (cachedResponse) {
    const videoBlob = await cachedResponse.blob();
    const videoObjectUrl = URL.createObjectURL(videoBlob);
    return { url: videoObjectUrl, isCached: true };
  }

  // Cache the video in the background
  fetch(videoUrl).then(async (response) => {
    await cache.put(videoUrl, response.clone());
  });

  // Return the cached URL from the Cache API
  const cachedVideoResponse = await cache.match(videoUrl);
  if (cachedVideoResponse) {
    const videoBlob = await cachedVideoResponse.blob();
    const videoObjectUrl = URL.createObjectURL(videoBlob);
    return { url: videoObjectUrl, isCached: false };
  }

  // Fallback to the original URL if cache.match fails
  return { url: videoUrl, isCached: false };
};



export const useVideo = (videoUrl: string, cacheName:string) => {
  const [urlData, setUrlData] = useState({ url: '', isCached: false });
  

  useEffect(() => {
    fetchAndCacheVideo(videoUrl, cacheName).then((data) => setUrlData(data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoUrl]);

  return urlData;
};