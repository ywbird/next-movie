import { useRouter } from "next/router";
import NavBar from "./NavBar";
import Seo from "./Seo";

export default function Layout({
  children,
}: React.PropsWithChildren): JSX.Element {
  const router = useRouter();
  const titles: Record<string, string> = { "/": "Home", "/about": "About" };
  return (
    <>
      <Seo title={titles[router.pathname]} />
      <NavBar />
      <div>{children}</div>
    </>
  );
}
