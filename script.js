let lastBotResponse = "Bonjour comment allez-vous ?";
let lastUserInput;
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
let chat = "";
let tutoiement;

// Fonction pour afficher le message de l'utilisateur et du chatbot
function displayMessage(message, sender) {
  const messageElement = document.createElement("p");
  messageElement.textContent = sender + ": " + message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll vers le bas
}

// Fonction pour envoyer le message de l'utilisateur
function sendMessage() {
  const userMessage = userInput.value.toLowerCase().trim();
  lastUserInput = userMessage;
  if (userMessage !== "") {
    displayMessage(userMessage, tutoiement ? "Toi" : "Vous"); // Affiche le message de l'utilisateur
    userInput.value = ""; // Effacer la zone de texte
    setTimeout(() => {
      getBotResponse(userMessage); // Obtenir la réponse du bot après un délai
    }, 1000);
  }
}
// Fonction pour obtenir une réponse du chatbot
function getBotResponse(userMessage) {
  let botResponse = "Je suis désolé je ne comprends pas.";
  const lastResponse = lastBotResponse.toLowerCase();
  //Es-Tu Mineur
  if (
    lastResponse.includes("as-tu moins de 18 ans ?") ||
    lastResponse.includes("avez-vous moins de 18 ans ?")
  ) {
    if (userMessage.includes("oui")) {
      botResponse = tutoiement
        ? "Pourquoi es-tu sur un chatbot psychologue ?"
        : "Pourquoi êtes-vous sur un chatbot psychologue ?";
    }
  }
  //Fin
  //Ça va
  if (lastResponse === "bonjour ça va ?") {
    if (userMessage.includes("oui")) {
      botResponse = tutoiement
        ? "Je suis content pour toi"
        : "Je suis content pour vous";
    } else if (userMessage.includes("non")) {
      botResponse = tutoiement
      ? "En as-tu parlé autour de toi, à ton entourage ou à un professionnel de santé ?"
      : "En avez-vous parlé autour de vous, à votre entrouage ou à un professionnel de santé ?"
    }
  }
  //Fin
  //As-tu vu la conseillière d'orientation
  if (
    lastResponse ===
      "avez-vous vu la conseillière d'orientation ou la psychologue scolaire ?" ||
    lastResponse ===
      "as-tu vu la conseillière d'orientation ou la psychologue scolaire ?"
  ) {
    if (userMessage.includes("non")) {
      botResponse = tutoiement
        ? "Sais-tu comment faire ?"
        : "Savez-vous comment faire ?";
    }
    if (userMessage.includes("oui")) {
    }
  }
  //Fin
  //Harcèlement
  if (lastResponse === "Quels sont vos problèmes à l'école, le harcèlement ?" || lastResponse === "Quels sont tes problèmes à l'école, le harcèlement ?") {
    if (userMessage.includes("oui")) {
      botResponse = tutoiement
        ? "As-tu parlé de ton harcèlement à ton entourage ?"
        : "Avez-vous parlé de votre harcèlement à votre entourage ?";
    }
  }
  //Fin
  if (userMessage.includes("salut") || userMessage.includes("bonjour")) {
    botResponse = "bonjour ça va ?";
  } else if (
    userMessage.includes("comment vas-tu") ||
    userMessage.includes("comment allez-vous")
  ) {
    botResponse = tutoiement
      ? "Je vais bien merci ! Et Toi ?"
      : "Je vais bien merci ! Et vous ?";
  } else if (userMessage.includes("bye")) {
    botResponse = "au revoir";
  } else if (userMessage.includes("efface")) {
    botResponse = "ok j'efface le chat";
    chatBox.innerHTML = "";
  } else if (
    userMessage.includes("j'ai passé des super vacances") ||
    userMessage.includes("j'ai passé de super vacances")
  ) {
    tutoiement
      ? (botResponse = "qu'as-tu fait durant tes vacances ?")
      : (botResponse = "qu'avez-vous fait durant vos vacances ?");
  } else if (
    userMessage.includes("je suis allé à la mer") ||
    userMessage.includes("je suis allé a la mer")
  ) {
    tutoiement
      ? (botResponse =
          "est-ce que ça faisait longtemps que tu as pris du temps pour toi ?")
      : (botResponse =
          "est-ce que ça faisait longtemps que vous avez pris du temps pour vous ?");
  } else if (
    userMessage.includes("ça fait longtemps que ne n'avais pas fait de pause")
  ) {
    tutoiement
      ? (botResponse = "es-tu surchargé de travail")
      : (botResponse = "êtes-vous surchargé de travail");
  } else if (userMessage.includes("oui je suis surchargé de travail")) {
    tutoiement
      ? (botResponse = "avez-tu des personnes pour déléguer tes tâches ?")
      : (botResponse = "avez-vous des personnes pour déléguer vos tâches ?");
  } else if (userMessage.includes("on est tous surchargé de travail")) {
    tutoiement
      ? (botResponse = "avez-tu certains symptomes du Burn-out ?")
      : (botResponse = "avez-vous certains symptomes du Burn-out ?");
  } else if (
    userMessage.includes("pouvez-vous m'expliquer ce qu'est un burn-out") ||
    userMessage.includes("peux-tu m'expliquer les symptômes du burn-out ?")
  ) {
    botResponse = `le burn-out est un trouble lié à la surcharge mentale et / ou physique\n
        Souvent à cause du travail voici les principaux symptômes: \n
        Fatigue psychique et émotionnelle, anxiété, stress, angoisses, humeur triste, 
        hypersensibilité, irritabilité, absence d'émotions, culpabilité, variabilité de l'humeur,\n
        tensions psychiques et musculaires, troubles de l'adaptation,
        ruminations, tachypsychie, perte de l'humour, interprétations
        négatives des événements, ... Avez vous certains de ces symptomes ?`;
  } else if (userMessage.includes("oui j'ai des symptomes du burn-out")) {
    tutoiement
      ? (botResponse =
          "nous te conseillons de t'entretenir avec ton médecin traitant ou avec un psychologue physique")
      : (botResponse =
          "nous vous conseillons de vous entretenir avec votre médecin traitant ou avec un psychologue physique");
  } else if (
    userMessage.includes("tu peux me tutoyer") ||
    userMessage.includes("peux-tu me tutoyer ?") ||
    userMessage.includes("peux-tu me tutoyer?")
  ) {
    botResponse = "oui je veux bien te tutoyer";
    tutoiement = true;
  } else if (
    userMessage.includes("oui je suis j'ai moins de 18 ans") ||
    userMessage.includes("je suis mineur") ||
    userMessage.includes("oui je suis mineur") ||
    userMessage.includes("oui j'ai moins de 18ans")
  ) {
    botResponse = "pourquoi êtes-vous sur un chatbot psychologue ?";
  } else if (
    userMessage.includes("j'ai des problèmes à l'école") ||
    userMessage.includes("c'est à l'école")
  ) {
    tutoiement
      ? (botResponse = "Quels sont tes problèmes à l'école, le harcèlement ?")
      : (botResponse = "Quels sont vos problèmes à l'école, le harcèlement ?");
  } else if (userMessage.includes("je m'ennuie en cours")) {
    tutoiement
      ? (botResponse = "pourquoi tu t'ennuie en cours ?")
      : (botResponse = "pourquoi vous-vous ennuyez en cours ?");
  } else if (userMessage.includes("le niveau est trop bas")) {
    tutoiement
      ? (botResponse =
          "en as-tu parlé avec tes parents que le niveau est trop bas ?")
      : (botResponse = "En avez-vous parlé avec vos parents ?");
  } else if (userMessage.includes("le niveau est trop haut")) {
    tutoiement
      ? (botResponse =
          "en as-tu parlé avec tes parents du fait que le niveau est trop haut ?")
      : (botResponse =
          "en avez-vous parlé avec vos parents du fait que le niveau soit trop haut ?");
  } else if (
    userMessage.includes("oui j'ai parlé avec mes parents du niveau scolaire")
  ) {
    tutoiement
      ? "as-tu vu la conseillière d'orientation ou la psychologue scolaire ?"
      : "avez-vous vu la conseillière d'orientation ou la psychologue scolaire ?";
  } else if (userMessage.includes("c'est quoi le harcèlement")) {
    botResponse = tutoiement
      ? "Le harcèlement se définit comme une violence répétée qui peut être verbale, physique et/ou psychologique. Le phénomène se prolonge parfois en ligne, on parle alors de cyberharcèlement. Te reconnais-tu dans cette définition ?"
      : (botResponse =
          "Le harcèlement se définit comme une violence répétée qui peut être verbale, physique et/ou psychologique. Le phénomène se prolonge parfois en ligne, on parle alors de cyberharcèlement. Vous reconnais-vous dans cette définition ?");
  }

  lastBotResponse = botResponse;
  displayMessage(
    botResponse.charAt(0).toUpperCase() + botResponse.slice(1, botResponse.length),
    "Health Bot"
  ); // Affiche la réponse du bot
}