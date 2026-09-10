import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Michelle, qué bonito que seas tú | Arian',description:'Dos meses de nosotros. Una sorpresa de Arian para Michelle.',robots:{index:false,follow:false}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="es"><body>{children}</body></html>}
