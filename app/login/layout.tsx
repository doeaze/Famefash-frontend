
// export default function LoginLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="w-full overflow-hidden">
//         {children}
//       </body>
//     </html>
//   );
// }
// app/login/layout.tsx

// app/login/layout.tsx
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}


