const TopBrands = () => {
  return (
    <section className="py-10 px-3 bg-orange-50">
      <div className="container">
        <h2 className="text-3xl font-light text-orange-900 mb-10 text-center relative block w-fit mx-auto">
          Top <span className="font-semibold">Brands</span>
          <span className="absolute w-full left-0 -bottom-2 h-0.5 bg-linear-to-r from-orange-50 via-orange-900 to-orange-100"></span>
        </h2>

        <div className="flex flex-row flex-wrap justify-center items-center gap-10 text-foreground/40 text-3xl font-semibold">
          <span>SunShade</span>
          <span className="italic">CoolWear</span>
          <span>BeachPro</span>
          <span className="font-light">GlowSkin</span>
        </div>
      </div>
    </section>
  );
};
export default TopBrands;
