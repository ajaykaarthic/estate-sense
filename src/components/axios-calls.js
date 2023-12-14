/**
 * 
 * {
    "ownerName": "Navaneeth Kumar Buddi",
    "ownerPhonenumber": "9452449423",
    "typeofProperty": "Residential",
    "sizeOfProperty": "10200",
    "yearConstructed": "2018",
    "pin": "12345678",
    "address": "7220 McCallum BlvdDallas, TX 75252",
    "sizeOfCarpet": "202400",
    "numberOfRooms": 4,
    "hasGarage": "Yes",
    "isSmartHome": "Yes",
    "kitchenArea": "",
    "isRenovated": "Yes",
    "renovationDetails": {
        "isToiletRenovated": "Yes",
        "isCeilingRenovated": "Yes",
        "isFlooringRenovated": "Yes",
        "isKitchenRenovated": "Yes"
    },
    "hasParkingFacility": "Yes",
    "hasSecuritySystems": "Yes",
    "parkingCondition": "",
    "securityCondition": "",
    "utilitiesCondition": "",
    "roomsCondition": []
}
 */
import axios from "axios";
import { customIcons } from "./radio-group-rating";
export const handlePostRequest = async (selectItems, selectedItems2) => {
  try {
    // selectItems = {
    //   ownerName: "Navaneeth Kumar Buddi",
    //   ownerPhonenumber: "9452449423",
    //   typeofProperty: "Residential",
    //   sizeOfProperty: "10200",
    //   yearConstructed: "2018",
    //   pin: "12345678",
    //   address: "7220 McCallum BlvdDallas, TX 75252",
    //   sizeOfCarpet: "202400",
    //   numberOfRooms: 4,
    //   hasGarage: "Yes",
    //   isSmartHome: "Yes",
    //   kitchenArea: "",
    //   isRenovated: "Yes",
    //   renovationDetails: {
    //     isToiletRenovated: "Yes",
    //     isCeilingRenovated: "Yes",
    //     isFlooringRenovated: "Yes",
    //     isKitchenRenovated: "Yes",
    //   },
    //   hasParkingFacility: "Yes",
    //   hasSecuritySystems: "Yes",
    //   parkingCondition: "",
    //   securityCondition: "",
    //   utilitiesCondition: "",
    //   roomsCondition: [],
    // };
    const apiKey = "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";
    // Input text for the narrative
    let inputText =
      "Imagine yourself as a property inspector and a seller. Visualize your house has the following properties and give me a professional narrative to pitch to a prospective property buyer.";

    for (const key in selectItems) {
      if (selectItems.hasOwnProperty(key)) {
        if (key === "ownerName") {
          //inputText += `Is owned  by ${selectItems[key]}. `;
        } else if (key === "typeofProperty") {
          inputText += `The building is a ${selectItems[key]} property. `;
        } else if (key === "sizeOfProperty") {
          inputText += `The size of the property(building) is ${selectItems[key]} in sqft. `;
        } else if (key === "yearConstructed") {
          inputText += `The building is constructed in ${selectItems[key]} year. `;
        } else if (key === "pin") {
          //inputText += `${selectItems[key]} is the building pin number`;
        } else if (key === "address") {
          inputText += `The property is located at ${selectItems[key]}. `;
        } else if (key === "sizeOfCarpet") {
          inputText += `The total property size is ${selectItems[key]} in sqft`;
        } else if (key === "numberOfRooms") {
          inputText += `The building has ${selectItems[key]} numberOfRooms. `;
        } else if (key === "hasGarage") {
          inputText += `The building has ${
            selectItems[key] === "Yes" ? "has a" : "doesn't have a"
          } garage in it. `;
        } else if (key === "isSmartHome") {
          inputText += `The building is ${
            selectItems[key] === "Yes" ? "a" : "not a"
          } smart home. `;
        } else if (key === "isRenovated") {
          inputText += `The building has ${
            selectItems[key] === "Yes" ? "recently renovated" : "not renovated"
          }. `;
        } else if (key === "hasParkingFacility") {
          inputText += `The building has ${
            selectItems[key] === "Yes" ? "has" : "doesn't have a "
          } Parking Facility. `;
        } else if (key === "hasSecuritySystems") {
          inputText += `The building has ${
            selectItems[key] === "Yes" ? "has" : "doesn't have a "
          } Security Systems. `;
        }
      }
    }
    inputText += `The building also have have the following conditions `;
    for (const key in selectedItems2) {
      if (selectedItems2.hasOwnProperty(key)) {
        console.log(selectedItems2[key]);
        inputText += `${selectedItems2[key]["name"]} is in  ${
          customIcons[selectedItems2[key]["condition"]]?.label
        } condition. `;
      }
    }
    inputText += `Also, do some market research about similar properties near this house and tell me how it compares with them. Give answer in 100 words only`;
    console.log(inputText);

    const response = await axios({
      method: "post",
      url: "https://api.openai.com/v1/engines/text-davinci-002/completions",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      data: {
        prompt: inputText,
        max_tokens: 150, // Adjust this as needed
      },
    });

    console.log("Response:", response?.data?.choices[0]?.text);
    return response?.data?.choices[0]?.text;
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
  }
};
