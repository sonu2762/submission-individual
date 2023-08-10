'use client';
import {usePathname, useSearchParams} from 'next/navigation'
import { useEffect } from "react";
import Script from 'next/script'
import { pageView } from '../lib/gTagUtil';
import { GA_MEATUER_ID } from '../lib/Constant';

/**
 * G-67K42X8JJX is the GA Measurement ID
 * @returns 
 */

export default function GoogleAnalytics(){
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = pathname + searchParams.toString()
    
        pageView(url);
        
    }, [pathname, searchParams]);
    return (
        <>
            <Script strategy="afterInteractive" 
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEATUER_ID}`}/>
            <Script id='google-analytics' strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('consent', 'default', {
                        'analytics_storage': 'denied'
                    });
                    
                    gtag('config', '${GA_MEATUER_ID}', {
                        page_path: window.location.pathname,
                    });
                `,
                }}
            />
        </>
)}
