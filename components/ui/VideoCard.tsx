"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  subtitle?: string;
  thumbnail: string;
  video: string;
  featured?: boolean;
  showInfo?: boolean;
  className?: string;
}

export default function VideoCard({
  title,
  subtitle,
  thumbnail,
  video,
  featured = false,
  showInfo = true,
  className = "",
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <article className={`group w-full ${className}`}>
      <div
        className={[
          "relative overflow-hidden border border-white/10 bg-black",
          "shadow-[0_30px_80px_rgba(0,0,0,0.45)]",
          featured ? "rounded-sm" : "rounded-sm",
        ].join(" ")}
      >
        <div className="relative aspect-video w-full">
          {isPlaying ? (
            <video
              controls
              autoPlay
              playsInline
              preload="metadata"
              poster={thumbnail}
              className="h-full w-full bg-black object-contain"
            >
              <source src={video} type="video/mp4" />

              Seu navegador não suporta a reprodução deste vídeo.
            </video>
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label={`Reproduzir vídeo: ${title}`}
              className="relative block h-full w-full cursor-pointer overflow-hidden bg-black text-left"
            >
              <Image
                src={thumbnail}
                alt={`Capa do vídeo ${title}`}
                fill
                priority={featured}
                sizes={
                  featured
                    ? "(max-width: 1024px) 100vw, 1200px"
                    : "(max-width: 768px) 100vw, 50vw"
                }
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/35" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/25" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.05)_35%,rgba(0,0,0,0.65)_100%)]" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className={[
                    "flex items-center justify-center rounded-full",
                    "border border-[#C8A95A]/60 bg-black/45",
                    "text-[#C8A95A] backdrop-blur-md",
                    "shadow-[0_0_40px_rgba(200,169,90,0.2)]",
                    "transition-all duration-300",
                    "group-hover:scale-110",
                    "group-hover:border-[#C8A95A]",
                    "group-hover:bg-[#C8A95A]",
                    "group-hover:text-black",
                    featured
                      ? "size-20 sm:size-24"
                      : "size-16 sm:size-20",
                  ].join(" ")}
                >
                  <Play
                    fill="currentColor"
                    strokeWidth={1.7}
                    className={[
                      "ml-1",
                      featured
                        ? "size-8 sm:size-10"
                        : "size-7 sm:size-8",
                    ].join(" ")}
                  />
                </span>
              </div>

              <div className="absolute left-4 top-4 border border-white/15 bg-black/50 px-3 py-2 backdrop-blur-md sm:left-6 sm:top-6">
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#C8A95A] sm:text-[10px]">
                  Match Highlights
                </p>
              </div>

              {featured && (
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C8A95A]">
                    Featured Video
                  </p>

                  <h3 className="mt-3 max-w-4xl text-2xl font-black uppercase leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                    {title}
                  </h3>

                  {subtitle && (
                    <p className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-white/65 sm:text-base">
                      {subtitle}
                    </p>
                  )}
                </div>
              )}
            </button>
          )}
        </div>
      </div>

      {!featured && showInfo && (
        <div className="mt-5 border-l-2 border-[#C8A95A] pl-4">
          <h3 className="text-lg font-black uppercase tracking-[-0.02em] text-white sm:text-xl">
            {title}
          </h3>

          {subtitle && (
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C8A95A]">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </article>
  );
}