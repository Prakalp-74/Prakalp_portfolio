type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold">{title}</h2>

      {subtitle && (
        <p className="mt-3 text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}