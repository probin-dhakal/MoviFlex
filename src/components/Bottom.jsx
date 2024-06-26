import React from "react";

function Bottom() {
  return (
    <>
      <div className="nm-collections-cta-upsell p-6 bg-purple-400 rounded-lg ">
        <h2 className="text-2xl font-bold mb-4">There’s even more to watch.</h2>
        <p className="text-gray-700 mb-6">
          MoviFlex has an extensive library of feature films, documentaries, TV
          shows, anime, award-winning MoviFlex originals and more. Watch as much as
          you want, anytime you want.
        </p>
        <button
         
          className="btn btn-get-started bg-red-600 text-white text-lg font-medium py-2 px-4 rounded hover:bg-red-700 transition duration-300 hover:text-black"
          data-uia="cta-signup"
        >
          Join now
        </button>
      </div>
    </>
  );
}

export default Bottom;
