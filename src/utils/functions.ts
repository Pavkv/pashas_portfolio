export const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';