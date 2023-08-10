import GoogleAnalytics from "./GoogleAnalytics";
export default function PageLayout({ children, bgColor }: {
  children: React.ReactNode;
  bgColor: string;
}) {
    return (
        <html lang="en" style={{ backgroundColor: bgColor }}>
      <head>
      </head>
        <body className={'flex-col min-h-screen'}>
            <div >
                {children}
            </div>
        </body>
        <GoogleAnalytics/>
      </html>
    )
  }