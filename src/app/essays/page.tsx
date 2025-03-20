import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Essays',
  description: 'Halaman tentang esai.',
  openGraph:{
    title:'Essays',
    description: 'Halaman tentang esai.',
  },
};

export default function Essays() {
    return <div>Esai</div>
}