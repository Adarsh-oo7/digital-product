export type FaqItem = { q: string; a: string };

export default function FaqList({ items }: { items: FaqItem[] }) {
  if (!items.length) return null;
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.q} className="rounded-2xl border border-gray-100 bg-white p-5">
            <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
