export const downloadForm = async () => {
  try {
    const response = await fetch('https://res.cloudinary.com/daantetcr/image/upload/v1682196595/Octo/Refund_Form_1_add25m.pdf', {
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
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Refund_Form.pdf';
    a.click();

    return blob;
  } catch (error) {
    console.error(error);
    return null;
  }
}
