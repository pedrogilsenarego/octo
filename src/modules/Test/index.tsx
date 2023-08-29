import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        valor: 13,
        alias: "999999999",
      }),
    };
    const a =
      "http://127.0.0.1:5001/octo-29041/us-central1/api/payments/mbway/";

    fetch(a, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  return <>d</>;
};

export default Test;
