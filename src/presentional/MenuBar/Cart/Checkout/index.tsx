import { Form, Formik } from "formik";
import { FORM_VALIDATION } from "./validation";
import { Box } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import ButtonForm from "../../../../components/Buttons/ButtonFormik";
import Textfield from "../../../../components/Inputs/TextField";
import { Colors } from "../../../../constants/pallete";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../../slicer/types";
import { CartProduct } from "../../../../slicer/cart/cart.types";

import Button from "../../../../components/Buttons/Button";
import { clearCart } from "../../../../slicer/cart/cart.actions";
import { stripeLocal, stripeProduction } from "../../../../constants/stripe";
import { updateSuccessNotification } from "../../../../slicer/general/general.actions";
import SelectWrapper from "../../../../components/Inputs/SelectFormValue";
import { countryList } from "../../../../constants/forms";

interface Props {
  closeCart: (signal: boolean) => void
}

interface FormProps {
  name: string;
  address: string;
  address2: string;
  city: string;
  postCode: string;
  country: string;
  email: string;
  phone: string;
}

const Checkout = ({ closeCart }: Props) => {
  const INITIAL_FORM_STATE: FormProps = {
    name: "",
    address: "",
    address2: "",
    city: "",
    postCode: "",
    country: "",
    email: "",
    phone: "",
  };


  //const [details, setDetails] = useState({ ...INITIAL_FORM_STATE });
  const dispatch = useDispatch()
  const cartProducts = useSelector<State, CartProduct[]>(
    (state) => state.cart.cartItems
  );

  const handleSubmitCard = async (values: FormProps) => {
    let items: {
      title: string;
      amount: number;
      quantity: number;
    }[] = [];

    cartProducts.forEach((item: CartProduct) => {
      items.push({
        title: `${item.product.category}-${item.product.pattern}`,
        amount: item.product.price * 100,
        quantity: item.value,
      });
    });
    await fetch(
      stripeLocal,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.url) {
          dispatch(clearCart())
          dispatch(updateSuccessNotification(i18n.t("cartDrawer.successBuy")))
          closeCart(false)
          window.location.assign(res.url);

        }
      });
  };

  // const handleMbWay = () => {
  //   const data = {
  //     chave: "xxxx-xxxx-xxxx-xxxx-xxxx",

  //     alias: details.phone,
  //     valor: 34.32,
  //     id: "dfdeweeewwe",
  //     descricao: "exemplo eu pago",
  //   };

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       accept: "application/json",
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   };

  //   fetch("https://sandbox.eupago.pt/clientes/rest_api/mbway/create", options)
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // };

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
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        onSubmit={(values, { resetForm }) => {
          console.log(values)
          // handleSubmitCard(values);
          // resetForm();
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
              <SelectWrapper options={countryList} name="country" label="country" />
              <Textfield label={i18n.t("forms.name")} name='name' />
              <Textfield label="Line 1" name='address' />
              <Textfield label="Line 2" name='address2' />
              <Textfield label={i18n.t("forms.city")} name='city' />
              <Textfield label={i18n.t("forms.postCode")} name='postCode' />
              <Textfield label={i18n.t("forms.email")} name='email' />
              <Textfield label={i18n.t("forms.phone")} name='phone' />

            </Box>
          </>
          <Box display="flex" flexDirection="column" rowGap={2}>
            {/* <CardElement options={
              cardElementOptions
            } /> */}
          </Box>
          <ButtonForm colorHover={Colors.NEON_YELLOW_TRANSPARENT}
            label={i18n.t("cartDrawer.buyNow")} />
        </Form>
      </Formik>
      {/* <Button
        onClick={handleSubmitCard}
        colorHover={Colors.NEON_YELLOW_TRANSPARENT}
        label={i18n.t("cartDrawer.buyNow")}
      /> */}
      {/* <Button

              colorHover={Colors.NEON_YELLOW_TRANSPARENT}
              label={i18n.t("forms.mbWay")}
            /> */}
    </>
  );
};

export default Checkout;
