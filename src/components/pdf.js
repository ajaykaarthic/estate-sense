import jsPDF from "jspdf";

const propertyData = {
  ownerName: "Mayukha",
  ownerPhonenumber: "450-873-3024",
  typeofProperty: "Residential",
  sizeOfProperty: "5000 sqft",
  yearConstructed: "2018",
  pin: "121",
  address: "405 S Hester St, Stillwater",
  sizeOfCarpet: "3500 sqft",
  numberOfRooms: 9,
  features: [
    {
      area: "500 sqft",
      elecAppliancesCondition: "Good",
      toiletCondition: "Good",
      celingCondition: "Good",
      floorCondition: "Good",
    },
    {
      area: "490 sqft",
      elecAppliancesCondition: "Need Repair for Light",
      toiletCondition: "Good",
      celingCondition: "Good",
      floorCondition: "Good",
    },
  ],
  hasGarage: false,
  isSmartHome: true,
  kitchenArea: "670 sqft",
  isRenovated: false,
  renovationDetails: [
    {
      date: "20/11/2020",
      toilet: false,
      ceiling: true,
      flooring: true,
      kitchen: false,
    },
  ],
  hasParkingFacility: true,
  hasSecuritySystems: false,
  parkingCondition: "",
  securityCondition: "",
  utilitiesCondition: "Good",
};
function processText(text) {
  const words = text.match(/\b\w+\b/g);
  const result = [];
  const chunkSize = 8;

  for (let i = 0; i < words.length; i += chunkSize) {
    const row = words.slice(i, i + chunkSize);
    result.push(row.join(" "));
  }
  console.log(result);
  return result;
}

