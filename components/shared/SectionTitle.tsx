interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <div className={`mb-14 flex flex-col ${alignment}`}>
      {subtitle && (
        <div className="flex items-center gap-4">
          {align === "left" && (
            <span className="h-px w-10 bg-[#C8A95A]" />
          )}

          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#C8A95A] sm:text-sm">
            {subtitle}
          </p>
        </div>
      )}

      <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
    </div>
  );
}