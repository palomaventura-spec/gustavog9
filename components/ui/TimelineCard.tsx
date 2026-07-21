interface TimelineCardProps {
  year: string;
  period: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  highlight?: boolean;
  index: number;
}

export default function TimelineCard({
  year,
  period,
  title,
  titleEn,
  description,
  descriptionEn,
  highlight = false,
  index,
}: TimelineCardProps) {
  return (
    <article className="group relative pl-12 md:pl-0">
      <div
        className={`absolute left-0 top-1.5 z-10 flex size-6 items-center justify-center rounded-full border md:left-1/2 md:-translate-x-1/2 ${
          highlight
            ? "border-[#C8A95A] bg-[#C8A95A]"
            : "border-white/25 bg-[#080a0d]"
        }`}
      >
        <span
          className={`size-2 rounded-full ${
            highlight ? "bg-[#050608]" : "bg-[#C8A95A]"
          }`}
        />
      </div>

      <div
        className={`md:w-[calc(50%-3rem)] ${
          index % 2 === 0
            ? "md:mr-auto md:pr-8 md:text-right"
            : "md:ml-auto md:pl-8"
        }`}
      >
        <div
          className={`border-t pt-6 transition duration-300 ${
            highlight
              ? "border-[#C8A95A]/45"
              : "border-white/10 group-hover:border-[#C8A95A]/35"
          }`}
        >
          <div
            className={`flex flex-wrap items-center gap-3 ${
              index % 2 === 0 ? "md:justify-end" : ""
            }`}
          >
            <span className="text-3xl font-black tracking-[-0.04em] text-white">
              {year}
            </span>

            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#C8A95A]">
              {period}
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-black uppercase tracking-[-0.03em] text-white">
            {title}
          </h3>

          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
            {titleEn}
          </p>

          <p className="mt-5 text-base leading-8 text-zinc-400">
            {description}
          </p>

          <p className="mt-3 text-sm italic leading-7 text-zinc-600">
            {descriptionEn}
          </p>
        </div>
      </div>
    </article>
  );
}