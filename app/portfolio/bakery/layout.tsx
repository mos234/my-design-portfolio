import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "שיפוץ מאפייה – לפני ואחרי",
  description:
    "גלריית לפני ואחרי של פרויקט שיפוץ מאפייה בעיצוב סטודיו אבי צוובנר.",
};

export default function BakeryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
