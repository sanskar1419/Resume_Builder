import HomeSection from "../../components/HomeSection/HomeSection.js";

function Home() {
  return (
    <div
      className="h-auto flex justify-start overflow-scroll no-scrollbar bg-blue-50 flex-col"
      data-theme="light"
      style={{ minHeight: "85vh" }}
    >
      <HomeSection />
    </div>
  );
}

export default Home;
