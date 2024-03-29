import { Box, Divider, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import ButtonForm from "../../../../components/Buttons/ButtonFormik";
import Textfield from "../../../../components/Inputs/TextField";
import { Colors } from "../../../../constants/pallete";
import { i18n } from "../../../../translations/i18n";
import { FORM_VALIDATION } from "./validation";
// import { useState } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectWrapper from "../../../../components/Inputs/SelectFormValue";
import { config } from "../../../../config/config";
import { countryList } from "../../../../constants/forms";
import { stripeLocal, stripeProduction } from "../../../../constants/stripe";
import { clearCart } from "../../../../slicer/cart/cart.actions";
import { CartProduct } from "../../../../slicer/cart/cart.types";
import { updateSuccessNotification } from "../../../../slicer/general/general.actions";
import { State } from "../../../../slicer/types";
import { getTotalValue } from "../Utils/totalValue";

interface Props {
  closeCart: (signal: boolean) => void;
  discount?: number | null;
  setSubmitingOrder: (signal: boolean) => void;
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

const Checkout = ({ closeCart, discount, setSubmitingOrder }: Props) => {
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
  const dispatch = useDispatch();

  const cartProducts = useSelector<State, CartProduct[]>(
    (state) => state.cart.cartItems
  );
  const [country, setCountry] = useState<string>("");
  const shippingFees =
    countryList?.filter((item) => item.value === country)[0]?.shippingPrice ||
    0;

  const handleSubmitCard = async (values: FormProps) => {
    let items: {
      title: string;
      amount: number;
      quantity: number;
    }[] = [];

    cartProducts.forEach((item: CartProduct) => {
      const amount = (
        item.product.price *
        (item.product.discount && config.discounts
          ? 1 - item.product.discount
          : 1) *
        100 *
        ((100 - (discount || 0)) / 100)
      ).toFixed(1);

      items.push({
        title: `${item.product.category}-${item.product.pattern}`,
        amount: parseFloat(amount),
        quantity: item.value,
      });
    });
    if (shippingFees !== 0)
      items.push({
        title: `Shipping to ${
          countryList?.filter((item) => item.value === country)[0]?.title || ""
        }`,
        amount: shippingFees * 100 * ((100 - (discount || 0)) / 100),
        quantity: 1,
      });
    await fetch(stripeProduction, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items, values }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.url) {
          dispatch(clearCart());
          dispatch(updateSuccessNotification(i18n.t("cartDrawer.successBuy")));
          closeCart(false);
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
      <Box
        display="flex"
        alignItems="end"
        width="100%"
        mt="10px"
        style={{ flexDirection: "column", rowGap: "10px" }}
      >
        <Typography>
          Product Price {getTotalValue(cartProducts).toFixed(1)} €
        </Typography>
        <Typography>+ Shipping Fee {shippingFees} €</Typography>
        <Divider style={{ backgroundColor: Colors.BLACKISH, width: "40%" }} />
        <Typography
          style={{ textDecoration: discount ? "line-through" : "none" }}
        >
          {i18n.t("cartDrawer.totalPrice")}{" "}
          {(getTotalValue(cartProducts) + shippingFees).toFixed(1)} €
        </Typography>

        <Typography>
          {i18n.t("cartDrawer.totalPrice")}{" "}
          {(
            (getTotalValue(cartProducts) + shippingFees) *
            ((100 - (discount || 0)) / 100)
          ).toFixed(1)}{" "}
          €
        </Typography>
        {discount && (
          <Typography fontSize="0.6rem">
            * Special discount 10%, Childrens Day
          </Typography>
        )}
      </Box>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        onSubmit={(values, { resetForm }) => {
          setSubmitingOrder(true);
          handleSubmitCard(values);
          resetForm();
        }}
        validationSchema={FORM_VALIDATION}
      >
        <Form>
          <>
            <Box
              rowGap={2}
              display="flex"
              flexDirection="column"
              sx={{ mt: "20px", pb: "20px" }}
            >
              <SelectWrapper
                options={countryList}
                name="country"
                label="Country"
                getvalue={setCountry}
              />
              <Textfield label={i18n.t("forms.name")} name="name" />
              <Textfield label="Address Line 1" name="address" />
              <Textfield label="Address Line 2" name="address2" />
              <Textfield label={i18n.t("forms.city")} name="city" />
              <Textfield label={i18n.t("forms.postCode")} name="postCode" />
              <Textfield label={i18n.t("forms.email")} name="email" />
              <Textfield label={i18n.t("forms.phone")} name="phone" />
            </Box>
          </>
          <Box display="flex" flexDirection="column" rowGap={2}>
            {/* <CardElement options={
              cardElementOptions
            } /> */}
          </Box>
          <ButtonForm
            colorHover={Colors.NEON_YELLOW_TRANSPARENT}
            label={i18n.t("cartDrawer.buyNow")}
          />
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
