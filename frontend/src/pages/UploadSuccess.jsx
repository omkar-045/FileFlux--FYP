import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, Copy, ArrowLeft } from "lucide-react";

export default function UploadSuccess() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        No file data found
      </div>
    );

  const { name, size, type, url } = state;
  const isImage = type?.startsWith("image");
  const fileLink = "https://fileflux.io/f/demo123";

  function copyLink() {
    navigator.clipboard.writeText(fileLink);
    alert("Link copied successfully!");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white flex items-center justify-center px-6">

      <div className="max-w-xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl text-center">

        <CheckCircle size={70} className="text-green-400 mx-auto mb-6" />

        <h1 className="text-3xl font-bold mb-4">
          File Uploaded Successfully
        </h1>

        {isImage && (
          <img
            src={url}
            alt="preview"
            className="w-52 mx-auto mb-6 rounded-xl shadow-lg"
          />
        )}

        <p className="font-semibold text-lg">{name}</p>
        <p className="text-gray-300 mb-6">
          {(size / 1024 / 1024).toFixed(2)} MB · {type}
        </p>

        {/* File Link */}
        <div className="flex gap-2 mb-8">
          <input
            readOnly
            value={fileLink}
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-sm text-gray-200"
          />
          <button
            onClick={copyLink}
            className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:scale-105 transition flex items-center gap-2"
          >
            <Copy size={16} />
            Copy
          </button>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/upload")}
          className="inline-flex items-center gap-2 text-blue-400 hover:underline"
        >
          <ArrowLeft size={16} />
          Upload More Files
        </button>

      </div>
    </div>
  );
}