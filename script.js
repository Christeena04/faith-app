const verses = [
  "God is within her, she will not fall. – Psalm 46:5",
  "Trust in the Lord with all your heart. – Proverbs 3:5",
  "Be still and know that I am God. – Psalm 46:10",
  "For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11",
  "I can do all this through him who gives me strength. - Philippians 4:13",
  "The Lord is my shepherd, I lack nothing. - Psalm 23:1",
  "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16",
  "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go. - Joshua 1:9",
  "The joy of the Lord is your strength. - Nehemiah 8:10",
  "Cast all your anxiety on him because he cares for you. - 1 Peter 5:7",
   "Trust in the Lord with all your heart and lean not on your own understanding. - Proverbs 3:5",
    "Come to me, all you who are weary and burdened, and I will give you rest. - Matthew 11:28",
 "For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11",
  "And we know that in all things God works for the good of those who love him. - Romans 8:28",
  "So do not fear, for I am with you; do not be dismayed, for I am your God. - Isaiah 41:10 ",
 "The name of the Lord is a fortified tower; the righteous run to it and are safe. - Proverbs 18:10 ",
 "May the God of hope fill you with all joy and peace as you trust in him. - Romans 15:13 ",
 "Your word is a lamp for my feet, a light on my path. - Psalm 119:105 ",
 "But seek first his kingdom and his righteousness, and all these things will be given to you as well. - Matthew 6:33 ",
  "But those who hope in the Lord will renew their strength. - Isaiah 40:31 ",
  "For we live by faith, not by sight. - 2 Corinthians 5:7",
 "I have been crucified with Christ and I no longer live, but Christ lives in me. - Galatians 2:20 ",
  "Take delight in the Lord, and he will give you the desires of your heart. - Psalm 37:4 ",
  "Be still, and know that I am God. – Psalm 46:10",
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "For I know the plans I have for you. – Jeremiah 29:11",
  "The Lord will fight for you; you need only to be still. – Exodus 14:14",
  "When I am afraid, I put my trust in you. – Psalm 56:3",
  "The Lord is my light and my salvation. – Psalm 27:1",
  "My grace is sufficient for you. – 2 Corinthians 12:9",
  "With God all things are possible. – Matthew 19:26",
  "Let all that you do be done in love. – 1 Corinthians 16:14",
  "Do not be conformed to this world. – Romans 12:2",
  "Even though I walk through the valley, I will fear no evil. – Psalm 23:4",
  "He heals the brokenhearted. – Psalm 147:3",
  "Blessed are the pure in heart, for they shall see God. – Matthew 5:8",
  "Love never fails. – 1 Corinthians 13:8",
  "Rejoice in the Lord always. – Philippians 4:4",
  "The Lord is close to the brokenhearted. – Psalm 34:18"
   "He will cover you with His feathers. – Psalm 91:4",
   "The name of the Lord is a strong tower. – Proverbs 18:10",
     "The Lord is good, a refuge in times of trouble. – Nahum 1:7",

"Do not fear, for I am with you. – Isaiah 41:10",

"The Lord will guide you always. – Isaiah 58:11",

"Your word is a lamp to my feet. – Psalm 119:105",

"In quietness and trust is your strength. – Isaiah 30:15",

"He gives strength to the weary. – Isaiah 40:29",

"The Lord is my portion, says my soul. – Lamentations 3:24",

"Blessed are those who mourn, for they will be comforted. – Matthew 5:4",

"Seek first His kingdom. – Matthew 6:33",

"You are the light of the world. – Matthew 5:14",

"Peace I leave with you; My peace I give you. – John 14:27",

"Perfect love drives out fear. – 1 John 4:18",

"Let your light shine before others. – Matthew 5:16",

"The Lord is gracious and compassionate. – Psalm 145:8",

"Clothe yourselves with compassion and kindness. – Colossians 3:12",

"Be joyful in hope, patient in affliction. – Romans 12:12",

"He who promised is faithful. – Hebrews 10:23"
];
document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  document.getElementById("features").style.display = "none";
  document.getElementById("todo-page").style.display = "none";
  document.getElementById("verse-box").style.display = "none";
});
// When "Today's Verse" button is clicked → open the verse box
document.getElementById("todays-verse-btn").addEventListener("click", () => {
  document.getElementById("verse-box").style.display = "flex";
  document.getElementById("bible-verse").innerText = "Discover todays message of hope and faith.";
});

// Show a random verse when the inner button is clicked
function showRandomVerse() {
  const verseEl = document.getElementById("bible-verse"); // add this line
  const randomVerse = verses[Math.floor(Math.random() * verses.length)];
  verseEl.innerText = randomVerse;

  const audio = document.getElementById("verse-sound");
  audio.currentTime = 0;
  audio.play();

  verseEl.style.animation = 'none';
  void verseEl.offsetWidth;
  verseEl.style.animation = 'glowInVerse 1.2s ease-out forwards';
}


// Close popup
function closeVerse() {
  document.getElementById("verse-box").style.display = "none";
}
function copyVerse() {
  const verseEl = document.getElementById("bible-verse");
  const verseText = verseEl.innerText;

  navigator.clipboard.writeText(verseText).then(() => {
    alert("Verse copied to clipboard! 📋");
  }).catch(err => {
    alert("Oops, could not copy verse 😞");
    console.error(err);
  });
}
function shareVerse() {
  const verseText = document.getElementById("bible-verse").innerText;
  console.log("Verse to share:", verseText);

  if (navigator.share) {
    navigator.share({
      title: "Today's Bible Verse",
      text: verseText,  // This is what should be shared
      
    })
    .then(() => console.log('Shared successfully!'))
    .catch(console.error);
  } else {
    alert('Sharing not supported on this device. Try copying instead!');
  }
}


