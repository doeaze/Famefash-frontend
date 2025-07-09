
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full overflow-hidden">
        {children}
      </body>
    </html>
  );
}
