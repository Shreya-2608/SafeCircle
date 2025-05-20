function showAffirmation() {
  const affirmations = [
    "You are powerful. 💪",
    "You are not alone. 🧡",
    "You deserve to feel safe. 🌈",
    "Your voice matters. 🔊",
    "You are strong and brave. 🦸‍♀️"
  ];
  const random = Math.floor(Math.random() * affirmations.length);
  document.getElementById("affirmation-box").innerText = affirmations[random];
}
lucide.createIcons();
