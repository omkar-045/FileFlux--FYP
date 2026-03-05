// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Upload() {
//   const [file, setFile] = useState(null);
//   const navigate = useNavigate();

//   function handleUpload() {
//     if (!file) return;

//     navigate("/uploaded", {
//       state: {
//         name: file.name,
//         size: file.size,
//         type: file.type,
//         url: URL.createObjectURL(file),
//       },
//     });
//   }

//   return (
//     <>
//       <h1 className="text-2xl font-semibold mb-6">Upload File</h1>

//       <input
//         type="file"
//         onChange={(e) => setFile(e.target.files[0])}
//         className="mb-4"
//       />

//       <button
//         onClick={handleUpload}
//         className="bg-blue-600 text-white px-6 py-2 rounded-md"
//       >
//         Upload
//       </button>
//     </>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadCloud, X } from "lucide-react";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";

export default function Upload() {
  const [files, setFiles] = useState([]);
  const [dragOver, setDragOver] = useState(false);
  const navigate = useNavigate();

  function addFiles(newFiles) {
    setFiles((prev) => [...prev, ...Array.from(newFiles)]);
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragOver(false);
    addFiles(e.dataTransfer.files);
  }

  async function handleUpload() {
    if (!files.length) return;

    try {
      const file = files[0];

      // Firebase storage reference
      const storageRef = ref(storage, "files/" + file.name);

      // Upload file
      await uploadBytes(storageRef, file);

      // Get download link
      const url = await getDownloadURL(storageRef);

      // Navigate to success page
      navigate("/uploaded", {
        state: {
          name: file.name,
          size: file.size,
          type: file.type,
          url: url,
        },
      });

    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed");
    }
  }

  function removeFile(index) {
    setFiles(files.filter((_, i) => i !== index));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white px-6 py-16">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-10 text-center">
          Upload Files Securely
        </h1>

        {/* Drag Drop Area */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-2xl p-16 text-center transition backdrop-blur-lg
          ${dragOver 
            ? "border-blue-500 bg-blue-500/10" 
            : "border-white/20 bg-white/5"}
          `}
        >

          <UploadCloud size={60} className="mx-auto mb-6 text-blue-400" />

          <p className="text-lg mb-4 text-gray-300">
            Drag & drop files here
          </p>

          <label className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg text-lg cursor-pointer hover:scale-105 transition-all shadow-lg">
            Browse Files
            <input
              type="file"
              multiple
              hidden
              onChange={(e) => addFiles(e.target.files)}
            />
          </label>

        </div>

        {/* Selected Files */}
        {files.length > 0 && (
          <div className="mt-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">

            <div className="px-6 py-4 border-b border-white/10">
              <p className="text-lg font-semibold">
                Selected Files ({files.length})
              </p>
            </div>

            {files.map((file, index) => (
              <div
                key={index}
                className="flex justify-between items-center px-6 py-4 border-b border-white/10 last:border-none"
              >
                <div>
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-gray-400">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>

                <button
                  onClick={() => removeFile(index)}
                  className="text-red-400 hover:text-red-600 transition"
                >
                  <X size={18} />
                </button>
              </div>
            ))}

          </div>
        )}

        {/* Upload Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={handleUpload}
            disabled={!files.length}
            className={`px-12 py-4 rounded-xl text-lg font-semibold transition-all
              ${files.length
                ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 shadow-xl"
                : "bg-gray-600 cursor-not-allowed"}
            `}
          >
            Upload {files.length > 0 && `(${files.length})`}
          </button>
        </div>

      </div>
    </div>
  );
}