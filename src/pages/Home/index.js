import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function Home() {
  const projects = [
    {
      title: 'Repositório Dev-Fullstack',
      description: 'Repositório principal da Unidade Curricular Dev-Fullstack',
      link: 'https://github.com/d13g0hornburg/dev-fullstack'
    },
    {
      title: 'Bot para Telegram em Pythom',
      description: 'Repositório contém um bot simples para Telegram, desenvolvido em Python',
      link: 'https://github.com/d13g0hornburg/embed242a3'
    },
    {
      title: 'Projeto de Extensão ADS',
      description: 'Projeto de extensão ADS - Aplicação Achados e Perdidos',
      link: 'https://github.com/d13g0hornburg/ADS3AchadosPerdidos'
    },
    {
      title: 'Emuldaor de ROM com Docker',
      description: 'Repositório de um emulador ROM usando container Docker',
      link: 'https://github.com/d13g0hornburg/Embed242A2'
    },
    {
      title: 'Gerador de Pokemon em REACT com API',
      description: 'Consumindo api simples em React de um gerador de pokemon',
      link: 'https://github.com/d13g0hornburg/react-ex-pokedex'
    },
    {
      title: 'Gerador de Mensagens Inspiradoras em REACT com API',
      description: 'Um gerador de mensagens inspiradoras em React',
      link: 'https://github.com/d13g0hornburg/geradorMsg'
    }
  ];

  return (
    <div>
      <section id="about" className="my-5">
        <Container>
          <Row>
            <Col md={4}>
            <img src={`${process.env.PUBLIC_URL}/dev-diego.jpg`} alt="Dev Diego" className="img-fluid rounded-circle" />
            </Col>
            <Col md={8}>
              <h2>Sobre</h2>
              <p>
                Sou graduando na Faculdade de Tecnologia Senac de Jaraguá do Sul, onde curso Análise e Desenvolvimento de Sistemas. Durante minha jornada acadêmica, desde a primeira até a quarta fase, adquiri uma curva de aprendizado significativa em desenvolvimento. Iniciei com introdução à programação, abordando conceitos e práticas de lógica de programação, engenharia de requisitos, modelagem de dados, orientação a objetos, estrutura de dados, SGBD, Git e GitHub para versionamento, desenvolvimento web e, atualmente, desenvolvimento full-stack.
              </p>
              <p>
                As stacks que alcancei durante esse processo incluem Java, Python, JavaScript, Node.js e frameworks como React e Bootstrap, entre outros. Tenho mais de 10 anos de experiência na área de informática, atuando desde suporte até funções administrativas de analista. Atualmente, trabalho como suporte na faculdade onde estudo, SENAC. Determinado e apaixonado por tecnologia, espero contribuir com meu conhecimento tanto para a comunidade quanto para meu trabalho.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="projects" className="my-5">
        <Container>
          <h2>Projetos</h2>
          <Row>
            {projects.map((project, index) => (
              <Col md={4} key={index}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Card.Link href={project.link} target="_blank">Ver no Github</Card.Link>
                    <Card.Link href={project.link} target="_blank">Ir para a página</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="contact" className="my-5">
        <Container>
          <h2>Contato</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Seu nome" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Seu email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Sua mensagem" />
            </Form.Group>
            <Button variant="primary" type="submit">Enviar</Button>
          </Form>
        </Container>
      </section>
    </div>
  );
}

export default Home;