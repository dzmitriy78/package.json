import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import classes from "./PostForm.module.css"
import {text} from "stream/consumers";
import {postFormSchema} from "./formValidation/loginFormSchema";


export interface FormikValues {
    text: string
}

interface Errors {
    text?: string
}

interface PostFormProps {
    callback: (values: FormikValues) => void
}

const PostForm = (props: PostFormProps) => {
    return (
        <div>
            <Formik
                initialValues={{text: ""}}
                validate={values => {
                    const errors: Errors = {};
                    if (!values.text) {
                        errors.text = 'Enter your message'
                    }
                    return errors;
                }}
                onSubmit={(values: FormikValues, actions: any) => {
                    props.callback(values)
                    actions.resetForm({values: ""})
                }}
                validationSchema={postFormSchema}
            >
                {() => (
                    <Form>
                        <div>`
                            <Field component={'textarea'}
                                   name={'text'}
                                   placeholder={'text'}/>
                        </div>
                        <div className={classes.errorMessage}>
                            <ErrorMessage name="text" component="div"/>
                        </div>
                        <button type={'submit'}>Add post</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default PostForm;