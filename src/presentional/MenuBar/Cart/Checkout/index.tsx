import { Form, Formik } from "formik";
import { FORM_VALIDATION } from "./validation";
import { Box } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import ButtonForm from "../../../../components/Buttons/ButtonFormik";
import Textfield from "../../../../components/Inputs/TextField";
import { Colors } from "../../../../constants/pallete";

const Checkout = () => {
  const INITIAL_FORM_STATE = {
    name: "",
    address: "",
    postCode: "",
    email: "",
    phone: "",
  };
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
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
            <Textfield
              label={i18n.t("forms.address")}
              name='address'
              multiline
              rows={2}
            />
            <Textfield label={i18n.t("forms.postCode")} name='postCode' />
            <Textfield label={i18n.t("forms.email")} name='email' />
            <Textfield label={i18n.t("forms.phone")} name='phone' />
            <Box
              display='flex'
              justifyContent='start'
              sx={{ mt: "20px" }}
              columnGap={2}
            >
              <ButtonForm colorHover={Colors.NEON_YELLOW_TRANSPARENT} label={i18n.t("forms.movePayment")} />
            </Box>
          </Box>
        </>
      </Form>
    </Formik>
  );
};

export default Checkout;
