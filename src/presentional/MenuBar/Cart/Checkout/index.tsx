import { Form, Formik } from "formik";
import { FORM_VALIDATION } from "./validation";
// import { Box } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
// import ButtonForm from "../../../../components/Buttons/ButtonFormik";
// import Textfield from "../../../../components/Inputs/TextField";
import { Colors } from "../../../../constants/pallete";
import { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../../slicer/types";
import { CartProduct } from "../../../../slicer/cart/cart.types";
import { getTotalValue } from "../Utils/totalValue";

import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
//import { StripeCardElementOptions } from "@stripe/stripe-js"
import { apiInstance } from "../../../../utils";
import Button from "../../../../components/Buttons/Button";

interface FormProps {
  name: string,
  address: string,
  city: string
  postCode: string,
  email: string,
  phone: string
}

const Checkout = () => {
  const INITIAL_FORM_STATE: FormProps = {
    name: "",
    address: "",
    city: "",
    postCode: "",
    email: "",
    phone: "",
  };
  const elements = useElements()
  const stripe = useStripe()
  const [paymentMethods, setPaymentMethods] = useState<boolean>(false);
  const [details, setDetails] = useState({ ...INITIAL_FORM_STATE });
  const cartProducts = useSelector<State, CartProduct[]>(
    (state) => state.cart.cartItems
  );



  const handleSubmitCard = async (values: FormProps) => {
    //const cardElement = elements?.getElement("card")
    const items = [{
      //id: "price_1Mw54gAJkp7H04iOOQRJzdyi",
      title: "teste3",
      amount: 5499,
      quantity: 3,

    }, {
      //id: "price_1Mw54gAJkp7H04iOOQRJzdyi",
      title: "testAae3",
      amount: 599,
      quantity: 6,

    }]
    await fetch("http://localhost:5001/octo-29041/us-central1/api/payments/creditCard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ items })
    }).then((res) => {
      return res.json()
    }).then((res) => {
      if (res.url) {
        window.location.assign(res.url)
      }
    })
  };

  const handleMbWay = () => {
    const data = {
      chave: "xxxx-xxxx-xxxx-xxxx-xxxx",

      alias: details.phone,
      valor: 34.32,
      id: "dfdeweeewwe",
      descricao: "exemplo eu pago",
    };

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("https://sandbox.eupago.pt/clientes/rest_api/mbway/create", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  // const cardElementOptions: StripeCardElementOptions = {
  //   hidePostalCode: true,
  //   style: {
  //     base: {
  //       fontSize: '16px',
  //     },
  //   },
  //   iconStyle: 'solid',
  // };



  return (
    <>
      {/* <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        onSubmit={(values, { resetForm }) => {
          handleSubmitCard(values);
          resetForm();
        }}
        validationSchema={FORM_VALIDATION}
      >
        <Form>
          <>
            <Box
              rowGap={2}
              display='flex'
              flexDirection='column'
              sx={{ mt: "20px", pb: "20px" }}
            >
              <Textfield label={i18n.t("forms.name")} name='name' />
              <Textfield label={i18n.t("forms.address")} name='address' />
              <Textfield label={i18n.t("forms.city")} name='city' />
              <Textfield label={i18n.t("forms.postCode")} name='postCode' />
              <Textfield label={i18n.t("forms.email")} name='email' />
              <Textfield label={i18n.t("forms.phone")} name='phone' />

            </Box>
          </>
          <Box display="flex" flexDirection="column" rowGap={2}>
            <CardElement options={
              cardElementOptions
            } />


          </Box>
        </Form>
      </Formik> */}
      <Button
        onClick={handleSubmitCard}
        colorHover={Colors.NEON_YELLOW_TRANSPARENT}
        label={i18n.t("forms.creditCard")}
      />
      {/* <Button

              colorHover={Colors.NEON_YELLOW_TRANSPARENT}
              label={i18n.t("forms.mbWay")}
            /> */}
    </>
  );
};



export default Checkout;
