const api =
  "https://rpradosilva.github.io/boneshaker-api/src/api/boneshaker-api.json";

async function getCars(api) {
  let apiObject = await fetch(api);
  let boneshakers = await apiObject.json();
  console.log(boneshakers);

  // for (const boneshaker of boneshakers) {
  // }
}

getCars(api);
