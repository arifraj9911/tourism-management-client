import guide from "../../assets/Images/guide.jpg";
import activites from "../../assets/Images/activites.jpg";

const UsefulInformation = () => {
  return (
    <div className="mb-20 max-w-screen-xl px-5 mx-auto flex flex-col items-center">
      <h2 className="text-5xl mt-20 mb-5 font-bold ">Useful Information</h2>
      <p className="w-3/5 mx-auto text-center mb-20 text-[#999]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        praesentium impedit nostrum fuga distinctio a accusamus repellat enim
        veritatis consequuntur.
      </p>
      <div className="flex  gap-10">
        <div className=" w-5/6">
          <img className="w-full" src={guide} alt="" />
          <h2 className="text-2xl mt-4 mb-2 font-semibold">
            Private Guide Tour
          </h2>
          <p className="text-[#999]">
            Discover tailored adventures with private guide tours, offering
            personalized itineraries and insider insights for an exclusive
            travel experience.
          </p>
        </div>
        <div className="w-5/6">
          <img src={activites} alt="" />
          <h2 className="text-2xl mt-4 mb-2 font-semibold">
            Special Activities
          </h2>
          <p className="text-[#999]">
            Enhance your tour with unique activities: sunset cruises, wildlife
            safaris, cooking classes, cultural workshops, and thrilling
            adventure excursions.
          </p>
        </div>
        {/* accordion */}
        <div className=" w-full">
          <div className="join join-vertical  rounded-none">
            <div className="collapse collapse-arrow join-item border border-r-0 border-t-0 border-l-0">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-normal">
                Culinary Delights Expedition
              </div>
              <div className="collapse-content">
                <p className="text-[#999]">
                  {" "}
                  Savor diverse flavors and learn culinary secrets in immersive
                  cooking classes and food tours.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-r-0 border-t-0 border-l-0">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-normal">
                Historic Wonders Tour
              </div>
              <div className="collapse-content">
                <p className="text-[#999]">
                  {" "}
                  Unearth the secrets of ancient civilizations, from majestic
                  pyramids to medieval castles, guided by experts in history and
                  archaeology.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-r-0 border-l-0 border-t-o">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-normal">
                Adventure Expedition
              </div>
              <div className="collapse-content">
                <p className="text-[#999]">
                  {" "}
                  Embark on a thrilling journey through rugged terrains and
                  discover hidden treasures.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-r-0 border-l-0 border-t-o">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-normal">
                Cultural Immersion Experience
              </div>
              <div className="collapse-content">
                <p className="text-[#999]">
                  Immerse yourself in local traditions, cuisine, and customs for
                  a truly authentic travel experience.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-r-0 border-l-0 border-t-o">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-normal">
                Luxury Retreat
              </div>
              <div className="collapse-content">
                <p className="text-[#999]">
                  Indulge in opulent accommodations, gourmet dining, and
                  exclusive activities in breathtaking destinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsefulInformation;
