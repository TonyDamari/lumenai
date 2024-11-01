export const formatDate = (dateString: string) => {
  const date = new Date(dateString)

  const day = date.getDate()
  const month = date.toLocaleString("default", { month: "long" })
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}

export default function debounce<T extends (...args: any[]) => void>(wait: number, callback: T, immediate = false) {
  let timeout: ReturnType<typeof setTimeout> | null
  return function <U>(this: U, ...args: Parameters<typeof callback>) {
    const later = () => {
      timeout = null

      if (!immediate) {
        callback.apply(this, args)
      }
    }
    const callNow = immediate && !timeout

    if (typeof timeout === "number") {
      clearTimeout(timeout)
    }

    timeout = setTimeout(later, wait)

    if (callNow) {
      callback.apply(this, args)
    }
  }
}

export const cleanHtmlContent = (content: string) => {
  return content
    ?.replace(/<div[^>]*>/gi, "")
    .replace(/<\/div>/gi, "")
    .replace(/\n/g, "<br>")
    .replace(/&nbsp;/g, " ")
}
