import * as Yup from "yup";
import { i18n } from "../../../../../translations/i18n";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required(`${i18n.t("forms.required")}`),
  address: Yup.string().required(`${i18n.t("forms.required")}`),
  postCode:Yup.string().required(`${i18n.t("forms.required")}`),
  email: Yup.string().email().required(`${i18n.t("forms.required")}`),
  phone: Yup.string().matches(phoneRegExp, `${i18n.t("forms.phoneVal")}`).required(`${i18n.t("forms.required")}`)
  
});
