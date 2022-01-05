import styles from "../styles/Home.module.css";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
export default function Home() {
  return (
    <>
      <SignedIn>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn returnBack />
      </SignedOut>
    </>
  );
}
