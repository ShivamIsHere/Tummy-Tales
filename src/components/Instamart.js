import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="bg-gradient-to-r from-yellow-200 to-orange-200 border border-gray-300 rounded-lg p-4 m-4 shadow-md">
      <h3 className="font-bold text-2xl mb-2 text-orange-800">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline text-blue-600"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline text-blue-600"
        >
          Show
        </button>
      )}

      {isVisible && <p className="mt-4">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState("about");

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-indigo-500">
      <div className="max-w-3xl mx-auto p-8 rounded-lg shadow-md bg-white bg-opacity-80">
        <h1 className="text-4xl font-bold mb-8 text-rose-900">Welcome to Instamart</h1>
        <Section
          title={"About Instamart"}
          description={
            "Instamart is your one-stop solution for all your grocery needs. We deliver fresh and quality products right to your doorstep. Our mission is to make grocery shopping convenient and hassle-free for you. With a wide range of products, an easy-to-use mobile app, and fast delivery, we strive to exceed your expectations every time you shop with us."
          }
          isVisible={visibleSection === "about"}
          setIsVisible={() =>
            visibleSection === "about"
              ? setIsVisibleSection("")
              : setIsVisibleSection("about")
          }
        />

        <Section
          title={"Team Instamart"}
          description={
            "Our team at Instamart is dedicated to providing you with the best shopping experience. From our expert buyers who carefully select the freshest produce to our efficient delivery drivers, every member of our team plays a crucial role in delivering top-notch service. We believe in delivering not just groceries but smiles to your doorstep."
          }
          isVisible={visibleSection === "team"}
          setIsVisible={() =>
            visibleSection === "team"
              ? setIsVisibleSection("")
              : setIsVisibleSection("team")
          }
        />

        <Section
          title={"Careers"}
          description={
            "Are you passionate about delivering great customer experiences? Do you want to be part of a dynamic and fast-growing team? Join us at Instamart! We are always on the lookout for talented individuals who are ready to take on new challenges and contribute to our success. Check out our career opportunities and be part of our exciting journey."
          }
          isVisible={visibleSection === "career"}
          setIsVisible={() =>
            visibleSection === "career"
              ? setIsVisibleSection("")
              : setIsVisibleSection("career")
          }
        />

        {/* Add more sections here */}
      </div>
    </div>
  );
};

export default Instamart;
