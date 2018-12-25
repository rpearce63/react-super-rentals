const communityPropertyTypes = ["Condo", "Townhouse", "Apartment"];
export const rentalPropertyType = propertyType => {
  if (communityPropertyTypes.includes(propertyType)) {
    return "Community";
  }
  return "Standalone";
};
