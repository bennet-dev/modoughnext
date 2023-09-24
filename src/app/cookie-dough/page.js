import Link from "next/link";

const CookieDoughPage = () => {
  return (
    <div>
      Cookie Dough Page
      <Link href="/cookie-dough">
        <button>Go Home</button>
      </Link>
    </div>
  );
};

export default CookieDoughPage;
