export default function ServerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black no-custom-cursor">{children}</div>
  );
}
