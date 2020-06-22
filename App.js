import React from 'react';
import { Container, Header, Content, Body, Title } from 'native-base';
import ProductList from './ProductList';
import MyCard from './MyCard';

export default function App() {

  const isValid = true;

  return (
    <Container>
      <MyCard>
        This is a long sentence, and I want to insert content into the 
        Card component from the outside.
      </MyCard>
    </Container>
  );
}
