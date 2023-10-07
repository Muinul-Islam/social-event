/* eslint-disable react/no-unescaped-entities */
const Accordian = () => {
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-3xl text-center font-bold">Customer Reviews</h1>
      <div className="join join-vertical w-full mt-8 mb-10">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium">John Snow</div>
          <div className="collapse-content">
            <p>
              "I couldn't be happier with the way my event turned out. Your team
              made it stress-free and truly memorable.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">Elizabeth</div>
          <div className="collapse-content">
            <p>
              From start to finish, working with Your Event Management Company
              was a fantastic experience. Highly recommend!
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">The Rock</div>
          <div className="collapse-content">
            <p>
              I couldn't have asked for a better experience with Social Events.
              They went above and beyond to make my special day truly
              unforgettable. The attention to detail and professionalism were
              outstanding. Thank you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
