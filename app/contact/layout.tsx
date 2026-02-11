import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "צור קשר | אבי צוובנר - עיצוב פנים",
  description:
    "צרו קשר עם סטודיו אבי צוובנר לעיצוב פנים. טלפון, אימייל וטופס יצירת קשר.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
