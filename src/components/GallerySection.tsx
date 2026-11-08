import React, { useState, useEffect } from 'react';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Plus,
  Play,
  Video as VideoIcon,
  ExternalLink,
  Upload,
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/companyData.ts';

export const GallerySection: React.FC = () => {
  const [gallery, setGallery] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Add Media Modal state
  const [isAddMediaOpen, setIsAddMediaOpen] = useState(false);
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image');
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'facility' | 'processing' | 'grains' | 'storage' | 'videos'>('facility');
  const [newDescription, setNewDescription] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newVideoUrl, setNewVideoUrl] = useState('');
  const [newPlatform, setNewPlatform] = useState<'file' | 'tiktok' | 'facebook'>('tiktok');

  const filteredItems =
    activeCategory === 'all'
      ? gallery
      : gallery.filter((item) => {
          if (activeCategory === 'videos') {
            return item.type === 'video' || item.category === 'videos';
          }
          return item.category === activeCategory;
        });

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
  };

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => ((prev! - 1 + filteredItems.length) % filteredItems.length));
  };

  const handleAddMediaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newItem: GalleryItem = {
      id: `gal-custom-${Date.now()}`,
      title: newTitle.trim(),
      category: mediaType === 'video' ? 'videos' : newCategory,
      description: newDescription.trim() || 'Authentic company media',
      imageUrl: newImageUrl.trim() || '/assets/aistudio/images__2__7d74f0a8.jpg',
      type: mediaType,
      videoUrl: mediaType === 'video' ? newVideoUrl.trim() : undefined,
      platform: mediaType === 'video' ? newPlatform : undefined,
    };

    setGallery([newItem, ...gallery]);
    setIsAddMediaOpen(false);
    setNewTitle('');
    setNewImageUrl('');
    setNewVideoUrl('');
    setNewDescription('');
  };

  const handleVideoFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const videoObjUrl = URL.createObjectURL(file);
    setNewVideoUrl(videoObjUrl);
    setNewPlatform('file');
  };

  const currentItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-[#F8F7F2] relative border-t border-[#174C35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6AA52]">
              Visual & Video Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#174C35]">
              Our Business Gallery & Videos
            </h2>
            <p className="text-sm text-[#252A27]/75 max-w-xl">
              Photographs and operational video clips of our milling facility, paddy intake yard, grain inspection, and daily processing activities in Sindh.
            </p>
          </div>

          {/* Gallery Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                setMediaType('video');
                setIsAddMediaOpen(true);
              }}
              className="px-4 py-2 bg-[#174C35] hover:bg-[#0f3424] text-white text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <VideoIcon className="w-4 h-4 text-[#D6AA52]" />
              <span>Add Video / Reel</span>
            </button>

            <button
              onClick={() => {
                setMediaType('image');
                setIsAddMediaOpen(true);
              }}
              className="px-4 py-2 bg-white hover:bg-slate-50 text-[#174C35] border border-[#174C35]/20 text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4 text-[#D6AA52]" />
              <span>Add Facility Photo</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { id: 'all', label: 'All Media' },
            { id: 'videos', label: '🎬 Videos & Reels' },
            { id: 'facility', label: 'Milling Facility' },
            { id: 'processing', label: 'Processing & Paddy' },
            { id: 'grains', label: 'Rice Grains' },
            { id: 'storage', label: 'Warehouse & Storage' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#174C35] text-white shadow-sm'
                  : 'bg-white text-[#252A27]/70 hover:text-[#174C35] hover:bg-white/80 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isVideo = item.type === 'video' || item.category === 'videos';

            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(index)}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-[#174C35]/15 shadow-sm hover:shadow-xl cursor-pointer aspect-[4/3] transition-all duration-300"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Video Play Badge in Center */}
                {isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#174C35]/90 border-2 border-[#D6AA52] text-[#D6AA52] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#174C35]">
                      <Play className="w-6 h-6 fill-[#D6AA52] ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Caption Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D6AA52] bg-[#174C35]/85 px-2.5 py-0.5 rounded backdrop-blur-sm">
                        {isVideo ? 'Video Reel' : item.category}
                      </span>
                      {isVideo && item.platform && (
                        <span className="text-[9px] font-semibold uppercase tracking-wider text-white bg-white/20 px-2 py-0.5 rounded backdrop-blur-sm">
                          {item.platform}
                        </span>
                      )}
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <h3 className="font-serif text-base font-bold text-white group-hover:text-[#D6AA52] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Video Player Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Top Bar with Close and Navigation Index */}
          <div
            className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-[#D6AA52] font-semibold">
                Media {activeLightboxIndex! + 1} of {filteredItems.length}
              </span>
              <span className="text-white/40">·</span>
              <span className="text-xs text-white/80">{currentItem.title}</span>
            </div>

            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close media viewer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Button */}
          {filteredItems.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-10"
              aria-label="Previous media"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Active Content: Video or Image */}
          <div
            className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {currentItem.type === 'video' && currentItem.videoUrl && currentItem.platform === 'file' ? (
              /* Direct HTML5 Video Player */
              <video
                src={currentItem.videoUrl}
                controls
                autoPlay
                className="max-h-[70vh] w-auto max-w-full rounded-xl shadow-2xl border border-white/15"
              />
            ) : currentItem.type === 'video' && currentItem.videoUrl ? (
              /* Social Video Showcase (TikTok or Facebook) */
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border-2 border-[#D6AA52] shadow-2xl max-w-lg w-full p-8 text-center text-white flex flex-col items-center">
                <img
                  src={currentItem.imageUrl}
                  alt={currentItem.title}
                  className="w-full h-48 object-cover rounded-xl mb-5 opacity-80"
                />
                <div className="w-14 h-14 rounded-full bg-[#174C35] text-[#D6AA52] border border-[#D6AA52] flex items-center justify-center mb-3">
                  <Play className="w-6 h-6 fill-[#D6AA52]" />
                </div>
                <h4 className="font-serif text-xl font-bold text-white">
                  {currentItem.title}
                </h4>
                <p className="text-xs text-white/80 mt-2 mb-6">
                  {currentItem.description}
                </p>
                <a
                  href={currentItem.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#D6AA52] hover:bg-[#e5c378] text-[#174C35] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center gap-2 transition-all hover:scale-105"
                >
                  <span>Watch on {currentItem.platform === 'tiktok' ? 'TikTok' : 'Facebook'}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ) : (
              /* High-Resolution Image */
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/15"
              />
            )}

            {/* Caption */}
            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <h4 className="font-serif text-xl font-bold text-[#D6AA52]">
                {currentItem.title}
              </h4>
              <p className="text-xs sm:text-sm text-white/80 mt-1 leading-relaxed">
                {currentItem.description}
              </p>
            </div>
          </div>

          {/* Next Button */}
          {filteredItems.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-10"
              aria-label="Next media"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}

      {/* Add Media (Photo or Video) Modal */}
      {isAddMediaOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-[#174C35]/15 overflow-hidden">
            <div className="px-6 py-4 bg-[#174C35] text-white flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-white">
                  {mediaType === 'video' ? 'Add Video or Reel' : 'Add Gallery Photo'}
                </h3>
                <p className="text-xs text-[#D6AA52] mt-0.5">
                  {mediaType === 'video'
                    ? 'Attach an MP4 video or link from TikTok/Facebook'
                    : 'Include a facility or activity picture'}
                </p>
              </div>
              <button
                onClick={() => setIsAddMediaOpen(false)}
                className="text-white/80 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddMediaSubmit} className="p-6 space-y-4">
              {/* Media Type Toggle */}
              <div className="flex rounded-lg bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() => setMediaType('image')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    mediaType === 'image'
                      ? 'bg-white text-[#174C35] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Photograph
                </button>
                <button
                  type="button"
                  onClick={() => setMediaType('video')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    mediaType === 'video'
                      ? 'bg-white text-[#174C35] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Video / Reel
                </button>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#174C35] uppercase tracking-wider mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder={
                    mediaType === 'video'
                      ? 'e.g. Live Milling & Polishing in Action'
                      : 'e.g. Grain Polishing Line'
                  }
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#174C35]"
                />
              </div>

              {mediaType === 'video' ? (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-[#174C35] uppercase tracking-wider mb-1">
                      Video Platform / Source *
                    </label>
                    <select
                      value={newPlatform}
                      onChange={(e) => setNewPlatform(e.target.value as any)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#174C35]"
                    >
                      <option value="tiktok">TikTok Video Link</option>
                      <option value="facebook">Facebook Video Link</option>
                      <option value="file">MP4 Video File / Upload</option>
                    </select>
                  </div>

                  {newPlatform === 'file' ? (
                    <div>
                      <label className="block text-xs font-semibold text-[#174C35] uppercase tracking-wider mb-1">
                        Upload Video File (MP4, WebM)
                      </label>
                      <label className="flex flex-col items-center justify-center p-3 border-2 border-dashed border-[#174C35]/30 rounded-lg cursor-pointer hover:bg-slate-50">
                        <Upload className="w-5 h-5 text-[#174C35] mb-1" />
                        <span className="text-xs text-slate-700">Choose MP4 Video File</span>
                        <input
                          type="file"
                          accept="video/mp4,video/webm"
                          onChange={handleVideoFileUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-semibold text-[#174C35] uppercase tracking-wider mb-1">
                        {newPlatform === 'tiktok' ? 'TikTok Video URL *' : 'Facebook Video URL *'}
                      </label>
                      <input
                        type="url"
                        required
                        value={newVideoUrl}
                        onChange={(e) => setNewVideoUrl(e.target.value)}
                        placeholder={
                          newPlatform === 'tiktok'
                            ? 'https://www.tiktok.com/@khanricemill/video/...'
                            : 'https://www.facebook.com/.../videos/...'
                        }
                        className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#174C35]"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-[#174C35] uppercase tracking-wider mb-1">
                      Video Thumbnail / Cover Image (Optional)
                    </label>
                    <input
                      type="text"
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      placeholder="/assets/aistudio/... or image URL"
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#174C35]"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-[#174C35] uppercase tracking-wider mb-1">
                      Category *
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#174C35]"
                    >
                      <option value="facility">Milling Facility</option>
                      <option value="processing">Processing & Paddy</option>
                      <option value="grains">Rice Grains</option>
                      <option value="storage">Warehouse & Storage</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#174C35] uppercase tracking-wider mb-1">
                      Image URL or Path *
                    </label>
                    <input
                      type="text"
                      required
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      placeholder="https://... or /assets/aistudio/..."
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#174C35]"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-xs font-semibold text-[#174C35] uppercase tracking-wider mb-1">
                  Description
                </label>
                <textarea
                  rows={2}
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Brief note about the operations or machinery shown..."
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#174C35]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsAddMediaOpen(false)}
                  className="px-4 py-2 text-xs text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold bg-[#174C35] text-white rounded-lg hover:bg-[#0f3424] shadow flex items-center gap-1.5"
                >
                  {mediaType === 'video' ? (
                    <VideoIcon className="w-3.5 h-3.5" />
                  ) : (
                    <ImageIcon className="w-3.5 h-3.5" />
                  )}
                  <span>Save Media</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
