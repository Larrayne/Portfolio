:root {
  /* Base */
  --bg-0: #07060d;
  --bg-1: #0b0b12;
  --bg-2: #140a1f;

  /* Primary brand */
  --primary: #ec4899;     /* pink */
  --primary-soft: #f472b6;

  /* Secondary brand */
  --secondary: #a855f7;   /* purple */
  --secondary-soft: #c084fc;

  /* Accent glow */
  --glow: rgba(236, 72, 153, 0.35);

  /* Text */
  --text: rgba(255,255,255,0.92);
  --muted: rgba(255,255,255,0.65);

  /* UI */
  --card: rgba(255,255,255,0.06);
  --border: rgba(255,255,255,0.12);
}

@tailwind base;
@tailwind components;
@tailwind utilities;

.page {
  padding: 140px 40px;
  min-height: calc(100vh - 80px);
  position: relative;
}

.page-container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.page-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #ec4899, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-subtitle {
  color: rgba(255,255,255,0.7);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

.btn-primary {
  padding: 12px 22px;
  border-radius: 999px;
  background: #ec4899;
  font-weight: 600;
}

.btn-outline {
  padding: 12px 22px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.3);
}

.card {
  padding: 24px;
  border-radius: 18px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(14px);
}

/* PAGE FADE + SLIDE */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
body {
  background: radial-gradient(
    circle at top,
    var(--bg-2),
    var(--bg-1),
    var(--bg-0)
  );
  color: var(--text);
}

.page-title {
  background: linear-gradient(
    90deg,
    var(--primary),
    var(--secondary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn-primary {
  padding: 12px 22px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  font-weight: 600;
  box-shadow: 0 10px 30px var(--glow);
  transition: 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 15px 40px var(--glow);
}

.btn-outline {
  padding: 12px 22px;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--text);
  transition: 0.3s ease;
}

.btn-outline:hover {
  border-color: var(--primary);
  color: var(--primary-soft);
}

.page-subtitle {
  color: var(--muted);
  line-height: 1.7;
}

.nav-links {
  display: flex;
  gap: 24px;
  align-items: center;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 50;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 18px 40px;

  backdrop-filter: blur(14px);
  background: rgba(0,0,0,0.4);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}