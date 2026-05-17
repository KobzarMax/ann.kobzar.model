import { create } from "zustand";

export type HeaderState = {
    open: boolean;
    setOpen: (open: boolean) => void;
    toggle: () => void;
    close: () => void;
    openMenu: () => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
    open: false,
    setOpen: (open) => set({ open }),
    toggle: () => set((state) => {
        const open = !state.open;
        if (open) {
            document.body.classList.add('_lock');
        } else {
            document.body.classList.remove('_lock');
        }
        return { open };
    }),
    close: () => {
        set({ open: false });
        document.body.classList.remove('_lock');
        const header = document.getElementById('header') as HTMLElement;
        header.classList.remove('active');
    },
    openMenu: () => {
        set({ open: true });
        document.body.classList.add('_lock');
        const header = document.getElementById('header') as HTMLElement;
        header.classList.add('active');
    }
}));
