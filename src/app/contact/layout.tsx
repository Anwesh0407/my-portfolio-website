import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Anwesh Bindhani",
  description: "Initiate contact through the secure channel. Discussion on mining engineering, AI integration, and creative collaborations.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
