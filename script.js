const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clickedElm = e.target;

  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var questions = document.querySelectorAll(".question");

  questions.forEach(function (question) {
    var questionTitle = question.querySelector("h2");
    var answer = question.querySelector(".answer");

    questionTitle.addEventListener("click", function () {
      answer.style.display =
        answer.style.display === "block" ? "none" : "block";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show or hide the button based on scroll position
  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleNavButton = document.getElementById("toggleNav");
  const nav = document.querySelector("nav");

  toggleNavButton.addEventListener("click", function () {
    nav.style.display = nav.style.display === "block" ? "none" : "block";
  });
});

const notifications = [
  "In a world of noise, find your melody in silence 🎶✨ Embrace the beauty of sign language and the power of connection beyond words. #SilentSymphony",
  "Our hands tell stories that words cannot express 📖💫 Let's celebrate the richness of our culture and the resilience of our community. #HandsSpeakLouder",
  "The sound of silence is the echo of strength 💪💬 Let's amplify our voices through unity, empowerment, and pride. #DeafAndMuteEmpowered",
  "In every silence, there's a story waiting to be heard 🌟🤫 Let's listen with our hearts, communicate with kindness, and embrace our differences. #SpeakWithLove",
  "Our silence is not a barrier, but a canvas for creativity 🎨🌈 Let's paint a world of inclusion, acceptance, and endless possibilities. #SilentExpression",
  "Diversity is our strength, and unity is our song 🌟🤝 Let's harmonize our differences and create a symphony of acceptance and belonging. #TogetherInSilence",
  "The language of the heart knows no sound 💌💖 Let's communicate with compassion, understanding, and empathy, bridging gaps and building connections. #HeartSpeaksLouder",
  "In the silence, we find our voice 🌟🗣️ Let's amplify our message of love, acceptance, and equality for all. #SilentRevolution",
  "Silence is not absence; it's the presence of profound expression 🌠💬 Let's cherish the power of our silence and the depth of our communication. #SilentStrength",
  "With every sign, we speak volumes 🌟🤟 Let's celebrate the beauty of sign language and the richness of our diverse community. #SignLanguageRocks",
  "Our silence is not weakness but a testament to our resilience 🌟💪 Let's stand tall, speak boldly, and advocate for our rights with pride. #SilentWarriors",
  "In silence, we discover the music of our souls 🎵✨ Let's dance to the rhythm of inclusion, celebrate diversity, and spread joy. #SilentMelodies",
  "Words may fade, but the impact of our silence resonates forever 🌟💬 Let's leave a legacy of understanding, acceptance, and unity. #SilentLegacy",
  "Communication transcends sound; it's the meeting of minds and hearts 🌟💭 Let's connect beyond words, embrace diversity, and celebrate unity. #BeyondWords",
  "In our silence, we find strength; in our unity, we find power 🌟🤝 Let's amplify our voices, advocate for change, and create a world of equality and inclusion. #SilentSolidarity",
];

function showRandomNotification() {
  const randomIndex = Math.floor(Math.random() * notifications.length);
  const notificationText = notifications[randomIndex];

  const notificationContainer = document.getElementById(
    "notificationContainer"
  );

  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.innerText = notificationText;

  const closeButton = document.createElement("span");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "&times;";
  closeButton.onclick = function () {
    notificationContainer.removeChild(notification);
  };

  notification.appendChild(closeButton);
  notificationContainer.appendChild(notification);

  setTimeout(() => {
    notificationContainer.removeChild(notification);
  }, 10000); // Close notification after 10 seconds
}

function showRandomNotificationAfterDelay() {
  setTimeout(() => {
    showRandomNotification();
    showRandomNotificationAfterDelay(); // Recursively call to continue showing notifications
  }, 10000); // Show notification after 10 seconds
}

// Initial call to start showing notifications after 10 seconds
showRandomNotificationAfterDelay();

// chatbot

var chatbotContainer = document.getElementById("chatbotContainer");
var sendButton = document.querySelector(".send-button");
var userInput = document.getElementById("userInput");

function sendMessage() {
  var chat = document.getElementById("chat");

  if (userInput.value.trim() === "") {
    return;
  }

  var userMessage = document.createElement("div");
  userMessage.classList.add("user-message");
  userMessage.innerText = "You: " + userInput.value;
  chat.appendChild(userMessage);

  // Reset input field
  userInput.value = "";

  // Scroll to bottom
  chat.scrollTop = chat.scrollHeight;

  // Simulate bot response after 1 second
  setTimeout(sendBotResponse, 1000);
}

function sendBotResponse() {
  var botResponses = [
    "HELLO - Greeting gesture with a wave of the hand",
    "THANK YOU - Hand moves from lips outward in a flat hand motion",
    "FRIEND - Two index fingers form an 'X' shape, indicating friendship",
    "LOVE - Cross arms over the chest, forming an 'X', symbolizing love",
    "HELP - Open hand moves upwards, palm facing up, indicating a request for assistance",
    "YES - Nodding the head affirmatively",
    "NO - Shaking the head from side to side",
    "UNDERSTAND - Tap the forehead with an index finger, indicating comprehension",
    "GOOD - Thumb and index finger form a circle, indicating something positive",
    "BAD - Thumb and index finger form an 'X' shape, indicating something negative",
    "NAME - Fingerspell each letter of the person's name",
    "SCHOOL - Both hands in the 'A' handshape, tapping the temple twice",
    "LEARN - Open hand moves towards the head, symbolizing acquiring knowledge",
    "TEACHER - Open hand moves down the side of the face, indicating someone who imparts knowledge",
    "STUDENT - Two fingers of the dominant hand tap the palm of the non-dominant hand",
    "I'm still learning",
  ];

  var randomIndex = Math.floor(Math.random() * botResponses.length);
  var response = botResponses[randomIndex];

  var chat = document.getElementById("chat");
  var botMessage = document.createElement("div");
  botMessage.classList.add("bot-message");
  botMessage.innerText = "Chatbot: " + response;
  chat.appendChild(botMessage);

  // Scroll to bottom
  chat.scrollTop = chat.scrollHeight;
}

function closeChatbot() {
  chatbotContainer.style.display = "none";

  // Reappear chatbot after two minutes
  setTimeout(function () {
    chatbotContainer.style.display = "block";
  }, 120000); // 2 minutes in milliseconds
}

// Event listener for send button click
sendButton.addEventListener("click", sendMessage);

// Event listener for enter key press
userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
