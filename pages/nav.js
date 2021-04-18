import Link from "next/link"

export default function IndexPage() {
  return (
    <Link
      href={{
        pathname: "/about",
        query: { id: "test" },
      }}
    >
      <a>About page</a>
    </Link>
  )
}