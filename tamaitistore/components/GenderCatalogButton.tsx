import React, { SetStateAction, Dispatch } from "react";
interface GenderCatalogButtonProps {
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
}
const GenderCatalogButton = ({
  gender,
  setGender,
}: GenderCatalogButtonProps) => {
  const toggleGender = () => {
    setGender((prevGender) => (prevGender === "boy" ? "girl" : "boy"));
  };

  return (
    <div className="w-[602px] h-[81px] border-2 border-black">
      <button
        className={`w-1/2 h-full uppercase hover:underline underline-offset-4 tracking-widest ${
          gender === "boy" ? "boyOnCatalog" : "boyOffCatalog"
        }`}
        onClick={toggleGender}
      >
        Boy
      </button>
      <button
        className={`w-1/2 h-full uppercase hover:underline underline-offset-4 tracking-widest ${
          gender === "girl" ? "girlOnCatalog" : "girlOffCatalog"
        }`}
        onClick={toggleGender}
      >
        Girl
      </button>
    </div>
  );
};
export default GenderCatalogButton;
