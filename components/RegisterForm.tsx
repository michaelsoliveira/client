/* eslint-disable react-hooks/rules-of-hooks */
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { create } from '../store/userSlice'
import * as Yup from 'yup'
import { setMessage } from "../store/messageSlice"
import 'react-toastify/dist/ReactToastify.css';
import AlertService from '../services/alert'
import { signIn } from 'next-auth/react';
import type { UserData } from "../services/user"

import { AuthContext } from '../contexts/AuthContext2';
import { useRouter } from 'next/router';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export const RegisterForm = ({ styles, parentShowLogin }: any) => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const user = useSelector((state: RootState) => state.user.data)
    const errorMessage = useSelector((state: RootState) => state.user.errorMessage)
    const { message } = useSelector((state: RootState) => state.message) as any
    // const { signIn } = useContext(AuthContext)
    function showLogin() {
        parentShowLogin(true)
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string()
        .test(
            "len",
            "O nome de usuário tem que ter entre 3 e 20 caracteres.",
            (val: any) =>
            val &&
            val.toString().length >= 3 &&
            val.toString().length <= 20
        )
        .required("Campo obrigatório!"),
        email: Yup.string()
        .email("Este não é um email válido.")
        .required("Campo obrigatório!"),
        password: Yup.string()
        .test(
            "len",
            "The password must be between 6 and 40 characters.",
            (val: any) =>
            val &&
            val.toString().length >= 6 &&
            val.toString().length <= 40
        )
        .required("Campo obrigatório!"),
    });

    async function handleRegister(data: UserData) {
        await dispatch(create(data))
        .unwrap()
        .then(async () => {
            const { email, password } = data
            
            const res = await signIn('credentials', {
            redirect: false,
            email,
            password,
            // callbackUrl: `${window.location.origin}`,
          }).then((response: any) => {
            console.log(response)
                if (response.ok) {
                AlertService.success('Login realizado com sucesso')
                router.push('/')
                } else {
                AlertService.warn('Email ou senha inválidos, verifique os dados e tente novamente!')
                }
            }).catch ((e) => {
                console.log(e)
            })
        })
            .catch((error) => {
            AlertService.error(`Error: ${error.errorMessage}`)
        });
    }

    interface Values {
        username: string;
        email: string;
        password: string;
        provider: string;
        idProvider: string;
    }

    useEffect(() => {
        setMessage('Lading...')
        
        return () => {
            
            
        }
    }, [])
    
    return (
        <div>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    provider: '',
                    idProvider: ''
                }}
                validationSchema={validationSchema}
                onSubmit={ (
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    handleRegister(values)
                }}
            >
                {(props) => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    } = props;
                    return (
                        <Form>
                            <label className={styles.label} htmlFor="username">Nome</label>
                            <Field className={styles.field} id="username" name="username" placeholder="Michael" />
                            <ErrorMessage className='text-sm text-red-500 mt-1' name="username" component="div" />

                            <label className={styles.label} htmlFor="email">Email</label>
                            <Field
                                className={styles.field}
                                id="email"
                                name="email"
                                placeholder="john@acme.com"
                                type="email"
                            />
                            <ErrorMessage className='text-sm text-red-500 mt-1' name="email" component="div" />
                            <label className={styles.label} htmlFor="password">Senha</label>
                            <Field
                                type="password"
                                className={styles.field}
                                id="password"
                                name="password"
                                placeholder="******" />
                            <ErrorMessage className='text-sm text-red-500 mt-1' name="password" component="div" />
                            <div className='mt-8 flex flex-row justify-between w-full items-center'>
                                <button className={classNames(styles.button, 'w-full')} type="submit">Cadastrar</button>
                            </div>
                    
                        </Form>
                    )
                }}
            </Formik>
            
        </div>
    );
}