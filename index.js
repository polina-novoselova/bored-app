const randomTextNode = document.getElementById("random-text");
const btnFindActivityNode = document.getElementById("btn-find-activity");
const apiActivityLink = "https://www.boredapi.com/api/activity/";

const findActivity = async () => {
  try {
    const response = await fetch(apiActivityLink);

    if (!response.ok) {
      return;
    }

    const result = await response.json();

    const activityText = result.activity;
    renderActivityText(activityText);
  } catch (error) {
    console.error(error);
  }
};

const renderActivityText = (activityText) => {
  randomTextNode.textContent = activityText;
};

btnFindActivityNode.addEventListener("click", findActivity);
