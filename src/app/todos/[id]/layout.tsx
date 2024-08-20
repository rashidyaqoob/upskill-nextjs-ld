export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <p>Hi</p>
    {children}
    </>
  );
}