import { atom } from 'jotai';

export const isSidebarOpenAtom = atom(window.innerWidth > 1024);
