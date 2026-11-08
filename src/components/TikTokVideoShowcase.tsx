import React, { useState } from 'react';
import { Play, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData.ts';

interface TikTokVideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tag: string;
  views?: string;
}

export const TikTokVideoShowcase: React.FC = () => {
  const tiktokUrl = COMPANY_DATA.social.tiktok;

  const tiktokVideos: TikTokVideoItem[] = [
    {
      id: 'tt-1',
      title: 'Paddy Reception & Yard Activity',
      description: 'Daily harvest intake, grain unloading, and active processing grounds at Khan Muhammad Rice Mills.',
      thumbnail: '/assets/aistudio/images__2__7d74f0a8.jpg',
      tag: '#khanricemills',
      views: 'Active Reel',
    },
    {
      id: 'tt-2',
      title: 'Golden Grain Quality Inspection',
      description: 'Hands-on quality grading, moisture checks, and sack packaging with our operations team.',
      thumbnail: '/assets/aistudio/images_d6a94c2d.jpg',
      tag: '#khanricemills',
      views: 'Featured Reel',
    },
    {
      id: 'tt-3',
      title: 'Warehouse Dispatch & Grain Logistics',
      description: 'Loaded transport trucks dispatched from our warehouse facility on Shah Kareem Main Road, Sijawal.',
      thumbnail: '/assets/aistudio/images__1__54377b79.jpg',
      tag: '#KhanMuhammadRiceMills',
      views: 'Mill Fleet',
    },
    {
      id: 'tt-4',
      title: 'Evening Sunset Over the Mill Grounds',
      description: 'Golden hour view across the expansive drying floors and warehouse sheds in Sindh.',
      thumbnail: '/assets/aistudio/images__3__1525dfc8.jpg',
      tag: '#SijawalRiceMill',
      views: 'Mill Grounds',
    },
  ];

  const [activeVideo, setActiveVideo] = useState<TikTokVideoItem | null>(null);

  return (
    <section className="py-20 bg-[#174C35] text-white relative overflow-hidden border-t border-[#D6AA52]/30">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D6AA52]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-black/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block with TikTok Branding */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 border border-white/15 text-[#D6AA52] text-xs font-semibold">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              <span>Official TikTok Channel · @khanricemill</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Watch Our Mill Operations in Motion
            </h2>
            <p className="text-sm text-white/80 max-w-xl">
              Experience authentic daily rice processing, harvesting intake, and commercial dispatch videos straight from our Sindh facility.
            </p>
          </div>

          <a
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#D6AA52] hover:bg-[#e5c378] text-[#174C35] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center gap-2 transition-all hover:scale-105 shrink-0"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
            <span>Follow @khanricemill on TikTok</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 TikTok Video Reel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiktokVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group relative rounded-2xl overflow-hidden bg-black/40 border border-white/15 hover:border-[#D6AA52] transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between aspect-[9/14]"
            >
              {/* Background Thumbnail with Zoom Effect */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

              {/* Top Tag & Views */}
              <div className="relative z-10 p-4 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/60 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                  {video.tag}
                </span>
                <span className="text-[10px] font-semibold text-[#D6AA52] bg-[#174C35]/80 px-2 py-0.5 rounded backdrop-blur-sm">
                  {video.views}
                </span>
              </div>

              {/* Center Play Button */}
              <div className="relative z-10 flex items-center justify-center my-auto">
                <div className="w-14 h-14 rounded-full bg-[#174C35]/90 border-2 border-[#D6AA52] text-[#D6AA52] flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D6AA52] group-hover:text-[#174C35]">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom Caption & Action */}
              <div className="relative z-10 p-5 space-y-2">
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#D6AA52] transition-colors leading-snug">
                  {video.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                  {video.description}
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] font-semibold text-[#D6AA52]">
                  <span>Watch Video Reel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D6AA52] text-[#174C35] flex items-center justify-center shrink-0 shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-white">
                Daily Harvest & Milling Videos
              </h4>
              <p className="text-xs text-white/80 mt-0.5">
                Join our growing agricultural community on TikTok for transparent, behind-the-scenes milling operations.
              </p>
            </div>
          </div>

          <a
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white text-[#174C35] hover:bg-[#D6AA52] hover:text-[#174C35] font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow flex items-center gap-2"
          >
            <span>Open TikTok @khanricemill</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Video Modal Player / Direct Launcher */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative bg-slate-950 border-2 border-[#D6AA52] rounded-3xl overflow-hidden max-w-md w-full shadow-2xl p-6 text-center text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              ✕
            </button>

            <div className="relative aspect-[9/13] rounded-2xl overflow-hidden mb-5 bg-black border border-white/15">
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 flex flex-col justify-between p-4">
                <span className="self-start text-[10px] font-bold uppercase tracking-wider text-white bg-black/60 px-3 py-1 rounded-full border border-white/20">
                  {activeVideo.tag}
                </span>

                <div className="flex flex-col items-center justify-center my-auto">
                  <div className="w-16 h-16 rounded-full bg-[#174C35] border-2 border-[#D6AA52] text-[#D6AA52] flex items-center justify-center shadow-2xl animate-pulse">
                    <Play className="w-7 h-7 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="text-left">
                  <p className="text-xs font-semibold text-[#D6AA52]">Khan Muhammad Rice Mills</p>
                  <p className="text-xs text-white/90">Official TikTok Broadcast</p>
                </div>
              </div>
            </div>

            <h3 className="font-serif text-xl font-bold text-white mb-2">
              {activeVideo.title}
            </h3>
            <p className="text-xs text-white/80 mb-6 leading-relaxed">
              {activeVideo.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-[#D6AA52] hover:bg-[#e5c378] text-[#174C35] font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Watch Full Video on TikTok</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="w-full sm:w-auto px-5 py-3 text-xs text-white/70 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
