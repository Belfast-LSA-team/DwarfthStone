export function toggleElement(elementSelector: string) {
    const element: HTMLElement | null = document.querySelector(elementSelector);

    if (element) {
        if (element.style.display) {
            element.style.removeProperty("display");
        } else {
            element.style.display = "none";
        }
    }
}
