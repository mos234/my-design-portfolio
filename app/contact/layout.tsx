import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "צור קשר עם סטודיו AZ Designs - ייעוץ עיצוב פנים חינם",
  description:
    "צרו קשר עם אבי צוובנר לייעוץ עיצוב פנים חינם. טלפון, אימייל וטופס יצירת קשר זמינים כאן.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
