export default function Loading() {
  return (
    <main className="flex items-center justify-center h-screen bg-[#f3f6f9]">
      <div
        className="flex items-center justify-center shadow-md animate-pulse"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #DFE3E7",
          width: "248px",
          height: "122px",
          borderRadius: "15px",
        }}
      >
        <div className="w-6 h-6 border-4 border-[#56B2F8] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[#495652] mt-3 text-sm">Loading...</p>
      </div>
    </main>
  );
}
