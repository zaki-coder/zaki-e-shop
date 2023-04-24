const Footer = () => {
  return (
    <footer className="h-full w-full flex justify-center mt-[10rem] pb-12">
      <div className="h-full w-10/12 grid grid-cols-3 justify-between">
        {/* column */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl mb-8 text-orange-600">FAQ</h2>
          <span className="">Where we are based</span>
          <span>How we operate</span>
          <span>Refund policy</span>
        </div>
        {/* column */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl mb-8 text-orange-600">Contacts</h2>
          <span>Youtube: ZakiAzizi</span>
          <span>How we operate</span>
          <span>Refund policy</span>
        </div>
        {/* column */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl mb-8 text-orange-600">Privacy policy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sit
            distinctio unde rem harum mollitia possimus, incidunt iste placeat
            eius minima sint praesentium tenetur. Labore blanditiis dolores
            reiciendis minus ad.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer