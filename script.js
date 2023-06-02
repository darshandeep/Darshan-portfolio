const cursorElement = document.getElementById("typing-cursor"); 
function blinkCursor() { cursorElement.style.visibility = "visible" === cursorElement.style.visibility ? "hidden" : "visible", setTimeout(blinkCursor, 400) } blinkCursor();
const textContainer = document.getElementById("text-container"), words = ["Web designer", "Graphic designer", "video editor"], typingDelay = 100, erasingDelay = 50, pauseDelay = 1500; let wordIndex = 0, charIndex = 0, isDeleting = !1; 
function type() { let e = words[wordIndex]; if (isDeleting) { if (textContainer.textContent = e.substring(0, charIndex - 1), 0 == --charIndex) { isDeleting = !1, ++wordIndex === words.length && (wordIndex = 0), setTimeout(type, 1500); return } }
else if (textContainer.textContent = e.substring(0, charIndex + 1), ++charIndex === e.length) { isDeleting = !0, setTimeout(type, 1500); return } setTimeout(type, isDeleting ? 50 : 100) } type(), document.addEventListener("DOMContentLoaded", () => { let e = document.querySelector("a.home"), t = document.querySelector("a.project"), n = document.querySelector("a.skills"), r = document.querySelector("a.education"),
i = document.querySelector("a.contact"), l = { behavior: "smooth", block: "start", inline: "nearest", duration: 9e3 }; e.addEventListener("click", e => { e.preventDefault(); let t = document.querySelector("#intro-section"); t && t.scrollIntoView(l) }), t.addEventListener("click", e => { e.preventDefault(); let t = document.querySelector("#projects-2"); t && t.scrollIntoView(l) }), n.addEventListener("click", e => { e.preventDefault(); let t = document.querySelector("#section3"); t && t.scrollIntoView(l) }), r.addEventListener("click", e => { e.preventDefault(); let t = document.querySelector("#section4"); t && t.scrollIntoView(l) }), i.addEventListener("click", e => { e.preventDefault(); 
let t = document.querySelector("#section5"); t && t.scrollIntoView({ scrollOptions: l }) }) });


function downloadPDF() {
    var link = document.createElement('a');
    link.href = 'files/Darshan Resume.pdf';
    link.download = 'Important-Darshan-Resume.pdf';
    link.click();
  }

