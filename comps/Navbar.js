import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.svg" width={128} height={77} alt="Logo" />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/users">
        <a>User Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
