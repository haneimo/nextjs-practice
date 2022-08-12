import Link from "next/link";
import Button from "react-bootstrap/Button";

export default function IndexPage() {
  return (
    <div>
      <Button variant="primary">test</Button>

      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/day">
        <a>Day</a>
      </Link>
    </div>
  );
}
