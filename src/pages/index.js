export default function Home({ headline }) {
    return (
      <div>
        <h1>{headline}</h1>
      <h2>Hey</h2>
      </div>
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
  