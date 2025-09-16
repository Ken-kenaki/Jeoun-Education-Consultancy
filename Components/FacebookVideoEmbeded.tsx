"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type FacebookReelEmbedProps = {
  // Single reel or multiple reels
  reelId?: string;
  reelIds?: string[];
  // If provided and exists in reelIds, it will be shown first
  selectedReelId?: string;
  // Optional UI controls
  title?: string;
  showTitle?: boolean;
  maxWidth?: number; // px for container (default 500)
};

const ReelCard = ({ reelId, maxWidth = 500 }: { reelId: string; maxWidth?: number }) => {
  const reelUrl = `https://www.facebook.com/reel/${reelId}`;
  const iframeSrc = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    `https://www.facebook.com/reel/${reelId}/`
  )}&show_text=false&width=${maxWidth}`;

  return (
    <div className="w-full" style={{ maxWidth }}>
      <div className="relative" style={{ paddingBottom: "177.78%" }}>
        <iframe
          src={iframeSrc}
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          loading="lazy"
        />
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        <a
          href={reelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Watch on Facebook
        </a>
      </div>
    </div>
  );
};

const FacebookReelEmbed = ({
  reelId,
  reelIds,
  selectedReelId,
  title = "Watch Our Reels",
  showTitle = true,
  maxWidth = 500,
}: FacebookReelEmbedProps) => {
  // Normalize to an array
  const list = useMemo(() => {
    const arr = [
      ...(reelIds ?? []),
      ...(reelId ? [reelId] : []),
    ].filter(Boolean);

    // If selectedReelId provided and exists, move it to front
    if (selectedReelId && arr.includes(selectedReelId)) {
      return [selectedReelId, ...arr.filter((id) => id !== selectedReelId)];
    }
    return arr;
  }, [reelId, reelIds, selectedReelId]);

  if (!list.length) return null;

  const multiple = list.length > 1;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {showTitle && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-800"
          >
            {title}
          </motion.h2>
        )}

        {multiple ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {list.map((id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full flex justify-center"
              >
                <ReelCard reelId={id} maxWidth={maxWidth} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full flex justify-center"
            >
              <ReelCard reelId={list[0]} maxWidth={maxWidth} />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FacebookReelEmbed;
