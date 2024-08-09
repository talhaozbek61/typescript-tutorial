export default function Parent({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl py-8 px-6">
      <h1 className="text-3xl text-gray-100">This is the Parent</h1>
      {children}
    </div>
  );
}
