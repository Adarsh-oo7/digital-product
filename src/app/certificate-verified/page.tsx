import { pageMetadata } from "@/lib/seo";
import CertificateClient from "./CertificateClient";

export const metadata = pageMetadata({
  title: "Certificate Verification | Digital Product Solutions Kerala",
  description:
    "Verify the authenticity of digital certificates and course completions issued by Digital Product Solutions in Korani, Thiruvananthapuram, Kerala.",
  path: "/certificate-verified",
  keywords: [
    "Certificate Verification Kerala",
    "Digital Product Solutions Certificate",
    "Verify Intern Certificate Trivandrum",
  ],
});

export default function Page() {
  return <CertificateClient />;
}