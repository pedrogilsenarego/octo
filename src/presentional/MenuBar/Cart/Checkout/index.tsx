import { Form, Formik } from "formik";
import { FORM_VALIDATION } from "./validation";
import { Box } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import ButtonForm from "../../../../components/Buttons/ButtonFormik";
import Textfield from "../../../../components/Inputs/TextField";
import { Colors } from "../../../../constants/pallete";
import { useState } from "react";
import Button from "../../../../components/Buttons/Button";
import { useSelector } from "react-redux";
import { State } from "../../../../slicer/types";
import { CartProduct } from "../../../../slicer/cart/cart.types";
import { getTotalValue } from "../Utils/totalValue";

const Checkout = () => {
  const INITIAL_FORM_STATE = {
    name: "",
    address: "",
    postCode: "",
    email: "",
    phone: "",
  };
  const [paymentMethods, setPaymentMethods] = useState<boolean>(false);
  const [details, setDetails] = useState({ ...INITIAL_FORM_STATE });
  const cartProducts = useSelector<State, CartProduct[]>(
    (state) => state.cart.cartItems
  );

  const handleSubmit = (values: any) => {
    setPaymentMethods(true);
    setDetails(values);
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

  const renderPaymentMethods = () => {
    return (
      <Button
        onClick={handleMbWay}
        colorHover={Colors.NEON_YELLOW_TRANSPARENT}
        label={i18n.t("forms.mbWay")}
      />
    );
  };
  const renderForm = () => {
    return (
      <>
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
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
                <Textfield label={i18n.t("forms.postCode")} name='postCode' />
                <Textfield label={i18n.t("forms.email")} name='email' />
                <Textfield label={i18n.t("forms.phone")} name='phone' />
                <Box
                  display='flex'
                  justifyContent='start'
                  sx={{ mt: "20px" }}
                  columnGap={2}
                >
                  <ButtonForm
                    colorHover={Colors.NEON_YELLOW_TRANSPARENT}
                    label={i18n.t("forms.movePayment")}
                  />
                </Box>
              </Box>
            </>
          </Form>
        </Formik>
      </>
    );
  };
  return paymentMethods ? renderPaymentMethods() : renderForm();
};

export default Checkout;
