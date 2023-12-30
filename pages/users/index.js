import styles from '../../styles/Users.module.css';
import Link from 'next/link';

// runs at build time
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { users: data },
  };
};

const Users = ({ users }) => {
  return (
    <div>
      <h1>All Users</h1>
      {users.map((u) => (
        <Link href={'/users/' + u.id} key={u.id}>
          <a className={styles.single}>
            <h3>
              {u.name} - {u.username}
            </h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Users;
