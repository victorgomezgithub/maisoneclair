import "./globals.css";

export const metadata = {
  title: "Maison Clair | Belleza, bienestar y exclusividad",
  description:
    "Landing page para profesional estética con tratamientos corporales, aumento de labios con Hyaluron Pen y contacto directo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
