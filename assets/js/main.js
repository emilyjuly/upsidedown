import {
    getHellfireClubSubscriptions,
    subscribetoHellfireClub,
} from "./firebase/hellfire-clube.js";

const txtName = document.getElementById("txtName");
const txtEmail = document.getElementById("txtEmail");
const txtLevel = document.getElementById("txtLevel");
const txtCharacter = document.getElementById("txtCharacter");
const btnSubscribe = document.getElementById("btnSubscribe");

const subscriptionsList = document.getElementById("subscriptions");

btnSubscribe.addEventListener("click", async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value,
    };

    const subscriptionId = await subscribetoHellfireClub(subscription);
    console.log(`Inscrito com sucesso: ${subscriptionId}`);

    txtName.value = "";
    txtEmail.value = "";
    txtLevel.value = "";
    txtCharacter.value = "";

    alert("Inscrito com sucesso!");
});

loadData();
