export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { user: data },
  };
};

const Details = ({ user }) => {
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h2>Contact Details</h2>
      <h3>User Name: {user.username}</h3>
      <p>Email Address: {user.email}</p>
      <p>Phone Number: {user.phone}</p>
      <p>Website: {user.website}</p>
      <h2>Address</h2>
      <p>Street: {user.address.street}</p>
      <p>City: {user.address.city}</p>
      <p>Zip Code: {user.address.zipcode}</p>
      <h2>Company Details</h2>
      <p>Company Name: {user.company.name}</p>
      <p>Catch Phrase: {user.company.catchPhrase}</p>
    </div>
  );
};

export default Details;
