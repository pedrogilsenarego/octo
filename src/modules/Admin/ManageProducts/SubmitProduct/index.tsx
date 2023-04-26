
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
import { Product } from "../../../../slicer/products/products.types";
import { addProduct } from "../../../../slicer/products/products.actions";


const SubmitStory = () => {
  const INITIAL_FORM_STATE: Product = {
    category: "",
    pattern: "",
    fotos: [],
    price: 0,
    icon: ""


  };
  const dispatch = useDispatch();
  const loading = useSelector<State, boolean>((state) => state.general.loading);
  const handleSubmit = (values: Product) => {
    dispatch(addProduct({ ...values }));
  };


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
                width: "400px",
                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Loader


              />
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
                      <Typography mt="20px">Adicionar fotos em <b>webp</b>, do cloudinary, tamanho <b>1080*720px</b>, confirmar que eu nao tenho validação ainda para isso</Typography>
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
                      <Typography mt="20px">Adicionar foto em <b>webp</b>, do cloudinary, tamanho <b>200*200px</b>, confirmar que eu nao tenho validação ainda para isso</Typography>

                    </Box>

                  </Grid>
                </Grid>
              </Box>
              <Box
                display='flex'
                justifyContent='start'
                sx={{ mt: "50px" }}
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
