import { onMounted, onUnmounted } from 'vue'

/**
 * Composable to handle scroll reveal animations using IntersectionObserver.
 * It observes all elements with the 'reveal' class and adds 'revealed' when they enter the viewport.
 */
export function useScrollReveal() {
    let observer: IntersectionObserver | null = null

    onMounted(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Trigger when 15% of the element is visible
        }

        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed')
                    // Once revealed, we can stop observing it
                    observer?.unobserve(entry.target)
                }
            })
        }, options)

        // Initial observation
        const elements = document.querySelectorAll('.reveal')
        elements.forEach((el) => observer?.observe(el))
    })

    onUnmounted(() => {
        observer?.disconnect()
    })

    // Function to manually refresh observation (useful for dynamic content)
    const refreshReveal = () => {
        const elements = document.querySelectorAll('.reveal:not(.revealed)')
        elements.forEach((el) => observer?.observe(el))
    }

    return {
        refreshReveal
    }
}
