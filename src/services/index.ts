export const downloadForm=async() =>{
  try {
    const response = await fetch('https://res.cloudinary.com/daantetcr/image/upload/v1682061410/Octo/blanket/OCTO_Icones-05_r7tfdz_mc0xoz.webp', {
      method: 'GET',
      headers: {
        'Authorization': '329615259867726',
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    
    const blob = await response.blob();
    console.log(blob)
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error(error);
    return null;
  }
}