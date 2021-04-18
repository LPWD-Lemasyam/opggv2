export default function AboutPage({ id }) {
    return <div>About us: {id}</div>
  }
  
  AboutPage.getInitialProps = ({ query: { id } }) => {
    return { id }
  }