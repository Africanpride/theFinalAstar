import { lato, poppins, sourceCodePro700 } from "@/config/fonts";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={`${lato.className} container mx-auto`}>{children}</section>;
}
