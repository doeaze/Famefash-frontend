export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div >
      
      {/* <aside className="w-1/5 bg-gray-100 p-4">
        <h2 className="text-xl font-bold">Admin</h2>
        
      </aside> */}
      <main className="w-4/5 p-6 overflow-auto">{children}</main>
    </div>
  );
}
