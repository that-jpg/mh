import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p> Ola, aqui vai ser implementado a landing page </p>
      <Link href="/login"> Click here for login </Link><br />
      <Link href="/newsletter"> Click here for newsletter </Link>
    </div>
  )
}
