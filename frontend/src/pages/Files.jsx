import { Download, Trash2, FileText, Image, FileVideo } from "lucide-react";

export default function Files() {

  // Dummy file data (temporary)
  const files = [
    {
      id: 1,
      name: "Project_Report.pdf",
      size: "2.4 MB",
      type: "pdf",
      date: "2026-02-20"
    },
    {
      id: 2,
      name: "Design_Image.png",
      size: "1.2 MB",
      type: "image",
      date: "2026-02-22"
    },
    {
      id: 3,
      name: "Demo_Video.mp4",
      size: "15.8 MB",
      type: "video",
      date: "2026-02-24"
    }
  ];

  function getIcon(type) {
    if (type === "image") return <Image size={20} className="text-purple-400" />;
    if (type === "video") return <FileVideo size={20} className="text-yellow-400" />;
    return <FileText size={20} className="text-blue-400" />;
  }

  return (
    <div className="text-white">

      <h1 className="text-4xl font-bold mb-8">
        My Files
      </h1>

      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">

        {/* Table Header */}
        <div className="grid grid-cols-6 px-6 py-4 border-b border-white/10 text-gray-400 text-sm font-semibold">
          <div className="col-span-2">File</div>
          <div>Size</div>
          <div>Date</div>
          <div className="text-center">Download</div>
          <div className="text-center">Delete</div>
        </div>

        {/* Table Rows */}
        {files.map((file) => (
          <div
            key={file.id}
            className="grid grid-cols-6 items-center px-6 py-4 border-b border-white/10 hover:bg-white/5 transition"
          >
            <div className="col-span-2 flex items-center gap-3">
              {getIcon(file.type)}
              <span>{file.name}</span>
            </div>

            <div>{file.size}</div>
            <div>{file.date}</div>

            <div className="text-center">
              <button className="text-blue-400 hover:text-blue-600 transition">
                <Download size={18} />
              </button>
            </div>

            <div className="text-center">
              <button className="text-red-400 hover:text-red-600 transition">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}