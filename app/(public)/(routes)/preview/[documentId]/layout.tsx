export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-full dark:bg-[#rgb(10,13,17)]">{children}</div>;
}
