import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <p>login page</p>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <Link href="/"> Voltar a pagina principal </Link>
      </>
    )
  }
  return (
    <>
      <p>login page</p>
      Not signed in <br />
      <button onClick={() => signIn()}>Click here to sign in</button>
      <Link href="/"> <p>Voltar a pagina principal</p> </Link>
    </>
  )
}
