interface Props {

  number: string | number;

  label: string;

}

export default function StatCard({

  number,

  label,

}: Props) {

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center transition hover:border-[#C8A95A]">

      <h3 className="text-5xl font-black text-[#C8A95A]">

        {number}

      </h3>

      <p className="mt-3 text-zinc-400">

        {label}

      </p>

    </div>

  );

}