import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { ws } from "./../../../api";
import { newMessagePending } from "../../../store/slices/messagesSlice";
import styles from "./ChatForm.module.sass";

function ChatForm({ fetching }) {
  const initialValues = {
    body: "",
  };
  const addMessage = (values, formikBag) => {
    // create(values);
    ws.createMessage(values);
    fetching();
    formikBag.resetForm();
  };
  return (
    <section className={styles.formContainer} style={{ marginTop: "auto" }}>
      <Formik initialValues={initialValues} onSubmit={addMessage}>
        <Form>
          <Field name="body"></Field>
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </section>
  );
}

const mapStateToProps = ({ chat }) => chat;

const mapDispatchToProps = (dispatch) => ({
  fetching: () => dispatch(newMessagePending()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatForm);
