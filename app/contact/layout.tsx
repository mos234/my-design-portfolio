import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "צור קשר - ייעוץ עיצוב פנים חינם",
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
