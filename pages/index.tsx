import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {
  return <Title>My page
    <section className="section">
      <div className="container">
        <h1 className="title">
          Hello World
        </h1>
        <p className="subtitle">
          My first website with <strong>Bulma</strong>!
        </p>
      </div>
    </section>
  </Title>
}
