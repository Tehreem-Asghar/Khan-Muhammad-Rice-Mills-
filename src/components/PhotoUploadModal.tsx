import React, { useState } from 'react';
import { X, Upload, Image as ImageIcon, Check, RefreshCw } from 'lucide-react';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  currentPhotoUrl: string | null;
  onSavePhoto: (photoUrl: string | null) => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle = 'Upload an authentic photograph or paste an image link',
  currentPhotoUrl,
  onSavePhoto,
}) => {
  const [urlInput, setUrlInput] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentPhotoUrl);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please select a valid image file (JPG, PNG, WebP).');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage('Image size exceeds 5MB. Please choose a smaller photo.');
      return;
    }

    setErrorMessage(null);
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setPreviewUrl(result);
    };
    reader.readAsDataURL(file);
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) return;
    setPreviewUrl(urlInput.trim());
    setErrorMessage(null);
  };

  const handleSave = () => {
    onSavePhoto(previewUrl);
    onClose();
  };

  const handleResetToPlaceholder = () => {
    setPreviewUrl(null);
    setUrlInput('');
    setErrorMessage(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-[#174C35]/15 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-[#174C35] text-white flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg font-bold text-white">{title}</h3>
            <p className="text-xs text-[#D6AA52] mt-0.5">{subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Preview Box */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-40 rounded-xl overflow-hidden border-2 border-[#D6AA52] shadow-md bg-[#F8F7F2] flex items-center justify-center relative group">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center text-center p-3 text-[#174C35]/60">
                  <ImageIcon className="w-10 h-10 text-[#D6AA52] mb-1" />
                  <span className="text-[11px] font-medium">No photograph set</span>
                  <span className="text-[10px] text-[#252A27]/50">(Uses elegant placeholder)</span>
                </div>
              )}
            </div>

            {previewUrl && (
              <button
                type="button"
                onClick={handleResetToPlaceholder}
                className="mt-2 text-xs text-red-600 hover:text-red-700 flex items-center gap-1 font-medium"
              >
                <RefreshCw className="w-3 h-3" /> Reset to placeholder
              </button>
            )}
          </div>

          {/* Upload Method 1: File selector */}
          <div>
            <label className="block text-xs font-semibold text-[#174C35] uppercase tracking-wider mb-2">
              Option 1: Upload from Device
            </label>
            <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-[#174C35]/25 hover:border-[#174C35] rounded-xl cursor-pointer bg-[#F8F7F2]/50 hover:bg-[#F8F7F2] transition-colors">
              <Upload className="w-6 h-6 text-[#174C35] mb-1" />
              <span className="text-xs font-medium text-[#252A27]">
                Click to browse photo
              </span>
              <span className="text-[10px] text-[#252A27]/60">JPG, PNG, or WebP up to 5MB</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Upload Method 2: Image URL */}
          <div>
            <label className="block text-xs font-semibold text-[#174C35] uppercase tracking-wider mb-2">
              Option 2: Image URL Link
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="flex-1 text-xs px-3 py-2 border border-[#174C35]/20 rounded-lg focus:outline-none focus:border-[#174C35] focus:ring-1 focus:ring-[#174C35]"
              />
              <button
                type="button"
                onClick={handleApplyUrl}
                className="px-3 py-2 text-xs font-medium bg-[#174C35] text-white rounded-lg hover:bg-[#174C35]/90 transition-colors"
              >
                Apply
              </button>
            </div>
          </div>

          {errorMessage && (
            <p className="text-xs text-red-600 bg-red-50 p-2 rounded-lg border border-red-200">
              {errorMessage}
            </p>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#F8F7F2] border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#252A27] hover:text-[#174C35] rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-4 py-2 text-xs font-medium bg-[#174C35] text-white hover:bg-[#0f3424] rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <Check className="w-3.5 h-3.5" />
            Save Photo
          </button>
        </div>
      </div>
    </div>
  );
};
