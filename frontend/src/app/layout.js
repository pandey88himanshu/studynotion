import "./globals.css";

export const metadata = {
  title: "Study Notion - Start Your Journey Of Learning",
  description:
    "StudyNotion is a fully-featured, modern Learning Management System (LMS) designed to empower educators and learners with a seamless digital learning experience. Built with scalability and user experience in mind, StudyNotion offers robust tools for course creation, content management, student engagement, and performance tracking",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        {/* Android */}
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/favicon/android/192.png'
        />

        {/* iOS */}
        <link rel='apple-touch-icon' href='/favicon/ios/192.png' />

        {/* Windows */}
        <meta
          name='msapplication-TileImage'
          content='/favicon/windows/150.png'
        />
        <meta name='msapplication-TileColor' content='#ffffff' />

        {/* General Favicon */}
        <link rel='icon' href='/favicon/android/192.png' />
      </head>
      <body>{children}</body>
    </html>
  );
}
