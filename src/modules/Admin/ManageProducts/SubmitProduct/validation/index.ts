import * as Yup from "yup";
import { i18n } from "../../../../../translations/i18n";

export const FORM_VALIDATION = Yup.object().shape({
  pattern: Yup.string().required(`${i18n.t("forms.required")}`),
  category: Yup.string().required(`${i18n.t("forms.required")}`),
  fotos: Yup.array().of(Yup.string()
  .test('isValid', 'One of the fotos is invalid. They should start as https:// and finish as .webp', (value) => {
    if (typeof value !== 'string') return false; // check if value is a string
    if (!value.startsWith('https://')) return false; // check if value starts with https://
    if (!value.endsWith('.webp')) return false; // check if value ends with .webp
    return true;
  })
  .required(`${i18n.t('forms.required')}`)
  .label('Fotos'))
  .min(1, 'At least one foto is required'),
  price: Yup.number().required(`${i18n.t("forms.required")}`),
  icon: Yup.string()
  .test('isValid', 'The foto is invalid. Should start as https:// and finish as .webp', (value) => {
    if (typeof value !== 'string') return false; // check if value is a string
    if (!value.startsWith('https://')) return false; // check if value starts with https://
    if (!value.endsWith('.webp')) return false; // check if value ends with .webp
    return true;
  })
  .required(`${i18n.t('forms.required')}`)
  
  
  
  
  
});
