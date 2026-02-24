import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "תיק עבודות בעיצוב פנים - פרויקטים של AZ Designs",
  description:
    "גלו את תיק העבודות של AZ Designs – עיצוב פנים לחללים מסחריים, בתי קפה, מאפיות ודירות מגורים.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
