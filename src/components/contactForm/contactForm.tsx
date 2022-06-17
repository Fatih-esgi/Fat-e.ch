import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import Notiflix from "notiflix";
import * as Yup from "yup";
import styled from "styled-components";
import { Formik, Form as FormikForm, Field, FormikProps } from "formik";
interface Props {
  lastName: string;
  firstName: string;
  email: string;
  telephone: string;
  message: string;
}

const ContactForm = () => {
  const router = useRouter();
  const [formModel, setFormModel] = useState({
    lastName: "",
    firstName: "",
    email: "",
    telephone: "",
    message: "",
  });

  const validatorSchema = Yup.object().shape({
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    telephone: Yup.string().min(2, "Too Short!").max(20, "Too Long!"),
    message: Yup.string()
      .min(2, "Too Short!")
      .max(500, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = async (values: Props) => {
    try {
      let res = await axios.post("/api/contactMail", values);
      console.log("Success!", res);
      Notiflix.Report.success(
        "Succès !",
        "Votre message nous a été transmis. Nous vous contacterons dans les plus brefs délais",
        "Ok",
        () => {
          router.reload();
        }
      );
    } catch (error) {
      Notiflix.Report.failure(
        "Ooops !",
        "Une erreure s'est produite lors de l'envoi du formulaire, veuillez réessayer ou nous contacter si cela se reproduit",
        "Ok"
      );
    }
  };

  return (
    <FormBlock>
      <Formik
        initialValues={formModel}
        enableReinitialize={true}
        validationSchema={validatorSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(props: FormikProps<Props>) => (
          <FormikForm>
            <FormStyle>
              <FormRow1>
                <div className="input_options">
                  <Field
                    className={
                      props.errors.lastName && props.touched.lastName
                        ? "erros"
                        : ""
                    }
                    as={Input}
                    name="lastName"
                    placeholder="prénom"
                  />
                  {props.errors.lastName && props.touched.lastName ? (
                    <div className="input_erros">{props.errors.lastName}</div>
                  ) : null}
                </div>

                <div className="input_options">
                  <Field
                    className={
                      props.errors.firstName && props.touched.firstName
                        ? "erros"
                        : ""
                    }
                    as={Input}
                    name="firstName"
                    placeholder="Nom"
                  />
                  {props.errors.firstName && props.touched.firstName ? (
                    <div className="input_erros">{props.errors.firstName}</div>
                  ) : null}
                </div>
              </FormRow1>

              <div>
                <Field
                  className={
                    props.errors.email && props.touched.email ? "erros" : ""
                  }
                  as={Input}
                  name="email"
                  placeholder="Email"
                />
                {props.errors.email && props.touched.email ? (
                  <div className="input_erros">{props.errors.email}</div>
                ) : null}
              </div>

              <div>
                <Field
                  className={
                    props.errors.telephone && props.touched.telephone
                      ? "erros"
                      : ""
                  }
                  as={Input}
                  name="telephone"
                  placeholder="Téléphone"
                />
                {props.errors.telephone && props.touched.telephone ? (
                  <div className="input_erros">{props.errors.telephone}</div>
                ) : null}
              </div>

              <div className="text_area">
                <Field
                  className={
                    props.errors.message && props.touched.message ? "erros" : ""
                  }
                  as="textarea"
                  name="message"
                  cols={30}
                  rows={8}
                  placeholder="votre message"
                />
                {props.errors.message && props.touched.message ? (
                  <div className="input_erros">{props.errors.message}</div>
                ) : null}
              </div>

              <ButtonValidateMobile type="submit">Envoyer</ButtonValidateMobile>
            </FormStyle>
          </FormikForm>
        )}
      </Formik>
    </FormBlock>
  );
};
export default ContactForm;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 2px solid var(--LightYellow);
  padding: 0.4rem;
  background-color: transparent;
  color: var(--White);
  &::placeholder {
    color: var(--LightBlue);
  }
`;
const FormBlock = styled.div`
  width: 100%;

  form {
    display: flex;
  }

  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const ButtonValidateMobile = styled.button`
  width: 100%;
  height: 50px;
  background: var(--Blue);
  color: var(--White);
  border: none;
  font-size: 1.2rem;
  transition: 0.2s ease;

  &:active {
    transform: scale(0.9);
  }
`;

const FormRow1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;

  .input_options {
    width: 100%;
  }

  input {
    width: 100%;
  }
`;
const FormStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  gap: 18px;
  width: 90%;
  margin: 0 auto;

  input.erros {
    border: 2px solid red;
  }

  .input_erros {
    font-size: 0.7rem;
    color: red;
  }

  div.text_area {
    textarea {
      width: 100%;
      border: 2px solid var(--Blue);
      padding: 0.4rem;
    }
  }

  @media (max-width: 560px) {
    width: 100%;
    max-width: 400px;
  }
`;
