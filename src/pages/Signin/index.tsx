import React, {useRef, useCallback} from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/Auth'
import { useToast } from '../../hooks/Toast'
import getValidationsErrors from '../../utils/getValidationsErrors'

import logo from '../../assets/logo.svg'

import { Container, Content, AnimationContainer, Background } from './styles';

import Input from '../../components/Input'
import Button from '../../components/Button'

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { signIn } = useAuth()
  const { addToast } = useToast()

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try{
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um email válido'),
        password: Yup.string().required('No mínimo 6 dígitos'),
      })

      await schema.validate(data, {
        abortEarly: false
      })

      await signIn({
        email: data.email,
        password: data.password,
      })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationsErrors(err)

        formRef.current?.setErrors(errors)

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticacao',
        description: 'Verifique o usuário e senha os dois não são compativeis.',
      })
    }
  }, [signIn, addToast])
  return(
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu Logon</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
            <Button type="submit">Entrar</Button>

            <a href="forgot">Esqueci minha senha</a>

          </Form>
          <Link to="/signup">
            <FiLogIn size={20} />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  )
};

export default SignIn;
