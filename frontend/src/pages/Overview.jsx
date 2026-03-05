import { HardDrive, FileText, Share2, Activity } from "lucide-react";

export default function Overview() {
  const stats = [
    {
      title: "Total Files",
      value: "12",
      icon: <FileText size={26} />,
      color: "text-blue-400",
    },
    {
      title: "Storage Used",
      value: "128 MB",
      icon: <HardDrive size={26} />,
      color: "text-purple-400",
    },
    {
      title: "Shared Files",
      value: "5",
      icon: <Share2 size={26} />,
      color: "text-green-400",
    },
    {
      title: "Activity",
      value: "24 Actions",
      icon: <Activity size={26} />,
      color: "text-yellow-400",
    },
  ];

  const storageUsed = 128;
  const totalStorage = 500;
  const percentage = (storageUsed / totalStorage) * 100;

  return (
    <div className="px-8 py-10 space-y-12">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Dashboard Overview
        </h1>
        <p className="text-gray-400 mt-2">
          Monitor your storage, files and activity.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="group bg-gray-800/80 border border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex items-center justify-between">

              <div className={`p-3 rounded-lg bg-gray-700 ${stat.color}`}>
                {stat.icon}
              </div>

              <span className="text-2xl font-semibold text-white">
                {stat.value}
              </span>

            </div>

            <p className="text-gray-400 mt-4 text-sm tracking-wide">
              {stat.title}
            </p>
          </div>
        ))}

      </div>

      {/* Storage Usage Section */}
      <div className="bg-gray-800/80 border border-gray-700 rounded-2xl p-8 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">
            Storage Usage
          </h2>
          <span className="text-gray-400 text-sm">
            {storageUsed} MB / {totalStorage} MB
          </span>
        </div>

        <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
          <div
            className="h-3 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-700"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <p className="text-sm text-gray-400">
          You have used {percentage.toFixed(1)}% of your available storage.
        </p>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800/80 border border-gray-700 rounded-2xl p-8">
        <h2 className="text-xl font-semibold text-white mb-6">
          Recent Activity
        </h2>

        <div className="space-y-4">

          {[
            { icon: "📤", text: "Uploaded Project_Report.pdf" },
            { icon: "🗑", text: "Deleted Old_Image.png" },
            { icon: "🔗", text: "Shared Demo_Video.mp4" },
            { icon: "⬇", text: "Downloaded Notes.docx" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition"
            >
              <span className="text-lg">{item.icon}</span>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}