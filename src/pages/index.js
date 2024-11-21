export default function Home({ headline }) {
    return (
      <h1>{headline}</h1>
    );
  }
  
  export async function getServerSideProps() {
    const headline = process.env.NEXT_PUBLIC_HEADLINE;
  
    return {
      props: {
        headline,
      },
    };
  }
  