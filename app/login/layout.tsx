// app/login/layout.tsx
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full h-screen overflow-hidden">
        {children}
      </body>
    </html>
  );
}
