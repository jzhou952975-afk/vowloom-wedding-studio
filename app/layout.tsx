import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Vowloom · Wedding paper, woven together',description:'One guest list. Beautiful wedding prints. A bilingual wedding stationery studio.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
