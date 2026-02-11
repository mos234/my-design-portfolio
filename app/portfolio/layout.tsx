import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "תיק עבודות",
  description:
    "תיק העבודות של סטודיו אבי צוובנר – פרויקטים נבחרים בעיצוב פנים: דירות מגורים, מאפיות וחללים מסחריים.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
