import "../globals.css";

const layout = ({ children }) => {
  return (
    <>
      <main className="bg-card min-h-screen w-full flex justify-center items-center relative z-0">
        <div className="absolute w-1/2 top-0 h-full bg-primary left-1/2 -z-10"></div>
        {children}
      </main>
    </>
  );
};
export default layout;
