export default function DashboardResumeAnalyzer() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eef1ff] px-4">
      <div className="w-full max-w-3xl rounded-3xl bg-linear-to-br from-[#f7f9ff] via-[#f2f4ff] to-[#fbecec] p-10 shadow-xl">

        {/* Title */}
        <h1 className="text-4xl font-semibold leading-tight text-gray-900">
          Smart feedback <br />
          <span className="text-indigo-500">for your dream</span>{" "}
          <span className="text-black">job</span>
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          Drop your resume for an ATS score and improvement tips.
        </p>

        {/* Form */}
        <div className="mt-8 space-y-5">

          <div>
            <label className="text-xs text-gray-500">Company Name</label>
            <input
              className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Company name"
            />
          </div>

          <div>
            <label className="text-xs text-gray-500">Job Title</label>
            <input
              className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Job title"
            />
          </div>

          <div>
            <label className="text-xs text-gray-500">Job Description</label>
            <textarea
              rows={4}
              placeholder="Write a clear & concise job description with responsibilities & expectations..."
              className="mt-1 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Upload Box */}
          <div>
            <label className="text-xs text-gray-500">Upload Resume</label>
            <div className="mt-2 flex h-32 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-indigo-200 bg-white text-center cursor-pointer">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                📄
              </div>
              <p className="text-sm font-medium text-gray-700">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-400">
                PDF, PNG or JPG (max. 10MB)
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-6 w-full rounded-full bg-indigo-500 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-600 transition">
            Save & Analyze Resume
          </button>

        </div>
      </div>
    </div>
  );
}