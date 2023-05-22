const ReposLayout = ({ children }) => {
  return (
    <section>
      <div className="p-3 mb-6 bg-slate-500">this is repos shared layout</div>
      {children}
    </section>
  );
};
export default ReposLayout;
