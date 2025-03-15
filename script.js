function unlockPhone() {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("homeScreen").style.display = "flex";
}

function openApp(appName) {
    document.getElementById("appWindow").style.display = "block";
    
    if (appName === "safari") {
        document.getElementById("appFrame").src = "https://www.google.com";
    } else if (appName === "settings") {
        document.getElementById("appFrame").srcdoc = "<h2>⚙️ إعدادات وهمية</h2>";
    } else if (appName === "camera") {
        document.getElementById("appFrame").srcdoc = "<h2>📷 الكاميرا غير متاحة</h2>";
    } else if (appName === "phone") {
        document.getElementById("appFrame").srcdoc = "<h2>📞 الهاتف: أدخل رقمًا وهميًا!</h2>";
    }
}

function closeApp() {
    document.getElementById("appWindow").style.display = "none";
}

function toggleControlCenter() {
    alert("🔽 فتح مركز التحكم (ميزة قادمة)");
}