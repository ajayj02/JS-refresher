import RevenueCard from "./components/RevenueCard";

function App() {
  return (
    <>
      <div className="grid grid-cols-3">
        <RevenueCard title={"Amount Pending"} amount={1200} orderCount={39} />
      </div>
    </>
  );
}

export default App;
