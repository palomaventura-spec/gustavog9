"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

interface VideoCardProps {
  title: string;
  subtitle?: string;
  thumbnail: string;
  youtubeId?: string;
  featured?: boolean;
}

export default function VideoCard({
  title,
  subtitle,
  thumbnail,
  youtubeId,
  featured = false,
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoAvailable = Boolean(youtubeId);

  return (
    <div
      className={`relative overflow-hidden bg-black ${
        featured ? "aspect-video w-full" : "aspect-video"
      }`}
    >
      {isPlaying && youtubeId ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            if (videoAvailable) {
              setIsPlaying(true);
            }
          }}
          disabled={!videoAvailable}
          aria-label={
            videoAvailable
              ? `Reproduzir ${title}`
              : `${title} ainda não disponível`
          }
          className="group absolute inset-0 block h-full w-full text-left disabled:cursor-not-allowed"
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            priority={featured}
            sizes={
              featured
                ? "100vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`flex items-center justify-center rounded-full border border-white/30 bg-black/60 text-white backdrop-blur-sm transition duration-300 ${
                featured
                  ? "h-20 w-20"
                  : "h-16 w-16"
              } ${
                videoAvailable
                  ? "group-hover:scale-110 group-hover:bg-[#C8A95A] group-hover:text-black"
                  : "opacity-50"
              }`}
            >
              <Play
                size={featured ? 34 : 26}
                fill="currentColor"
                className="ml-1"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
            <p className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
              {title}
            </p>

            {subtitle && (
              <p className="mt-2 text-sm font-semibold text-zinc-300">
                {subtitle}
              </p>
            )}

            {!videoAvailable && (
              <p className="mt-3 text-xs font-black uppercase tracking-[0.2em] text-[#C8A95A]">
                Vídeo em breve
              </p>
            )}
          </div>
        </button>
      )}
    </div>
  );
}