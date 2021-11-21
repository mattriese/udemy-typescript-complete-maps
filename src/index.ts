/// <reference types="@types/google.maps" />
import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const customMap = new CustomMap('map');
const userMarker = customMap.addMarker(user);
const companyMarker = customMap.addMarker(company);

// const userInfoWindow = new google.maps.InfoWindow({
//   content: `<h2>User: </h2>${user.name}`,
// });
// const companyInfoWindow = new google.maps.InfoWindow({
//   content: `<h2>Company: </h2><h4>${company.companyName}:</h4> ${company.catchPhrase}`,
// });

// userMarker.addListener('click', function () {
//   userInfoWindow.open(customMap.googleMap, userMarker);
// });

// companyMarker.addListener('click', function () {
//   companyInfoWindow.open(customMap.googleMap, companyMarker);
// });
