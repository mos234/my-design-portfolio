import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "דירת מגורים – עיצוב פנים",
  description:
    "גלריית עיצוב פנים של דירת מגורים יוקרתית בסטודיו אבי צוובנר.",
};

export default function ResidenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