export const generatePDF = (formValues, selectedValues) => {
  const doc = new jsPDF();
  const {
    ownerName,
    ownerPhonenumber,
    typeofProperty,
    sizeOfProperty,
    yearConstructed,
    pin,
    address,
    sizeOfCarpet,
    numberOfRooms,
    features,
    hasGarage,
    isSmartHome,
    kitchenArea,
    isRenovated,
    renovationDetails,
    hasParkingFacility,
    hasSecuritySystems,
    parkingCondition,
    securityCondition,
    utilitiesCondition,
  } = propertyData;

  const headingText = "Property Assessment Report";
  const fontSize = 20;

  const backgroundColor = "#3D550C"; // Green color in hexadecimal

  const textWidth =
    (doc.getStringUnitWidth(headingText) * fontSize) / doc.internal.scaleFactor;
  const textHeight = fontSize * doc.internal.scaleFactor;

  const xPosition = 40;
  const yPosition = 10;
  const rectangleWidth = textWidth + 40; // Add padding for the background
  const rectangleHeight = textHeight / 4;

  // Draw green background rectangle
  doc.setFillColor("#81B622");
  doc.rect(xPosition, yPosition, rectangleWidth, rectangleHeight, "F");
  doc.setFillColor(backgroundColor);
  doc.rect(10, 14, 185, 8, "F");

  // Set font style, size, and color for the heading text
  doc.setFont("helvetica");
  doc.setFont("bold");
  doc.setFontSize(fontSize);
  doc.setTextColor(255, 255, 255); // White text color on green background

  // Add heading text inside the green background
  doc.text(headingText, xPosition + 25, yPosition + 10); // Add padding inside the background

  // Reset fill color and text color for the rest of the content
  doc.setFillColor(255, 255, 255); // Reset fill color to white
  doc.setTextColor(0, 0, 0); // Reset text color to black

  doc.setFontSize(20);
  doc.setFont("times", "bold");
  doc.setTextColor("#3D550C");
  doc.text("Property Details", 20, 35);
  doc.setFillColor("#81B622");
  doc.rect(100, 30, 100, 8, "F");
  doc.setTextColor(0, 0, 0);

  doc.setFontSize(16);
  doc.text("Address", 10, 45);
  doc.setFontSize(14);
  doc.setFont("normal", "normal");
  doc.text(`${formValues?.address}`, 10, 50);

  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("Type of Property", 10, 60);
  doc.setFont("normal", "normal");
  doc.setFontSize(14);
  doc.text(`${formValues?.typeofProperty}`, 10, 65);

  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("Year Constructed", 10, 75);
  doc.setFont("normal", "normal");
  doc.setFontSize(14);
  doc.text(`${formValues?.yearConstructed}`, 10, 80);

  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("How many square feet?", 10, 90);
  doc.setFont("normal", "normal");
  doc.setFontSize(14);
  doc.text(`${formValues?.sizeOfProperty}`, 10, 95);

  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("Carpet Size", 10, 105);
  doc.setFont("normal", "normal");
  doc.setFontSize(14);
  doc.text(`${formValues?.sizeOfCarpet}`, 10, 110);

  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("PIN", 10, 120);
  doc.setFont("normal", "normal");
  doc.setFontSize(14);
  doc.text(`${formValues?.pin}`, 10, 125);

  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("Owned By", 10, 135);
  doc.setFont("normal", "normal");
  doc.setFontSize(14);
  doc.text(`${formValues?.ownerName}`, 10, 140);

  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("Contact", 10, 150);
  doc.setFont("normal", "normal");
  doc.setFontSize(14);
  doc.text(`${formValues?.ownerPhonenumber}`, 10, 155);

  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("Property Description", 100, 45);

  const descriptionText = processText(formValues?.narativeText);
  let position = 55;
  doc.setFont("normal", "normal");
  doc.setFontSize(14);
  descriptionText.forEach((line) => {
    doc.text(line, 100, position);
    position += 10;
  });

  doc.setFontSize(20);
  doc.setFont("times", "bold");
  doc.setTextColor("#3D550C");
  doc.text("Overall Evaluation", 20, 200);

  doc.setFontSize(15);
  doc.setTextColor(0, 0, 0);
  doc.text("Spacious", 20, 215);

  let canvasWidth = 400;
  let canvasHeight = 30;
  let progressPercentage = 14;
  let ctx = document.createElement("canvas").getContext("2d");
  ctx.canvas.width = canvasWidth;
  ctx.canvas.height = canvasHeight;

  // Calculate progress bar width based on the percentage
  let progressBarWidth = (canvasWidth * progressPercentage) / 100;
  let unfilledProgressBarWidth = canvasWidth - progressBarWidth;

  ctx.fillStyle = "darkgreen";
  ctx.fillRect(0, 0, unfilledProgressBarWidth, canvasHeight);

  // Draw progress bar on the canvas
  ctx.fillStyle = "lightgreen";
  ctx.fillRect(unfilledProgressBarWidth, 0, progressBarWidth, canvasHeight);

  // Add canvas as an image to the PDF
  let imgData = ctx.canvas.toDataURL("image/png");
  doc.addImage(imgData, "PNG", 70, 210, canvasWidth / 4, canvasHeight / 8);

  doc.text("Physical Condition", 20, 222);
  canvasWidth = 400;
  canvasHeight = 30;
  progressPercentage = 20;
  ctx = document.createElement("canvas").getContext("2d");
  ctx.canvas.width = canvasWidth;
  ctx.canvas.height = canvasHeight;

  // Calculate progress bar width based on the percentage
  progressBarWidth = (canvasWidth * progressPercentage) / 100;
  unfilledProgressBarWidth = canvasWidth - progressBarWidth;

  ctx.fillStyle = "darkgreen";
  ctx.fillRect(0, 0, unfilledProgressBarWidth, canvasHeight);

  // Draw progress bar on the canvas
  ctx.fillStyle = "lightgreen";
  ctx.fillRect(unfilledProgressBarWidth, 0, progressBarWidth, canvasHeight);

  // Add canvas as an image to the PDF
  imgData = ctx.canvas.toDataURL("image/png");
  doc.addImage(imgData, "PNG", 70, 217, canvasWidth / 4, canvasHeight / 8);

  doc.text("Safety", 20, 230);
  canvasWidth = 400;
  canvasHeight = 30;
  progressPercentage = 30;
  ctx = document.createElement("canvas").getContext("2d");
  ctx.canvas.width = canvasWidth;
  ctx.canvas.height = canvasHeight;

  // Calculate progress bar width based on the percentage
  progressBarWidth = (canvasWidth * progressPercentage) / 100;
  unfilledProgressBarWidth = canvasWidth - progressBarWidth;

  ctx.fillStyle = "darkgreen";
  ctx.fillRect(0, 0, unfilledProgressBarWidth, canvasHeight);

  // Draw progress bar on the canvas
  ctx.fillStyle = "lightgreen";
  ctx.fillRect(unfilledProgressBarWidth, 0, progressBarWidth, canvasHeight);

  // Add canvas as an image to the PDF
  imgData = ctx.canvas.toDataURL("image/png");
  doc.addImage(imgData, "PNG", 70, 225, canvasWidth / 4, canvasHeight / 8);

  doc.text("Land Value", 20, 240);
  canvasWidth = 400;
  canvasHeight = 30;
  progressPercentage = 40;
  ctx = document.createElement("canvas").getContext("2d");
  ctx.canvas.width = canvasWidth;
  ctx.canvas.height = canvasHeight;

  // Calculate progress bar width based on the percentage
  progressBarWidth = (canvasWidth * progressPercentage) / 100;
  unfilledProgressBarWidth = canvasWidth - progressBarWidth;

  ctx.fillStyle = "darkgreen";
  ctx.fillRect(0, 0, unfilledProgressBarWidth, canvasHeight);

  // Draw progress bar on the canvas
  ctx.fillStyle = "lightgreen";
  ctx.fillRect(unfilledProgressBarWidth, 0, progressBarWidth, canvasHeight);

  // Add canvas as an image to the PDF
  imgData = ctx.canvas.toDataURL("image/png");
  doc.addImage(imgData, "PNG", 70, 235, canvasWidth / 4, canvasHeight / 8);

  doc.text("Community", 20, 250);
  canvasWidth = 400;
  canvasHeight = 30;
  progressPercentage = 10;
  ctx = document.createElement("canvas").getContext("2d");
  ctx.canvas.width = canvasWidth;
  ctx.canvas.height = canvasHeight;

  // Calculate progress bar width based on the percentage
  progressBarWidth = (canvasWidth * progressPercentage) / 100;
  unfilledProgressBarWidth = canvasWidth - progressBarWidth;

  ctx.fillStyle = "darkgreen";
  ctx.fillRect(0, 0, unfilledProgressBarWidth, canvasHeight);

  // Draw progress bar on the canvas
  ctx.fillStyle = "lightgreen";
  ctx.fillRect(unfilledProgressBarWidth, 0, progressBarWidth, canvasHeight);

  // Add canvas as an image to the PDF
  imgData = ctx.canvas.toDataURL("image/png");
  doc.addImage(imgData, "PNG", 70, 245, canvasWidth / 4, canvasHeight / 8);

  doc.text("Natural Disasters", 20, 260);
  canvasWidth = 400;
  canvasHeight = 30;
  progressPercentage = 85;
  ctx = document.createElement("canvas").getContext("2d");
  ctx.canvas.width = canvasWidth;
  ctx.canvas.height = canvasHeight;

  // Calculate progress bar width based on the percentage
  progressBarWidth = (canvasWidth * progressPercentage) / 100;
  unfilledProgressBarWidth = canvasWidth - progressBarWidth;

  ctx.fillStyle = "darkgreen";
  ctx.fillRect(0, 0, unfilledProgressBarWidth, canvasHeight);

  // Draw progress bar on the canvas
  ctx.fillStyle = "lightgreen";
  ctx.fillRect(unfilledProgressBarWidth, 0, progressBarWidth, canvasHeight);

  // Add canvas as an image to the PDF
  imgData = ctx.canvas.toDataURL("image/png");
  doc.addImage(imgData, "PNG", 70, 255, canvasWidth / 4, canvasHeight / 8);

  doc.text("Amenities", 20, 270);
  canvasWidth = 400;
  canvasHeight = 30;
  progressPercentage = 30;
  ctx = document.createElement("canvas").getContext("2d");
  ctx.canvas.width = canvasWidth;
  ctx.canvas.height = canvasHeight;

  // Calculate progress bar width based on the percentage
  progressBarWidth = (canvasWidth * progressPercentage) / 100;
  unfilledProgressBarWidth = canvasWidth - progressBarWidth;

  ctx.fillStyle = "darkgreen";
  ctx.fillRect(0, 0, unfilledProgressBarWidth, canvasHeight);

  // Draw progress bar on the canvas
  ctx.fillStyle = "lightgreen";
  ctx.fillRect(unfilledProgressBarWidth, 0, progressBarWidth, canvasHeight);

  // Add canvas as an image to the PDF
  imgData = ctx.canvas.toDataURL("image/png");
  doc.addImage(imgData, "PNG", 70, 265, canvasWidth / 4, canvasHeight / 8);

  doc.text("Structural Integrity", 20, 280);
  canvasWidth = 400;
  canvasHeight = 30;
  progressPercentage = 20;
  ctx = document.createElement("canvas").getContext("2d");
  ctx.canvas.width = canvasWidth;
  ctx.canvas.height = canvasHeight;

  // Calculate progress bar width based on the percentage
  progressBarWidth = (canvasWidth * progressPercentage) / 100;
  unfilledProgressBarWidth = canvasWidth - progressBarWidth;

  ctx.fillStyle = "darkgreen";
  ctx.fillRect(0, 0, unfilledProgressBarWidth, canvasHeight);

  // Draw progress bar on the canvas
  ctx.fillStyle = "lightgreen";
  ctx.fillRect(unfilledProgressBarWidth, 0, progressBarWidth, canvasHeight);

  // Add canvas as an image to the PDF
  imgData = ctx.canvas.toDataURL("image/png");
  doc.addImage(imgData, "PNG", 70, 275, canvasWidth / 4, canvasHeight / 8);

  doc.addPage();

  doc.setFontSize(20);
  doc.setFont("times", "bold");
  doc.setTextColor("#3D550C");
  doc.text("Layout & Features", 20, 15);
  doc.setFillColor("#81B622");
  doc.rect(100, 10, 100, 8, "F");
  doc.setTextColor(0, 0, 0);

  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("Number of Rooms", 10, 25);
  doc.setFont("normal", "normal");
  doc.setFontSize(14);
  doc.text(`${formValues?.numberOfRooms}`, 10, 30);

  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("Garage", 10, 40);
  doc.setFont("normal", "normal");
  doc.setFontSize(14);
  doc.text(`${formValues?.hasGarage ? "Yes" : "No"}`, 10, 45);

  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("Smart Home", 10, 55);
  doc.setFont("normal", "normal");
  doc.setFontSize(14);
  doc.text(`${formValues?.isSmartHome ? "Yes" : "No"}`, 10, 60);

  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("Kitchen", 10, 70);
  doc.setFont("normal", "normal");
  doc.setFontSize(14);
  doc.text(`${formValues?.kitchenArea}`, 10, 75);

  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("Renovation", 10, 85);
  doc.setFont("normal", "normal");
  doc.setFontSize(14);
  doc.text(`${formValues?.isRenovated ? "Yes" : "No"}`, 10, 90);

  doc.setFontSize(20);
  doc.setFont("times", "bold");
  doc.setTextColor("#3D550C");
  doc.text("Operational Aspects", 20, 100);
  doc.setFillColor("#81B622");
  doc.rect(100, 100, 100, 8, "F");
  doc.setTextColor(0, 0, 0);

  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("Parking Facilities", 10, 110);
  doc.setFont("normal", "normal");
  doc.setFontSize(14);
  doc.text(`${formValues?.hasParkingFacility ? "Yes" : "No"}`, 10, 115);

  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("Security Systems", 10, 125);
  doc.setFont("normal", "normal");
  doc.setFontSize(14);
  doc.text(`${formValues?.hasSecuritySystems ? "Yes" : "No"}`, 10, 130);

  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("Utilities Condition", 10, 140);
  doc.setFont("normal", "normal");
  doc.setFontSize(14);
  doc.text(`${utilitiesCondition ? "Yes" : "No"}`, 10, 145);

  const imagePath = "/Users/mayukhakuppili/Desktop/house.jpg";

  // Convert the image file to a data URL
  const img = new Image();
  img.src = imagePath;

  // Wait for the image to load
  img.onload = function () {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);

    // Convert canvas to data URL
    const imageData = canvas.toDataURL("image/jpeg");

    // Add image to PDF
    doc.addImage(imageData, "JPEG", 100, 30, 100, 80); // (x, y, width, height)
  };

  doc.save("data.pdf");
};
