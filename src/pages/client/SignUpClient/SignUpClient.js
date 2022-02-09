import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../../../services/api";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function SignUpClient(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(event){
        event.preventDefault();

        const promise = api.registerClient({...formData});
        promise.then((response)=>{
            navigate("/sign-in-client");
        })
    }

    return (
    <Container>
        <h1>NessCommerce</h1>
        <Form onSubmit={handleSubmit}>
            <Input
                placeholder="Nome"
                type="text"
                onChange={handleChange}
                name="name"
                value={formData.name}
                required
                />
            <Input
                placeholder="E-mail"
                type="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                required
                />
            <Input
                placeholder="Senha"
                type="password"
                onChange={handleChange}
                name="password"
                value={formData.password}
                required
                />
            <Button type="submit">Cadastrar</Button>
        </Form>
        <StyledLink to="/sign-in-client">Faça login</StyledLink>
    </Container>
    );
}

const Container = styled.div`
  width: 80vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #FAFAFA;

  h1{
      margin-bottom: 50px;

      font-size: 27px;
      font-style: bold;
      font-weight: 700;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Form = styled.form`
  width: 380px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  margin-bottom: 32px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Input = styled.input`
    all: unset;
    box-sizing: border-box;
    font-family: sans-serif;

    width: 100%;

    color: #000;
    background: #FFFFFF;
    padding: 15px 16px;
    border-radius: 5px;

    ::placeholder {
        color: #000;
        font-family: sans-serif;
    }
`;

const Button = styled.button`
    all: unset;
    box-sizing: border-box;
    cursor: pointer;

    width: 100%;

    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;

    text-align: center;

    padding: 12px;

    color: #FFFFFF;
    background: #023059;
    border-radius: 5px;
`;

const StyledLink = styled(Link)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
`;