import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';

/* Root Layout */

/* 
   Basically, any UI added to the root layout will be shared across
   all pages in the application. Can use the root layout to modify the
   the <html> and <body> tags and add metadata 
*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ '${inter.className} antialiased' }>{children}</body>
    </html>
  );
}
