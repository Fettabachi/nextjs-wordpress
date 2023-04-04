import { faBath, faBed, faCar, faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePageContext } from "context/page";
import numeral from "numeral";

export const PropertyFeatures = () => {
    const { propertyFeatures } = usePageContext();
    console.log("property features: ", propertyFeatures);
    return (
        <div
            className="max-w-lg mx-auto my-10 text-slate-900 p-5 text-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        >
            <div className="grid grid-cols-2 mb-4 gap-y-5">
                <div>
                    <FontAwesomeIcon icon={faBed} /> {propertyFeatures.bedrooms}{" "}
                    bedrooms
                </div>
                <div>
                    <FontAwesomeIcon icon={faBath} />{" "}
                    {propertyFeatures.bathrooms} bathrooms
                </div>
                <div>
                    {!!propertyFeatures.petFriendly && (
                        <span>
                            <FontAwesomeIcon icon={faDog} /> pet friendly
                        </span>
                    )}
                </div>
                <div>
                    {!!propertyFeatures.hasParking && (
                        <span>
                            <FontAwesomeIcon icon={faCar} /> parking available
                        </span>
                    )}
                </div>
            </div>
            <h3 className="text-5xl font-bold">
                ${numeral(propertyFeatures.price).format("0,0")}
            </h3>
        </div>
    );
};
