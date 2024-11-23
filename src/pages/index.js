export default function Home({ companyName }) {
    return (
      <div>
        <h1>{companyName}</h1>
      <h2>Hey</h2>
      </div>
    );
  }
  
  export async function getServerSideProps() {
    const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;
  
    return {
      props: {
        companyName,
      },
    };
  }
  