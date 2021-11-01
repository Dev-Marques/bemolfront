import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../Api';
import axios from 'axios';
import { Email, Form, Name, Street, Zip, Number, Complement, District, Locality, State, ContextButton } from './styles';

const ApplicationForm = () => {
  const schema = yup.object({
    nome: yup.string('Somente letras são permitidas').required('Campo obrigatório'),
    email: yup.string().email('Deve ser informado um e-mail válido').required('Campo obrigatório'),
    logradouro: yup.string('Somente Letras são permitidas').required('Campo obrigatório'),
    complemento: yup.string('Somente letras são permitidas'),
    numero: yup.number('Somente números são permitidos').integer().required('Campo obrigatório'),
    bairro: yup.string('Somente Letras são permitidas').required('Campo obrigatório'),
    localidade: yup.string('Somente Letras são permitidas').required('Campo obrigatório'),
    uf: yup.string('Somente Letras são permitidas').required('Campo obrigatório'),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const searchZip = (e) => {
    const { value } = e.target;
    const c = value.replace(/\.|\-/g, '');

    api
      .get(`${c}/json/`)
      .then((res) => {
        setValue('cep', c);
        setValue('logradouro', res.data.logradouro);
        setValue('complemento', res.data.complemento);
        setValue('bairro', res.data.bairro);
        setValue('localidade', res.data.localidade);
        setValue('uf', res.data.uf);
      })
      .catch((e) => console.log(e));
  };
  const onSubmit = (data) => {
    axios
      .post('http://localhost:3010/api/customer/', data)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Bemol Connection</h1>
          <h2>Conectando você a nossos serviços</h2>
        </div>

        <Name placeholder="Nome" error={errors.nome?.message} {...register('nome')} />
        <Email placeholder="Email" error={errors.email?.message} {...register('email')} />
        <Zip placeholder="Cep" onChange={(e) => searchZip(e)} />
        <Street placeholder="Logradouro" error={errors.logradouro?.message} {...register('logradouro')} />
        <Number placeholder="Número" {...register('numero')} />
        <Complement placeholder="Complemento" error={errors.complemento?.message} {...register('complemento')} />
        <District placeholder="Bairro" error={errors.bairro?.message} {...register('bairro')} />
        <Locality placeholder="Localidade" error={errors.localidade?.message} {...register('localidade')} />
        <State placeholder="UF" error={errors.uf?.message} {...register('uf')} />
        <ContextButton>
          <button type="submit">Enviar</button>
        </ContextButton>
      </Form>
    </>
  );
};

export default ApplicationForm;
