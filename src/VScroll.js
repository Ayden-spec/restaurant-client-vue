export default {
    mounted(element) {
        element.onwheel = (event) => {
            if (event.deltaY != 0) {
                element.scrollBy(event.deltaY, 0);
                event.preventDefault();
            }
        }
    },
    unmounted(element) {
        element.onwheel = null;
    }
}