
import { i18n } from "../../../../translations/i18n";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Textfield from "../../../../components/Inputs/TextFieldForm";
import { Form, Formik } from "formik";
import { FORM_VALIDATION } from "./validation";
import ButtonForm from "../../../../components/Buttons/ButtonFormik";
import { useDispatch, useSelector } from "react-redux";
import SelectWrapper from "../../../../components/Inputs/SelectForm";
import { State } from "../../../../slicer/types";
import Loader from "../../../../components/Loader";
import TextfieldIncrementable from "../../../../components/Inputs/TextFieldIncrementable";
import { categories } from "../../../../constants/category";
import { fabrics } from "../../../../constants/fabrics";


const SubmitStory = () => {
  const INITIAL_FORM_STATE = {
    category: "",
    pattern: "",
    fotos: [],
    price: 0,
    icon: ""


  };
  const dispatch = useDispatch();
  //const loading = useSelector<State, boolean>((state) => state.general.loading);
  const handleSubmit = (values: any) => {
    console.log("values", values)
    //dispatch(addProduct({ ...values }));
  };

  let loading = false

  return (
    <div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
      <Typography fontSize='16px'>
        products / create-product
      </Typography>
      <Divider style={{ marginBottom: "40px" }} />

      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
        validationSchema={FORM_VALIDATION}
      >
        <Form>
          {loading ? (
            <Box
              style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <Loader

                size={200}
                color='darkGrey'
                customMessage='Your Data is being send'
                progress={progress}
              /> */}
            </Box>
          ) : (
            <>
              <Box
                rowGap={2}
                display='flex'
                flexDirection='column'
                sx={{ mt: "20px" }}
              >
                <Grid container columnSpacing={2} rowSpacing={6}>
                  <Grid item xs={6}>
                    <SelectWrapper
                      name='category'
                      options={categories.map(category => category.title)}
                      label="Category"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <SelectWrapper
                      name='pattern'
                      options={fabrics.map(fabric => fabric.title)}
                      label="Pattern"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box style={{ width: "50%" }}>
                      <TextfieldIncrementable
                        label="Fotos of Product"
                        name='fotos'
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box style={{ width: "25%" }}>
                      <Textfield
                        label="Price €"
                        name='price'
                      />
                    </Box>

                  </Grid>
                  <Grid item xs={12}>
                    <Box style={{ width: "25%" }}>
                      <Textfield
                        label="Icon"
                        name='icon'
                      />
                    </Box>

                  </Grid>
                </Grid>
              </Box>
              <Box
                display='flex'
                justifyContent='start'
                sx={{ mt: "20px" }}
                columnGap={2}
              >

                <ButtonForm
                  label="Submit"
                  disabled={loading}
                />
              </Box>
            </>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default SubmitStory;
