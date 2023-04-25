import { useEffect, useState } from "react";

const fetchAndCacheVideo = async (videoUrl: string, cacheName: string, cacheDurationInDays: number) => {
  const cache = await caches.open(cacheName);

  const now = new Date().getTime();
  const lastCachedDate = localStorage.getItem(`${videoUrl}-last-cached`);

  if (lastCachedDate) {
    const ageInMilliseconds = now - parseInt(lastCachedDate, 10);
    const ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24);
    const cachedResponse = await cache.match(videoUrl);
    console.log(ageInDays, "days");
    if (cachedResponse && ageInDays < cacheDurationInDays) {
      const videoBlob = await cachedResponse.blob();
      const videoObjectUrl = URL.createObjectURL(videoBlob);
      console.log("video still fresh no need to fetch");
      return { url: videoObjectUrl, isCached: true };
    } else {
      console.log("video is not fresh, fetching");
      const fetchPromise = fetch(videoUrl).then(async (response) => {
        console.log("video caching in the background");
        await cache.put(videoUrl, response.clone());
        console.log("video cached");
        localStorage.removeItem(`${videoUrl}-last-cached`); // Clear the last-cached value
        localStorage.setItem(`${videoUrl}-last-cached`, now.toString());
      });
      fetchPromise.catch(() => {}); // Ignore errors
    }
  } else {
    
    console.log("video not cached yet, caching now");
    const fetchPromise = fetch(videoUrl).then(async (response) => {
      await cache.put(videoUrl, response.clone());
      console.log("video cached in the background");
      localStorage.removeItem(`${videoUrl}-last-cached`); // Clear the last-cached value
      localStorage.setItem(`${videoUrl}-last-cached`, now.toString());
   
    });
    fetchPromise.catch(() => {}); // Ignore errors
  }

  const cachedVideoResponse = await cache.match(videoUrl);
  if (cachedVideoResponse) {
    const videoBlob = await cachedVideoResponse.blob();
    const videoObjectUrl = URL.createObjectURL(videoBlob);
    return { url: videoObjectUrl, isCached: false };
  }

  return { url: videoUrl, isCached: false };
};

export const useVideo = (videoUrl: string, cacheName: string, cacheDurationInDays:number) => {
  const [urlData, setUrlData] = useState({ url: "", isCached: false });

  useEffect(() => {
    fetchAndCacheVideo(videoUrl, cacheName, cacheDurationInDays).then((data) => setUrlData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoUrl]);

  return urlData;
};
