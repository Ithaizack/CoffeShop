export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-0 mb-10 md:py-8">
      <div className="inline-block max-w-6xl text-center justify-center">
        {children}
      </div>
    </section>
  );
}
